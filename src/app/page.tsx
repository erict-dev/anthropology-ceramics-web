import Image from 'next/image';
import Link from 'next/link';
import ClassCard from '@/components/ClassCard'

export default function Home() {
  return (
    <>
      {/* Accessible heading for SEO, visually hidden */}
      <h1 className="sr-only">Olomana Studios</h1>

      {/* One-Time Pottery Classes (Adults),2 cards, stretch to 2 cols at md */}
      <section>
        <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Irvine Pottery Classes</h2>
          <p className="mt-2 text-gray-600">
            Perfect for first-timers and people who want to try pottery, no experience necessary.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassCard
              title="One-Time Pottery Group Class (Adults)"
              imgSrc="/one-time-pottery-class-irvine.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)/appointment/84238610/calendar/12365772"
              description="In this class you will learn how to make 2 unique pieces of pottery, no experience necessary! We will guide you through each step and teach you the basics of both pottery wheel throwing and hand-building. All materials, firing and glazing included."
            />
            <ClassCard
              title="Kids Pottery Classes"
              imgSrc="/kids-pottery-class.jpg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Youths)/appointment/81628903/calendar/12365772"
              description="In our kids pottery classes students will learn pottery basics and make their own pottery through fun instructor guided projects. This class is a great way for kids to exercise their creativity, focus and patience. We have both one-time classes and a 4-week series."
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

      {/* 4-Week Pottery Course */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">4-Week Pottery Course</h2>
          <p className="mt-2 text-gray-600">Build skills week by week. Each session includes guided instruction, practice time and open studio days.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassCard
              title="Intro to Wheel Throwing - 101"
              imgSrc="/pottery-course-irvine-olomana-studios.jpeg"
              meta="4 sessions"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%25204-Week%2520Courses%2520-%2520101%2520Intro%2520to%2520Wheel"
              description="Perfect for beginners and first timers. Learn the foundations of wheel throwing from scratch. You'll practice centering clay, pulling walls, and shaping your own cups, bowls, and vases. No experience needed. Glazing, firing, and all materials included."
            />
            <ClassCard
              title="Continuing Wheel Throwing - 201"
              imgSrc="/intermediate-pottery-class/4-week-pottery-lvl2-olomana-irivne.jpg"
              meta="4 sessions"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%25204-Week%2520Courses%2520-%2520201%2520Continuing%2520Wheel-Throwing"
              description="For returning students ready to go further. Center with more clay, refine your trimming, and shape more intentional forms like matcha bowls, gooseneck vases, and lidded jars. Explore new surface decoration techniques and build consistency with guided practice. Firing included."
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

      {/* Special Workshops,2 cards, stretch to 2 cols at md */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Special Workshops</h2>
          <p className="mt-2 text-gray-600">Longer, focused sessions that dive deeper into technique and tradition.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassCard
              title="Traditional Matcha Bowl Workshop"
              imgSrc="/irvine-matcha-bowl-class/matcha-bowl-3-resize.jpg"
              meta="2.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/81608405/calendar/12365772"
              description="Carve a chawan (matcha bowl) inspired by Japanese forms and wabi-sabi aesthetics. Includes 2.5 lbs of clay, firing and glazing for 1 piece. Pickup in 4–5 weeks."
            />
            <ClassCard
              title="Ikebana Flower Arrangement Workshop"
              imgSrc="/workshops/ike-4.jpeg"
              meta="1.5 hrs"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/86745632/calendar/12365772"
              description="Learn the principles behind ikebana and compose multiple flower arrangements using a kenzan, shears, and different types of ikebana vases in this hands-on workshop."
            />
            <ClassCard
              title="Ceramic Charms Workshop"
              imgSrc="/workshops/charms-workshop.jpg"
              meta="1 hr"
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/89051684/calendar/12365772"
              description="Design and paint 3 custom ceramic charms, from cute figures to pendants. All materials and firing included. Pick up your finished charms in 4 weeks!"
            />
            <ClassCard
              title="5-Week Teapot Making Course"
              imgSrc="/workshops/teapot-workshop/teapot-workshop-4b.jpeg"
              imgPosition="center 60%"
              meta="5 sessions, once a week"
              href="https://olomanastudios.as.me/schedule/66629c2c/?appointmentTypeIds[]=92337408"
              description="Throw and assemble a complete teapot (body, lid, spout, and handle) plus yunomi tea cups. Not a beginner course: students must be able to center and throw basic shapes using 1-2 lbs of clay."
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

      {/* Kids Pottery Summer Camp */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Kids Pottery Summer Camp</h2>
          <p className="mt-2 text-gray-600">A week-long half-day camp where kids ages 6 to 12 learn hand-building, wheel throwing, and glazing.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                <Image
                  alt="Kids working with clay at the pottery table during summer camp at Olomana Studios in Irvine"
                  src="/summer-camp/pottery-summer-camp-2.jpg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4">
                <Link
                  href="/classes/pottery-summer-camp-irvine"
                  className="block w-full text-center rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm uppercase tracking-wide text-gray-500 font-medium">Summer 2026 &middot; Ages 6&ndash;12</p>
              <p className="mt-2 text-gray-700">
                Let your child unplug, get messy, and discover the joy of creating with clay. Over five days, campers learn wheel throwing, hand-building, and glazing. Small groups of 8 with dedicated instructors, all materials included.
              </p>
              <ul className="mt-3 space-y-1 text-base text-gray-700">
                <li className="flex gap-2">
                  <span className="font-semibold text-gray-900">Dates:</span> June 29 &ndash; July 24
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-gray-900">Sessions:</span> 9am&ndash;12pm or 1pm&ndash;4pm
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-gray-900">Price:</span> $348/week, all materials included
                </li>
              </ul>
            </div>
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

      {/* Private Group Events */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Private Group Events</h2>
          <p className="mt-2 text-gray-600">Celebrations, team building, and gatherings for groups of 8 or more.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                <Image
                  alt="Group doing pottery together at a private event at Olomana Studios"
                  src="/private-pottery-event/private-group.jpg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4">
                <Link
                  href="/classes/private-pottery-event-irvine"
                  className="block w-full text-center rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700">
                Host a hands-on pottery experience for your group at our Irvine studio. No experience necessary. Our instructors guide everyone step by step through wheel throwing or handbuilding, and each guest takes home their own piece of pottery.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4 flex gap-3 items-center">
                  <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                    <Image alt="Wheel throwing private event" src="/event-1.jpg" fill className="object-cover" sizes="64px" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">8 &ndash; 16 people</p>
                    <p className="text-sm text-gray-600 mt-1">Wheel &amp; handbuilding class, 1.5 hrs</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">$68/person</p>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 flex gap-3 items-center">
                  <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                    <Image alt="Handbuilding private event" src="/private-pottery-event/handbuilding.jpg" fill className="object-cover" sizes="64px" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">16+ people</p>
                    <p className="text-sm text-gray-600 mt-1">Handbuilding class, 1 hr</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">$58/person</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm">All materials, firing, and glazing included. Finished pieces ready for pickup in 4-5 weeks.</p>
            </div>
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

      {/* About */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-4 mb-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0">
              <Image
                alt="Olomana Studios logo"
                src="/logo.png"
                width={260}
                height={80}
                className="w-32 h-auto"
              />
            </div>

            <p className="text-gray-700 text-lg">
              <span className="leander">Olomana Studios</span> is a pottery and art studio in Irvine, CA founded by artists dedicated to creating a unique space that celebrates the joy of creative expression. Explore our one-time pottery classes, workshops, 4-week pottery courses, kids offerings and private group events at our historic Irvine studio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
