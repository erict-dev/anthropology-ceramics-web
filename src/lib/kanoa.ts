// lib/kanoa.ts
import "server-only";

import type { CalendarEvent } from "./acuity";
import {
  KANOA_BASE_URL,
  KANOA_ORG_SLUG,
  MIGRATED_TYPES,
  kanoaBookUrl,
} from "./migration";

/**
 * Shape of one row from Kanoa's public classes endpoint:
 *   GET /api/public/{slug}/classes?startDate&endDate&classTypeId
 * (unauthenticated, slug-scoped). Only the fields the calendar needs are typed.
 */
type KanoaPublicClass = {
  id: string;
  classTypeId: string;
  startTime: string; // ISO 8601 UTC, e.g. "2026-07-12T17:30:00.000Z"
  endTime: string; // ISO 8601 UTC
  spotsRemaining: number;
  classTypeName: string;
  classTypeColor: string | null;
  bookingOpen: boolean;
};

type KanoaClassesResponse = {
  data: KanoaPublicClass[];
  total: number;
  offset: number;
  limit: number;
  hasMore: boolean;
};

const DEFAULT_COLOR = "#64748b";

/**
 * "YYYY-MM-DDTHH:mm" wall-clock in America/Los_Angeles (no offset). This matches
 * the naive local-time strings the Acuity client emits — FullCalendar is
 * configured with timeZone="America/Los_Angeles", so both feeds are interpreted
 * in the same zone.
 */
function toPacificYYYYMMDDTHHMM(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  // en-CA renders midnight as hour "24"; normalize to "00".
  let hh = get("hour");
  if (hh === "24") hh = "00";
  return `${get("year")}-${get("month")}-${get("day")}T${hh}:${get("minute")}`;
}

/** YYYY-MM-DD (Pacific) for the API's startDate/endDate params. */
function pacificDateOnly(date: Date): string {
  return toPacificYYYYMMDDTHHMM(date).slice(0, 10);
}

function addMonths(base: Date, n: number): Date {
  const d = new Date(base.getTime());
  d.setDate(1);
  d.setMonth(d.getMonth() + n);
  return d;
}

// The public classes API rejects ranges over 90 days, so split a wider window
// into consecutive sub-ranges. 80 days keeps us safely under the cap.
const MAX_RANGE_DAYS = 80;

function buildDateChunks(
  start: Date,
  end: Date,
  maxDays: number,
): Array<[string, string]> {
  const chunks: Array<[string, string]> = [];
  const cursor = new Date(start.getTime());
  while (cursor.getTime() < end.getTime()) {
    const next = new Date(cursor.getTime());
    next.setDate(next.getDate() + maxDays);
    const chunkEnd = next.getTime() < end.getTime() ? next : end;
    chunks.push([pacificDateOnly(cursor), pacificDateOnly(chunkEnd)]);
    cursor.setTime(chunkEnd.getTime());
  }
  return chunks;
}

async function fetchKanoaClassesForType(
  classTypeId: string,
  startDate: string,
  endDate: string,
): Promise<KanoaPublicClass[]> {
  const url =
    `${KANOA_BASE_URL}/api/public/${KANOA_ORG_SLUG}/classes` +
    `?startDate=${startDate}&endDate=${endDate}` +
    `&classTypeId=${classTypeId}&limit=100`;

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    // The calendar page is force-dynamic; never serve a stale schedule.
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Kanoa classes error ${res.status}: ${await res.text()}`);
  }
  const body = (await res.json()) as KanoaClassesResponse;
  return body.data ?? [];
}

function kanoaClassToEvent(c: KanoaPublicClass, title: string): CalendarEvent {
  const startDate = new Date(c.startTime);
  const endDate = new Date(c.endTime);

  const validHex =
    c.classTypeColor && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c.classTypeColor);
  const isSoldOut = c.spotsRemaining <= 0;

  return {
    title,
    start: toPacificYYYYMMDDTHHMM(startDate),
    end: toPacificYYYYMMDDTHHMM(endDate),
    color: validHex ? (c.classTypeColor as string) : DEFAULT_COLOR,
    details: {
      bookingUrl: kanoaBookUrl(c.id),
      availabilityLabel: isSoldOut ? "Sold out" : "Spots available",
      isSoldOut,
    },
  };
}

/**
 * Fetch every migrated class type's upcoming sessions from Kanoa and map them
 * to the same CalendarEvent shape the Acuity client produces, so the two feeds
 * merge transparently. Events deep-link to Kanoa's per-session checkout.
 *
 * Throws on a network/HTTP error — the caller decides how to degrade.
 */
export async function fetchKanoaClassEvents(opts?: {
  monthsAhead?: number;
}): Promise<CalendarEvent[]> {
  if (MIGRATED_TYPES.length === 0) return [];

  const monthsAhead = opts?.monthsAhead ?? 2;
  const now = new Date();
  // Current month start through the first of the month after the rolling window
  // — mirrors the Acuity rolling fetch the calendar already expects. The window
  // spans ~3 months, so it's chunked to respect the API's 90-day cap.
  const windowStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const windowEnd = addMonths(now, monthsAhead + 1);
  const chunks = buildDateChunks(windowStart, windowEnd, MAX_RANGE_DAYS);

  const perType = await Promise.all(
    MIGRATED_TYPES.map(async (type) => {
      // Dedupe by class id — adjacent chunks share a boundary date, so a
      // session on that date can come back in both.
      const byId = new Map<string, KanoaPublicClass>();
      for (const [startDate, endDate] of chunks) {
        const rows = await fetchKanoaClassesForType(
          type.kanoaClassTypeId,
          startDate,
          endDate,
        );
        for (const row of rows) byId.set(row.id, row);
      }
      return Array.from(byId.values()).map((c) =>
        kanoaClassToEvent(c, type.title),
      );
    }),
  );

  return perType.flat();
}
