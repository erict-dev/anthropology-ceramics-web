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
 * Helper functions to work with Los Angeles timezone, avoiding server-local time issues.
 */

/**
 * Gets date components (year, month, day) for a Date in Los Angeles timezone.
 */
function getLADateComponents(date: Date): { year: number; month: number; day: number } {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  const get = (type: string) => {
    const value = parts.find(p => p.type === type)?.value ?? "0";
    return parseInt(value, 10);
  };

  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
  };
}

/**
 * Gets hours and minutes for a Date in Los Angeles timezone.
 */
function getLATimeComponents(date: Date): { hours: number; minutes: number } {
  const hourStr = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    hour12: false,
  }).format(date);
  const minuteStr = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    minute: "2-digit",
  }).format(date);
  
  return {
    hours: parseInt(hourStr, 10),
    minutes: parseInt(minuteStr, 10),
  };
}

/**
 * Gets day of week (0 = Sunday, 1 = Monday, etc.) for a Date in Los Angeles timezone.
 */
function getLADayOfWeek(date: Date): number {
  const dayName = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
  }).format(date);
  
  const dayMap: Record<string, number> = {
    "Sunday": 0, "Monday": 1, "Tuesday": 2, "Wednesday": 3,
    "Thursday": 4, "Friday": 5, "Saturday": 6
  };
  return dayMap[dayName] ?? 0;
}

/**
 * Creates a date string in ISO format with LA timezone offset for a specific date/time in LA.
 * This properly handles DST by determining the correct offset.
 */
function createDateStringInLA(
  year: number,
  month: number,
  day: number,
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0
): string {
  // Create a date string and try both offsets to find the correct one
  const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  // Test PST first
  const testPST = new Date(`${dateStr}-08:00`);
  const testPSTParts = getLADateComponents(testPST);
  const testPSTTimeParts = getLATimeComponents(testPST);
  
  if (testPSTParts.year === year && 
      testPSTParts.month === month && 
      testPSTParts.day === day &&
      testPSTTimeParts.hours === hours &&
      testPSTTimeParts.minutes === minutes) {
    return `${dateStr}-08:00`;
  }
  
  // Try PDT
  const testPDT = new Date(`${dateStr}-07:00`);
  const testPDTParts = getLADateComponents(testPDT);
  const testPDTTimeParts = getLATimeComponents(testPDT);
  
  if (testPDTParts.year === year && 
      testPDTParts.month === month && 
      testPDTParts.day === day &&
      testPDTTimeParts.hours === hours &&
      testPDTTimeParts.minutes === minutes) {
    return `${dateStr}-07:00`;
  }
  
  // Fallback: use PST for winter months, PDT for summer months
  // DST in US typically: second Sunday in March to first Sunday in November
  const offset = (month >= 4 && month <= 10) || (month === 3 && day >= 14) || (month === 11 && day < 7) ? '-07:00' : '-08:00';
  return `${dateStr}${offset}`;
}

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

  // Find first and last class dates (using LA timezone for date components)
  const classDates = classes.map((classItem) => {
    const classDate = new Date(classItem.time);
    return {
      date: classDate,
      laComponents: getLADateComponents(classDate),
    };
  });

  // Sort by date to find first and last
  classDates.sort((a, b) => a.date.getTime() - b.date.getTime());
  
  const firstLAComponents = classDates[0].laComponents;
  const lastLAComponents = classDates[classDates.length - 1].laComponents;

  // Get all dates from first to last (inclusive) in LA timezone
  const allDates: string[] = [];
  let currentYear = firstLAComponents.year;
  let currentMonth = firstLAComponents.month;
  let currentDay = firstLAComponents.day;
  
  const lastYear = lastLAComponents.year;
  const lastMonth = lastLAComponents.month;
  const lastDay = lastLAComponents.day;

  while (
    currentYear < lastYear ||
    (currentYear === lastYear && currentMonth < lastMonth) ||
    (currentYear === lastYear && currentMonth === lastMonth && currentDay <= lastDay)
  ) {
    // Create date string for this day at midnight in LA timezone
    const dateStr = createDateStringInLA(currentYear, currentMonth, currentDay, 0, 0, 0);
    allDates.push(dateStr);
    
    // Move to next day in LA timezone
    // Create a date for the next day to get components
    const currentDateStr = createDateStringInLA(currentYear, currentMonth, currentDay, 12, 0, 0);
    const currentDate = new Date(currentDateStr);
    const nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    const nextComponents = getLADateComponents(nextDate);
    currentYear = nextComponents.year;
    currentMonth = nextComponents.month;
    currentDay = nextComponents.day;
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
    const dayOfWeek = getLADayOfWeek(slotStart); // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
    
    // Remove all availability on Mondays (1) and Tuesdays (2)
    if (dayOfWeek === 1 || dayOfWeek === 2) {
      continue;
    }
    
    // Create blocked time ranges for this day (12pm-1pm and 5pm-6pm) in LA timezone
    const blockedRanges: { start: Date; end: Date }[] = [];
    
    // Get date components in LA timezone for the slot start
    const slotStartLA = getLADateComponents(slotStart);
    
    // 12pm-1pm blocked range in LA timezone
    const blocked12pmStr = createDateStringInLA(slotStartLA.year, slotStartLA.month, slotStartLA.day, 12, 0, 0);
    const blocked1pmStr = createDateStringInLA(slotStartLA.year, slotStartLA.month, slotStartLA.day, 13, 0, 0);
    blockedRanges.push({ start: new Date(blocked12pmStr), end: new Date(blocked1pmStr) });
    
    // 5pm-6pm blocked range in LA timezone
    const blocked5pmStr = createDateStringInLA(slotStartLA.year, slotStartLA.month, slotStartLA.day, 17, 0, 0);
    const blocked6pmStr = createDateStringInLA(slotStartLA.year, slotStartLA.month, slotStartLA.day, 18, 0, 0);
    blockedRanges.push({ start: new Date(blocked5pmStr), end: new Date(blocked6pmStr) });
    
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
 * in Los Angeles timezone, accounting for daylight savings time.
 */
function toISOStringLocal(date: Date): string {
  // Use Intl.DateTimeFormat to get Los Angeles time, which automatically handles DST
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) => parts.find(p => p.type === type)?.value ?? "";
  const year = get("year");
  const month = get("month");
  const day = get("day");
  const hours = get("hour");
  const minutes = get("minute");
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
  // Parse the date string and get date components in LA timezone
  const dateObj = new Date(dateString);
  const laComponents = getLADateComponents(dateObj);
  const year = laComponents.year;
  const month = laComponents.month;
  const day = laComponents.day;
  
  // Create business hours in LA timezone: 10am to 8pm
  const businessStartStr = createDateStringInLA(year, month, day, 10, 0, 0);
  const businessEndStr = createDateStringInLA(year, month, day, 20, 0, 0);
  
  const businessStart = new Date(businessStartStr);
  const businessEnd = new Date(businessEndStr);

  // Filter classes for the given date (compare YYYY-MM-DD in LA timezone)
  const targetDateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const classesOnDate = classes.filter((classItem) => {
    const classDate = new Date(classItem.time);
    const classLAComponents = getLADateComponents(classDate);
    const classDateStr = `${classLAComponents.year}-${String(classLAComponents.month).padStart(2, '0')}-${String(classLAComponents.day).padStart(2, '0')}`;
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

