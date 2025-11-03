"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type PopoverProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function Popover({
  isOpen,
  onClose,
  title,
  ariaLabel,
  children,
}: PopoverProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    lastFocusedRef.current = document.activeElement;
    const dialogEl = dialogRef.current!;
    dialogEl.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (lastFocusedRef.current instanceof HTMLElement) {
        lastFocusedRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[1px] flex items-center justify-center p-4"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title ? undefined : ariaLabel}
        aria-labelledby={title ? "dialog-title" : undefined}
        tabIndex={-1}
        className="
          w-full max-w-lg rounded-2xl bg-white shadow-xl outline-none
          focus-visible:ring-2 focus-visible:ring-indigo-500
          md:max-w-xl relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (top-right red X) */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-3 top-3 text-red-500 hover:text-red-700 text-2xl font-bold focus:outline-none"
        >
          ×
        </button>

        {title ? (
          <h3
            id="dialog-title"
            className="px-5 pt-5 pb-2 text-lg font-semibold text-gray-900"
          >
            {title}
          </h3>
        ) : null}

        <div className="p-5">{children}</div>
      </div>
    </div>,
    document.body
  );
}
