import Image from 'next/image';
import ClassCard from '@/components/ClassCard'

export default function PotteryCourse() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h1 className="leander text-black text-center text-3xl font-bold sm:text-5xl">
            4-Week Pottery Course in Irvine
          </h1>
          <p className="mt-4 text-gray-700 text-center text-lg">
            Unlock the art of pottery wheel throwing in this immersive 4-week pottery course in Irvine. Whether you're a complete beginner or a returning student looking to refine your skills, our 101 and 201 courses offer structured lessons and dedicated practice time each week.
          </p>
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
        </div>
      </section>

      {/* Course Details */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/throwing-pic.jpg"
              alt="Pottery class in Irvine"
              width={600}
              height={400}
              className="object-cover w-full h-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">{"What You'll Learn"}</h2>
            <p className="mt-4 text-gray-700 text-lg">
              This course is perfect for those who want to learn pottery without the commitment of a year-long program. We bridge the gap between a casual one-time class and a formal pottery education, providing structured lessons and dedicated practice time each week.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Students will develop a strong foundation in wheel throwing, refining their skills in centering clay, pulling walls, shaping forms, and creating functional pieces. Techniques will include trimming, adding handles, surface decoration, and experimenting with various shapes and forms. The course also covers essential glazing fundamentals, finishing techniques, and the firing process. With a balance of guided instruction and self-practice, students will gain confidence, consistency, and a deeper understanding of the ceramic arts.
            </p>
            <p className="mt-4 text-lg text-gray-700">{"With small class sizes and expert guidance, you'll refine your skills, gain confidence on the wheel, and build a collection of handmade pottery to take home. Whether you're frustrated by one-off classes that don't offer enough time to develop your technique or looking for a creative progressive class, this course is designed to give you the in-depth learning experience you need."}</p>
          </div>
        </div>
      </section>

      {/* Course Schedule */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Course Schedule</h2>
          <p className="mt-4 text-lg text-gray-700">
            Classes run weekly for 4 weeks and are held in our studio in Irvine. Each session includes two hours of guided instruction and open studio time to practice your skills. Spots are limited and often fill up.
          </p>
          <div className="relative h-64 mt-4 mb-4">
            <Image
              alt="olomana studios irvine pottery studio"
              src="/olomana-irvine-pottery-studio/olomana-studios-irvine-pottery-studio.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 rounded-lg"
            />
          </div>
          <p className="mt-4 text-lg text-gray-700">
            We release signups for the next 4-week cycle a few weeks beforehand.
          </p>
          <div className="mt-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c"
              className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Browse our schedule and enroll online
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
