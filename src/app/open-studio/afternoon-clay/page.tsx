import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function AfternoonClay() {
  return (
    <div>
      <Head>
        <title>Afternoon Clay | Pottery Open Studio Irvine | Olomana Studios</title>
        <meta
          name="description"
          content="Join our Afternoon Clay pottery open studio in Irvine. A creative space to handbuild, paint, and connect with others in a relaxed afternoon session. Book now."
        />
      </Head>

      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Afternoon Clay – Open Studio in Irvine
          </h1>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Looking for a <strong>creative way to spend your afternoon?</strong> Join our Afternoon Clay open studio — a welcoming space to handbuild pottery, paint, and meet others. A longer, relaxed session perfect for retirees, stay-at-home parents, young professionals, and visiting enthusiasts.
          </p>
          <div className="mt-6 mb-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/appointment/81608955/calendar/12365772"
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
                src="/afternoon-clay/afternoon-clay-3.jpg"
                alt="Participants handbuilding pottery at Afternoon Clay"
                width={400}
                height={400}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/afternoon-clay/afternoon-clay-1.jpg"
                alt="Pottery open studio in Irvine"
                width={400}
                height={400}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/afternoon-clay/afternoon-clay-4.jpg"
                alt="Creative community enjoying pottery"
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
            <h2 className="text-3xl font-bold text-gray-900">A Peaceful, Creative Afternoon</h2>
            <p className="mt-4 text-gray-700">
              Afternoon Clay is a longer, more leisurely session designed for <strong>artistic self-expression</strong> and connection. You’ll receive one pound of clay to create whatever you like, paint it, and carve your name on the bottom. We’ll fire your piece, ready for pickup in 3–4 weeks.
            </p>
            <p className="mt-4 text-gray-700">
              With no formal instruction, you’re free to work at your own pace while chatting and sharing ideas with others in the studio. Everyone is welcome — whether you’re a retiree, stay-at-home parent, visiting the area, or simply enjoying an afternoon off.
            </p>
            <p className="mt-4 text-gray-700">
              Take a break from your routine and enjoy a <strong>creative community space</strong> that feels like your own third place.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/afternoon-clay/afternoon-clay-2.jpg"
              alt="Pottery handbuilding in the afternoon"
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
          <h2 className="text-3xl font-bold text-gray-900">Afternoon Clay Details</h2>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li><strong>When:</strong> Every afternoon, 1:30–5:30pm</li>
            <li><strong>Where:</strong> Olomana Studios - 14988 Sand Canyon Ave Studio 6, Irvine CA 92618</li>
            <li><strong>What’s included:</strong> 1 pound of clay, use of paints, tools, and firing service</li>
            <li><strong>Skill level:</strong> All levels welcome — no experience required</li>
            <li><strong>Pickup:</strong> Finished, fired pieces ready in 3–4 weeks</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/appointment/81608955/calendar/12365772"
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
