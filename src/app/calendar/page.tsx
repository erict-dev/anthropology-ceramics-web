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
          <div className="mb-4 flex flex-col items-center justify-center">
            <h2 className="leander text-center text-black text-3xl font-bold sm:text-5xl">
              Olomana Studios Calendar
            </h2>
              <p className="mt-4 mb-2 text-gray-600 text-center">
                View our calendar of classes and workshops at our Irvine studio.
              </p>
          </div>

          {/* Calendar */}
          <div className="p-3 sm:p-4">
            {/* Legend */}
            <div className="mb-3 text-sm text-gray-600">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#1972eb]" />
                  <span>Blue classes - the blue Shimpo wheels are in use</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#e7ad2f]" />
                  <span>Yellow classes - the yellow Brent wheels are in use</span>
                </div>
              </div>
            </div>

            <StudioCalendar events={events} />
          </div>

          {/* Business hours */}
          <BusinessHours />

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
