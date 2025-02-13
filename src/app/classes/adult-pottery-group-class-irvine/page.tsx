import Image from 'next/image';

export default function AdultPotteryClass() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h1 className="leander text-black text-3xl font-bold sm:text-5xl">
            Pottery Group Class for Adults in Irvine
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Discover the joy of pottery in a relaxed and creative setting. Learn hand-building and wheel-throwing techniques in our beautiful backyard garden studio.
          </p>
          <a
            href="https://olomanaceramics.classly.com/classes/pottery-group-class-adults/906bcd33-2b1c-47eb-afbb-f880815feaff"
            className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
          >
            Book a Class
          </a>
        </div>
      </section>

      {/* Class Details */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/adults-group-class/4.jpg"
              alt="Adults enjoying pottery class in Irvine"
              width={600}
              height={400}
              className="object-cover w-full h-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">A Relaxing & Rewarding Experience</h2>
          <p className="mt-4 text-lg text-gray-700">{"Pottery is more than just an art form, it is a meditative and grounding experience. In today’s fast-paced world, making something with your hands is a refreshing escape from screens and mass-produced goods. Enjoy the beauty of working with clay and create something truly unique that you can use every day."}</p>
            <p className="mt-4 text-gray-700 text-lg">
              Join our pottery class designed for adults who want to explore their creativity and experience the joys of working with clay. Whether you are a complete beginner or looking for a new creative outlet, this class is for you.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              In this 1.5-hour session, you will create two pottery pieces: a hand-built bowl and a wheel-thrown cup. Our expert instructors will guide you through the process step by step, ensuring you have a fun and rewarding experience.
            </p>
            <div className="mt-4">
              <p className="text-lg text-gray-700">
                🏺 Learn to make a hand-built bowl and a wheel-thrown cup.
              </p>
              <p className="text-lg text-gray-700 mt-2">
                🌴 Enjoy a hands-on creative experience in a beautiful outdoor studio.
              </p>
              <p className="text-lg text-gray-700 mt-2">
                🎨 No prior experience needed, just come ready to get your hands dirty and have fun!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Student Work Gallery</h2>
          <p className="mt-4 text-gray-700 text-lg">See our studio space and the pottery pieces our students have created. Each piece is unique, reflecting the creativity and personality of its maker.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Finished pottery pieces"
                src="/adults-group-class/1.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Participants working on pottery"
                src="/adults-group-class/2.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Pottery pieces after firing"
                src="/adults-group-class/3.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </div>
        <div className="relative h-64 mt-4">
          <Image
            alt="home studio"
            src="/home-studio-4-compressed.JPG"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Important Details</h2>
          <ul className="mt-6 space-y-2 text-lg text-gray-700">
            <li><strong>Location:</strong> Our home studio in Irvine (Exact address provided upon registration).</li>
            <li><strong>Class Duration:</strong> 1.5 hours.</li>
            <li><strong>What to Bring:</strong> Closed-toed shoes with socks, long pants, and clothes that can get dirty.</li>
            <li><strong>Pottery Pickup:</strong> Pieces will be dried, fired, and ready for pickup in 3-4 weeks. We use all lead-free, food-safe glazes.</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="https://olomanaceramics.classly.com/classes/pottery-group-class-adults/906bcd33-2b1c-47eb-afbb-f880815feaff"
              className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Your Class Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
