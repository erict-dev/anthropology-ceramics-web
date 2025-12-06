"use client";

import { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

type CalendarEvent = {
  title: string;
  start: string;
  end: string;
  color: string;
  extendedProps: {
    isAvailability: boolean;
  };
};

type Props = { events: CalendarEvent[] };

export default function AvailabilityCalendar({ events }: Props) {
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
          backgroundColor: event.backgroundColor || event.color || "#22c55e",
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

  // ---- Transform events for FullCalendar ----
  const fcEvents = events.map((e) => ({
    title: e.title,
    start: e.start,
    end: e.end,
    color: e.color,
    extendedProps: e.extendedProps,
  }));

  // ---- Responsive default view ----
  const initialView =
    typeof window !== "undefined" && window.innerWidth < 768
      ? "3-day"
      : "timeGridWeek";

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
          "1-day": {
            type: "timeGrid",
            duration: { days: 1 },
          },
        }}
        headerToolbar={{
          left: "prev,today,next",
          center: "title",
          right: "timeGridWeek,3-day,1-day",
        }}
        buttonText={{
          week: "Week",
          "3-day": "3-day",
          "1-day": "1-day",
        }}
        initialView={initialView}
        validRange={validRange}
        slotMinTime="08:00:00"
        slotMaxTime="23:00:00"
        businessHours={[
          { daysOfWeek: [0, 1, 2, 3, 4, 5, 6], startTime: "10:00", endTime: "20:00" },
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
        eventClassNames={() => ["hover:cursor-default"]}
        height="auto"
        aspectRatio={1.6}
      />

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

