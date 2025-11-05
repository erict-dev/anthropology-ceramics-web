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
            overflow: "clip"
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

  // ---- On click: open booking URL ----
  function onEventClick(info: any) {
    info.jsEvent?.preventDefault();
    const details = info.event.extendedProps?.details ?? {};
    const url = details.bookingUrl;
    const isSoldOut = details.isSoldOut === true;

    if (isSoldOut) return; // no action if sold out

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = "https://olomanastudios.as.me";
    }
  }

  // ---- Transform events for FullCalendar ----
  const fcEvents = events.map((e) => ({
    title: e.title,
    start: e.start,
    end: e.end,
    color: e.color,
    extendedProps: { details: e.details },
  }));

  return (
    <>
      <FullCalendar
        ref={calendarRef as any}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        views={{
          '3-day': {
            type: 'timeGrid',
              duration: { days: 3 }
          }
        }}
        headerToolbar={{
          left: "prev,today,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,3-day",
        }}
        initialView="dayGridMonth"
        validRange={validRange}
        slotMinTime="08:00:00"
        slotMaxTime="23:00:00"
        businessHours={[
          { daysOfWeek: [3, 4], startTime: "12:00", endTime: "21:00" },
          { daysOfWeek: [5], startTime: "12:00", endTime: "22:00" },
          { daysOfWeek: [6], startTime: "10:00", endTime: "22:00" },
          { daysOfWeek: [0], startTime: "10:00", endTime: "20:00" },
        ]}
        nowIndicator
        navLinks
        selectable={false}
        selectMirror
        dayMaxEvents
        stickyHeaderDates
        timeZone="America/Los_Angeles"
        allDaySlot={true}
        events={fcEvents}
        eventContent={renderEventContent}
        eventClassNames="hover:cursor-pointer"
        eventClick={onEventClick}
        height="auto"
        aspectRatio={1.6}
      />
      <style jsx global>{`
        .fc .fc-toolbar-title {
          font-size: 1.5rem; /* ~text-2xl */
          padding: 0 10px;
        }

        @media (max-width: 1024px) {
          .fc .fc-toolbar-title {
            font-size: 1.25rem; /* ~text-xl */
          }
          .fc .fc-button {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .fc .fc-toolbar-title {
            font-size: 1rem; /* ~text-lg */
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
