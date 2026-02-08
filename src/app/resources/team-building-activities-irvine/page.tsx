import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ClassCard from '@/components/ClassCard';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Team Building Activities in Irvine | Corporate Pottery Events | Olomana Studios',
  description:
    'Plan a team building event in Irvine your group will actually enjoy. Private pottery classes for corporate teams and groups at Olomana Studios.',
  alternates: {
    canonical: 'https://olomanastudios.com/resources/team-building-activities-irvine',
  },
  openGraph: {
    title: 'Team Building Activities in Irvine | Pottery for Groups',
    description:
      'Book a private pottery class for your team at Olomana Studios in Irvine. Creative, hands-on, and something people actually look forward to.',
    url: 'https://olomanastudios.com/resources/team-building-activities-irvine',
    images: [{ url: '/resources/big-group-young-pottery.jpg', width: 1200, height: 900, alt: 'Large group enjoying a pottery class at Olomana Studios' }],
  },
};

const faqs = [
  {
    question: 'How many people can you accommodate for a team event?',
    answer:
      'We host private group events for 8 to 30 people. For groups under 8, you\'re welcome to book individual spots in our regular group classes. Email contact@olomanastudios.com with your headcount and preferred dates.',
  },
  {
    question: 'How much does a team building pottery event cost?',
    answer:
      'Pricing is the same as our regular group class, with no additional fees or deposits. Check our regular group class page for current pricing.',
  },
  {
    question: 'Do you handle all the logistics?',
    answer:
      'Yes. We provide all materials, aprons, tools, and instruction. We also handle the firing and glazing after the event. Each participant picks up their finished piece in about 4 to 6 weeks. All you need to do is show up.',
  },
  {
    question: 'Can we bring food or decorations?',
    answer:
      'We don\'t allow food at the studio because it attracts ants and classes can get messy. Balloons and small party decorations are fine for large groups, but keep in mind there may be other classes or open studio members in the space.',
  },
];

export default function TeamBuildingIrvine() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Olomana Studios',
            image: 'https://olomanastudios.com/og/olomana-og.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '14988 Sand Canyon Ave Studio 6',
              addressLocality: 'Irvine',
              addressRegion: 'CA',
              postalCode: '92618',
            },
            url: 'https://olomanastudios.com',
            priceRange: '$$',
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
              <h1 className="leander text-4xl sm:text-5xl font-bold text-gray-900">
                Team Building Activities in Irvine
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                At <span className="leander">Olomana Studios</span>, we host private pottery classes for corporate teams and groups of all sizes. Everyone makes something real with their hands, everyone learns something new, and everyone walks away with a handmade piece they&apos;re proud of. It&apos;s team building that actually brings people together.
              </p>
              <p className="mt-6 text-lg text-gray-700">
                Email <strong>contact@olomanastudios.com</strong> to inquire and book.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Large group of people at pottery wheels during a team event at Olomana Studios"
                src="/info/big-group-young-pottery.jpg"
                fill
                priority
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <Image
            alt="Decorative line"
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-10 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* Why Pottery for Teams */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Why Teams Choose Pottery
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                The best team building happens when people forget they&apos;re doing team building. When your group is laughing at a wobbly pot or helping each other center clay, the usual office dynamics disappear. Everyone&apos;s a beginner, and that&apos;s the whole point.
              </p>
              <p className="text-lg text-gray-700">
                Pottery gives every person their own project. There&apos;s no sitting on the sidelines. Each person works with their hands, makes something from nothing, and walks away with a piece they made themselves. Something that ends up on their desk or kitchen shelf as a real reminder of the day.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Diverse group enjoying a hand-building pottery session"
                src="/info/group-pottery-seniors.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            How It Works
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Group gathered around a table during a pottery class"
                src="/info/group-pottery.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Your Event</h3>
                <p className="text-lg text-gray-700">
                  Email us with your group size (8 to 30 people) and 2 to 3 preferred dates. We&apos;ll confirm a time slot and send you a private booking link. No deposit required. Participants can pay individually or you can pay as a group.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Day of Your Event</h3>
                <p className="text-lg text-gray-700">
                  Your team shows up and our instructors handle everything. We guide everyone through making their own pottery piece (wheel throwing, hand-building, or both depending on the format). Sessions run 1 to 1.5 hours. We fire and glaze the pieces afterward, and they&apos;re ready for pickup in about 4 to 6 weeks.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <Image
            alt="Decorative line"
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mb-8 w-full h-1.5"
          />
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What Groups Are Saying
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'Had a great time making pottery with my friends here. The studio is clean, well-organized, and has a really welcoming atmosphere.',
                name: 'Jessica L.',
                source: 'Google',
              },
              {
                text: 'Eric was a great instructor who provided hands-on guidance for each person\'s piece throughout the class.',
                name: 'Michael T.',
                source: 'Yelp',
              },
              {
                text: 'What an amazing gem in Irvine. The studio is charming and cozy. The staff is incredibly helpful and the atmosphere is so welcoming.',
                name: 'Sarah K.',
                source: 'Google',
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
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
            alt="Decorative line"
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-10 w-full h-1.5"
          />
        </div>
      </section>

      {/* Classes */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Group Event Options
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassCard
              title="Private Pottery Event"
              imgSrc="/private-pottery-event/private-group.jpg"
              meta="8+ people"
              href="/classes/private-pottery-event-irvine"
              description="Groups of 8 or more can book a private class at a custom time. Choose wheel throwing, hand-building, or both."
            />
            <ClassCard
              title="One-Time Pottery Group Class"
              imgSrc="/one-time-pottery-class-irvine.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)/appointment/84238610/calendar/12365772"
              description="Groups of 8 or less can book individual spots in our regular group class. Learn wheel throwing and hand-building in a relaxed, social setting."
            />
          </div>

          <Image
            alt="Decorative line"
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
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Plan Your Team Event
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Email <strong>contact@olomanastudios.com</strong> with your group size and preferred dates to get started.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/classes/private-pottery-event-irvine"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              View Event Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
