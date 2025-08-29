"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

export default function EmailRibbon() {
  const [open, setOpen] = useState(true);
  const handleClose = useCallback(() => setOpen(false), []);

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Email signup"
      className="w-full border-y border-[#d9c5b6] bg-[#e6d6c8]"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="relative px-3 sm:px-8 py-2">
          {/* Close */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Dismiss"
            className="absolute right-1.5 top-1.5 inline-flex h-7 w-7 items-center justify-center rounded hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="#2f2a26" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 pr-9">
            {/* Short copy */}
            <p className="text-[15px] leading-tight text-[#3f2f2a] text-center sm:text-left">
              Join our mailing list for pottery and traditional arts & craft workshops, events and exhibitions in irvine
            </p>
            {/* Subscribe first, centered on mobile, not full width */}
            <Link
              href="https://mailchi.mp/olomanastudios/dkdbjar42i"
              className="
                self-center sm:self-auto
                inline-flex items-center justify-center rounded-lg
                px-3 py-1.5 text-[12.5px] font-medium
                bg-[#3f2f2a] text-white hover:bg-[#2f231f]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3f2f2a]
                whitespace-nowrap
              "
            >
              Join
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
