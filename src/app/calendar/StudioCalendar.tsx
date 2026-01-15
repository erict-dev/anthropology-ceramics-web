// app/calendar/StudioCalendar.tsx
"use client";

import { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { CalendarEvent } from "@/lib/acuity";

type Props = { events: CalendarEvent[] };

export default function StudioCalendar({ events }: Props) {
  const calendarRef = useRef<FullCalendar | null>(null);

  // ---- Helpers ----
  function startOfWeekSunday(d: Date) {
    const x = new Date(d);
    const dow = x.getDay();
    x.setDate(x.getDate() - dow);
    x.setHours(0, 0, 0, 0);
    return x;
  }
  function addDays(d: Date, days: number) {
    const x = new Date(d);
    x.setDate(x.getDate() + days);
    return x;
  }
  function validRange() {
    const now = new Date();
    const firstOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const start = startOfWeekSunday(firstOfThisMonth);
    const firstOfFourthMonth = new Date(now.getFullYear(), now.getMonth() + 3, 1);
    const end = addDays(startOfWeekSunday(firstOfFourthMonth), 7);
    return { start, end };
  }

  // ---- Past-event detection & transform ----
  function isPast(startISO: string, endISO?: string) {
    const end = endISO ? new Date(endISO) : new Date(startISO);
    return end.getTime() < Date.now();
  }

  function toFcEvents(src: CalendarEvent[]) {
    return src.map((e) => {
      const past = isPast(e.start, e.end);
      return {
        title: e.title,
        start: e.start,
        end: e.end,
        color: past ? "#9CA3AF" : e.color,
        extendedProps: {
          details: e.details,
          isPast: past,
        },
      };
    });
  }

  // ---- Event rendering ----
  function renderEventContent(content: any) {
    const { timeText, event, view } = content;

    const isMonth = view.type === "dayGridMonth";
    const isWeek = view.type === "timeGridWeek";
    const isThreeDay = view.type === "3-day";

    // Mobile-only density tweaks (esp. for week view)
    const isMobile =
      typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

    const bg = event.backgroundColor || event.color || "#3b82f6";

    // Defaults (keeps your current look)
    let containerPadding = "2px 4px";
    let titleFontSize = "12px";
    let timeFontSize = "11px";
    let borderRadius = "4px";
    let showTimeLine = !isMonth && !!timeText;

    // Week view is the most cramped: tighten just for week, and extra-tight on mobile
    if (isWeek) {
      containerPadding = isMobile ? "1px 3px" : "2px 4px";
      titleFontSize = isMobile ? "11px" : "12px";
      timeFontSize = isMobile ? "10px" : "11px";
      borderRadius = "3px";

      // On mobile week view, the extra time line costs too much vertical space.
      // Users can still infer time via placement; details appear on click.
      if (isMobile) showTimeLine = false;
    }

    return (
      <div
        style={{
          backgroundColor: bg,
          color: "white",
          borderRadius,
          padding: containerPadding,
          lineHeight: "1.1",
          width: "100%",
          maxHeight: "100%",
          overflow: "hidden",
        }}
      >
        {showTimeLine && (
          <div style={{ fontSize: timeFontSize, fontWeight: 600 }}>{timeText}</div>
        )}

        {/* Title: on mobile week + 3-day, allow wrapping to fill available event height; still truncates via overflow */}
        <div
          style={{
            fontSize: titleFontSize,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: (isWeek || isThreeDay) ? "normal" : "nowrap",
            lineHeight: "1.15",
          }}
        >
          {event.title}
        </div>
      </div>
    );
  }

  // ---- On click: open booking URL (open in SAME tab + alert for sold-out) ----
  function onEventClick(info: any) {
    info.jsEvent?.preventDefault();
    const details = info.event.extendedProps?.details ?? {};
    const isSoldOut = details.isSoldOut === true;
    const isPast = info.event.extendedProps?.isPast === true;

    if (isPast) return;

    if (isSoldOut) {
      window.alert("Sorry, this class is sold out.");
      return;
    }

    const url = details.bookingUrl;
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "https://olomanastudios.as.me";
    }
  }

  // ---- Transform events for FullCalendar ----
  const fcEvents = toFcEvents(events);

  // ---- Responsive default view ----
  const initialView =
    typeof window !== "undefined" && window.innerWidth < 768 ? "3-day" : "dayGridMonth";

  return (
    <>
      <FullCalendar
        ref={calendarRef as any}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        views={{
          "3-day": {
            type: "timeGrid",
            duration: { days: 3 },
          },
        }}
        headerToolbar={{
          left: "prev,today,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,3-day",
        }}
        initialView={initialView}
        validRange={validRange}
        slotMinTime="08:00:00"
        slotMaxTime="23:00:00"
        businessHours={[
          { daysOfWeek: [3, 4, 5, 6], startTime: "10:30", endTime: "20:30" },
          { daysOfWeek: [0], startTime: "10:30", endTime: "17:00" },
        ]}
        nowIndicator
        navLinks
        selectable={false}
        selectMirror
        dayMaxEvents
        stickyHeaderDates
        timeZone="America/Los_Angeles"
        allDaySlot={false}
        events={fcEvents}
        eventContent={renderEventContent}
        eventClassNames={(arg) =>
          arg.event.extendedProps?.isPast
            ? ["opacity-60", "cursor-not-allowed", "pointer-events-none"]
            : ["hover:cursor-pointer"]
        }
        eventClick={onEventClick}
        height="auto"
        aspectRatio={1.6}
      />

      <style jsx global>{`
        .fc .fc-non-business {
          background: #d6d6d6e0;
        }

        .fc .fc-toolbar-title {
          font-size: 1.5rem;
          padding: 0 10px;
        }

        @media (max-width: 1024px) {
          .fc .fc-toolbar-title {
            font-size: 1.25rem;
          }
          .fc .fc-button {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .fc .fc-toolbar-title {
            font-size: 1rem;
            text-align: center;
            padding: 0 4px;
          }

          .fc .fc-button {
            font-size: 0.75rem;
            padding: 0.25rem 0.4rem;
            line-height: 1.1;
          }

          .fc .fc-header-toolbar {
            margin-bottom: 0.25rem;
          }

          .fc .fc-toolbar.fc-header-toolbar {
            padding: 0;
          }

          .fc .fc-col-header-cell-cushion {
            padding: 2px 4px;
          }

          .fc .fc-daygrid-day-number {
            padding: 2px 4px;
          }

          .fc .fc-daygrid-day-frame {
            padding: 1px;
          }

          .fc .fc-timegrid-axis-cushion,
          .fc .fc-timegrid-slot-label-cushion {
            padding: 0 4px;
          }

          .fc .fc-daygrid-event-harness,
          .fc .fc-timegrid-event-harness {
            margin-top: 1px;
            margin-bottom: 1px;
          }

          .fc .fc-daygrid-event,
          .fc .fc-timegrid-event {
            margin: 0;
          }

          /* --- Week view specific: reduce extra whitespace where it hurts most --- */
          .fc .fc-timegrid-col-events {
            margin: 0;
          }

          /* Slightly tighter interior padding around event “stacks” in week view */
          .fc .fc-timegrid-event-harness-inset .fc-timegrid-event {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
