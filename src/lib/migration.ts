// lib/migration.ts
//
// Single source of truth for the Acuity -> Kanoa migration. As each Olomana
// class type is flipped over to Kanoa (kanoascheduling.com), add it to
// MIGRATED_TYPES. Everything downstream keys off this list:
//   - the calendar page sources migrated types from Kanoa (not Acuity)
//   - per-type booking CTAs deep-link into Kanoa
//
// This file is intentionally framework-agnostic (no "server-only") so it can be
// imported from both server components (calendar fetch) and the static page
// CTAs. The NEXT_PUBLIC_* env vars are inlined at build time and have safe
// production defaults, so no env configuration is required.

export const KANOA_BASE_URL =
  process.env.NEXT_PUBLIC_KANOA_BASE_URL ?? "https://kanoascheduling.com";

export const KANOA_ORG_SLUG =
  process.env.NEXT_PUBLIC_KANOA_ORG_SLUG ?? "olomana-studios";

export type MigratedType = {
  /** Acuity appointment type id this Kanoa type replaces (used to drop it from the Acuity calendar feed). */
  acuityAppointmentTypeID: number;
  /** Kanoa class type id (org-scoped UUID). */
  kanoaClassTypeId: string;
  /** Fallback calendar event title, used only if Kanoa returns a blank class name. */
  title: string;
  /**
   * Calendar events link to the class type's main booking page instead of the
   * individual session's checkout.
   */
  calendarLinksToClassType?: boolean;
};

export const MIGRATED_TYPES: MigratedType[] = [
  {
    acuityAppointmentTypeID: 86745632,
    kanoaClassTypeId: "5c57875d-ca6f-4750-8409-16364b794cd1",
    title: "Ikebana Flower Arrangement Workshop",
    calendarLinksToClassType: true,
  },
  {
    acuityAppointmentTypeID: 81608405,
    kanoaClassTypeId: "1bdc109f-6365-4cd4-80b4-68a2bfb41e04",
    title: "Traditional Matcha Bowl Pottery Workshop",
    calendarLinksToClassType: true,
  },
];

/** Acuity appointment type ids that have moved to Kanoa (drop these from the Acuity feed). */
export const MIGRATED_ACUITY_TYPE_IDS = new Set(
  MIGRATED_TYPES.map((t) => t.acuityAppointmentTypeID),
);

/** Browse-all-sessions page for a Kanoa class type (matches Acuity's appointment-level CTA). */
export function kanoaClassTypeUrl(classTypeId: string): string {
  return `${KANOA_BASE_URL}/s/${KANOA_ORG_SLUG}/class-types/${classTypeId}`;
}

/** Checkout page for a specific Kanoa class session. */
export function kanoaBookUrl(classId: string): string {
  return `${KANOA_BASE_URL}/s/${KANOA_ORG_SLUG}/book/${classId}`;
}

/** Gift certificate purchase page for the Kanoa org. */
export const KANOA_GIFT_CERTIFICATES_URL = `${KANOA_BASE_URL}/s/${KANOA_ORG_SLUG}/gift-certificates`;

/**
 * Look up a migrated type by its Kanoa class type id. Keyed by id (not array
 * position) so a rollback or reorder of MIGRATED_TYPES can't silently rebind
 * the per-type convenience exports below to the wrong workshop.
 */
function migratedType(kanoaClassTypeId: string): MigratedType {
  const type = MIGRATED_TYPES.find(
    (t) => t.kanoaClassTypeId === kanoaClassTypeId,
  );
  if (!type) {
    throw new Error(`Migrated type ${kanoaClassTypeId} not in MIGRATED_TYPES`);
  }
  return type;
}

/** The Ikebana workshop — convenience for its page CTAs. */
export const IKEBANA = migratedType("5c57875d-ca6f-4750-8409-16364b794cd1");
export const IKEBANA_BOOKING_URL = kanoaClassTypeUrl(IKEBANA.kanoaClassTypeId);

/** The Matcha Bowl workshop — convenience for its page CTAs. */
export const MATCHA_BOWL = migratedType("1bdc109f-6365-4cd4-80b4-68a2bfb41e04");
export const MATCHA_BOWL_BOOKING_URL = kanoaClassTypeUrl(
  MATCHA_BOWL.kanoaClassTypeId,
);

/** Schedule page filtered to a Kanoa category (lists every session in it). */
export function kanoaCategoryScheduleUrl(categorySlug: string): string {
  return `${KANOA_BASE_URL}/s/${KANOA_ORG_SLUG}/schedule?category=${categorySlug}`;
}

/** 4-Week Course: Intro to Wheel Throwing - 101 — convenience for its CTAs. */
export const WHEEL_101_BOOKING_URL = kanoaCategoryScheduleUrl(
  "4-week-pottery-course-101-intro-to-wheel",
);

/** 4-Week Course: Continuing Wheel Throwing - 201 — convenience for its CTAs. */
export const WHEEL_201_BOOKING_URL = kanoaCategoryScheduleUrl(
  "4-week-pottery-course-201-continuing-wheel-throwing",
);

/**
 * Kanoa categories whose class types all show on the calendar. Unlike
 * MIGRATED_TYPES, the 4-week courses get a new class type per course run
 * (~8 a month), so the calendar discovers them from these categories at
 * request time instead of listing ids by hand. Keyed by category id (not
 * name or slug) so renaming a category in Kanoa doesn't drop it.
 *
 * No Acuity filtering is needed: courses through October stay on Acuity and
 * everything after is Kanoa-only, so the two feeds never overlap.
 */
export const KANOA_CALENDAR_CATEGORY_IDS: string[] = [
  "ce162d32-6d84-4c77-8782-e5a51bb3e532", // 4-Week Pottery Course - 101 Intro to Wheel
  "4af2e122-9293-4069-9732-29f21400a59a", // 4-Week Pottery Course - 201 Continuing Wheel Throwing
  "5fb60996-3955-48e3-88c9-14fb156c01e4", // 4-Week Pottery Course - Hand-building
];
