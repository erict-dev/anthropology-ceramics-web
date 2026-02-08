import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ClassCard from '@/components/ClassCard';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Beginner Pottery Guide | What to Expect at Your First Class | Olomana Studios',
  description:
    'New to pottery? Here is everything you need to know before your first class — what to wear, what you will learn, and what to expect at Olomana Studios.',
  alternates: {
    canonical: 'https://olomanastudios.com/resources/beginner-pottery-guide',
  },
  openGraph: {
    title: 'Beginner Pottery Guide | Your First Pottery Class',
    description:
      'Everything you need to know before your first pottery class. What to wear, what you will make, and why you will love it.',
    url: 'https://olomanastudios.com/resources/beginner-pottery-guide',
    images: [{ url: '/resources/pottery-closeup.jpg', width: 1200, height: 900, alt: 'Hands shaping clay on a pottery wheel' }],
  },
};

const faqs = [
  {
    question: 'What should I wear to a pottery class?',
    answer:
      'Comfortable clothes you don\'t mind getting a little dirty. Clay washes out of most fabrics, but dark or casual clothing is a safe bet. Avoid loose sleeves that could drag through the clay. We provide aprons, so you\'ll have some protection.',
  },
  {
    question: 'Will I actually make something I can keep?',
    answer:
      'Yes. In our one-time group class, you\'ll make 2 pieces, one on the wheel and one by hand. We fire and glaze them for you, and they\'re ready for pickup in about 4 to 5 weeks. They\'re food-safe and meant to be used.',
  },
  {
    question: 'What if I\'m bad at it?',
    answer:
      'Everyone\'s bad at pottery the first time. That\'s part of the fun. Clay is forgiving: if your piece collapses, you wedge it back up and start again. Our instructors are there to help you every step of the way, and we promise you\'ll walk out with pieces you\'re proud of.',
  },
  {
    question: 'What is the difference between wheel throwing and handbuilding?',
    answer:
      'Wheel throwing uses a spinning pottery wheel to shape symmetrical forms like bowls, cups, and vases. Handbuilding uses techniques like pinching, coiling, and slab-building to create forms by hand. Think sculptural pieces, plates, and decorative objects. Our beginner class covers both so you get to try each technique.',
  },
];

export default function BeginnerPotteryGuide() {
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
                Beginner Pottery Guide
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Thinking about trying pottery but not sure what to expect? This guide covers everything you need to know before your first class, from what to wear to what you&apos;ll actually make. It&apos;s easier, messier, and more fun than you think.
              </p>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
              >
                Book Your First Class →
              </a>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Hands shaping clay on a pottery wheel"
                src="/info/pottery-closeup.jpg"
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

      {/* What Happens in a Beginner Class */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What Happens in a Beginner Class
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                You arrive, grab an apron, and sit down at a pottery wheel or hand-building station. Your instructor starts with a quick demo showing you how to center clay, shape a form, and use basic tools. Then you try it yourself, with the instructor right there to help.
              </p>
              <p className="text-lg text-gray-700">
                In our 1.5-hour group class, you&apos;ll spend about half the time on the wheel and half hand-building. On the wheel, you&apos;ll learn to center clay and pull up a simple form: a cup, bowl, or small vase. At the hand-building station, you might make a pinch pot, a textured plate, or something more sculptural. By the end, you&apos;ll have 2 finished pieces.
              </p>
              <p className="text-lg text-gray-700">
                The atmosphere is relaxed and social. You&apos;ll be in a small group, everyone at a different level of chaos with their clay, and the instructor keeps things light. Less art school, more fun evening out with friends.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                alt="Close-up of hands pulling a handle on a pottery piece"
                src="/info/pottery-closeup-2.jpg"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Know Before You Go */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What to Know Before You Go
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'What to Wear',
                text: 'Comfortable clothes you don\'t mind getting clay on. Avoid loose sleeves. We provide aprons.',
              },
              {
                title: 'What to Bring',
                text: 'Nothing. We provide all clay, tools, and materials. Just bring yourself.',
              },
              {
                title: 'How Long',
                text: 'Our one-time group class is 1.5 hours. Arrive a few minutes early so you\'re settled when class begins.',
              },
              {
                title: 'After Class',
                text: 'We fire and glaze your pieces. Pick them up in 4 to 5 weeks. They\'re food-safe and ready to use at home.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
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

      {/* Wheel Throwing vs Handbuilding */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Wheel Throwing vs. Handbuilding
          </h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            <p className="text-lg text-gray-700">
              <strong>Wheel throwing</strong> is what most people picture when they think of pottery: a spinning wheel, wet clay, and your hands shaping a symmetrical form. It&apos;s meditative and satisfying, though it takes practice to get the hang of centering. In your first class, expect some wobble. That&apos;s completely normal and part of the learning.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Handbuilding</strong> is more intuitive. You shape clay using your hands and simple tools: pinching, coiling, pressing into molds, or rolling out slabs. It&apos;s great for more organic, sculptural forms and tends to feel more immediately accessible to beginners.
            </p>
            <p className="text-lg text-gray-700">
              Our beginner class includes both so you can experience each technique and discover which one you connect with. Many people end up loving whichever one they expected to like less.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            What First-Timers Are Saying
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'The matcha bowl workshop was such a cool experience. Eric walked us through every step with hands-on guidance. Fun for a first-timer but challenging enough to keep it interesting.',
                name: 'Christine N.',
                source: 'Yelp',
              },
              {
                text: 'My husband surprised me with a couples pottery class for our anniversary. Neither of us had done pottery before and we were so pleasantly surprised. Such a fun, creative experience together.',
                name: 'Samantha D.',
                source: 'Google',
              },
              {
                text: 'I had such a wonderful time at Christina\'s pottery class! She was super nice, patient, and made the whole experience so enjoyable.',
                name: 'Olivia M.',
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
            className="mt-10 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* Beginner-Friendly Classes */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-3xl sm:text-4xl font-bold text-gray-900">
            Beginner-Friendly Classes
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ClassCard
              title="One-Time Pottery Group Class"
              imgSrc="/one-time-pottery-class-irvine.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)/appointment/84238610/calendar/12365772"
              description="The best starting point. Try wheel throwing and hand-building in one session. Make 2 pieces, no experience needed."
            />
            <ClassCard
              title="Traditional Matcha Bowl Workshop"
              imgSrc="/irvine-matcha-bowl-class/matcha-bowl-3-resize.jpg"
              meta="2.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/81608405/calendar/12365772"
              description="A deeper hand-building experience. Carve a matcha bowl inspired by Japanese pottery traditions. Great for beginners who want more time with clay."
            />
            <ClassCard
              title="4-Week Pottery Course (Level 1)"
              imgSrc="/pottery-course-irvine-olomana-studios.jpeg"
              meta="4 sessions"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%25204-Week%2520Courses%2520-%2520Level%25201%2520(Beginner)"
              description="Learn pottery fundamentals over 4 sessions. Perfect if you want to build real skills and practice between classes."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
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
            Ready to Try Pottery?
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Your first class is waiting. No experience needed, just curiosity and a pair of hands you don&apos;t mind getting messy.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Your First Class
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
