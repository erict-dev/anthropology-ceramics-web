import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function OpenStudioMembership() {
  return (
    <div>
      <Head>
        <title>Pottery Open Studio in Irvine | Olomana Studios</title>
        <meta
          name="description"
          content="Join Olomana Studios for pottery open studio time in Irvine. Flexible packages and memberships for experienced potters to practice on wheels or handbuild in a creative, supportive environment."
        />
      </Head>

      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 pb-0 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Pottery Open Studio Memberships in Irvine
          </h1>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Looking for <strong>pottery studio time in Irvine</strong>? Our open studio memberships are designed for students and enthusiasts with some experience who want a creative, supportive space to practice wheel throwing, handbuilding, and glazing. Sign up for a membership or package and enjoy flexible, unguided studio time surrounded by fellow artists.
          </p>
        <div className="relative h-96 mt-4 mb-4">
          <Image
            alt=""
            src="/olomana-irvine-pottery-studio/olomana-studios-irvine-pottery-studio.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        </div>
      </section>

      {/* Offerings */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
          <div className="border rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800">5 Days / Month</h2>
            <p className="mt-2 text-gray-700">Perfect for potters who want a regular creative outlet each month.</p>
            <p className="mt-4 text-xl font-semibold text-gray-900">$240/month <span className="text-sm font-normal">+ $35 initiation fee</span></p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ 5 open studio days per month, stay as long as you like per day</li>
              <li>✓ Includes one Evening Clay guest pass per month</li>
              <li>✓ 1 25lb bag of clay &amp; wetbox</li>
              <li>✓ Use of studio wheels, tools, handbuilding tables, glazes</li>
              <li>✓ Half shelf/month for firing</li>
            </ul>
            <div className="mt-8">
              <a
                href="https://app.acuityscheduling.com/catalog/66629c2c"
                className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
              >
                View Membership
              </a>
            </div>
          </div>

          <div className="border rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800">Unlimited VIP Membership</h2>
            <p className="mt-2 text-gray-700">For passionate potters who want maximum flexibility and unlimited access.</p>
            <p className="mt-4 text-xl font-semibold text-gray-900">$360/month <span className="text-sm font-normal">+ $35 initiation fee</span></p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ Unlimited open studio access during business hours</li>
              <li>✓ One Evening Clay &amp; one Afternoon Clay guest pass per month</li>
              <li>✓ 1 25lb bag of clay &amp; wetbox</li>
              <li>✓ Use of studio wheels, tools, handbuilding tables, glazes</li>
              <li>✓ Half shelf/month for firing</li>
            </ul>
            <div className="mt-8">
              <a
                href="https://app.acuityscheduling.com/catalog/66629c2c"
                className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
              >
                View Membership
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Drop-in Events */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Afternoon & Evening Clay</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
            If you prefer a casual, handbuilding-only open studio experience, our Afternoon and Evening Clay sessions are perfect drop-in options.
          </p>
          <div className="grid gap-8 md:grid-cols-2 mt-8">
            <div className="border rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Afternoon Clay</h3>
              <p className="mt-2 text-gray-700">1:30 PM – 5:30 PM | $38 per session</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✓ 1lb ball of clay</li>
                <li>✓ Use of handbuilding tables &amp; painting glazes</li>
                <li>✓ Enjoy creative time with fellow artists</li>
              </ul>
              <div className="mt-8">
                <a
                  href="https://olomanastudios.as.me/schedule/66629c2c/appointment/81608955/calendar/12365772"
                  className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
                >
                  Book
                </a>
              </div>
            </div>

            <div className="border rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Evening Clay</h3>
              <p className="mt-2 text-gray-700">6:00 PM – 8:30 PM | $42 per session</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✓ 1lb ball of clay</li>
                <li>✓ Use of handbuilding tables &amp; painting glazes</li>
                <li>✓ A welcoming, creative atmosphere</li>
              </ul>
              <div className="mt-8">
                <a
                  href="https://olomanastudios.as.me/schedule/66629c2c/appointment/81610034/calendar/12365772"
                  className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
                >
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Join Our Pottery Studio?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            At Olomana Studios, we believe in fostering a creative, inclusive community where artists of all levels can grow their craft. Whether you’re honing your wheel throwing skills, handbuilding something special, or simply finding peace through clay, our open studio memberships give you the time, space, and tools you need.
          </p>
          <div className="mt-8">
            <a
              href="https://olomanastudios.as.me"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              View All Classes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

