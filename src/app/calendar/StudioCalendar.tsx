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
    return (
      <div
        style={{
          backgroundColor: event.backgroundColor || event.color || "#3b82f6",
          color: "white",
          borderRadius: "4px",
          padding: "2px 4px",
          lineHeight: "1.1",
          width: "100%",
          maxHeight: "100%",
          overflow: "clip",
        }}
      >
        {!isMonth && timeText && (
          <div style={{ fontSize: "11px", fontWeight: 600 }}>{timeText}</div>
        )}
        <div
          style={{
            fontSize: "12px",
            overflow: "hidden",
            textOverflow: "ellipsis",
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
      // open in the same tab
      window.location.href = url;
    } else {
      window.location.href = "https://olomanastudios.as.me";
    }
  }

  // ---- Transform events for FullCalendar ----
  const fcEvents = toFcEvents(events);

  // ---- NEW: Responsive default view ----
  const initialView =
    typeof window !== "undefined" && window.innerWidth < 768
      ? "3-day"
      : "dayGridMonth";

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

      {/* styles unchanged */}
      <style jsx global>{`
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
          }
          .fc .fc-button {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
