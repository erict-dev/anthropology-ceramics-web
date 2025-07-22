import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function IntermediatePotteryClasses() {
  return (
    <div>
      <Head>
        <title>Intermediate Pottery Class in Irvine | Olomana Studios</title>
        <meta
          name="description"
          content="Join our intermediate pottery classes in Irvine! Advance your wheel throwing and handbuilding techniques in 6-week courses, teapot workshops, and open studio memberships. Located in Orange County."
        />
      </Head>

      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Intermediate Pottery Classes in Irvine
          </h1>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Looking for an <strong>intermediate pottery class</strong> in Irvine or Orange County? 
            At Olomana Studios, we offer intermediate-level pottery classes, workshops, and open studio 
            options to help you advance your skills in <strong>wheel throwing</strong> and <strong>handbuilding</strong>.
          </p>
        </div>
      </section>

      {/* Classes Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Level Two Wheel Throwing 6-Week Course */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/intermediate-wheel-throwing.jpg"
                alt="Intermediate pottery wheel throwing class in Irvine"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Level Two 6-Week Wheel Throwing Course
              </h2>
              <p className="mt-4 text-gray-700 flex-1">
                For students who can already throw small cups, bowls, and plates, this course teaches more advanced forms — medium-sized vases, lidded jars, moon jars, and matcha bowls. Learn to throw with up to 5 lbs of clay, master hump throwing, and refine your glazing skills.
              </p>
              <a
                href="/classes/wheel-throwing-intermediate"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white text-center font-medium hover:bg-gray-700"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Teapot Making Workshop */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/intermediate-teapot-workshop.jpg"
                alt="Intermediate pottery teapot workshop in Irvine"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Teapot Making Workshop
              </h2>
              <p className="mt-4 text-gray-700 flex-1">
                This advanced workshop focuses on creating functional teapots, covering spout design, lid fit, handle construction, and body proportion. Ideal for intermediate potters ready to tackle one of ceramics’ most rewarding challenges.
              </p>
              <a
                href="/classes/teapot-workshop"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white text-center font-medium hover:bg-gray-700"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Open Studio Membership */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/intermediate-open-studio.jpg"
                alt="Open studio membership for intermediate potters in Irvine"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Open Studio Membership
              </h2>
              <p className="mt-4 text-gray-700 flex-1">
                For experienced potters looking for a flexible, independent practice space. Our open studio membership gives you access to wheels, tools, glazes, and firings — perfect for refining your skills and producing work on your own schedule.
              </p>
              <a
                href="/classes/open-studio-membership"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white text-center font-medium hover:bg-gray-700"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </section>

            {/* Closing CTA */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">

          {/* Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <p className="text-gray-700">
                At Olomana Studios, we believe that pottery is more than just learning a technique — it’s a way to slow down and reconnect with what really matters. Each time we sit at the wheel or shape a piece of clay, we’re reminded of the joy of creating something tangible, something made with care and intention. Our intermediate classes aren’t just about making bigger or more complex pieces — they’re about deepening your understanding of the craft and finding your own rhythm in the process.
              </p>
              <p className="text-gray-700">
                We’ve designed our studio to be more than a classroom — it’s a creative home. A space where people come together to practice, to learn from one another, and to share in the quiet satisfaction of making. You’ll find a supportive community of fellow makers here, all at different points in their journey, but all with the same love for the clay and the stories it can hold. Whether you’re working on mastering lidded jars, throwing larger forms, crafting your first teapot, or simply spending time in the open studio refining your skills, we’re here to guide you and cheer you on.
              </p>
            </div>
            <div className="order-1 md:order-2 h-full relative">
              <Image
                src="/intermediate-closing-1.jpg"
                alt="Potter working at wheel in Irvine studio"
                layout="fill"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 h-48 relative">
              <Image
                src="/intermediate-closing-3.jpg"
                alt="Handmade pottery ready for glazing"
                layout="fill"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <p className="text-gray-700">
                For us, the heart of this work is in the relationships we build — with the clay, with ourselves, and with each other. We’re proud to carry on traditions rooted in Japanese and Chinese pottery, blending time-honored techniques with a modern, approachable teaching style. And we’re just as proud of the small, everyday moments that happen here: a shared laugh, the quiet focus of a late evening in the studio, the feeling of holding a finished piece that you’ve made yourself.
              </p>
            </div>
          </div>

          {/* Final Invitation */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Come Create With Us
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We’d love to welcome you into our little community of makers. Join us for a class or a workshop, or make this your own creative sanctuary through our open studio membership. Wherever you are in your journey, we can’t wait to see what you’ll create — and to create alongside you.
            </p>
            <a
              href="/classes"
              className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium hover:bg-gray-700"
            >
              View All Classes
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
