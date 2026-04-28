import Image from 'next/image';

export default function Events() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Private Pottery Group Events</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our private pottery events in Irvine are available for groups of 8 or more. This hands-on, pottery making event is great for celebrations, team building, and gatherings.
            No experience necessary, we guide everyone step by step and each participant gets to make their own unqiue piece of pottery!
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

        {/* Event Overview */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-gray-900 text-center">Event Overview</h3>
          <p className="text-center text-gray-600 mt-2">
            One private class option for groups of 8 to 30 people. Everyone makes a piece on the wheel and a piece by hand.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                alt="Small group enjoying a private pottery class at Olomana Studios in Irvine"
                src="/info/pottery-class-small.jpg"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col">
              <div className="flex justify-between items-start gap-4">
                <h4 className="text-2xl font-semibold text-gray-900">Wheel &amp; Handbuilding Class</h4>
                <span className="text-base text-gray-700 font-medium whitespace-nowrap">$68/person</span>
              </div>
              <p className="mt-3 text-gray-700">
                Our instructors guide your group through making two unique pieces of pottery. Everyone gets time on the wheel and time at the handbuilding table, no experience necessary.
              </p>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-gray-900 min-w-[110px]">Duration:</span>
                  <span>1.5 hour class</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-gray-900 min-w-[110px]">Group Size:</span>
                  <span>8 to 30 people</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-gray-900 min-w-[110px]">Materials:</span>
                  <span>2 lbs of clay per person, firing and glazing included</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-gray-900 min-w-[110px]">You&apos;ll Make:</span>
                  <span>One piece on the pottery wheel and one handbuilt piece</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-gray-900 min-w-[110px]">Pickup:</span>
                  <span>About 4 to 5 weeks after your event</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 px-8">
            Note: We do not allow food at our studio because it attracts ants and classes can get messy. Balloons and other small party decorations are okay for large groups, but understand that there may be other classes or open studio members in the studio.
          </p>
        </div>

      <Image
        alt="Decorative line"
        src="/handdrawn-line.png"
        width={1920}
        height={6}
        className="mt-8 mb-8 w-full h-1.5"
      />

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-gray-900 text-center">How to Book</h3>
          <div className="mt-8 flex flex-col space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">1</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Email us with information about your group</h4>
                <p className="mt-2 text-gray-700">
                  Email <strong>contact@olomanastudios.com</strong> with 2-3 date/time preferences and estimated headcount (minimum 8, max 30). We will confirm details and provide a private booking link. <strong>No deposit required.</strong>.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">2</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Share Your Private Booking Link</h4>
                <p className="mt-2 text-gray-700">
                  Use your link to pay as a group or send the booking link to participants to book & pay separately. <strong>Once your private group class gets at least 8 bookings you are confirmed for your event.</strong>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">3</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Enjoy the Class</h4>
                <p className="mt-2 text-gray-700">
                  Arrive 10 minutes early, and we will take it from there. Our instructors guide everyone through making their own piece, no experience required. Expect an easygoing, social vibe with lots of laughter as participants try the pottery wheel or get creative with handbuilding.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-olomana-yellow text-2xl text-white rounded-full flex items-center justify-center">4</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Firing & Pickup</h4>
                <p className="mt-2 text-gray-700">
                  We handle the drying, firing, and glazing. <strong>Pickup in about 4-5 weeks</strong>. Finished pieces are
                  lead-free and food-safe, ready to use or gift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
