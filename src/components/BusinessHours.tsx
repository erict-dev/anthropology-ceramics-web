"use client";

import Link from "next/link";

export default function BusinessHours() {
  return (
    <div className="mt-4 flex w-full justify-center text-gray-600">
      <div className="w-full max-w-[700px] rounded-2xl border border-gray-200 bg-white/60 p-4 sm:p-5">
        <p className="text-center text-lg">
          <span className="font-semibold text-gray-800">
            Business hours
          </span>
        </p>

        <ul className="mt-3 grid gap-2 text-base sm:text-lg">
          <li className="flex justify-between gap-4 rounded-xl bg-white/70 px-3 py-2 sm:px-4">
            <span className="font-medium text-gray-800">Mon–Tue</span>
            <span className="text-gray-700">Closed</span>
          </li>
          <li className="flex justify-between gap-4 rounded-xl bg-white/70 px-3 py-2 sm:px-4">
            <span className="font-medium text-gray-800">Wed–Sat</span>
            <span className="text-gray-700">10:00am – 8:30pm</span>
          </li>
          <li className="flex justify-between gap-4 rounded-xl bg-white/70 px-3 py-2 sm:px-4">
            <span className="font-medium text-gray-800">Sunday</span>
            <span className="text-gray-700">10:00am – 5:00pm</span>
          </li>
        </ul>

        <p className="mt-4 text-center text-sm text-gray-500">
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
