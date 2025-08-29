import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function BeginnerPotteryClasses() {
  return (
    <div>
      <Head>
        <title>Beginner Pottery Class in Irvine | Olomana Studios</title>
        <meta
          name="description"
          content="Join our beginner pottery classes in Irvine! Learn wheel throwing and handbuilding techniques in our 4-week courses and workshops for beginners. Located in Orange County."
        />
      </Head>

      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Beginner Pottery Classes in Irvine
          </h1>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Looking for a <strong>beginner pottery class</strong> in Irvine or Orange County? 
            At Olomana Studios, we offer beginner-friendly pottery classes and workshops 
            that will help you learn and improve your skills in <strong>wheel throwing</strong> and <strong>handbuilding</strong> pottery.
          </p>
        </div>
      </section>

      {/* Classes Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Wheel Throwing 4-Week Course */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/beginner-pottery-class/6-week-course-rotated.jpeg"
                alt="Beginner pottery wheel throwing class in Irvine"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Level One 6-Week Wheel Throwing Course
              </h2>
              <p className="mt-4 text-gray-700 flex-1">
                Perfect for those who have taken an intro class and want to build their skills. 
                Learn the fundamentals of throwing on the pottery wheel — centering, pulling walls, trimming, 
                glazing, and more. By the end, you’ll be able to comfortably make cups, bowls, small vases, and planters.
              </p>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c/?categories[]=Courses"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white text-center font-medium hover:bg-gray-700"
              >
                Upcoming Courses
              </a>
            </div>
          </div>

          {/* Matcha Bowl Workshop */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/beginner-pottery-class/matcha-bowl-3.jpg"
                alt="Beginner pottery handbuilding workshop"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Matcha Bowl Handbuilding Workshop
              </h2>
              <p className="mt-4 text-gray-700 flex-1">
                A great introduction to handbuilding techniques for beginners. 
                Learn to shape, texture, and carve a traditional Japanese chawan (matcha bowl) by hand. 
                This workshop covers foundational skills you can build on in future classes.
              </p>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c/appointment/81608405/calendar/12365772"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white text-center font-medium hover:bg-gray-700"
              >
                Book Workshop
              </a>
            </div>
          </div>

          {/* Intro Pottery Group Class */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/beginner-pottery-class/intro-pottery-group-class.jpeg"
                alt="Intro pottery group class for beginners in Irvine"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Intro Pottery Group Class
              </h2>
              <p className="mt-4 text-gray-700 flex-1">
                The perfect single-session class for beginners who want to try their hand at the pottery wheel. 
                Learn the basics of wheel throwing in a fun, relaxed group setting. Great for absolute beginners 
                looking for a taste of pottery before committing to a full course.
              </p>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c/appointment/80268514/calendar/12365772"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white text-center font-medium hover:bg-gray-700"
              >
                View Classes
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
                At Olomana Studios, we believe everyone can be a maker — all it takes is a little clay and a willingness to try. Our beginner classes are designed to help you feel comfortable, whether you’ve never touched a pottery wheel before or you’re simply looking for a creative way to unwind. Every pinch, pull, and carve brings you closer to discovering the quiet joy of shaping something with your own hands.
              </p>
              <p className="text-gray-700">
                We know that starting something new can feel intimidating, so we’ve created a warm, welcoming space where mistakes are part of the process and curiosity is celebrated. Here, you’ll learn the fundamentals step by step — and you’ll walk away with pieces you can feel proud of, no matter your experience level.
              </p>
            </div>
            <div className="order-1 md:order-2 h-full relative">
              <Image
                src="/beginner-pottery-class/splash-2.jpeg"
                alt="Beginner pottery student shaping clay on wheel"
                layout="fill"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 h-48 relative">
              <Image
                src="/beginner-pottery-class/splash-1.jpeg"
                alt="Handmade beginner pottery pieces drying"
                layout="fill"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <p className="text-gray-700">
                Pottery has been practiced for thousands of years — and yet every piece you make is completely your own. Whether you’re shaping your very first bowl, carving textures into a matcha chawan, or simply feeling the clay spin under your fingers, we’re here to guide you through it all. This is your chance to slow down, explore your creativity, and create something meaningful.
              </p>
            </div>
          </div>

          {/* Final Invitation */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Try Pottery With Us
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              If you’ve been curious about pottery, there’s no better time to start. Join us for a beginner class or workshop in Irvine, and see how a lump of clay can become something beautiful in your hands. We can’t wait to welcome you into our studio and show you just how fun and rewarding pottery can be.
            </p>
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c"
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

