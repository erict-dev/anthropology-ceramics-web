import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function EveningClay() {
  return (
    <div>
      <Head>
        <title>Handbuilding Ceramics | Evening Clay Session in Irvine</title>
        <meta
          name="description"
          content="Join our evening handbuilding ceramics sessions in Irvine. A creative community event to handbuild, paint, and connect with others. Evenings 6–8:30pm, walk-ins welcome"
        />
      </Head>

      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center">
          <h1 className="leander text-4xl sm:text-5xl font-bold text-gray-900">
            Handbuilding Ceramics, Evening Clay Session – Pottery in Irvine
          </h1>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Looking for <strong>things to do after work in Irvine?</strong> Come join our evening handbuilding ceramics sessions, a <strong>creative community space</strong> to handbuild pottery, paint, and connect with others. Every evening from 6–8:30pm, show up any time during the session and we will get you started! No experience needed, walk-ins welcome.
          </p>
          <div className="mt-6 mb-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/appointment/81610034/calendar/12365772"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Your Spot
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/evening-clay/evening-clay-pottery-studio-irvine.jpg"
                alt="Participants handbuilding pottery at Olomana Studios"
                width={400}
                height={400}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/evening-clay/evening-clay-7.jpg"
                alt="Creative pottery studio in Irvine"
                width={400}
                height={400}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/evening-clay/evening-clay-6.jpg"
                alt="Friends enjoying pottery night together"
                width={400}
                height={400}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">A Relaxed, Creative Evening</h2>
            <p className="mt-4 text-gray-700">
              Our handbuilding ceramics evening clay sessions are all about gathering together around art and building community. You’ll receive one pound of clay to handbuild anything you can imagine, and paint it during your session. Carve your name on the bottom and we’ll fire it for you to pick up in 3–4 weeks.
            </p>
            <p className="mt-4 text-gray-700">
              There’s no formal instruction, but we encourage everyone to share, ask questions, and help each other. Whether you’re a beginner or experienced, you’ll find a welcoming space to create, unwind, and connect.
            </p>
            <p className="mt-4 text-gray-700">
              This is your <strong>third place</strong> — a place to meet new friends, have conversations, and feel part of a creative community.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/evening-clay/evening-clay-1.jpeg"
              alt="Pottery handbuilding in Irvine"
              width={600}
              height={400}
              className="object-cover w-full h-full transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Evening Handbuilding Session Details</h2>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li><strong>When:</strong> Every evening, except mondays, 6:00–8:30pm</li>
            <li><strong>What’s included:</strong> 1 pound of clay, use of paints, tools, and firing service</li>
            <li><strong>Where:</strong> Olomana Studios - 14988 Sand Canyon Ave Studio 6, Irvine CA 92618</li>
            <li><strong>Skill level:</strong> All levels welcome — from first-timers to seasoned potters</li>
            <li><strong>Pickup:</strong> Fired and finished pieces ready in 3–4 weeks</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/appointment/81610034/calendar/12365772"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
            >
              Reserve Your Spot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


