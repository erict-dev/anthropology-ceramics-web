import Image from 'next/image';
import ClassCard from '@/components/ClassCard'
import Link from 'next/link';

export default function Classes() {
  return (
    <>
      {/* Pottery Classes Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mb-8">
            <h2 className="leander text-black text-3xl font-bold sm:text-5xl">Irvine Pottery Classes</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Come join us for a pottery class in Irvine! We host group pottery classes in our historic studio in Old Town Irvine. If you have questions about our class or want to book a private class for your family, friend group, or organization, feel free to email us at olomanastudios@gmail.com.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row gap-x-4">
            <a href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Adults)">
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg shadow-gray-700/25">
                <img
                  alt=""
                  src="/adults-group-class/adult-group-class-3.jpg"
                  className="h-64 w-full object-cover"
                />

                <div className="p-4 sm:p-6 bg-gray-900 h-full">
                  <h3 className="mt-0.5 text-lg text-gray-900 text-white">
                    One-Time Pottery Group Class - Adults
                  </h3>

                  <p className="mt-2 text-sm/relaxed text-gray-300">
                    {"Learn and create your own pottery with our pottery group classes for adults in Irvine. Enjoy a beautiful hour throwing and handbuilding your own ceramics. It's a great way to relax, learn something new and create unique, beautiful pieces that you can use at home."}
                  </p>
                  <p className="pt-2 text-white underline">Book class</p>
                </div>
              </article>
            </a>
            <a href="https://olomanastudios.as.me/schedule/66629c2c/category/One-Time%2520Pottery%2520Group%2520Classes%2520(Youths)/appointment/84238798/calendar/12365772">
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg shadow-gray-700/25">
                <img
                  alt=""
                  src="/kids-pottery.jpg"
                  className="h-64 w-full object-cover"
                />

                <div className="p-4 sm:p-6 bg-gray-900 h-full">
                  <h3 className="mt-0.5 text-lg text-gray-900 text-white">Kids Pottery Group Class - Ages 7+</h3>

                  <p className="mt-2 text-sm/relaxed text-gray-300">
                    {"Kids love our pottery group classes in Irvine! The class is all about sparking creativity and joy. We encourage and empower your child to exercise their innate creativity, and your kids will have a blast exploring hand-building pottery and ceramics. Parents can also book this class with their kids, which makes for a wonderful family event."}
                  </p>
                  <p className="pt-2 text-white underline">Book class</p>
                </div>
              </article>
            </a>
          </div>
        </div>
      </section>

      <Image
        alt="Decorative line"
        src="/handdrawn-line.png"
        width={1920}
        height={6}
        className="mt-8 mb-8 w-full h-1.5"
      />

      {/* Workshops Promotional Section */}
      <section className="pb-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-black text-3xl font-bold sm:text-5xl">Pottery Workshops</h2>
          <p className="mt-4 text-gray-600 text-lg w-full">
            Explore our <strong>Pottery Workshops</strong> in Irvine, CA where we teach you the traditional techniques behind making specific pottery pieces like <em>matcha bowls</em>, <em>ikebana vases</em>, and more. These longer, immersive workshops are perfect for those who want to dive deeper into one particular style of pottery and make your own unique pottery piece.
          </p>
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
        </div>
      </section>

      <Image
        alt="Decorative line"
        src="/handdrawn-line.png"
        width={1920}
        height={6}
        className="mt-8 mb-8 w-full h-1.5"
      />

      {/* New 4-Week Wheel Throwing Course Section */}
      <section className="pb-12 bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-black text-3xl font-bold sm:text-5xl">4-Week Wheel Throwing Course</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Join our 4-week wheel throwing course and immerse yourself in the art of pottery! Each session includes one hour of guided instruction, one hour of self-practice, and one open studio seesion per week, giving you the time to develop your skills and create functional ceramics.
          </p>

          {/* Row 1: Level 1–3 (3 cols at lg, 1 col below) */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ClassCard
              title="Level 1"
              imgSrc="/level-1-pottery-irvine-olomana-course.jpg"
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
        </div>
      </section>

      <Image
        alt="Decorative line"
        src="/handdrawn-line.png"
        width={1920}
        height={6}
        className="mt-8 mb-8 w-full h-1.5"
      />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 text-lg">For groups of 8 or more, contact us at <strong>olomanastudios@gmail.com</strong> for a private pottery event booking.</p>
          <p className="text-center text-gray-700 text-lg">Private group prices are the same as our regular group classes. Learn more <Link href="/classes/private-pottery-event-irvine" className="underline">here.</Link></p>
        </div>
      </section>
    </>
  );
}
