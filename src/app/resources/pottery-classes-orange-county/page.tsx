import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ClassCard from '@/components/ClassCard';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pottery Classes in Orange County | Wheel Throwing & Handbuilding | Olomana Studios',
  description:
    'Pottery classes in Orange County for all skill levels. Wheel throwing, handbuilding, workshops, and courses at Olomana Studios in Irvine. No experience needed.',
  alternates: {
    canonical: 'https://olomanastudios.com/resources/pottery-classes-orange-county',
  },
  openGraph: {
    title: 'Pottery Classes in Orange County | Olomana Studios',
    description:
      'Learn pottery in Orange County. One-time classes, 4-week courses, and specialty workshops at Olomana Studios in Irvine.',
    url: 'https://olomanastudios.com/resources/pottery-classes-orange-county',
    images: [{ url: '/resources/group-class-pottery.jpg', width: 1200, height: 900, alt: 'Students throwing pottery on Brent wheels at Olomana Studios' }],
  },
};

const faqs = [
  {
    question: 'Where in Orange County are you located?',
    answer:
      'We\'re at 14988 Sand Canyon Ave Studio 6 in Irvine, right in Old Town Irvine. It\'s centrally located and easy to get to from Tustin, Lake Forest, Newport Beach, Costa Mesa, and the surrounding area.',
  },
  {
    question: 'What types of pottery classes do you offer?',
    answer:
      'One-time group classes (1.5 hours, great for beginners), 4-week pottery courses (Levels 1 through 3 for building skills over time), specialty workshops like our matcha bowl and ikebana classes, kids classes, and private group events.',
  },
  {
    question: 'Do you teach wheel throwing or handbuilding?',
    answer:
      'Both. Our one-time group classes include wheel throwing and hand-building so you get to try each technique. Our 4-week courses focus on wheel throwing with progressively more advanced forms. Our matcha bowl workshop teaches hand-building specifically.',
  },
  {
    question: 'What is included in the class price?',
    answer:
      'Everything. Clay, tools, instruction, firing, and glazing. You don\'t need to bring anything except clothes you don\'t mind getting a little messy (we provide aprons). Finished pieces are food-safe and ready for pickup in about 4 to 5 weeks.',
  },
];

export default function PotteryClassesOrangeCounty() {
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
                Pottery Classes in Orange County
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                <span className="leander">Olomana Studios</span> is a pottery and art studio in Irvine with classes for every skill level. If you&apos;ve never touched clay, our beginner classes walk you through everything. If you&apos;re looking for a studio to keep developing your skills, our multi-week courses and open studio time give you space to grow. Small classes, real instruction, and a cozy space in the heart of Orange County.
              </p>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
              >
                View All Classes →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Multiple students throwing pottery on Brent wheels at Olomana Studios"
                src="/info/group-class-pottery.jpg"
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

      {/* Class Types */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Classes for Every Level
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Our <strong>one-time group classes</strong> are the easiest way to try pottery. In 1.5 hours you&apos;ll learn the basics of both wheel throwing and hand-building, and you&apos;ll make 2 pieces to take home. No experience, no pressure. Just a fun creative session.
              </p>
              <p className="text-lg text-gray-700">
                Want to go deeper? Our <strong>4-week pottery courses</strong> take you from beginner to confident maker. Level 1 covers the fundamentals: centering, pulling walls, forming cylinders and bowls. Levels 2 and 3 push into more complex forms, handles, lids, and decorative techniques. Each level includes open studio time to practice between sessions.
              </p>
              <p className="text-lg text-gray-700">
                For something different, try one of our <strong>specialty workshops</strong>. The traditional matcha bowl workshop teaches Japanese hand-building techniques, and our ikebana flower arrangement class combines pottery with the art of Japanese floral design.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Matcha bowls drying on shelves at Olomana Studios"
                src="/info/matcha-bowls-in-progress.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Studio */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Our Studio
          </h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            <p className="text-lg text-gray-700">
              We&apos;re in Irvine&apos;s Sand Canyon plaza, centrally located and easy to reach from anywhere in Orange County. The studio is equipped with Brent pottery wheels, a full glazing station, and kilns on-site. Classes stay small so every student gets real one-on-one time with the instructor.
            </p>
            <p className="text-lg text-gray-700">
              People drive in from Tustin, Lake Forest, Newport Beach, Costa Mesa, and all over the OC. Free parking, a relaxed atmosphere, and instructors who are working artists and love what they do.
            </p>
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
            What Students Are Saying
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'The matcha bowl workshop was such a cool experience. Eric walked us through every step with hands-on guidance. Fun for a first-timer but challenging enough to keep it interesting.',
                name: 'Patricia G.',
                source: 'Yelp',
              },
              {
                text: 'What an amazing gem in Irvine. The studio is charming and cozy. The staff is incredibly helpful and the atmosphere is so welcoming.',
                name: 'Nicole F.',
                source: 'Google',
              },
              {
                text: 'I had such a wonderful time at Christina\'s pottery class! She was super nice, patient, and made the whole experience so enjoyable.',
                name: 'Lauren B.',
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

      {/* Classes Grid */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Our Classes & Workshops
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ClassCard
              title="One-Time Pottery Group Class"
              imgSrc="/one-time-pottery-class-irvine.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)/appointment/84238610/calendar/12365772"
              description="Wheel throwing and hand-building for beginners. Make 2 pieces. All materials included."
            />
            <ClassCard
              title="4-Week Pottery Course"
              imgSrc="/pottery-course-irvine-olomana-studios.jpeg"
              meta="4 sessions"
              href="/classes/4-week-pottery-course-irvine"
              description="Build foundational skills: centering, pulling walls, trimming, and glazing over 4 guided sessions."
            />
            <ClassCard
              title="Traditional Matcha Bowl Workshop"
              imgSrc="/irvine-matcha-bowl-class/matcha-bowl-3-resize.jpg"
              meta="2.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/81608405/calendar/12365772"
              description="Hand-carve a chawan inspired by Japanese pottery traditions and wabi-sabi aesthetics."
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
            Come Make Something
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Book a class and see why people keep coming back.
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
