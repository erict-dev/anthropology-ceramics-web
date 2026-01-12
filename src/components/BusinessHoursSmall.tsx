"use client";

import Link from "next/link";

export default function BusinessHoursSmall() {
  return (
    <div className="mt-2 flex w-full justify-center text-gray-300">
      <div className="w-full max-w-[500px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3">
        <p className="text-center text-sm font-semibold text-white">
          Business hours
        </p>

        <ul className="mt-2 grid gap-1 text-sm">
          <li className="flex justify-between rounded-lg bg-white/10 px-2 py-1">
            <span className="font-medium text-gray-100">Mon–Tue</span>
            <span className="text-gray-300">Closed</span>
          </li>
          <li className="flex justify-between rounded-lg bg-white/10 px-2 py-1">
            <span className="font-medium text-gray-100">Wed–Sat</span>
            <span className="text-gray-300">10:00am–8:30pm</span>
          </li>
          <li className="flex justify-between rounded-lg bg-white/10 px-2 py-1">
            <span className="font-medium text-gray-100">Sunday</span>
            <span className="text-gray-300">10:00am–5:00pm</span>
          </li>
        </ul>

        <p className="mt-2 text-center text-xs text-gray-400 leading-snug">
          Check our{" "}
          <Link
            href="https://share.google/80U7yzMdXeW0ck1kb"
            target="_blank"
            className="underline underline-offset-2 hover:text-white"
          >
            Google Maps listing
          </Link>{" "}
          for special hours.
        </p>
      </div>
    </div>
  );
}
