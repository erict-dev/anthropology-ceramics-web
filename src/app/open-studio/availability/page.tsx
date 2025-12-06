import { getFilteredClasses, generateStudioAvailability, getAvailability, filterShortAvailabilities, slotsToCalendarEvents, generateLimitedOpenStudioAvailability } from '@/lib/availability';
import AvailabilityTabs from './AvailabilityTabs';
import Link from 'next/link';

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
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Open Studio Wheel Availability
          </h1>
        </div>
      </section>

      {/* Brief Description */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-4">
          <p className="text-sm sm:text-base text-gray-700 text-center max-w-2xl mx-auto">
            Use this calendar to plan your open studio visits, but please note that this calendar is a planning tool and not a guarantee of availability.
          </p>
        </div>
      </section>

      {/* Member Type Info - Side by side on desktop */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            <div className="border-2 border-gray rounded-lg p-3 text-center md:text-left">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Open Studio Members</h3>
              <p className="text-xs text-gray-700">
                Full access 7 days a week, 10am-8pm, outside of class times.{' '}
                <Link href="/open-studio" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Apply for open studio
                </Link>
              </p>
            </div>

            <div className="border-2 border-gray rounded-lg p-3 text-center md:text-left">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">4-Week Course Students</h3>
              <p className="text-xs text-gray-700">
                Limited access once a week during business hours, outside of class times.{' '}
                <Link href="/classes/4-week-pottery-course-irvine" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Register for a course
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar with Tabs */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-3 sm:p-4">
            <AvailabilityTabs 
              fullOpenStudioEvents={fullOpenStudioEvents}
              limitedOpenStudioEvents={limitedOpenStudioEvents}
            />
          </div>
        </div>
      </section>

      {/* Important Notes - Below Calendar */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Important Notes</h2>
              <p className="text-sm text-gray-700 mb-3">
                This calendar does not show the following special situations:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
                <li>When wheels may be available during a class time if the class isn't full</li>
                <li>If there is a special event going on that uses the wheels (uncommon)</li>
                <li>If open studio wheels are full (generally this hasn't been a problem so far since we limit the number of open studio members, but it could happen in rare cases)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

