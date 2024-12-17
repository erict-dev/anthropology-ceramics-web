import Image from 'next/image';

export default function Events() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="leander text-4xl font-bold text-gray-900 sm:text-5xl">Pottery Handbuilding Events</h2>
          <p className="mt-4 text-lg text-gray-600">
            A fun, creative experience for your group, perfect for events like corporate retreats, birthdays, or family gatherings in Irvine, CA or the greater Orange County area.
          </p>
        </div>

        {/* Event Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <p className="text-gray-600">
              Our pottery handbuilding events are designed to bring a creative and hands-on experience right to your space. We come fully prepared, bringing all the materials needed for each participant to craft their own unique pottery piece. Whether you’re looking to make a cup, bowl, vase, plate, or sculpture, our instructors guide everyone step-by-step through the process, ensuring a fun and relaxing experience.
            </p>
            <p className="mt-4 text-gray-600">
              We handle all setup and cleanup, so you can focus on enjoying the event. All we need is a space with tables and chairs. After the class, participants will select their glaze color, and we take care of the firing and glazing process, which takes about 2-3 weeks. Once the pieces are ready, we’ll deliver them back to you, fully finished, food-safe, and ready to use.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              alt="Participants at a pottery class"
              src="/event-1.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h3 className="leander text-4xl font-bold text-gray-900 text-center">How It Works</h3>
          <div className="mt-8 flex flex-col space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="leander w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
              <div>
                <h4 className="leander text-lg font-bold text-gray-900">Book Your Event</h4>
                <p className="mt-2 text-gray-600">
                  Email us at <strong>olomanastudios@gmail.com</strong> to schedule your pottery event. Tell us about your space (does it have tables/chairs) and approximately how many attendees. We will ask for a 30% deposit to reserve the date.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="leander w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">
                  2
                </div>
              </div>
              <div>
                <h4 className="leander text-lg font-bold text-gray-900">Day of Event</h4>
                <p className="mt-2 text-gray-600">
                  We will bring all the tools and materials necessary for the event to your space and arrive 1 hour prior to the event start time to set up. We facilitate the handbuilding event and guide participants in making and decorating their own unique pottery piece. After the event, we help you take a group picture of you and your pieces, then we bring the pieces back to our studio for firing and glazing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="leander w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">
                  3
                </div>
              </div>
              <div>
                <h4 className="leander text-lg font-bold text-gray-900">Glazing & Delivery</h4>
                <p className="mt-2 text-gray-600">
                  We fire and glaze the pottery, and deliver the finished pieces back to you in about 2 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Event Gallery Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Call to Action Section */}
        <div className="text-center">
          <a
            href="mailto:olomanastudios@gmail.com"
            className="inline-block px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-olomana-yellow transition"
          >
            Email us at olomanastudios@gmail.com to book your pottery event
          </a>
        </div>
      </div>
    </section>
  );
}
