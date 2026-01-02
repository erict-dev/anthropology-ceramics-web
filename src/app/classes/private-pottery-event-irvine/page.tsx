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

        {/* Quick Facts / At a Glance */}
        <div className="mb-12"></div>

        {/* Group Options by Size (columns = group sizes; cards stack under each) */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-gray-900 text-center">Group Options by Size</h3>
          <p className="text-center text-gray-600 mt-2">
            Private group class options are limited by the number of available wheels our studio has.
          </p>

          {/* Wrap columns in flex with borders that change direction responsively */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-gray-300">
            {/* 6–8 */}
            <div className="p-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-center font-semibold text-gray-900">
                8 people
              </div>

              {/* Card: Wheel */}
              <div className="mt-3 rounded-2xl border border-gray-200 overflow-hidden bg-white">
                <div className="relative w-full aspect-[4/2]">
                  <Image
                    alt="Pottery wheel class"
                    src="/private-pottery-event/private-group-pottery-wheel-throwing.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">Pottery Wheel Class</h4>
                    <span className="text-sm text-gray-700 font-medium">$58/person</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    1 hour class · includes 1 lb of clay, firing and glazing for 1 piece · pickup in 4–5 weeks
                  </p>
                </div>
              </div>

              {/* Card: Handbuilding */}
              <div className="mt-3 rounded-2xl border border-gray-200 overflow-hidden bg-white">
                <div className="relative w-full aspect-[4/2]">
                  <Image
                    alt="Pottery handbuilding class"
                    src="/private-pottery-event/handbuilding.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">Pottery Handbuilding Class</h4>
                    <span className="text-sm text-gray-700 font-medium">$58/person</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    1 hour class · includes 1 lb of clay, firing and glazing for 1 piece · pickup in 4–5 weeks
                  </p>
                </div>
              </div>

              {/* Card: Wheel & Handbuilding */}
              <div className="mt-3 rounded-2xl border border-gray-200 overflow-hidden bg-white">
                <div className="relative w-full aspect-[4/2]">
                  <Image alt="Wheel & Handbuilding class" src="/event-1.jpg" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">Wheel &amp; Handbuilding Class</h4>
                    <span className="text-sm text-gray-700 font-medium">$68/person</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    1.5 hour class · includes 2 lbs of clay, firing and glazing for 2 pieces · pickup in 4–5 weeks
                  </p>
                </div>
              </div>

            </div>

            {/* 8–24 */}
            <div className="p-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-center font-semibold text-gray-900">
                8 – 24 people
              </div>

              {/* Card: Handbuilding */}
              <div className="mt-3 rounded-2xl border border-gray-200 overflow-hidden bg-white">
                <div className="relative w-full aspect-[4/2]">
                  <Image
                    alt="Pottery handbuilding class"
                    src="/private-pottery-event/handbuilding.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">Pottery Handbuilding Class</h4>
                    <span className="text-sm text-gray-700 font-medium">$58/person</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    1 hour class · includes 1.5 lbs of clay, firing and glazing for 1 piece · pickup in 4–5 weeks
                  </p>
                </div>
              </div>

              {/* Card: Wheel & Handbuilding */}
              <div className="mt-3 rounded-2xl border border-gray-200 overflow-hidden bg-white">
                <div className="relative w-full aspect-[4/2]">
                  <Image alt="Wheel & Handbuilding class" src="/event-1.jpg" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">Wheel &amp; Handbuilding Class</h4>
                    <span className="text-sm text-gray-700 font-medium">$68/person</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    1.5 hour class · includes 2 lbs of clay, firing and glazing for 2 pieces · pickup in 4–5 weeks
                  </p>
                </div>
              </div>
            </div>

            {/* 24+ */}
            <div className="p-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-center font-semibold text-gray-900">
                24+ people
              </div>

              {/* Card: Handbuilding */}
              <div className="mt-3 rounded-2xl border border-gray-200 overflow-hidden bg-white">
                <div className="relative w-full aspect-[4/2]">
                  <Image
                    alt="Pottery handbuilding class"
                    src="/private-pottery-event/handbuilding.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">Pottery Handbuilding Class</h4>
                    <span className="text-sm text-gray-700 font-medium">$58/person</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    1.5 hour class · includes 1.5 lbs of clay, firing and glazing for 1 piece · pickup in 4–6 weeks
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-4 px-8">
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
                  Use your link to pay as a group or send the booking link to participants to book & pay separately. <strong>Once your private group class gets at least 6 bookings you are confirmed for your event.</strong>
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
                  We handle the drying, firing, and glazing. <strong>Pickup in about 4-6 weeks</strong>. Finished pieces are
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
