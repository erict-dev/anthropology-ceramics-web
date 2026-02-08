import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ClassCard from '@/components/ClassCard';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Things to Do in Irvine | Pottery Classes & Workshops | Olomana Studios',
  description:
    'Looking for things to do in Irvine? Try a pottery class at Olomana Studios. Learn to throw on the wheel, make something you keep, no experience needed.',
  alternates: {
    canonical: 'https://olomanastudios.com/resources/things-to-do-in-irvine',
  },
  openGraph: {
    title: 'Things to Do in Irvine | Pottery Classes & Workshops',
    description:
      'One of the most unique activities in Irvine. Learn pottery at Olomana Studios with small classes, great instructors, and you keep what you make.',
    url: 'https://olomanastudios.com/resources/things-to-do-in-irvine',
    images: [{ url: '/resources/pottery-on-the-wheel.jpg', width: 1200, height: 900, alt: 'Student throwing pottery on the wheel at Olomana Studios in Irvine' }],
  },
};

const faqs = [
  {
    question: 'Do I need any experience to take a pottery class?',
    answer:
      'Nope. Our classes are designed for complete beginners. Your instructor walks you through every step, from centering clay on the wheel to shaping your piece by hand.',
  },
  {
    question: 'Where is Olomana Studios located?',
    answer:
      'We\'re at 14988 Sand Canyon Ave Studio 6, Irvine CA 92618. The studio is in the Sand Canyon plaza with free parking.',
  },
  {
    question: 'What types of classes do you offer?',
    answer:
      'One-time pottery group classes (1.5 hours), 4-week pottery courses for building skills over time, specialty workshops like our matcha bowl and ikebana classes, kids classes, and private group events for 8 to 30 people.',
  },
  {
    question: 'How much do classes cost?',
    answer:
      'Our one-time group classes include all materials, instruction, firing, and glazing. You take home finished, food-safe pottery in about 4 to 5 weeks. Check the booking page for current pricing.',
  },
];

export default function ThingsToDoIrvine() {
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
                Things to Do in Irvine
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Irvine has great parks and plenty of restaurants, but when you want to actually make something with your hands, learn a new skill, and walk away with a real keepsake, a pottery class at <span className="leander">Olomana Studios</span> is hard to beat. Our classes are beginner-friendly and run in small groups, so you get real instruction and leave with pieces you&apos;re proud of.
              </p>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
              >
                Browse Classes →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Student in Olomana Studios apron throwing pottery on the wheel"
                src="/info/pottery-on-the-wheel.jpg"
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
            A Creative Activity in the Heart of Irvine
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Pottery sounds intimidating until you try it. Within minutes of sitting at the wheel, you&apos;re focused, hands covered in clay, completely absorbed in shaping something from nothing. It&apos;s meditative and satisfying in a way that surprises most people.
              </p>
              <p className="text-lg text-gray-700">
                Our studio is in the Sand Canyon plaza, a cozy space with small class sizes and instructors who love what they do. Come alone, with a friend, or with a group. You&apos;ll leave with handmade pottery and a story worth telling.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Multiple students throwing on Brent wheels at Olomana Studios"
                src="/info/group-class-pottery.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            <p className="text-lg text-gray-700">
              We have something for every interest and schedule. Our <strong>one-time group classes</strong> are the most popular: 1.5 hours of wheel throwing and hand-building where you make 2 pieces. If you want to go deeper, our <strong>4-week pottery courses</strong> build real technique over multiple sessions. And for something more focused, try one of our <strong>specialty workshops</strong> like the traditional matcha bowl or ikebana flower arrangement.
            </p>
            <p className="text-lg text-gray-700">
              We also offer <strong>kids classes</strong>, <strong>private group events</strong> for birthdays and corporate outings, and <strong>open studio time</strong> for members who want to practice on their own. All materials, firing, and glazing are included in every class.
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
            What People Are Saying
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'What an amazing gem in Irvine. The studio is charming and cozy. The staff is incredibly helpful and the atmosphere is so welcoming.',
                name: 'Kevin S.',
                source: 'Google',
              },
              {
                text: 'The matcha bowl workshop was such a cool experience. Eric walked us through every step with hands-on guidance. Fun for a first-timer but challenging enough to keep it interesting.',
                name: 'Maya L.',
                source: 'Yelp',
              },
              {
                text: 'Had a great time making pottery with my friends here. The studio is clean, well-organized, and has a really welcoming atmosphere.',
                name: 'Brandon K.',
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
            Popular Classes
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ClassCard
              title="One-Time Pottery Group Class"
              imgSrc="/one-time-pottery-class-irvine.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)/appointment/84238610/calendar/12365772"
              description="The best starting point. Learn wheel throwing and hand-building, make 2 pieces. No experience needed."
            />
            <ClassCard
              title="Traditional Matcha Bowl Workshop"
              imgSrc="/irvine-matcha-bowl-class/matcha-bowl-3-resize.jpg"
              meta="2.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/81608405/calendar/12365772"
              description="A deeper dive. Carve a traditional Japanese matcha bowl by hand using wabi-sabi aesthetics."
            />
            <ClassCard
              title="4-Week Pottery Course"
              imgSrc="/pottery-course-irvine-olomana-studios.jpeg"
              meta="4 sessions"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%25204-Week%2520Courses%2520-%2520Level%25201%2520(Beginner)"
              description="Build real skills over time. Learn centering, pulling walls, trimming, and glazing across 4 guided sessions."
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
            Try Something New This Weekend
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Book a class and make something you&apos;ll keep.
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
