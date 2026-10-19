// lib/kanoa.ts
import "server-only";

import type { CalendarEvent } from "./acuity";
import {
  KANOA_BASE_URL,
  KANOA_ORG_SLUG,
  MIGRATED_TYPES,
  kanoaClassTypeUrl,
} from "./migration";

/**
 * Shape of one row from Kanoa's public classes endpoint:
 *   GET /api/public/{slug}/classes?startDate&endDate&classTypeId
 * (unauthenticated, slug-scoped). It only returns sessions of public class
 * types, so private ones (e.g. private group classes) never reach the
 * calendar. Only the fields the calendar needs are typed.
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

// The public classes API clamps `limit` to 100; page through with `offset`.
const PAGE_SIZE = 100;
// Hard stop for the paging loop (10k sessions per chunk, far above real
// volume) so a misbehaving API can't spin until Cloudflare kills the request.
const MAX_PAGES = 100;

async function fetchKanoaJson<T>(path: string): Promise<T> {
  const res = await fetch(`${KANOA_BASE_URL}/api/public/${KANOA_ORG_SLUG}${path}`, {
    headers: { Accept: "application/json" },
    // The calendar page is force-dynamic, so Next already treats this fetch as
    // uncached — express that via the framework's `next` option rather than the
    // standard `cache: "no-store"`. Cloudflare's workerd runtime (production)
    // throws "The cache field on RequestInitializerDict is not implemented"
    // unless the Pages project's compatibility date is >= 2024-11-11, which
    // would silently drop every Kanoa session from the calendar.
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error(`Kanoa ${path} error ${res.status}: ${await res.text()}`);
  }
  return (await res.json()) as T;
}

/**
 * Every Kanoa session in the org across the given date chunks. Fetched
 * org-wide (no classTypeId) rather than per type: the 4-week courses add ~8
 * class types a month, and per-type fetches would quickly blow through
 * Cloudflare's per-request subrequest cap.
 */
async function fetchAllKanoaClasses(
  chunks: Array<[string, string]>,
): Promise<KanoaPublicClass[]> {
  // Dedupe by class id — adjacent chunks share a boundary date, so a session
  // on that date can come back in both.
  const byId = new Map<string, KanoaPublicClass>();
  for (const [startDate, endDate] of chunks) {
    let offset = 0;
    for (let page = 0; page < MAX_PAGES; page++) {
      const body = await fetchKanoaJson<KanoaClassesResponse>(
        `/classes?startDate=${startDate}&endDate=${endDate}` +
          `&limit=${PAGE_SIZE}&offset=${offset}`,
      );
      const rows = body.data ?? [];
      const sizeBefore = byId.size;
      for (const row of rows) byId.set(row.id, row);
      // Also stop if a page added nothing new (e.g. the API ignored `offset`
      // and returned the same rows again).
      if (!body.hasMore || byId.size === sizeBefore) break;
      offset += rows.length;
    }
  }
  return Array.from(byId.values());
}

function kanoaClassToEvent(
  c: KanoaPublicClass,
  title: string,
  bookingUrl: string,
): CalendarEvent {
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
      bookingUrl,
      availabilityLabel: isSoldOut ? "Sold out" : "Spots available",
      isSoldOut,
    },
  };
}

/**
 * Fetch upcoming sessions of every public Kanoa class type, mapped to the same
 * CalendarEvent shape the Acuity client produces so the two feeds merge
 * transparently. Like the Acuity feed, a new public class type shows up with
 * no code change; making a type private in Kanoa hides it. Every session links
 * to its class type's page, which lists all of its dates (and, for a course,
 * is where the course is booked as a whole).
 *
 * Throws if the sessions fetch fails — the caller decides how to degrade.
 */
export async function fetchKanoaClassEvents(opts?: {
  monthsAhead?: number;
}): Promise<CalendarEvent[]> {
  const monthsAhead = opts?.monthsAhead ?? 2;
  const now = new Date();
  // Current month start through the first of the month after the rolling window
  // — mirrors the Acuity rolling fetch the calendar already expects. The window
  // spans ~3 months, so it's chunked to respect the API's 90-day cap.
  const windowStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const windowEnd = addMonths(now, monthsAhead + 1);
  const chunks = buildDateChunks(windowStart, windowEnd, MAX_RANGE_DAYS);

  const classes = await fetchAllKanoaClasses(chunks);

  const fallbackTitleById = new Map(
    MIGRATED_TYPES.map((t) => [t.kanoaClassTypeId, t.title]),
  );

  return classes.flatMap((c) => {
    // Prefer Kanoa's live class name so renames in the dashboard flow through
    // without a code change.
    const title =
      c.classTypeName?.trim() || fallbackTitleById.get(c.classTypeId);
    if (!title) return [];
    return [kanoaClassToEvent(c, title, kanoaClassTypeUrl(c.classTypeId))];
  });
}
