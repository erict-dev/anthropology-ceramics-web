import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { TEAPOT_BOOTCAMP_BOOKING_URL } from '@/lib/migration';

const PAGE_URL = 'https://olomanastudios.com/workshops/teapot-pottery-workshop-irvine';
const OG_IMAGE = '/workshops/teapot-workshop/teapot-finished.jpeg';
const PRICE = '289';

const TITLE = 'Teapot Bootcamp in Irvine | Weekend Wheel-Throwing Intensive | Olomana Studios';
const DESCRIPTION =
  'A 3-day weekend teapot pottery intensive in Irvine, CA for intermediate potters. Throw a teapot body, lid, spout and handle on the wheel. Materials, firing and glazing included.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Olomana Studios',
    title: 'Teapot Bootcamp: 3-Day Weekend Pottery Intensive in Irvine',
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 801,
        alt: 'Wheel-thrown teapot made at the Olomana Studios Teapot Bootcamp in Irvine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teapot Bootcamp in Irvine | Olomana Studios',
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const SCHEDULE = [
  { day: 'Friday', time: 'Evening session, 3 hours' },
  { day: 'Saturday', time: 'Afternoon session, 4 hours' },
  { day: 'Sunday', time: 'Afternoon session, 4 hours' },
];

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '14988 Sand Canyon Ave Studio 6',
  addressLocality: 'Irvine',
  addressRegion: 'CA',
  postalCode: '92618',
  addressCountry: 'US',
};

const PREREQUISITES =
  'Students should be comfortable centering 2 lbs of clay on the pottery wheel and have trimming skills. This is not a beginner class.';

const faqs = [
  {
    question: 'Do I need pottery experience for the Teapot Bootcamp?',
    answer:
      'Yes. The Teapot Bootcamp is an intermediate wheel-throwing class, not a beginner class. It is best suited for students who are comfortable centering 2 lbs of clay and have trimming skills. If you are still building those skills, start with one of our 4-week wheel throwing courses.',
  },
  {
    question: 'How long is the Teapot Bootcamp?',
    answer:
      'The bootcamp runs over one weekend: a 3-hour Friday evening session and 4-hour afternoon sessions on Saturday and Sunday, for about 11 hours of instruction. It also includes three open studio practice sessions after the bootcamp.',
  },
  {
    question: 'What will I make?',
    answer:
      'You will make a complete wheel-thrown teapot: a thrown teapot body with a matching lid, spout and handle, assembled into one functional piece.',
  },
  {
    question: 'What is included in the price?',
    answer: `The bootcamp is $${PRICE} and includes all clay, tools and materials, plus firing and glazing of your teapot and three open studio practice sessions.`,
  },
  {
    question: 'When can I pick up my finished teapot?',
    answer:
      'Finished teapots are usually ready for pickup about 4 weeks after the bootcamp, once they have been glazed and fired.',
  },
  {
    question: 'What if I miss a session?',
    answer: 'There are no make-up classes or sessions for this bootcamp, so please plan to attend all three days.',
  },
  {
    question: 'When is the next Teapot Bootcamp?',
    answer:
      'Teapot Bootcamps run on select weekends throughout the year. Upcoming dates and open spots are listed on our booking page.',
  },
  {
    question: 'Where is the Teapot Bootcamp held?',
    answer:
      'At Olomana Studios, 14988 Sand Canyon Ave Studio 6, Irvine, CA 92618, in Orange County.',
  },
];

