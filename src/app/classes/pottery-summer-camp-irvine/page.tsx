import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Kids Pottery Summer Camp in Irvine | Ages 6-12 | Olomana Studios',
  description:
    'Hands-on pottery summer camp for kids ages 6-12 in Irvine, CA. Week-long half-day sessions with hand-building, wheel throwing, glazing, and more. Your child takes home real pottery they made themselves.',
  alternates: {
    canonical: 'https://olomanastudios.com/classes/pottery-summer-camp-irvine',
  },
  openGraph: {
    title: 'Kids Pottery Summer Camp in Irvine | Summer 2026',
    description:
      'A week-long pottery camp where kids ages 6-12 learn hand-building, wheel throwing, and glazing. Half-day sessions, small groups, real pottery to keep.',
    url: 'https://olomanastudios.com/classes/pottery-summer-camp-irvine',
    images: [
      {
        url: '/summer-camp/pottery-summer-camp-1.jpg',
        width: 1000,
        height: 668,
        alt: 'Kids learning pottery at Olomana Studios summer camp in Irvine',
      },
    ],
  },
};

const faqs = [
  {
    question: 'What ages is the pottery summer camp for?',
    answer:
      'Our pottery summer camp is designed for kids ages 6 to 12. Campers work in small groups so instructors can give each child hands-on guidance at their skill level.',
  },
  {
    question: 'Does my child need any pottery experience?',
    answer:
      'No experience needed at all. The camp is structured to take complete beginners from their first time touching clay all the way through wheel throwing and glazing by the end of the week.',
  },
  {
    question: 'What will my child take home?',
    answer:
      'Campers create multiple pieces throughout the week: pinch pot animals, a mug, a planter, bowls, and a vase. All pieces are fired, glazed, and ready for pickup about 4-5 weeks after camp ends.',
  },
  {
    question: 'What should my child wear and bring?',
    answer:
      'Wear clothes that can get dirty, closed-toed shoes with socks, and long pants. All clay, tools, glazes, and firing are included in the camp fee.',
  },
  {
    question: 'What are the half-day camp time options?',
    answer:
      'We offer two half-day sessions each day: a morning session from 9am to 12pm and an afternoon session from 1pm to 4pm, Monday through Friday.',
  },
  {
    question: 'Where is the camp located?',
    answer:
      'Olomana Studios is located at 14988 Sand Canyon Ave Studio 6, Irvine CA 92618. We are in the Sand Canyon Plaza in Irvine.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Refund minus a 10% transaction fee if you cancel 10 or more days before your camp session starts. Cancellations within 10 days will recieve studio class credit. Contact us at contact@olomanastudios.com to make changes.',
  },
];

const campWeeks = [
  { dates: 'June 29 - July 3', label: 'Week 1', morning: 'https://olomanastudios.as.me/?appointmentType=90322678', afternoon: 'https://olomanastudios.as.me/?appointmentType=91050875' },
  { dates: 'July 6 - July 10', label: 'Week 2', morning: 'https://olomanastudios.as.me/?appointmentType=91050968', afternoon: 'https://olomanastudios.as.me/?appointmentType=91051004' },
  { dates: 'July 13 - July 17', label: 'Week 3', morning: 'https://olomanastudios.as.me/?appointmentType=91051122', afternoon: 'https://olomanastudios.as.me/?appointmentType=91051179' },
  { dates: 'July 20 - July 24', label: 'Week 4', morning: 'https://olomanastudios.as.me/?appointmentType=91051270', afternoon: 'https://olomanastudios.as.me/?appointmentType=91051300' },
];

const curriculum = [
  {
    day: 'Monday',
    title: 'The Pottery Wheel',
    img: '/summer-camp/kids-pottery-1.jpg',
    items: ['Introduction to wheel throwing', 'Learn to center clay on the wheel', 'Throw basic shapes: cups and bowls'],
  },
  {
    day: 'Tuesday',
    title: 'Wheel Throwing Deep Dive',
    img: '/summer-camp/kids-pottery-2.jpg',
    items: ['Build on wheel throwing skills', 'Shape a small vase', 'Throw a mug on the wheel'],
  },
  {
    day: 'Wednesday',
    title: 'Hand-Building Basics',
    img: '/summer-camp/kids-pottery-3.jpg',
    items: ['Learn hand-building foundations', 'Sculpt pinch pot animals', 'Shape a handmade mug', 'Create a planter'],
  },
  {
    day: 'Thursday',
    title: 'Hand-Building & Design',
    img: '/summer-camp/kids-pottery-4.jpg',
    items: ['Continue hand-building projects', 'Carve designs into mugs and planters', 'Explore decorating techniques'],
  },
  {
    day: 'Friday',
    title: 'Underglazing',
    img: '/summer-camp/kids-pottery-5.jpg',
    items: ['Learn underglazing techniques', 'Apply colorful underglazes to the week\'s pieces', 'Add final personal touches to all creations'],
  },
];

