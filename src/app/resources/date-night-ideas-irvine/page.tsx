import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ClassCard from '@/components/ClassCard';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Date Night Ideas in Irvine | Pottery Classes for Couples | Olomana Studios',
  description:
    'Looking for a unique date night in Irvine? Try a pottery class for couples at Olomana Studios. Creative, memorable, and no experience needed.',
  alternates: {
    canonical: 'https://olomanastudios.com/resources/date-night-ideas-irvine',
  },
  openGraph: {
    title: 'Date Night Ideas in Irvine | Pottery for Couples',
    description:
      'Try a pottery class together at Olomana Studios in Irvine. Learn to throw on the wheel, make something you keep, and have a great time doing it.',
    url: 'https://olomanastudios.com/resources/date-night-ideas-irvine',
    images: [{ url: '/resources/couples-pottery.jpg', width: 765, height: 1020, alt: 'Couple enjoying a pottery class at Olomana Studios in Irvine' }],
  },
};

const faqs = [
  {
    question: 'Do we need pottery experience for a date night class?',
    answer:
      'Not at all. Our classes are designed for complete beginners. Your instructor walks you through every step, from centering clay to shaping on the wheel to hand-building techniques.',
  },
  {
    question: 'How long is a pottery date night?',
    answer:
      'Our one-time group classes are 1.5 hours. That\'s enough time to really get into it without feeling rushed, and you still have time to grab dinner afterward.',
  },
  {
    question: 'What do we get to take home?',
    answer:
      'Each person makes 2 pieces during class. We handle the drying, firing, and glazing, and you pick up your finished, food-safe pottery in about 4 to 5 weeks.',
  },
  {
    question: 'Can we book a private pottery date night?',
    answer:
      'Yes! You can book a private event for just the two of you or invite other couples. Email contact@olomanastudios.com with your preferred dates.',
  },
];

export default function DateNightIrvine() {
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
            telephone: '',
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
                Date Night Ideas in Irvine
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                A pottery class at <span className="leander">Olomana Studios</span> is a date night where you actually do something together. You and your partner learn to shape clay on the wheel and by hand. You&apos;ll laugh, you&apos;ll get messy, and you&apos;ll walk out with handmade pottery you made together.
              </p>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
              >
                Book a Date Night Class →
              </a>
            </div>
            <div className="relative w-full aspect-[3/4]">
              <Image
                alt="Two friends laughing during a pottery class at Olomana Studios"
                src="/info/couples-pottery.jpg"
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

      {/* Why Pottery */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Why Pottery Makes a Great Date
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                You&apos;re both beginners, both getting clay everywhere, both laughing when the pot wobbles off-center. That&apos;s what makes it work. It&apos;s the kind of evening you actually remember.
              </p>
              <p className="text-lg text-gray-700">
                A pottery class means you&apos;re actively doing something together. You&apos;re focused on the same challenge, helping each other figure it out, and cheering when something finally holds its shape. And weeks later, when you pick up your finished pieces, you&apos;ve got a real reminder of the night sitting on your kitchen shelf.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Two women smiling while making pottery at Olomana Studios"
                src="/info/fun-pottery-class.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What to Expect
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Instructor helping a student one-on-one at the pottery wheel"
                src="/info/pottery-class-small.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Our 1.5-hour group class covers both wheel throwing and hand-building. Your instructor demonstrates each step, then works with you one-on-one. You&apos;ll make 2 pieces each, maybe a bowl and a mug, or a vase and a small planter. All materials, firing, and glazing are included.
              </p>
              <p className="text-lg text-gray-700">
                The studio is small and relaxed. Classes stay small so you get real attention. Wear clothes you don&apos;t mind getting a little clay on (we provide aprons), and just show up ready to have fun.
              </p>
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

      {/* Testimonials */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What Couples Are Saying
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'My husband surprised me with a couples pottery class for our anniversary. Neither of us had done pottery before and we were so pleasantly surprised. Such a fun, creative experience together.',
                name: 'Emily R.',
                source: 'Yelp',
              },
              {
                text: 'My boyfriend and I had such a great time taking a pottery class here! Perfect date activity.',
                name: 'Amanda C.',
                source: 'Google',
              },
              {
                text: 'My husband and I had such a fun time. This place is a hidden gem!',
                name: 'Rachel M.',
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
        </div>
      </section>

      {/* Classes */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Classes Perfect for Date Night
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassCard
              title="One-Time Pottery Group Class"
              imgSrc="/one-time-pottery-class-irvine.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)/appointment/84238610/calendar/12365772"
              description="Learn wheel throwing and hand-building in a small group. No experience needed. Make 2 pieces each with all materials, firing, and glazing included."
            />
            <ClassCard
              title="Traditional Matcha Bowl Workshop"
              imgSrc="/irvine-matcha-bowl-class/matcha-bowl-3-resize.jpg"
              meta="2.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/81608405/calendar/12365772"
              description="A longer, more focused session. Carve a traditional matcha bowl by hand using Japanese-inspired techniques. Great for couples who want to slow down and really get into it."
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
            Plan Your Date Night
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Book a pottery class and make something together you&apos;ll actually keep for years.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Now
            </a>
            <Link
              href="/calendar"
              className="inline-block rounded-lg border border-gray-900 px-8 py-3 text-gray-900 text-lg font-medium transition duration-300 hover:bg-gray-100"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
