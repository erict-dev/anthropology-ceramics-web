"use client";

import { useState } from "react";
import AvailabilityCalendar from "./AvailabilityCalendar";

type CalendarEvent = {
  title: string;
  start: string;
  end: string;
  color: string;
  extendedProps: {
    isAvailability: boolean;
  };
};

type Props = {
  fullOpenStudioEvents: CalendarEvent[];
  limitedOpenStudioEvents: CalendarEvent[];
};

export default function AvailabilityTabs({ fullOpenStudioEvents, limitedOpenStudioEvents }: Props) {
  const [activeTab, setActiveTab] = useState<"full" | "limited">("full");

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          <button
            onClick={() => setActiveTab("full")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "full"
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Open Studio Members
          </button>
          <button
            onClick={() => setActiveTab("limited")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "limited"
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            4-Week Course Students
          </button>
        </div>
      </div>

      {/* Calendar */}
      {activeTab === "full" ? (
        <AvailabilityCalendar events={fullOpenStudioEvents} />
      ) : (
        <AvailabilityCalendar events={limitedOpenStudioEvents} />
      )}
    </div>
  );
}

