"use client";

import Link from "next/link";

export default function BusinessHours() {
  return (
    <div className="mt-3 flex w-full justify-center text-gray-600">
      <div className="w-full max-w-[700px] rounded-2xl border border-gray-200 bg-white/60 p-4">
        <p className="text-center text-base font-semibold text-gray-800">
          Business hours
        </p>

        <ul className="mt-2 grid gap-1.5 text-sm sm:text-base">
          <li className="flex justify-between gap-3 rounded-xl bg-white/70 px-3 py-1.5">
            <span className="font-medium text-gray-800">Mon–Tue</span>
            <span className="text-gray-700">Closed</span>
          </li>
          <li className="flex justify-between gap-3 rounded-xl bg-white/70 px-3 py-1.5">
            <span className="font-medium text-gray-800">Wed–Sat</span>
            <span className="text-gray-700">10:30am – 8:30pm</span>
          </li>
          <li className="flex justify-between gap-3 rounded-xl bg-white/70 px-3 py-1.5">
            <span className="font-medium text-gray-800">Sunday</span>
            <span className="text-gray-700">10:30am – 5:00pm</span>
          </li>
        </ul>

        <p className="mt-3 text-center text-xs text-gray-500">
          For the most up-to-date hours, please check our{" "}
          <Link
            href="https://share.google/80U7yzMdXeW0ck1kb"
            target="_blank"
            className="underline underline-offset-2 hover:text-gray-700"
          >
            Google Maps listing
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
