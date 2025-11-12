// app/calendar/page.tsx
export const runtime = 'edge';
export const dynamic = "force-dynamic";

import { fetchAvailableClassEventsRolling } from "@/lib/acuity";
import StudioCalendar from "./StudioCalendar";

export default async function CalendarPage() {
  const events = await fetchAvailableClassEventsRolling({
    monthsAhead: 2,
  });

  return (
    <>
      {/* Pottery Classes Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-center">
            <h2 className="leander text-center text-black text-3xl font-bold sm:text-5xl">
              Olomana Studios Calendar
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-600 text-center text-lg">
              View our schedule of upcoming classes and events at our Irvine pottery studio. 
              You can also{" "}
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c"
                className="underline underline-offset-2 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>browse and book all of our classes and workshops here</strong>
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4">
            <StudioCalendar events={events} />
          </div>
        </div>
      </section>
    </>
  );
}
