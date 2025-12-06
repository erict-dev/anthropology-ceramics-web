import { getFilteredClasses, generateStudioAvailability, getAvailability, filterShortAvailabilities, slotsToCalendarEvents } from '@/lib/availability';
import AvailabilityCalendar from './AvailabilityCalendar';

export const dynamic = "force-dynamic";

export default async function OpenStudioWheelAvailability() {
  const { oneTimePotteryClasses, fourWeekCourseClasses } = await getFilteredClasses(1);

  const oneTimeDates = getAvailability(oneTimePotteryClasses);
  const fourWeekDates = getAvailability(fourWeekCourseClasses);

  // Get all filtered slots for one-time classes
  const oneTimeSlots = oneTimeDates.flatMap((dateStr) => {
    const freeSlots = generateStudioAvailability(oneTimePotteryClasses, dateStr);
    return filterShortAvailabilities(freeSlots);
  });

  // Get all filtered slots for 4-week courses
  const fourWeekSlots = fourWeekDates.flatMap((dateStr) => {
    const freeSlots = generateStudioAvailability(fourWeekCourseClasses, dateStr);
    return filterShortAvailabilities(freeSlots);
  });

  // Transform slots to calendar events
  const oneTimeEvents = slotsToCalendarEvents(oneTimeSlots, "Shimpo Wheels Available", "#3b82f6"); // Blue
  const fourWeekEvents = slotsToCalendarEvents(fourWeekSlots, "Brent Wheels Available", "#d4a574"); // Light brown

  // Merge the two event lists
  const mergedEvents = [...oneTimeEvents, ...fourWeekEvents];

  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Open Studio Wheel Availability
          </h1>
        </div>
      </section>

      {/* Calendar */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4">
            <AvailabilityCalendar events={mergedEvents} />
          </div>
        </div>
      </section>
    </div>
  );
}

