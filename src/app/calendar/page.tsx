// app/calendar/page.tsx
export const runtime = 'edge';
export const dynamic = "force-dynamic";

import { fetchAvailableClassEventsRolling } from "@/lib/acuity";
import StudioCalendar from "./StudioCalendar";
import BusinessHours from "@/components/BusinessHours";

export default async function CalendarPage() {
  const events = await fetchAvailableClassEventsRolling({
    monthsAhead: 2,
  });

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center justify-center">
            <h2 className="leander text-center text-black text-3xl font-bold sm:text-5xl">
              Olomana Studios Calendar
            </h2>
            <BusinessHours />
          </div>

          {/* Calendar */}
          <div className="rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4">
            <StudioCalendar events={events} />
          </div>

          {/* Booking CTA */}
          <div className="mt-6 flex justify-center text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                rounded-full
                border border-gray-300
                bg-black
                px-6
                py-3
                text-base
                text-white
                shadow-sm
                transition
                hover:border-gray-400
                hover:shadow
                sm:text-lg
              "
            >
              Browse & book all classes and workshops
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
