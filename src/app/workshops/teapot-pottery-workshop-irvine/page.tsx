import React from 'react';
import Image from 'next/image';
import { TEAPOT_BOOTCAMP_BOOKING_URL } from '@/lib/migration';

const SCHEDULE = [
  { day: 'Friday', time: 'Evening session, 3 hours' },
  { day: 'Saturday', time: 'Afternoon session, 4 hours' },
  { day: 'Sunday', time: 'Afternoon session, 4 hours' },
];

export default function TeapotBootcamp() {
  return (
    <div>
      {/* Teapot Bootcamp: 3-Day Weekend Intensive */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500">3-Day Weekend Intensive</p>
            <h2 className="leander mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">Teapot Bootcamp</h2>
            <p className="mt-4 text-black">
              Spend one focused weekend making a teapot from start to finish on the pottery wheel. Over two and a half days, you will throw a teapot body and craft a matching lid, spout and handle, then bring them together into one functional piece. The bootcamp also includes three open studio practice sessions afterward so you can keep practicing and finish your work. <strong>This is not a beginner class. It is best suited for students who are comfortable centering 2 lbs of clay and have trimming skills.</strong>
            </p>
            <div className="mt-6 mb-6 text-center">
              <a
                href={TEAPOT_BOOTCAMP_BOOKING_URL}
                className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
              >
                Book Online
              </a>
              <p className="mt-3 text-sm text-gray-600">$289 · Limited spots · See upcoming dates when you book</p>
            </div>
          </header>

          <div className="h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-workshop/teapot-workshop-6.jpeg"
                alt="Finished teapot held in hand"
                width={400}
                height={600}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-workshop/teapot-making.jpeg"
                alt="Teapots in progress on the workbench with pottery tools"
                width={400}
                height={600}
                className="hidden sm:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-workshop/teapot-workshop-3.jpeg"
                alt="Handmade teapot and cups displayed on a board"
                width={400}
                height={600}
                className="hidden md:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Experience */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">One Weekend, One Teapot</h2>
            <p className="mt-4 text-gray-700">
              The teapot is one of the most celebrated and complex forms in ceramics, with roots tracing back to the Ming Dynasty in China and the iconic Yixing clay teapots. As tea culture spread across Asia, the teapot evolved into a deeply personal object shaped by regional traditions, from the Japanese kyusu to Chinese gongfu teapots.
            </p>
            <p className="mt-4 text-gray-700">
              Making a teapot requires throwing multiple components (body, lid, spout, and handle) and assembling them into a single, cohesive piece. Every element must work together: the lid must fit snugly, the spout must pour cleanly, and the handle must feel balanced in the hand. This bootcamp packs the whole process into one immersive weekend, so you stay in the flow from the first throw to final assembly. You will leave with a complete, functional teapot made entirely by your own hands.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg max-h-[420px]">
            <Image
              src="/workshops/teapot-workshop/teapot-workshop-4b.jpeg"
              alt="Student shaping a teapot body"
              width={600}
              height={400}
              className="object-cover w-full h-full transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Important Details */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Important Details</h2>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li><strong>Location:</strong> Olomana Studios, 14988 Sand Canyon Ave Studio 6, Irvine CA 92618</li>
            <li><strong>Format:</strong> 3-day weekend intensive (Friday evening, Saturday and Sunday afternoons)</li>
            <li><strong>Price:</strong> $289 for the full bootcamp</li>
            <li><strong>Prerequisites:</strong> Comfortable centering 2 lbs of clay and trimming. This is not a beginner class.</li>
            <li><strong>What You&apos;ll Make:</strong> A complete wheel-thrown teapot with a matching lid, spout and handle.</li>
            <li><strong>Open Studio Practice:</strong> Includes three open studio practice sessions after the bootcamp to practice and finish your work. Sessions must be used within a limited window after the bootcamp, listed on the booking page.</li>
            <li><strong>Make-Up Policy:</strong> There are no make-up classes or sessions for this bootcamp.</li>
            <li><strong>What to Bring:</strong> Closed-toed shoes, comfortable clothing, and a creative mindset.</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold text-gray-900">Bootcamp Schedule</h3>
          <p className="mt-4 text-gray-700">Each bootcamp runs over one weekend. See the booking page for upcoming dates and exact times.</p>
          <ul className="mt-4 space-y-3 text-gray-700">
            {SCHEDULE.map(({ day, time }) => (
              <li key={day}><strong>{day}:</strong> {time}</li>
            ))}
          </ul>

          <div className="mt-6 text-center">
            <a
              href={TEAPOT_BOOTCAMP_BOOKING_URL}
              className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
            >
              Reserve Your Spot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