export default function PotterySummerCampIrvine() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Kids Pottery Summer Camp',
            description:
              'A week-long half-day pottery camp for kids ages 6-12. Campers learn hand-building, wheel throwing, underglazing, and trimming while creating mugs, bowls, vases, and clay sculptures.',
            startDate: '2026-06-29',
            endDate: '2026-07-24',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'Olomana Studios',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '14988 Sand Canyon Ave Studio 6',
                addressLocality: 'Irvine',
                addressRegion: 'CA',
                postalCode: '92618',
              },
            },
            organizer: {
              '@type': 'LocalBusiness',
              name: 'Olomana Studios',
              url: 'https://olomanastudios.com',
            },
            offers: {
              '@type': 'Offer',
              price: '348',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://olomanastudios.com/classes/pottery-summer-camp-irvine',
            },
            image: 'https://olomanastudios.com/summer-camp/pottery-summer-camp-1.jpg',
            typicalAgeRange: '6-12',
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

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 font-medium">Summer 2026 &middot; Ages 6&ndash;12</p>
              <h1 className="leander mt-2 text-4xl sm:text-5xl font-bold text-gray-900">
                Kids Pottery Summer Camp in Irvine
              </h1>
              <p className="mt-2 text-lg font-semibold text-gray-900">
                June 29 &ndash; July 24 &middot; $348/week
              </p>
              <p className="mt-3 text-lg text-gray-700">
                Let your child unplug, get messy, and discover the joy of creating with clay. Over five days, campers learn hand-building, pottery wheel throwing, and glazing techniques while making real pottery they get to keep.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://olomanastudios.as.me/schedule/66629c2c/category/Kids%2520Pottery%2520Summer%2520Camp"
                  className="inline-block rounded-lg bg-black px-6 py-3 text-white font-medium text-center transition duration-300 hover:bg-gray-700"
                >
                  Reserve a Spot
                </a>
              </div>
            </div>
            <div className="relative w-full aspect-[3/2]">
              <Image
                alt="Kids working with clay at the pottery table during summer camp at Olomana Studios in Irvine"
                src="/summer-camp/pottery-summer-camp-2.jpg"
                fill
                priority
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Camp Dates & Pricing - prominent placement */}
      <section id="camp-details">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dates */}
              <div>
                <h2 className="leander text-2xl sm:text-3xl font-bold text-gray-900">
                  Choose Your Week
                </h2>
                <div className="mt-4 space-y-3">
                  {campWeeks.map((week) => (
                    <div
                      key={week.label}
                      className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-gray-900 font-semibold">{week.dates}</p>
                        <div className="flex gap-2">
                          <a
                            href={week.morning}
                            className="rounded-lg border border-gray-900 px-3 py-1.5 text-sm text-gray-900 font-medium transition hover:bg-gray-100"
                          >
                            9am&ndash;12pm
                          </a>
                          <a
                            href={week.afternoon}
                            className="rounded-lg border border-gray-900 px-3 py-1.5 text-sm text-gray-900 font-medium transition hover:bg-gray-100"
                          >
                            1pm&ndash;4pm
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick details */}
              <div>
                <h2 className="leander text-2xl sm:text-3xl font-bold text-gray-900">
                  Camp Details
                </h2>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-3 text-gray-700">
                    <span className="shrink-0 font-semibold text-gray-900">Price:</span>
                    $348 per week (all materials included)
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="shrink-0 font-semibold text-gray-900">Sessions:</span>
                    Morning 9am&ndash;12pm or Afternoon 1pm&ndash;4pm
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="shrink-0 font-semibold text-gray-900">Schedule:</span>
                    Half-day, Monday through Friday
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="shrink-0 font-semibold text-gray-900">Ages:</span>
                    6&ndash;12 years old
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="shrink-0 font-semibold text-gray-900">Group size:</span>
                    Limited to 8 campers per session
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="shrink-0 font-semibold text-gray-900">Location:</span>
                    14988 Sand Canyon Ave Studio 6, Irvine CA
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="shrink-0 font-semibold text-gray-900">Cancellation:</span>
                    Refund minus 10% transaction fee if cancelled 10+ days before camp. Class credit if cancelled within 10 days of start date.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Image
            alt=""
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-10 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* Why Parents Choose This Camp */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Why Parents Love This Camp
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Most summer camps keep kids busy. This one gives them something real to show for it. By Friday, your child will have a collection of handmade pottery: mugs, bowls, a vase, a planter, and clay sculptures they shaped with their own hands.
              </p>
              <p className="text-lg text-gray-700">
                Our camp is designed so kids build on what they learn each day. They start on the pottery wheel, learning to center clay and throw cups, bowls, and vases. Mid-week they move into hand-building, sculpting animals, mugs, and planters. By Friday, they are underglazing all their pieces with their own colors and designs.
              </p>
              <p className="text-lg text-gray-700">
                Small group sizes mean every child gets individual attention from our instructors. No screens, no sitting around. Just hands in clay, creativity flowing, and skills that stick.
              </p>
            </div>
            <div className="relative w-full aspect-[3/2]">
              <Image
                alt="Kids working with clay at the pottery table during summer camp at Olomana Studios"
                src="/summer-camp/pottery-summer-camp-1.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-Day Curriculum */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What Your Child Will Learn
          </h2>
          <p className="mt-3 text-lg text-gray-700 max-w-3xl">
            Each day builds on the last. Campers start the week on the pottery wheel, move into hand-building mid-week, and finish by underglazing all their creations on Friday.
          </p>

          <div className="mt-8 space-y-4">
            {curriculum.map((day) => (
              <div
                key={day.day}
                className="rounded-2xl border border-gray-200 bg-white p-5 flex gap-5"
              >
                <div className="relative w-24 h-24 shrink-0 hidden sm:block">
                  <Image
                    alt={`${day.title} - kids pottery summer camp day ${day.day.replace('Day ', '')}`}
                    src={day.img}
                    fill
                    className="object-cover rounded-xl"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-medium">{day.day}</p>
                    <h3 className="text-xl font-semibold text-gray-900">{day.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {day.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-lg flex gap-2">
                        <span className="text-gray-400 mt-0.5 shrink-0">&#9702;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Kids%2520Pottery%2520Summer%2520Camp"
              className="inline-block rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
            >
              View Schedule and Book
            </a>
          </div>

          <Image
            alt=""
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-10 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* What's Included */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-[3/2]">
              <Image
                alt="Kids gathered around a table working with clay at pottery summer camp"
                src="/info/kids-pottery.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
                Everything is Included
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  'All clay, tools, glazes, and underglazes',
                  'Kiln firing for every piece',
                  'Lead-free, food-safe glazes on all pottery',
                  'Max 8 campers per session with dedicated instructors',
                  'Both hand-building and pottery wheel time',
                  'Finished pieces ready for pickup in 4-5 weeks',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-lg text-gray-700">
                    <svg className="w-5 h-5 mt-1 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What Families Are Saying
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'My daughter had such a great time at Olomana Studios. The instructors were so patient and wonderful with kids. She came home beaming and couldn\'t wait to show us what she made.',
                name: 'Sarah M.',
                source: 'Google',
              },
              {
                text: 'What an amazing gem in Irvine. The studio is charming and cozy. The staff is incredibly helpful and the atmosphere is so welcoming. My kids loved every minute.',
                name: 'David P.',
                source: 'Yelp',
              },
              {
                text: 'Brought both our kids to the pottery class and they had an absolute blast. The instructors were great with them and really hands-on. We\'ll definitely be back.',
                name: 'Amy K.',
                source: 'Google',
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between text-sm">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500">{t.source}</p>
                </div>
              </blockquote>
            ))}
          </div>

          <Image
            alt=""
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-10 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <dl className="mt-6 space-y-6">
                {faqs.map((f, i) => (
                  <div key={i}>
                    <dt className="text-lg font-semibold text-gray-900">{f.question}</dt>
                    <dd className="mt-2 text-lg text-gray-700">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative w-64 aspect-[3/4] hidden md:block shrink-0">
              <Image
                alt="Cute clay cat figurine sculpted by a young potter at Olomana Studios"
                src="/info/cute-pottery-2.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Give Them a Summer They&apos;ll Remember
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Spots fill up fast. Reserve your child&apos;s week and let them spend this summer making something real with their own hands.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Kids%2520Pottery%2520Summer%2520Camp"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              View Schedule and Book
            </a>
          </div>
          <p className="mt-6 text-gray-500">
            Questions? Email us at{' '}
            <a href="mailto:contact@olomanastudios.com" className="underline hover:text-gray-700">contact@olomanastudios.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
