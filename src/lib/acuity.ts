// lib/acuity.ts
import "server-only";

/** ---------------- Types ---------------- */
export type AcuityClassSession = {
  id: number;
  appointmentTypeID: number;
  calendarID: number;
  name: string;
  time: string;        // e.g., "2025-11-07T10:30:00-08:00" (Acuity includes offset)
  calendar: string;
  duration: number;    // minutes
  isSeries: boolean;
  slots: number;
  slotsAvailable: number;
};

type AcuityAppointmentType = {
  id: number;
  active?: string | boolean;
  name: string;
  description?: string;
  duration?: number;
  price?: string | number;
  category?: string | null;       // used for /category/<...> URL segment
  color?: string | null;          // hex (e.g. "#469D6E")
  private?: boolean;
  type?: "service" | "class" | "series" | string;
  classSize?: number | null;
  paddingAfter?: number;
  paddingBefore?: number;
  calendarIDs?: number[];
};

export type CalendarEvent = {
  title: string;
  start: string; // "YYYY-MM-DDTHH:mm" (local)
  end: string;   // "YYYY-MM-DDTHH:mm" (local)
  color?: string;
  details?: {
    bookingUrl?: string;
    availabilityLabel: "Sold out" | "Spots available";
    isSoldOut: boolean;

    /** New: full metadata from /appointment-types for this event’s type */
    appointmentTypeDetails?: {
      id: number;
      name: string;
      description?: string;
      duration?: number;
      price?: string | number;
      category?: string | null;
      color?: string | null;
      private?: boolean;
      type?: string;
      classSize?: number | null;
      paddingAfter?: number;
      paddingBefore?: number;
      calendarIDs?: number[];
      active?: string | boolean;
    };
  };
};

/** ---------------- Private auth for server-side Acuity calls ---------------- */
function getAuthHeader() {
  const userId = process.env.ACUITY_USER_ID;
  const apiKey = process.env.ACUITY_API_KEY;
  if (!userId || !apiKey) throw new Error("Missing ACUITY_USER_ID or ACUITY_API_KEY");
  const token = Buffer.from(`${userId}:${apiKey}`).toString("base64");
  return `Basic ${token}`;
}

/** ---------------- Caches ---------------- */
let _typesCache: Map<number, AcuityAppointmentType> | null = null;

