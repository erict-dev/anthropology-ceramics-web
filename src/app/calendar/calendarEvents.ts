import type { EventInput } from "@fullcalendar/core";

/**
 * Studio offerings (placeholder recurrence)
 * - One-Time Pottery (Adults): W–Sun at 10:30, 13:30, 18:30
 * - Kids Pottery Series: Wed 15:30
 * - Matcha Bowl Workshop: Sat 10:30, Fri 18:30, and Sun 10:30 when there is NO Ikebana
 * - Ikebana Workshop: every other Sun 10:30
 * - 4-Week Course Lvl1: Wed/Thu/Fri 18:30, Sat 15:00
 * - 4-Week Course Lvl2: Sat 18:30, Sun 18:30
 * - 4-Week Course Lvl3: Sun 15:00
 */

export const events: EventInput[] = buildEvents(12);

/* --------------------------------- impl --------------------------------- */

function buildEvents(weeks = 12): EventInput[] {
  const start = startOfWeekSunday(new Date());
  start.setDate(start.getDate() - 7); // begin last week for better initial range

  const out: EventInput[] = [];

  for (let w = 0; w < weeks; w++) {
    const sunday = addDays(start, w * 7);

    const wed = addDays(sunday, 3);
    const thu = addDays(sunday, 4);
    const fri = addDays(sunday, 5);
    const sat = addDays(sunday, 6);
    const sun = addDays(sunday, 0);

    /* -------------------- One-Time Pottery (Adults) W–Sun -------------------- */
    // Wed–Sun at 10:30, 13:30, 18:30
    for (const d of [wed, thu, fri, sat, sun]) {
      addEvent(out, "One-Time Pottery", d, "10:30", "12:30");
      addEvent(out, "One-Time Pottery", d, "13:30", "15:30");
      addEvent(out, "One-Time Pottery", d, "18:30", "20:30");
    }

    /* ------------------------ Kids Pottery Series (Wed) ----------------------- */
    addEvent(out, "Kids Pottery Series", wed, "15:30", "17:00");

    /* ------------------------- Workshops (Matcha/Ike) ------------------------- */
    // Every other Sunday: Ikebana 10:30; otherwise Matcha 10:30
    const ikebanaThisSunday = isEvenWeekIndexRelativeTo(start, sun); // toggle pattern by switching even/odd
    if (ikebanaThisSunday) {
      addEvent(out, "Ikebana Workshop", sun, "10:30", "12:30");
    } else {
      addEvent(out, "Matcha Bowl Workshop", sun, "10:30", "12:30");
    }

    // Matcha also Fri 18:30 and Sat 10:30 (always)
    addEvent(out, "Matcha Bowl Workshop", fri, "18:30", "20:30");
    addEvent(out, "Matcha Bowl Workshop", sat, "10:30", "12:30");

    /* ----------------------------- 4-Week Courses ---------------------------- */
    // Lvl 1: Wed/Thu/Fri 18:30, Sat 15:00
    addEvent(out, "Lvl 1 Pottery Course", wed, "18:30", "20:30");
    addEvent(out, "Lvl 1 Pottery Course", thu, "18:30", "20:30");
    addEvent(out, "Lvl 1 Pottery Course", fri, "18:30", "20:30");
    addEvent(out, "Lvl 1 Pottery Course", sat, "15:00", "17:00");

    // Lvl 2: Sat 18:30, Sun 18:30
    addEvent(out, "Lvl 2 Pottery Course", sat, "18:30", "20:30");
    addEvent(out, "Lvl 2 Pottery Course", sun, "18:30", "20:30");

    // Lvl 3: Sun 15:00
    addEvent(out, "Lvl 3 Pottery Course", sun, "15:00", "17:00");
  }

  return out;
}

/* -------------------------------- helpers -------------------------------- */

function addEvent(out: EventInput[], title: string, day: Date, startHHMM: string, endHHMM: string) {
  out.push({
    title,
    start: fmtLocal(day, startHHMM),
    end: fmtLocal(day, endHHMM),
    color: getEventColor(title), // category color
  });
}

// Color rules you requested
function getEventColor(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("one-time pottery")) return "#3b82f6"; // blue
  if (t.includes("matcha") || t.includes("ikebana")) return "#22c55e"; // green
  if (t.includes("lvl") || t.includes("course")) return "#ef4444"; // red
  return "#f97316"; // orange
}

// Decide alternating Sundays for Ikebana vs Matcha.
// Here, "even weeks since start" => Ikebana; "odd" => Matcha.
function isEvenWeekIndexRelativeTo(startOfBaseline: Date, targetSunday: Date): boolean {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((stripTime(targetSunday).getTime() - stripTime(startOfBaseline).getTime()) / msPerDay);
  const weekIndex = Math.floor(diffDays / 7);
  return weekIndex % 2 === 0;
}

function stripTime(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function startOfWeekSunday(d: Date): Date {
  const x = new Date(d);
  const dow = x.getDay(); // 0=Sun
  x.setDate(x.getDate() - dow);
  x.setHours(0, 0, 0, 0);
  return x;
}

function addDays(d: Date, days: number): Date {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

// Local datetime "YYYY-MM-DDTHH:mm" (no Z)
function fmtLocal(date: Date, hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const x = new Date(date);
  x.setHours(h, m, 0, 0);
  const y = x.getFullYear();
  const mo = String(x.getMonth() + 1).padStart(2, "0");
  const da = String(x.getDate()).padStart(2, "0");
  const hh = String(x.getHours()).padStart(2, "0");
  const mm = String(x.getMinutes()).padStart(2, "0");
  return `${y}-${mo}-${da}T${hh}:${mm}`;
}
