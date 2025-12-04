import Image from 'next/image';
import Link from 'next/link';

export default function GiftCards() {
  // Calculate days until Christmas
  const today = new Date();
  const currentYear = today.getFullYear();
  const christmas = new Date(currentYear, 11, 25); // December 25
  if (today > christmas) {
    christmas.setFullYear(currentYear + 1);
  }
  const daysUntilChristmas = Math.ceil((christmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <>
      {/* Gift Card Options */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 mt-8">
            <h2 className="leander text-4xl sm:text-4xl font-bold text-gray-900 mb-4">
              Gift Cards
            </h2>
            <p className="text-gray-600 text-lg">
              Our pottery class & workshop gift cards open the door to meaningful experiences, shared moments of creativity, and memories that last long after the clay has been fired.
              {daysUntilChristmas > 0 && (
                <span className="block mt-2 font-semibold text-red-600">
                  🎄 10% discount on all gift cards until Christmas with code: <span className="underline">HOLIDAY-GIFT-2025</span> at checkout 🎄
                </span>
              )}
            </p>
          </div>

          {/* Gift Card Options Grid */}
          <div className="mt-8 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pottery Class Gift Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  alt="Pottery class - person working on pottery wheel"
                  src="/one-time-pottery-class-irvine.jpg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="leander text-xl font-bold text-gray-900 mb-3">
                  Pottery Class Gift Certificate
                </h3>
              <div className="mb-4">
                {daysUntilChristmas > 0 ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold line-through text-red-600">$68</span>
                    <span className="text-3xl font-bold text-gray-900">$61</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">$68.00</span>
                )}
              </div>
              <p className="text-gray-600 mb-4 flex-1">
                This gift certificate can be redeemed for $68 towards any of our pottery classes or workshops including our one-time pottery group class for adults, kids or towards our 4-week pottery course.
              </p>
              <a
                href="https://olomanastudios.as.me/catalog/66629c2c?categories=Gift%20Certificates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700 mt-auto"
              >
                Purchase →
              </a>
              </div>
            </div>
            {/* Ikebana Gift Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  alt="Ikebana flower arrangement"
                  src="/ikebana.jpeg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="leander text-xl font-bold text-gray-900 mb-3">
                  Ikebana Flower Arrangement Workshop Gift Certificate
                </h3>
              <div className="mb-4">
                {daysUntilChristmas > 0 ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold line-through text-red-600">$64</span>
                    <span className="text-3xl font-bold text-gray-900">$58</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">$64.00</span>
                )}
              </div>
              <p className="text-gray-600 mb-4 flex-1">
                This gift certificate is redeemable for our Ikebana Flower Arrangement Workshop or $64 towards any of our pottery classes or workshops including our one-time pottery group class for adults, kids or towards our 4-week pottery course.
              </p>
              <a
                href="https://olomanastudios.as.me/catalog/66629c2c?categories=Gift%20Certificates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700 mt-auto"
              >
                Purchase →
              </a>
              </div>
            </div>

            {/* Matcha Bowl Gift Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  alt="Matcha bowls and ceramic pieces"
                  src="/irvine-matcha-bowl-class/matcha-bowl-3-resize.jpg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="leander text-xl font-bold text-gray-900 mb-3">
                  Matcha Bowl Workshop Gift Certificate
                </h3>
              <div className="mb-4">
                {daysUntilChristmas > 0 ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold line-through text-red-600">$85</span>
                    <span className="text-3xl font-bold text-gray-900">$77</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">$85.00</span>
                )}
              </div>
              <p className="text-gray-600 mb-4 flex-1">
                This gift certificate is redeemable for our Traditional Matcha Bowl Carving Workshop or $85 towards any of our pottery classes or workshops including our one-time pottery group class for adults, kids or towards our 4-week pottery course.
              </p>
              <a
                href="https://olomanastudios.as.me/catalog/66629c2c?categories=Gift%20Certificates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center rounded-lg bg-black px-6 py-3 text-white font-medium transition duration-300 hover:bg-gray-700 mt-auto"
              >
                Purchase →
              </a>
              </div>
            </div>

          </div>

          {/* Divider */}
          <Image
            alt="Decorative line"
            src="/handdrawn-line.png"
            width={1920}
            height={6}
            className="mt-8 mb-8 w-full h-1.5"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="leander text-2xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            How Gift Cards Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="leander text-xl font-bold text-gray-900 mb-2">Purchase</h3>
              <p className="text-gray-600">
                Choose your gift card and complete your purchase online. You'll receive a confirmation email with your gift card details.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="leander text-xl font-bold text-gray-900 mb-2">Share</h3>
              <p className="text-gray-600">
                Gift cards can be sent directly to the recipient via email, or you can print them out to give in person.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="leander text-xl font-bold text-gray-900 mb-2">Redeem</h3>
              <p className="text-gray-600">
                Recipients can use their gift card to book any class, workshop, or open studio session. Simply enter the gift card code at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Use Gift Cards For */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="leander text-2xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Perfect For Any Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎂</div>
              <h3 className="leander text-lg font-semibold text-gray-900 mb-2">Birthdays</h3>
              <p className="text-gray-600 text-sm">
                Give a unique and memorable birthday gift
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎄</div>
              <h3 className="leander text-lg font-semibold text-gray-900 mb-2">Holidays</h3>
              <p className="text-gray-600 text-sm">
                Perfect for a meaningful holiday present
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="leander text-lg font-semibold text-gray-900 mb-2">Anniversaries</h3>
              <p className="text-gray-600 text-sm">
                Celebrate special moments together
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="leander text-lg font-semibold text-gray-900 mb-2">Graduations</h3>
              <p className="text-gray-600 text-sm">
                Support their creative journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="https://olomanastudios.as.me/catalog/66629c2c?categories=Gift%20Certificates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-black px-8 py-4 text-white text-lg font-medium transition duration-300 hover:bg-gray-700 shadow-lg hover:shadow-xl"
          >
            Browse Gift Cards
          </a>
        </div>
      </section>
    </>
  );
}

