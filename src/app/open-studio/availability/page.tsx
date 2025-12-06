import { getFilteredClasses, generateStudioAvailability, getAvailability, filterShortAvailabilities, slotsToCalendarEvents, generateLimitedOpenStudioAvailability } from '@/lib/availability';
import AvailabilityTabs from './AvailabilityTabs';

export const dynamic = "force-dynamic";

export default async function OpenStudioWheelAvailability() {
  const { oneTimePotteryClasses, fourWeekCourseClasses } = await getFilteredClasses(1);

  const oneTimeDates = getAvailability(oneTimePotteryClasses);
  const fourWeekDates = getAvailability(fourWeekCourseClasses);

  // Get all filtered slots for one-time classes (full open studio)
  const oneTimeSlots = oneTimeDates.flatMap((dateStr) => {
    const freeSlots = generateStudioAvailability(oneTimePotteryClasses, dateStr);
    return filterShortAvailabilities(freeSlots);
  });

  // Get all filtered slots for 4-week courses (full open studio)
  const fourWeekSlots = fourWeekDates.flatMap((dateStr) => {
    const freeSlots = generateStudioAvailability(fourWeekCourseClasses, dateStr);
    return filterShortAvailabilities(freeSlots);
  });

  // Create limited open studio slots (new arrays, not modifying originals)
  const limitedOneTimeSlots = generateLimitedOpenStudioAvailability(oneTimeSlots);
  const limitedFourWeekSlots = generateLimitedOpenStudioAvailability(fourWeekSlots);

  // Transform slots to calendar events for full open studio
  const oneTimeEvents = slotsToCalendarEvents(oneTimeSlots, "Shimpo Wheels Available", "#3b82f6"); // Blue
  const fourWeekEvents = slotsToCalendarEvents(fourWeekSlots, "Brent Wheels Available", "#d4a574"); // Light brown
  const fullOpenStudioEvents = [...oneTimeEvents, ...fourWeekEvents];

  // Transform slots to calendar events for limited open studio
  const limitedOneTimeEvents = slotsToCalendarEvents(limitedOneTimeSlots, "Shimpo Wheels Available", "#3b82f6"); // Blue
  const limitedFourWeekEvents = slotsToCalendarEvents(limitedFourWeekSlots, "Brent Wheels Available", "#d4a574"); // Light brown
  const limitedOpenStudioEvents = [...limitedOneTimeEvents, ...limitedFourWeekEvents];

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

      {/* Calendar with Tabs */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4">
            <AvailabilityTabs 
              fullOpenStudioEvents={fullOpenStudioEvents}
              limitedOpenStudioEvents={limitedOpenStudioEvents}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