/** Fetch and cache appointment types (for category/color/price/etc.) */
async function fetchAppointmentTypes(): Promise<Map<number, AcuityAppointmentType>> {
  if (_typesCache) return _typesCache;

  const res = await fetch("https://acuityscheduling.com/api/v1/appointment-types", {
    headers: { Authorization: getAuthHeader(), Accept: "application/json" },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Acuity appointment-types error ${res.status}: ${await res.text()}`);
  const types = (await res.json()) as AcuityAppointmentType[];

  _typesCache = new Map(types.map((t) => [t.id, t]));
  return _typesCache;
}

/** ---------------- Utils ---------------- */
function addMinutes(d: Date, mins: number) {
  return new Date(d.getTime() + mins * 60 * 1000);
}
function toLocalYYYYMMDDTHHMM(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${day}T${hh}:${mm}`;
}
function fmtYYYYMM(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}
function addMonths(base: Date, n: number) {
  const d = new Date(base.getTime());
  d.setDate(1);
  d.setMonth(d.getMonth() + n);
  return d;
}
/** Ensure seconds in ISO (Acuity examples include seconds) */
function ensureSeconds(iso: string): string {
  return iso.replace(/T(\d{2}:\d{2})(?!:)/, "T$1:00");
}
/** Ensure timezone offset has a colon, e.g., -0800 -> -08:00 */
function ensureOffsetHasColon(iso: string): string {
  return iso.replace(/([+-]\d{2})(\d{2})$/, "$1:$2");
}
/** Double-encode category segment to match Acuity URL examples */
function doubleEncode(s: string) {
  return encodeURIComponent(encodeURIComponent(s));
}

/**
 * Build new-format AS.ME deep link:
 * {BASE}{PREFIX}/category/{CategoryDoubleEncoded}/appointment/{appointmentTypeID}/calendar/{calendarId}/datetime/{ISO-8601}
 * - Category is optional; if missing, omit the /category segment.
 * - BASE:   NEXT_PUBLIC_ACUITY_BASE_URL (e.g., https://olomanastudios.as.me)
 * - PREFIX: NEXT_PUBLIC_ACUITY_SCHEDULE_PREFIX (e.g., /schedule/66629c2c)
 */
async function buildAsMeBookingPath(opts: {
  appointmentTypeID: number;
  calendarId: number;  // classes.calendarID
  startTime: string;   // classes.time (includes offset)
}): Promise<string | undefined> {
  const base = process.env.NEXT_PUBLIC_ACUITY_BASE_URL;
  const prefix = process.env.NEXT_PUBLIC_ACUITY_SCHEDULE_PREFIX;
  if (!base || !prefix) return undefined;

  const types = await fetchAppointmentTypes();
  const t = types.get(opts.appointmentTypeID);
  const cat = t?.category?.trim();

  const url = new URL(base);
  const parts = [prefix.replace(/\/+$/, "")];

  if (cat) {
    parts.push("category", doubleEncode(cat));
  }

  parts.push("appointment", String(opts.appointmentTypeID));
  parts.push("calendar", String(opts.calendarId));

  // Ensure seconds and colon in offset, then encode
  const withSeconds = ensureSeconds(opts.startTime);
  const withColonOffset = ensureOffsetHasColon(withSeconds);
  const datetimeSeg = encodeURIComponent(withColonOffset);
  parts.push("datetime", datetimeSeg);

  url.pathname = parts.join("/");
  return url.toString();
}

/** ---------------- Fetch classes ---------------- */
export async function fetchAvailableClasses(opts?: {
  month?: string; // YYYY-MM
  appointmentTypeID?: number | string;
  calendarID?: number | string;
}) {
  const month = opts?.month ?? fmtYYYYMM(new Date());
  const params = new URLSearchParams({ month });
  if (opts?.appointmentTypeID != null) params.set("appointmentTypeID", String(opts.appointmentTypeID));
  if (opts?.calendarID != null) params.set("calendarID", String(opts.calendarID));

  const res = await fetch(
    `https://acuityscheduling.com/api/v1/availability/classes?${params.toString()}`,
    {
      headers: { Authorization: getAuthHeader(), Accept: "application/json" },
      cache: "no-store",
    }
  );
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Acuity classes error ${res.status}: ${body}`);
  }
  return (await res.json()) as AcuityClassSession[];
}

/** Rolling fetch (current + N months) */
export async function fetchAvailableClassesRolling(opts?: {
  monthsAhead?: number;
  appointmentTypeID?: number | string;
  calendarID?: number | string;
}) {
  const monthsAhead = opts?.monthsAhead ?? 2;
  const now = new Date();
  const months: string[] = [];
  for (let i = 0; i <= monthsAhead; i++) months.push(fmtYYYYMM(addMonths(now, i)));

  const results = await Promise.all(
    months.map((m) =>
      fetchAvailableClasses({
        month: m,
        appointmentTypeID: opts?.appointmentTypeID,
        calendarID: opts?.calendarID,
      })
    )
  );

  const map = new Map<number, AcuityClassSession>();
  for (const arr of results) for (const c of arr) map.set(c.id, c);
  const merged = Array.from(map.values());
  merged.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  return merged;
}

/** --------------- Mapping to CalendarEvent schema --------------- */
/** Appointment type -> visual style (replace IDs with your real ones if desired) */
const TYPE_STYLES: Record<number, { title: string; color: string }> = {
  101: { title: "One-Time Pottery",     color: "#3b82f6" },
  102: { title: "Kids Pottery Series",  color: "#f97316" },
  103: { title: "Ikebana Workshop",     color: "#22c55e" },
  104: { title: "Matcha Bowl Workshop", color: "#22c55e" },
  201: { title: "Lvl 1 Pottery Course", color: "#ef4444" },
  202: { title: "Lvl 2 Pottery Course", color: "#ef4444" },
  203: { title: "Lvl 3 Pottery Course", color: "#ef4444" },
};
const DEFAULT_COLOR = "#64748b";

/** Convert Acuity classes -> CalendarEvent[] with bookingUrl + availability + appointmentTypeDetails */
export async function toCalendarEvents(
  classes: AcuityClassSession[],
  options?: {
    typeStyles?: Record<number, { title: string; color: string }>;
    defaultColor?: string;
  }
): Promise<CalendarEvent[]> {
  const typeStyles = { ...TYPE_STYLES, ...(options?.typeStyles ?? {}) };
  const defaultColor = options?.defaultColor ?? DEFAULT_COLOR;

  // Preload types once for category/color/price/etc.
  const types = await fetchAppointmentTypes();

  const events = await Promise.all(
    classes.map(async (c) => {
      const startDate = new Date(c.time);
      const endDate = addMinutes(startDate, c.duration);

      const t = types.get(c.appointmentTypeID);
      const typeColor = (t?.color && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(t.color)) ? t.color : null;

      // Prefer a configured style; else use appointment type name/color; else fallback
      const style = typeStyles[c.appointmentTypeID] ?? {
        title: t?.name ?? c.name,
        color: typeColor ?? DEFAULT_COLOR,
      };

      const isSoldOut = c.slotsAvailable <= 0;
      const availabilityLabel: "Sold out" | "Spots available" = isSoldOut
        ? "Sold out"
        : "Spots available";

      const bookingUrl = await buildAsMeBookingPath({
        appointmentTypeID: c.appointmentTypeID,
        calendarId: c.calendarID,
        startTime: c.time,
      });

      const ev: CalendarEvent = {
        title: style.title,
        start: toLocalYYYYMMDDTHHMM(startDate),
        end: toLocalYYYYMMDDTHHMM(endDate),
        color: style.color,
        details: {
          bookingUrl,
          availabilityLabel,
          isSoldOut,
          appointmentTypeDetails: t
            ? {
                id: t.id,
                name: t.name,
                description: t.description,
                duration: t.duration,
                price: t.price,
                category: t.category ?? null,
                color: t.color ?? null,
                private: t.private,
                type: t.type,
                classSize: t.classSize ?? null,
                paddingAfter: t.paddingAfter,
                paddingBefore: t.paddingBefore,
                calendarIDs: t.calendarIDs,
                active: t.active,
              }
            : undefined,
        },
      };
      return ev;
    })
  );

  return events;
}

/** Convenience: fetch rolling classes and return calendar events directly */
export async function fetchAvailableClassEventsRolling(opts?: {
  monthsAhead?: number;
  appointmentTypeID?: number | string;
  calendarID?: number | string;
  typeStyles?: Record<number, { title: string; color: string }>;
  defaultColor?: string;
}) {
  const classes = await fetchAvailableClassesRolling({
    monthsAhead: opts?.monthsAhead,
    appointmentTypeID: opts?.appointmentTypeID,
    calendarID: opts?.calendarID,
  });

  return toCalendarEvents(classes, {
    typeStyles: opts?.typeStyles,
    defaultColor: opts?.defaultColor,
  });
}
