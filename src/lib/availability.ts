import "server-only";
import { fetchAvailableClassesRolling, AcuityClassSession } from '@/lib/acuity';

/**
 * Normalizes a string for fuzzy matching by:
 * - Converting to lowercase
 * - Removing hyphens and replacing with spaces
 * - Removing extra whitespace
 */
function normalizeForMatching(str: string): string {
  return str
    .toLowerCase()
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks if a class matches a specific title string.
 * Uses fuzzy, case-insensitive matching.
 * 
 * @param classItem - Class to check
 * @param matchString - String to match against class name
 * @returns True if the class name matches the string
 */
function classMatchesTitle(
  classItem: AcuityClassSession,
  matchString: string
): boolean {
  const normalizedName = normalizeForMatching(classItem.name);
  const normalizedMatch = normalizeForMatching(matchString);
  return normalizedName.includes(normalizedMatch);
}

export type FilteredClasses = {
  oneTimePotteryClasses: AcuityClassSession[];
  fourWeekCourseClasses: AcuityClassSession[];
};

export type FreeTimeSlot = {
  start: Date;
  end: Date;
};

/**
 * Extracts all dates from first to last class date, including days with no classes.
 * Returns dates in the same format as classItem.time (ISO format with timezone).
 * Days without classes will be included so they show as fully available.
 * 
 * @param classes - Array of classes to extract dates from
 * @returns Array of date strings sorted chronologically (from first to last class date)
 */
export function getAvailability(classes: AcuityClassSession[]): string[] {
  if (classes.length === 0) {
    return [];
  }

  // Find first and last class dates
  const classDates = classes.map((classItem) => {
    const classDate = new Date(classItem.time);
    return {
      date: classDate,
      timezone: (classItem.time.match(/([+-]\d{4})$/) || ['', '-0800'])[1],
    };
  });

  // Sort by date to find first and last
  classDates.sort((a, b) => a.date.getTime() - b.date.getTime());
  
  const firstDate = classDates[0].date;
  const lastDate = classDates[classDates.length - 1].date;
  
  // Use the timezone from the first class (assuming all classes use same timezone)
  const timezoneOffset = classDates[0].timezone;

  // Get all dates from first to last (inclusive)
  const allDates: string[] = [];
  const currentDate = new Date(firstDate);
  currentDate.setHours(0, 0, 0, 0);
  
  const endDate = new Date(lastDate);
  endDate.setHours(0, 0, 0, 0);

  while (currentDate <= endDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    
    // Create date string in same format: YYYY-MM-DDTHH:mm:ss+offset (using midnight)
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}T00:00:00${timezoneOffset}`;
    allDates.push(dateStr);
    
    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return allDates;
}

/**
 * Filters out free time slots that are 30 minutes or less.
 * 
 * @param slots - Array of free time slots to filter
 * @returns Array of free time slots with duration greater than 30 minutes
 */
export function filterShortAvailabilities(slots: FreeTimeSlot[]): FreeTimeSlot[] {
  return slots.filter((slot) => {
    const durationMinutes = (slot.end.getTime() - slot.start.getTime()) / (1000 * 60);
    return durationMinutes > 30;
  });
}

/**
 * Generates limited open studio availability by:
 * - Removing all availability on Mondays and Tuesdays
 * - Removing availability between 12pm-1pm and 5pm-6pm on all other days
 * 
 * @param slots - Array of free time slots to filter
 * @returns New array of filtered free time slots (does not modify original)
 */
export function generateLimitedOpenStudioAvailability(slots: FreeTimeSlot[]): FreeTimeSlot[] {
  const filteredSlots: FreeTimeSlot[] = [];
  
  for (const slot of slots) {
    const slotStart = new Date(slot.start);
    const slotEnd = new Date(slot.end);
    const dayOfWeek = slotStart.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
    
    // Remove all availability on Mondays (1) and Tuesdays (2)
    if (dayOfWeek === 1 || dayOfWeek === 2) {
      continue;
    }
    
    // Create blocked time ranges for this day (12pm-1pm and 5pm-6pm)
    const blockedRanges: { start: Date; end: Date }[] = [];
    
    // 12pm-1pm blocked range
    const blocked12pm = new Date(slotStart);
    blocked12pm.setHours(12, 0, 0, 0);
    const blocked1pm = new Date(slotStart);
    blocked1pm.setHours(13, 0, 0, 0);
    blockedRanges.push({ start: blocked12pm, end: blocked1pm });
    
    // 5pm-6pm blocked range
    const blocked5pm = new Date(slotStart);
    blocked5pm.setHours(17, 0, 0, 0);
    const blocked6pm = new Date(slotStart);
    blocked6pm.setHours(18, 0, 0, 0);
    blockedRanges.push({ start: blocked5pm, end: blocked6pm });
    
    // Sort blocked ranges by start time
    blockedRanges.sort((a, b) => a.start.getTime() - b.start.getTime());
    
    // Split the slot around blocked ranges
    let currentStart = slotStart;
    
    for (const blocked of blockedRanges) {
      // If slot ends before this blocked range starts, keep the remaining part
      if (slotEnd <= blocked.start) {
        if (currentStart < slotEnd) {
          filteredSlots.push({
            start: new Date(currentStart),
            end: new Date(slotEnd),
          });
        }
        currentStart = slotEnd; // Mark as processed
        break;
      }
      
      // If slot starts after this blocked range ends, continue to next blocked range
      if (currentStart >= blocked.end) {
        continue;
      }
      
      // If there's a part before the blocked range, add it
      if (currentStart < blocked.start) {
        filteredSlots.push({
          start: new Date(currentStart),
          end: new Date(blocked.start),
        });
      }
      
      // Move currentStart to after the blocked range
      currentStart = blocked.end;
    }
    
    // Add any remaining part of the slot after all blocked ranges
    if (currentStart < slotEnd) {
      filteredSlots.push({
        start: new Date(currentStart),
        end: new Date(slotEnd),
      });
    }
  }
  
  // Filter out slots that are 30 minutes or less after splitting
  return filterShortAvailabilities(filteredSlots);
}

/**
 * Converts a Date to ISO string format for FullCalendar (YYYY-MM-DDTHH:mm)
 */
function toISOStringLocal(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

/**
 * Transforms free time slots into FullCalendar event format.
 * 
 * @param slots - Array of free time slots
 * @param titlePrefix - Prefix for the event title (e.g., "Shimpo Wheels Available" or "Brent Wheels Available")
 * @param color - Color for the calendar events (hex color code)
 * @returns Array of events in FullCalendar format
 */
export function slotsToCalendarEvents(
  slots: FreeTimeSlot[],
  titlePrefix: string,
  color: string
): Array<{
  title: string;
  start: string;
  end: string;
  color: string;
  extendedProps: {
    isAvailability: boolean;
  };
}> {
  return slots.map((slot) => {
    return {
      title: `${titlePrefix}`,
      start: toISOStringLocal(slot.start),
      end: toISOStringLocal(slot.end),
      color: color,
      extendedProps: {
        isAvailability: true,
      },
    };
  });
}

/**
 * Fetches, filters, and splits classes into one-time pottery and 4-week course classes.
 * 
 * @param monthsAhead - Number of months ahead to fetch (default: 1)
 * @returns Object containing filtered and split class lists
 */
export async function getFilteredClasses(
  monthsAhead: number = 1
): Promise<FilteredClasses> {
  const allClasses = await fetchAvailableClassesRolling({
    monthsAhead,
  });

  // Filter classes into two separate lists
  const oneTimePotteryClasses = allClasses.filter((classItem) =>
    classMatchesTitle(classItem, 'one time pottery')
  );

  const fourWeekCourseClasses = allClasses.filter((classItem) =>
    classMatchesTitle(classItem, '4-week pottery course')
  );

  return {
    oneTimePotteryClasses,
    fourWeekCourseClasses,
  };
}

/**
 * Generates a list of free time slots for a given date based on class schedules.
 * Business hours are 10am to 8pm. 30 minute buffers are added before and after each class.
 * 
 * @param classes - Array of classes to check against
 * @param dateString - Date string in ISO format with timezone (e.g., "2025-12-06T00:00:00-0800")
 * @returns Array of free time slots with start and end timestamps
 */
export function generateStudioAvailability(
  classes: AcuityClassSession[],
  dateString: string
): FreeTimeSlot[] {
  // Parse the date string to get the date part (YYYY-MM-DD)
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  
  // Get timezone offset from the date string (e.g., -0800)
  const timezoneMatch = dateString.match(/([+-]\d{4})$/);
  const timezoneOffset = timezoneMatch ? timezoneMatch[1] : '-0800';
  
  // Create business hours in the same timezone: 10am to 8pm
  // Format: YYYY-MM-DDTHH:mm:ss+offset
  const businessStartStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}T10:00:00${timezoneOffset}`;
  const businessEndStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}T20:00:00${timezoneOffset}`;
  
  const businessStart = new Date(businessStartStr);
  const businessEnd = new Date(businessEndStr);

  // Filter classes for the given date (compare YYYY-MM-DD)
  const targetDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const classesOnDate = classes.filter((classItem) => {
    const classDate = new Date(classItem.time);
    const classYear = classDate.getFullYear();
    const classMonth = classDate.getMonth();
    const classDay = classDate.getDate();
    const classDateStr = `${classYear}-${String(classMonth + 1).padStart(2, '0')}-${String(classDay).padStart(2, '0')}`;
    return classDateStr === targetDateStr;
  });

  // If no classes, the entire business day is free
  if (classesOnDate.length === 0) {
    return [{ start: businessStart, end: businessEnd }];
  }

  // Create blocked time ranges (class time + 30 min buffer before and after)
  const blockedRanges: { start: Date; end: Date }[] = classesOnDate.map((classItem) => {
    const classStart = new Date(classItem.time);
    const classEnd = new Date(classStart.getTime() + classItem.duration * 60 * 1000);
    
    // Add 30 minute buffer before and after
    const blockedStart = new Date(classStart.getTime() - 30 * 60 * 1000);
    const blockedEnd = new Date(classEnd.getTime() + 30 * 60 * 1000);
    
    return { start: blockedStart, end: blockedEnd };
  });

  // Sort blocked ranges by start time
  blockedRanges.sort((a, b) => a.start.getTime() - b.start.getTime());

  // Merge overlapping blocked ranges
  const mergedBlockedRanges: { start: Date; end: Date }[] = [];
  for (const range of blockedRanges) {
    if (mergedBlockedRanges.length === 0) {
      mergedBlockedRanges.push({ ...range });
    } else {
      const lastRange = mergedBlockedRanges[mergedBlockedRanges.length - 1];
      if (range.start <= lastRange.end) {
        // Overlapping or adjacent, merge them
        lastRange.end = range.end > lastRange.end ? range.end : lastRange.end;
      } else {
        // Not overlapping, add as new range
        mergedBlockedRanges.push({ ...range });
      }
    }
  }

  // Find free time slots between blocked ranges
  const freeSlots: FreeTimeSlot[] = [];
  
  // Check if there's free time before the first blocked range
  if (mergedBlockedRanges.length > 0) {
    const firstBlockedStart = mergedBlockedRanges[0].start;
    if (firstBlockedStart > businessStart) {
      freeSlots.push({
        start: businessStart,
        end: firstBlockedStart,
      });
    }
  } else {
    // No blocked ranges, entire day is free
    freeSlots.push({ start: businessStart, end: businessEnd });
  }

  // Find gaps between blocked ranges
  for (let i = 0; i < mergedBlockedRanges.length - 1; i++) {
    const currentBlockedEnd = mergedBlockedRanges[i].end;
    const nextBlockedStart = mergedBlockedRanges[i + 1].start;
    
    if (nextBlockedStart > currentBlockedEnd) {
      // There's a gap
      const gapStart = currentBlockedEnd > businessStart ? currentBlockedEnd : businessStart;
      const gapEnd = nextBlockedStart < businessEnd ? nextBlockedStart : businessEnd;
      
      if (gapStart < gapEnd) {
        freeSlots.push({
          start: gapStart,
          end: gapEnd,
        });
      }
    }
  }

  // Check if there's free time after the last blocked range
  if (mergedBlockedRanges.length > 0) {
    const lastBlockedEnd = mergedBlockedRanges[mergedBlockedRanges.length - 1].end;
    if (lastBlockedEnd < businessEnd) {
      freeSlots.push({
        start: lastBlockedEnd,
        end: businessEnd,
      });
    }
  }

  // Filter out any slots that are outside business hours or have zero duration
  return freeSlots.filter((slot) => {
    return (
      slot.start >= businessStart &&
      slot.end <= businessEnd &&
      slot.start < slot.end
    );
  });
}

