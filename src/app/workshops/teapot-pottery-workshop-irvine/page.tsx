import React from 'react';
import Image from 'next/image';

export default function TeapotWheelThrowingCourse() {
  return (
    <div>
      {/* 5-Week Teapot Making Course */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">5-Week Teapot Making Course</h2>
            <p className="mt-4 text-black">
              Participants will learn how to throw and assemble the different parts of a teapot, refine spouts and lids, and create accompanying yunomi (Japanese tea cups). Teapots are one of the most rewarding forms in pottery, and this course will guide students step-by-step through the process. <strong>This is not a beginner pottery course. Students must be able to center and throw basic pottery shapes using 1-2 lbs of clay.</strong>
            </p>
          <div className="mt-6 mb-6 text-center">
            <a
              href="https://olomanastudios.as.me/teapot"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Register Now
            </a>
          </div>
          </header>

          <div className="h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-workshop/teapot-workshop-6.jpeg"
                alt="Finished glazed teapot held in hand"
                width={400}
                height={600}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-workshop/teapot-workshop-1.jpeg"
                alt="Instructor working at bench with handmade teapots"
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

      {/* Workshop Experience */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">A Hands-On Teapot Making Experience</h2>
            <p className="mt-4 text-gray-700">
              The teapot is one of the most celebrated and complex forms in ceramics, with roots tracing back to the Ming Dynasty in China and the iconic Yixing clay teapots. As tea culture spread across Asia, the teapot evolved into a deeply personal object shaped by regional traditions, from the Japanese kyusu to Chinese gongfu teapots.
            </p>
            <p className="mt-4 text-gray-700">
              Making a teapot by hand requires throwing multiple components (body, lid, spout, and handle) and assembling them into a single, cohesive piece. Every element must work together: the lid must fit snugly, the spout must pour cleanly, and the handle must feel balanced in the hand. This course breaks down each step over five weeks so students can focus on one stage at a time. By the end, you will have a complete, functional tea set made entirely by your own hands.
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
            <li><strong>Location:</strong> Olomana Studios - 14988 Sand Canyon Ave Studio 6, Irvine CA 92618</li>
            <li><strong>Course Length:</strong> 5 weeks (meets once a week)</li>
            <li><strong>Prerequisites:</strong> Students must be able to center and throw basic pottery shapes using 1-2 lbs of clay. This is not a beginner course.</li>
            <li><strong>What You&apos;ll Make:</strong> A complete wheel-thrown teapot (body, lid, spout, handle) and two yunomi tea cups.</li>
            <li><strong>What to Bring:</strong> Closed-toed shoes, comfortable clothing, and a creative mindset.</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold text-gray-900">Week-by-Week Outline</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li><strong>Week 1:</strong> Teapot overview &amp; throwing teapot body and lid</li>
            <li><strong>Week 2:</strong> Making teapot spout &amp; handle and trimming</li>
            <li><strong>Week 3:</strong> Assembling the teapot</li>
            <li><strong>Week 4:</strong> Throwing yunomi and applying surface decoration</li>
            <li><strong>Week 5:</strong> Glazing and preparing the teapot for firing</li>
          </ul>

          <div className="mt-6 text-center">
            <a
              href="https://olomanastudios.as.me/teapot"
              className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
