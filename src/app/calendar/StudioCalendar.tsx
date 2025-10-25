"use client";

import { useRef, useState, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { events } from "./calendarEvents";
import Popover from "./Popover";

type SelectedEvent = {
  title: string;
  start?: Date | null;
  end?: Date | null;
  description?: string;
  price?: string;
  color?: string;
};

export default function StudioCalendar() {
  const calendarRef = useRef<FullCalendar | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SelectedEvent | null>(null);

  // helpers for validRange (unchanged)
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

  // mini metadata fallback if your events don’t yet include extendedProps
  function metaForTitle(title: string) {
    const t = title.toLowerCase();
    if (t.includes("one-time pottery")) return { price: "$69", description: "Intro group class for adults. All materials included." };
    if (t.includes("kids")) return { price: "$45", description: "Weekly creative series for kids. Clay and firing included." };
    if (t.includes("matcha")) return { price: "$85", description: "Hand-build a matcha bowl and learn tea-inspired forms." };
    if (t.includes("ikebana")) return { price: "$95", description: "Seasonal ikebana arranging with vessel pairing." };
    if (t.includes("lvl 1")) return { price: "$320", description: "4-week wheel course: centering, pulling walls, basic forms." };
    if (t.includes("lvl 2")) return { price: "$340", description: "4-week wheel course: trimming, consistency, surface design." };
    if (t.includes("lvl 3")) return { price: "$360", description: "4-week wheel course: advanced forms & refinement." };
    return { price: "Varies", description: "Pottery session at Olomana Studios." };
  }

  // custom chip renderer (unchanged, minimal)
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
        }}
      >
        {!isMonth && timeText && (
          <div style={{ fontSize: "11px", fontWeight: 600 }}>{timeText}</div>
        )}
        <div
          style={{
            fontSize: "12px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
          }}
        >
          {event.title}
        </div>
      </div>
    );
  }

  function onEventClick(info: any) {
    info.jsEvent?.preventDefault();

    const { title, start, end, backgroundColor, borderColor, extendedProps } = info.event;
    const meta = metaForTitle(title);
    setSelected({
      title,
      start,
      end,
      description: extendedProps?.description ?? meta.description,
      price: extendedProps?.price ?? meta.price,
      color: backgroundColor || borderColor || info.event.color,
    });
    setOpen(true);
  }

  const close = () => setOpen(false);

  function fmtRange(start?: Date | null, end?: Date | null) {
    if (!start) return "";
    const s = start.toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
    if (!end) return s;
    const e = end.toLocaleString([], { timeStyle: "short" });
    return `${s} – ${e}`;
  }

  return (
    <>
      <FullCalendar
        ref={calendarRef as any}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
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
        selectable
        selectMirror
        dayMaxEvents
        stickyHeaderDates
        timeZone="local"
        allDaySlot={true}
        events={events}
        eventContent={renderEventContent}
        eventClassNames={"hover:cursor-pointer"}
        eventClick={onEventClick}
        dateClick={(info: any) => {
          alert(`Date: ${info.dateStr}`);
        }}
        height="auto"
        aspectRatio={1.6}
      />

      <Popover
        isOpen={open}
        onClose={close}
        title={selected?.title}
        ariaLabel="Event details"
      >
        {selected && (
          <div className="space-y-4">
            {/* Image placeholder */}
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://placehold.co/600x400"
                alt={`${selected.title} placeholder`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="text-sm text-gray-600">
              {fmtRange(selected.start, selected.end)}
            </div>

            <div className="flex items-start gap-3">
              <div
                aria-hidden
                className="mt-0.5 h-3 w-3 rounded-full"
                style={{ backgroundColor: selected.color || "#3b82f6" }}
              />
              <p className="text-gray-800">{selected.description}</p>
            </div>

            <div className="flex items-center justify-between border-t pt-3">
              <div className="text-sm text-gray-700">Price</div>
              <div className="text-base font-semibold text-gray-900">
                {selected.price}
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => close()}
                className="w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Continue to booking
              </button>
            </div>
          </div>
        )}
      </Popover>
    </>
  );
}
