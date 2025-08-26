import Image from 'next/image';

export default function PotteryCourse() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h1 className="leander text-black text-3xl font-bold sm:text-5xl">
            6-Week Pottery Course in Irvine
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Unlock the art of pottery wheel throwing in this immersive 6-week pottery course in Irvine, designed for beginning students eager to improve their skills in a sequential course. No experience necessary—just a passion to learn and create.
          </p>
          <a
            href="https://olomanastudios.as.me/schedule/66629c2c/?categories[]=Upcoming%20Courses"
            className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
          >
            Enroll Now
          </a>
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
              This course is perfect for those who have taken an introductory pottery class and want to dive deeper without the commitment of a year-long program. We bridge the gap between a casual one-time class and a formal pottery education, providing structured lessons and dedicated practice time each week.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Students will develop a strong foundation in wheel throwing, refining their skills in centering clay, pulling walls, shaping forms, and creating functional pieces. Techniques will include trimming, adding handles, surface decoration, and experimenting with various shapes and forms. The course also covers essential glazing fundamentals, finishing techniques, and the firing process. With a balance of guided instruction and self-practice, students will gain confidence, consistency, and a deeper understanding of the ceramic arts.
            </p>
            <p className="mt-4 text-lg text-gray-700">{"With small class sizes (limited to just 4 students per cycle) and expert guidance, you'll refine your skills, gain confidence on the wheel, and build a collection of handmade pottery to take home. Whether you're frustrated by one-off classes that don't offer enough time to develop your technique or looking for a creative escape, this course is designed to give you the in-depth learning experience you need."}</p>
          </div>
        </div>
      </section>

      {/* Course Schedule */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Course Schedule</h2>
          <p className="mt-4 text-lg text-gray-700">
            Classes run weekly for 6 weeks and are held in our studio in Irvine. Each session includes one hour of guided instruction and one hour of self-practice to deepen your learning and creativity. Spots are limited to 4 students per cycle.
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
          <ul className="mt-6 space-y-2 text-lg text-gray-700">
            <li><strong>Week 1:</strong> Introduction to the wheel – wedging, centering, and basic forms</li>
            <li><strong>Week 2:</strong> Pulling walls and shaping cylinders</li>
            <li><strong>Week 3:</strong> Trimming and surface decoration techniques</li>
            <li><strong>Week 4:</strong> Refining shapes and introducing handles</li>
            <li><strong>Week 5:</strong> Glazing fundamentals and creative finishes</li>
            <li><strong>Week 6:</strong> Final touches and preparing for a kiln firing</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700">
            We release signups for the next 6-week cycle about one month beforehand.
          </p>
          <div className="mt-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/?categories[]=Upcoming%20Courses"
              className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              View our schedule and enroll online
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