export default function TeapotBootcamp() {
  return (
    <div>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Teapot Bootcamp',
            description: DESCRIPTION,
            url: PAGE_URL,
            image: `https://olomanastudios.com${OG_IMAGE}`,
            educationalLevel: 'Intermediate',
            coursePrerequisites: PREREQUISITES,
            teaches: [
              'Throwing a teapot body on the pottery wheel',
              'Throwing and fitting a teapot lid',
              'Making a teapot spout and handle',
              'Trimming and assembling a teapot',
            ],
            provider: {
              '@type': 'LocalBusiness',
              name: 'Olomana Studios',
              url: 'https://olomanastudios.com',
              address: ADDRESS,
            },
            offers: {
              '@type': 'Offer',
              category: 'Paid',
              price: PRICE,
              priceCurrency: 'USD',
              url: TEAPOT_BOOTCAMP_BOOKING_URL,
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'Onsite',
              courseWorkload: 'PT11H',
              location: {
                '@type': 'Place',
                name: 'Olomana Studios',
                address: ADDRESS,
              },
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ]}
      />

      {/* Teapot Bootcamp: 3-Day Weekend Intensive */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500">3-Day Weekend Pottery Intensive</p>
            <h1 className="leander mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">Teapot Bootcamp in Irvine</h1>
            <p className="mt-4 text-black">
              Spend one focused weekend making a teapot from start to finish on the pottery wheel at our Irvine studio. Over two and a half days, intermediate potters throw a teapot body and craft a matching lid, spout and handle, then bring them together into one functional piece. All materials, firing and glazing are included, along with three open studio practice sessions afterward so you can keep practicing and finish your work. <strong>This is not a beginner class. It is best suited for students who are comfortable centering 2 lbs of clay and have trimming skills.</strong>
            </p>
            <div className="mt-6 mb-6 text-center">
              <a
                href={TEAPOT_BOOTCAMP_BOOKING_URL}
                className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
              >
                Book Online
              </a>
              <p className="mt-3 text-sm text-gray-600">${PRICE} · Small class size · See upcoming dates when you book</p>
            </div>
          </header>

          <div className="h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-workshop/teapot-workshop-6.jpeg"
                alt="Finished wheel-thrown teapot held in hand"
                width={400}
                height={600}
                priority
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-workshop/teapot-making.jpeg"
                alt="Teapots in progress on the workbench with pottery tools at Olomana Studios"
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
              Making a teapot requires throwing multiple components (body, lid, spout, and handle) and assembling them into a single, cohesive piece. Every element must work together: the lid must fit snugly, the spout must pour cleanly, and the handle must feel balanced in the hand. This wheel-throwing bootcamp packs the whole process into one immersive weekend, so you stay in the flow from the first throw to final assembly. You will leave with a complete, functional teapot made entirely by your own hands.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg max-h-[420px]">
            <Image
              src="/workshops/teapot-workshop/teapot-workshop-4b.jpeg"
              alt="Student shaping a teapot body during the Teapot Bootcamp"
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
            <li><strong>Location:</strong> Olomana Studios, 14988 Sand Canyon Ave Studio 6, Irvine CA 92618 (Orange County)</li>
            <li><strong>Format:</strong> 3-day weekend intensive (Friday evening, Saturday and Sunday afternoons), about 11 hours of instruction</li>
            <li><strong>Price:</strong> ${PRICE} for the full bootcamp</li>
            <li><strong>What&apos;s Included:</strong> All clay, tools and materials, plus firing and glazing of your teapot.</li>
            <li><strong>Class Size:</strong> Small class size, so everyone gets hands-on guidance at the wheel.</li>
            <li><strong>Prerequisites:</strong> Comfortable centering 2 lbs of clay and trimming. This is not a beginner class.</li>
            <li><strong>What You&apos;ll Make:</strong> A complete wheel-thrown teapot with a matching lid, spout and handle.</li>
            <li><strong>Open Studio Practice:</strong> Includes three open studio practice sessions after the bootcamp to practice and finish your work. Sessions must be used within a limited window after the bootcamp, listed on the booking page.</li>
            <li><strong>Pickup:</strong> Finished teapots are usually ready about 4 weeks after the bootcamp.</li>
            <li><strong>Make-Up Policy:</strong> There are no make-up classes or sessions for this bootcamp.</li>
            <li><strong>What to Bring:</strong> Closed-toed shoes, comfortable clothing, and a creative mindset.</li>
          </ul>

          <p className="mt-6 rounded-lg bg-white/60 p-4 text-gray-700">
            <strong>Not quite ready?</strong> If you are still working on centering larger amounts of clay or trimming, build your skills first in our{' '}
            <Link href="/classes/4-week-pottery-course-irvine" className="underline hover:text-gray-900">4-week wheel throwing courses</Link>{' '}
            or see our other{' '}
            <Link href="/classes/intermediate-pottery-class-irvine" className="underline hover:text-gray-900">intermediate pottery classes in Irvine</Link>.
          </p>

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

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Teapot Bootcamp FAQ</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-lg font-semibold text-gray-900">{f.question}</h3>
                <p className="mt-2 text-gray-700">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
