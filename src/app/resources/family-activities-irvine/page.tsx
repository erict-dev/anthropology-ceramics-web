import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ClassCard from '@/components/ClassCard';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Family Activities in Irvine | Kids & Family Pottery Classes | Olomana Studios',
  description:
    'Looking for family activities in Irvine? Olomana Studios offers pottery classes for kids and families. Create together, no experience needed.',
  alternates: {
    canonical: 'https://olomanastudios.com/resources/family-activities-irvine',
  },
  openGraph: {
    title: 'Family Activities in Irvine | Kids & Family Pottery',
    description:
      'Pottery classes for families in Irvine. Kids and adults create side by side in a screen-free activity everyone actually enjoys.',
    url: 'https://olomanastudios.com/resources/family-activities-irvine',
    images: [{ url: '/resources/kids-pottery.jpg', width: 1200, height: 900, alt: 'Kids working on pottery projects at Olomana Studios' }],
  },
};

const faqs = [
  {
    question: 'What ages are your kids pottery classes for?',
    answer:
      'Our kids classes are designed for children ages 6 and up. Younger children are welcome to join our family-friendly group classes with a parent or guardian.',
  },
  {
    question: 'Can parents participate too?',
    answer:
      'Absolutely. Our one-time group classes welcome both adults and kids. A lot of families book together so everyone gets to make their own pottery.',
  },
  {
    question: 'What will my child make?',
    answer:
      'In our kids classes, students work on fun instructor-guided projects using hand-building techniques. They might make animal figurines, pinch pots, small bowls, or other creative pieces. All materials, firing, and glazing are included.',
  },
  {
    question: 'Do kids need any experience?',
    answer:
      'None at all. Our instructors guide every step. Kids pick up patience, focus, and new skills in a relaxed, encouraging environment.',
  },
];

export default function FamilyActivitiesIrvine() {
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
                Family Activities in Irvine
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Looking for something the whole family can do together that doesn&apos;t involve a screen? At <span className="leander">Olomana Studios</span>, kids and parents work side by side shaping clay, getting creative, and making pottery they&apos;ll actually keep. Our classes are instructor-guided and designed so everyone has fun, no experience needed.
              </p>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
              >
                Browse Family Classes →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Kids working on pottery projects at a table at Olomana Studios"
                src="/info/kids-pottery.jpg"
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

      {/* Why Pottery for Families */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Why Families Love Pottery
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Pottery is one of those rare activities where a 7-year-old and a 40-year-old are on equal footing. Nobody has an advantage. Everyone&apos;s learning, experimenting, and getting a little messy, and that levels the playing field in a way that makes the experience feel shared.
              </p>
              <p className="text-lg text-gray-700">
                Kids build focus, patience, and fine motor skills without even realizing it. And parents get to watch their children light up when they see the bowl or figurine they shaped with their own hands. Weeks later, you pick up real, glazed pottery that becomes part of your daily life at home.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-square">
                <Image
                  alt="Adorable clay animal figurines made by kids"
                  src="/info/cute-pottery.jpg"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative w-full aspect-square">
                <Image
                  alt="Close-up of a cute clay cat figurine"
                  src="/info/cute-pottery-2.jpg"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
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
          <div className="mt-6 space-y-4">
            <p className="text-lg text-gray-700 max-w-3xl">
              Our kids classes are 1.5 hours of guided instruction. Students learn pottery basics through fun projects: animal figurines, small bowls, creative sculptures. Instructors keep things moving and encourage kids to experiment. All materials are provided, and finished pieces are fired and glazed by our team.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl">
              For families who want to create together, our adult group classes welcome participants of all ages. Parents and older kids can try the pottery wheel while younger kids work on hand-building projects at the table. It&apos;s a relaxed, no-pressure environment where the goal is just having fun together.
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
            What Families Are Saying
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'I had such a wonderful time at Christina\'s pottery class! She was super nice, patient, and made the whole experience so enjoyable.',
                name: 'Jennifer W.',
                source: 'Google',
              },
              {
                text: 'What an amazing gem in Irvine. The studio is charming and cozy. The staff is incredibly helpful and the atmosphere is so welcoming.',
                name: 'David P.',
                source: 'Yelp',
              },
              {
                text: 'Eric was a great instructor who provided hands-on guidance for each person\'s piece throughout the class.',
                name: 'Lisa H.',
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
            Family-Friendly Classes
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassCard
              title="Kids Pottery Classes"
              imgSrc="/kids-pottery-class.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Youths)/appointment/81628903/calendar/12365772"
              description="Instructor-guided projects for kids ages 6+. Students learn pottery basics through fun, creative projects. All materials, firing, and glazing included."
            />
            <ClassCard
              title="One-Time Pottery Group Class (Adults)"
              imgSrc="/one-time-pottery-class-irvine.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)/appointment/84238610/calendar/12365772"
              description="Parents and older kids can join our adult group class to try wheel throwing and hand-building together. No experience needed, make 2 pieces each."
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
            Make Something Together
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Book a pottery class and give your family something to create (and keep) together.
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
