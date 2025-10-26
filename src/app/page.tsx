import Image from 'next/image';
import Link from 'next/link';
import ClassCard from '@/components/ClassCard'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            {/* Accessible heading for SEO, visually hidden */}
            <h1 className="sr-only">Olomana Studios</h1>

            {/* Centered logo */}
            <div className="flex justify-center">
              <Image
                alt="Olomana Studios logo"
                src="/logo.png"
                width={260}
                height={80}
                priority
                className="w-40 sm:w-52 md:w-64 h-auto"
              />
            </div>

            <p className="mt-4 text-center text-gray-700 text-lg">
              <span className="leander">Olomana Studios</span> is a pottery and art studio in Irvine, CA founded by artists dedicated to creating a unique space that celebrates the joy of creative expression. Explore our one-time pottery classes, workshops, 4-week pottery courses, kids offerings and private group events at our historic Irvine studio.
            </p>
          </div>
          {/* Divider */}
          <Image
            alt="Decorative line"
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-8 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* One-Time Pottery Classes (Adults) — 2 cards, stretch to 2 cols at md */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Irvine Pottery Classes</h2>
          <p className="mt-2 text-gray-600">
            Perfect for first-timers and people who want to try pottery, no experience necessary.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassCard
              title="One-Time Pottery Group Class (Adults)"
              imgSrc="/one-time-pottery-class-irvine.jpg"
              price="$68 / person"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)/appointment/84238610/calendar/12365772"
              description="In this class you will learn how to make 2 unique pieces of pottery, no experience necessary! We will guide you through each step and teach you the basics of both pottery wheel throwing and hand-building. All materials, firing and glazing included."
            />
            <ClassCard
              title="Kids Pottery Series (Ages 7+)"
              imgSrc="/kids-pottery-class.jpg"
              price="$50 / session"
              meta="4 sessions"
              href="https://olomanastudios.as.me/schedule/66629c2c?appointmentTypeIds%5B%5D=84238798"
              description="Students will learn pottery handbuilding basics and make unique pottery pieces! Your kids will love getting messy and creative, plus it's a great chance for them to exercise their focus and patience! Class runs for 4 weeks and includes clay and firing for all pieces made during the series."
            />
          </div>

          {/* Divider */}
          <Image
            alt="Decorative line"
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-8 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* Special Workshops — 2 cards, stretch to 2 cols at md */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Special Workshops</h2>
          <p className="mt-2 text-gray-600">Longer, focused sessions that dive deeper into technique and tradition.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassCard
              title="Traditional Matcha Bowl Workshop"
              imgSrc="/irvine-matcha-bowl-class/matcha-bowl-3-resize.jpg"
              price="$85 / person"
              meta="2.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/81608405/calendar/12365772"
              description="Carve a chawan (matcha bowl) inspired by Japanese forms and wabi-sabi aesthetics. Includes 2.5 lbs of clay, firing and glazing for 1 piece. Pickup in 4–5 weeks."
            />
            <ClassCard
              title="Ikebana Flower Arrangement Workshop"
              imgSrc="/workshops/ike-4.jpeg"
              price="$64 / person"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/82663099/calendar/12365772"
              description="Learn the principles behind ikebana and compose multiple flower arrangements using a kenzan, shears, and different types of ikebana vases in this hands-on workshop."
            />
          </div>

          {/* Divider */}
          <Image
            alt="Decorative line"
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-8 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* 4-Week Pottery Course — Row 1: Levels 1–3; Row 2: two advanced */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">4-Week Pottery Course</h2>
          <p className="mt-2 text-gray-600">Build skills week by week. Each session includes guided instruction, practice time and open studio days.</p>

          {/* Row 1: Level 1–3 (3 cols at lg, 1 col below) */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ClassCard
              title="Level 1"
              imgSrc="/pottery-course-irvine-olomana-studios.jpeg"
              price="$285"
              meta="4 sessions"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%25204-Week%2520Courses%2520-%2520Level%25201?categories%5B%5D=Pottery+Courses+-+Level+1"
              description="Foundations: wedging clay, centering, pulling even walls, and forming cylinders, cups, vases and bowls. Learn how to apply glaze. Firing included for work made during the course."
            />
            <ClassCard
              title="Level 2"
              imgSrc="/level-2-pottery-irvine-olomana.jpg"
              price="$285"
              meta="4 sessions"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%25204-Week%2520Courses%2520-%2520Level%25202/appointment/84417491/calendar/12365772?categories%5B%5D=Pottery+Courses+-+Level+1"
              description="Refine control and consistency, explore curves, shapes and handles. Learn to control clay moisture and trim foot rings. Firing included for work made during the course."
            />
            <ClassCard
              title="Level 3"
              imgSrc="/level-3-pottery-irvine-olomana.jpg"
              price="$285"
              meta="4 sessions"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%25204-Week%2520Courses%2520-%2520Level%25203?categories%5B%5D=Pottery+Courses+-+Level+1"
              description="Create jars with matching lids, throw multiple pieces off the hump and marble different clays together for unique colors. Firing included for work made during the course."
            />
          </div>

          {/* Divider */}
          <Image
            alt="Decorative line"
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-8 mb-8 w-full h-1.5"
          />
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 text-lg">For groups of 8 or more, contact us at <strong>olomanastudios@gmail.com</strong> for a private pottery event booking.</p>
          <p className="text-center text-gray-700 text-lg">Private group prices are the same as our regular group classes. Learn more <Link href="/classes/private-pottery-event-irvine" className="underline">here.</Link></p>
        </div>
      </section>
    </>
  );
}
