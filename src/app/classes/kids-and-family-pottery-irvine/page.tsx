import Image from 'next/image';

export default function KidsFamilyPotteryClass() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h1 className="leander text-black text-3xl font-bold sm:text-5xl">
            Kids Pottery Class in Irvine
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Bring the kids for this fun and engaging pottery experience. This is a great activity to do in Irvine with kids, let your creativity flow and make usable pottery together!
          </p>
          <a
            href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%2520Group%2520Classes%2520(Youths)"
            className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
          >
            Book a class
          </a>
        </div>
      </section>

      {/* Class Details */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/pottery.JPG"
              alt="Kids enjoying pottery class in Irvine"
              width={600}
              height={400}
              className="object-cover w-full h-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">A Creative & Fun Learning Experience</h2>
            <p className="mt-4 text-gray-700 text-lg">
              Kids love our pottery classes! We encourage children to unleash their creativity while learning basic hand-building and wheel-throwing pottery techniques.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Parents can book this class with their kids, making this a perfect family activity in Irvine! Our sessions are held in our beautiful pottery studio located in Old Town Irvine.
            </p>
            <div className="mt-4">
              <p className="text-lg text-gray-700">
                🏺 Learn to make pottery! Either hand-built or on the pottery wheel.
              </p>
              <p className="text-lg text-gray-700 mt-2">
                🌴 Guidance from patient instructors in a friendly, relaxed atmosphere.
              </p>
              <p className="text-lg text-gray-700 mt-2">
                🎨 No prior experience needed! Just bring your creativity and a willingness to explore!
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Event Gallery Section */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Student Work Gallery</h2>
          <p className="mt-4 text-gray-700 text-lg">Our studio space and what some of our previous students have made in our kids and family pottery class. We have special events around holidays where we make specific themed items.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Finished pottery pieces"
                src="/event-3.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Participants working on pottery"
                src="/event-2.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Pottery pieces after firing"
                src="/event-4.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Important Details</h2>
          <ul className="mt-6 space-y-2 text-lg text-gray-700">
            <li><strong>Location:</strong> Olomana Studios - 14988 Sand Canyon Ave Studio 6, Irvine CA 92618</li>
            <li><strong>Class Duration:</strong> ~1.5 hours.</li>
            <li><strong>What to Bring:</strong> Closed-toed shoes with socks, long pants, and clothes that can get dirty.</li>
            <li><strong>Pottery Pickup:</strong> Pieces will be dried, fired, and ready for pickup in 4-5 weeks. We use all lead-free food-safe glazes for our pottery pieces.</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Pottery%2520Group%2520Classes%2520(Youths)"
              className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book a class
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
