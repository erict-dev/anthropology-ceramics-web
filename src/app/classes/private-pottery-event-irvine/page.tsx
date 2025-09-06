import Image from 'next/image';

export default function Events() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="leander text-4xl font-bold text-gray-900 sm:text-5xl">Private Pottery Events</h2>
          <p className="mt-4 text-lg text-gray-600">
            A hands-on, pottery making class for birthdays, team building, and family gatherings, right here in Irvine.
            No experience needed; we guide everyone step by step and each participant gets to make 2 handmade pottery pieces!
          </p>
        </div>
        <div className="relative h-96 mt-4 mb-4">
          <Image
            alt="group doing pottery in irvine"
            src="/private-pottery-event/private-group.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>

        {/* Quick Facts / At a Glance */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-300 p-6">
              <h3 className="leander text-xl font-semibold text-gray-900">Group Size</h3>
              <p className="mt-2 text-gray-600">
                Private classes/events available for <strong>6 or more guests</strong>. We can host our regular one-time pottery class for up to <strong>30 people</strong>.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-300 p-6">
              <h3 className="leander text-xl font-semibold text-gray-900">Easy Booking</h3>
              <p className="mt-2 text-gray-600">
                <strong>No deposit required.</strong> Pricing per person is the same as our regular group class. We will create a private class book link for your event.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-300 p-6">
              <h3 className="leander text-xl font-semibold text-gray-900">Flexible Times</h3>
              <p className="mt-2 text-gray-600">
                We’ll work with you to find a <strong>custom date & time</strong>, it doesn’t have to be one of our regular slots.
              </p>
            </div>
          </div>
        </div>

        {/* Event Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <p className="text-gray-700">
              Bring your group together for a relaxing, creative pottery session in our cozy Old Town Irvine studio.
              Guests learn how to make 2 pottery pieces, one on the wheel and one hand-built, with our guidance. Great for first-timers and seasoned makers alike.
            </p>
            <p className="mt-4 text-gray-700">
              After your event, we <strong>dry, fire, and glaze</strong> your pieces. They’ll be ready for pickup in about
              <strong> 4 weeks</strong>, finished with lead-free, food-safe glaze, ready for use!
            </p>
            <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h4 className="leander text-lg font-semibold text-gray-900">Looking for something specific?</h4>
              <p className="mt-2 text-gray-700">
                We can also host our <strong>Matcha Bowl</strong> or <strong>Vase Building</strong> workshops as a private event
                for groups of up to <strong>12 people</strong>.
              </p>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              alt="Participants enjoying a private pottery event"
              src="/private-pottery-event/private-group-pottery-wheel-throwing.jpg"
              fill
              className="absolute inset-0 object-cover"
              priority
            />
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="leander text-4xl font-bold text-gray-900 text-center">How It Works</h3>
          <div className="mt-8 flex flex-col space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="leander w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">1</div>
              </div>
              <div>
                <h4 className="leander text-lg font-bold text-gray-900">Email to Get Started</h4>
                <p className="mt-2 text-gray-700">
                  Email <strong>olomanastudios@gmail.com</strong> with 2-3 date/time preferences and estimated headcount (minimum 6, up to 30). We’ll confirm details and provide a private booking link. <strong>No deposit required</strong>.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="leander w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">2</div>
              </div>
              <div>
                <h4 className="leander text-lg font-bold text-gray-900">Share Your Private Booking Link</h4>
                <p className="mt-2 text-gray-700">
                  Use your link to <strong>pay as a group</strong> or send the booking link to participants to <strong>book & pay separately</strong>.
                  Pricing per person is the same as our regular pottery group class.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="leander w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">3</div>
              </div>
              <div>
                <h4 className="leander text-lg font-bold text-gray-900">Enjoy the Class</h4>
                <p className="mt-2 text-gray-700">{"Arrive a few minutes early, and we’ll take it from there. Our instructors guide everyone through making their own piece, no experience required. Expect an easygoing, social vibe with lots of laughter as participants try to get the hang of the potter's wheel and come up with creative (and sometimes wacky) hand-building pieces. Our class makes for a memorable event for teams and celebrations."}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="leander w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">4</div>
              </div>
              <div>
                <h4 className="leander text-lg font-bold text-gray-900">Firing & Pickup</h4>
                <p className="mt-2 text-gray-700">
                  We handle the drying, firing, and glazing. <strong>Pickup in about 4 weeks</strong>. Finished pieces are
                  lead-free and food-safe, ready to use or gift.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Finished pottery pieces"
                src="/event-3.jpg"
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Participants working on pottery"
                src="/event-1.jpg"
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                alt="Pottery pieces after firing"
                src="/event-4.jpg"
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p
            className="inline-block px-8 py-4 text-lg font-bold text-black"
          >
            Email olomanastudios@gmail.com to book your private event
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Include in your email 2-3 preferred date/times and headcount (6–30 people).
          </p>
        </div>
      </div>
    </section>
  );
}
