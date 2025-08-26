import Image from 'next/image';

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
            <a href="https://olomanastudios.as.me/schedule/66629c2c/appointment/80268514/calendar/12365772">
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg shadow-gray-700/25">
                <img
                  alt=""
                  src="/adults-group-class/adult-group-class-3.jpg"
                  className="h-64 w-full object-cover"
                />

                <div className="p-4 sm:p-6 bg-gray-900 h-full">
                  <h3 className="mt-0.5 text-lg text-gray-900 text-white">
                    Pottery Group Class - Adults
                  </h3>

                  <p className="mt-2 text-sm/relaxed text-gray-300">
                    {"Learn and create your own pottery with our pottery group classes for adults in Irvine. Enjoy a beautiful hour throwing and handbuilding your own ceramics. It's a great way to relax, learn something new and create unique, beautiful pieces that you can use at home."}
                  </p>
                  <p className="pt-2 text-white underline">Book class</p>
                </div>
              </article>
            </a>
            <a href="https://olomanastudios.as.me/schedule/66629c2c/appointment/81628903/calendar/12365772">
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg shadow-gray-700/25">
                <img
                  alt=""
                  src="/kids-pottery.jpg"
                  className="h-64 w-full object-cover"
                />

                <div className="p-4 sm:p-6 bg-gray-900 h-full">
                  <h3 className="mt-0.5 text-lg text-gray-900 text-white">Kids and Families Pottery Class</h3>

                  <p className="mt-2 text-sm/relaxed text-gray-300">
                    {"Kids love our pottery group classes in Irvine! The class is all about sparking creativity and joy. We encourage and empower your child to exercise their innate creativity, and your kids will have a blast exploring hand-building pottery and ceramics. Parents also welcome to attend this class with their kids and makes for a wonderful family event."}
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
          <div className="h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/irvine-matcha-bowl-class/matcha-bowl-7.jpg`}
                alt={`Handmade matcha bowl in progress`}
                width={400}
                height={600}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/library/matcha-bowls/matcha-workshop-2.jpg`}
                alt={`Completed chawan matcha bowl`}
                width={400}
                height={600}
                className="hidden sm:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/library/ikebana/ikebana-main.jpg`}
                alt={`Participants shaping their matcha bowls`}
                width={400}
                height={600}
                className="hidden md:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
          </div>
          <a
            href="/workshops"
            className="inline-block mt-6 rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
          >
            View Workshops
          </a>
        </div>
      </section>

      <Image
        alt="Decorative line"
        src="/handdrawn-line.png"
        width={1920}
        height={6}
        className="mt-8 mb-8 w-full h-1.5"
      />

      {/* New 6-Week Wheel Throwing Course Section */}
      <section className="pb-12 bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-black text-3xl font-bold sm:text-5xl">6-Week Wheel Throwing Course</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Join our 6-week wheel throwing course and immerse yourself in the art of pottery! Each session includes one hour of guided instruction and one hour of self-practice, giving you the time to develop your skills and create functional ceramics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/pottery-course.jpg"
                alt="pottery course"
                width={600}
                height={400}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-900">{"What You'll Learn:"}</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>✅ Centering and shaping clay</li>
                <li>✅ Pulling walls and forming pottery pieces</li>
                <li>✅ Trimming, handles, and surface decoration</li>
                <li>✅ Glazing and final firing process</li>
              </ul>
              <a
                href="https://olomanastudios.as.me/schedule/66629c2c/?categories[]=Upcoming%20Courses"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
