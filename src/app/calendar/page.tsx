// app/calendar/page.tsx
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
          <div className="mb-8">
            <h2 className="leander text-black text-3xl font-bold sm:text-5xl">
              Olomana Studios Calendar
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Browse our full calendar of events at our Irvine pottery studio.
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
