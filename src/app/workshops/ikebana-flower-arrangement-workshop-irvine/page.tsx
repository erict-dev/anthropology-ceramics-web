import React from 'react';
import Image from 'next/image';

export default function IkebanaWorkshop() {
  return (
    <div>
      {/* Ikebana Flower Arrangement Workshop */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">Ikebana Flower Arrangement Workshop in Irvine</h2>
            <p className="mt-4 text-black">
              Experience the elegance of <strong>Ikebana</strong>, the traditional Japanese art of flower arrangement, in our immersive ikebana workshop in Irvine, CA. This hands-on class held in our studio introduces the principles of balance, harmony, and minimalism that define Ikebana. Guided by expert instructors, you will explore floral design techniques while creating your own stunning arrangement using fresh flowers, kenzans, and vases.
            </p>
          <div className="mt-6 mb-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/82663099/calendar/12365772"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Online
            </a>
          </div>
          </header>

          <div className="h-[520px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/ike-5.jpg"
                alt="Ikebana flower arrangement"
                width={400}
                height={600}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/ike-2.jpeg"
                alt="Ikebana flower arrangement"
                width={400}
                height={600}
                className="hidden sm:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/ike-6.jpg"
                alt="Ikebana flower arrangement"
                width={400}
                height={600}
                className="hidden md:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Experience */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">A Hands-On Ikebana Flower Arrangement Experience</h2>
            <p className="mt-4 text-gray-700">
              Ikebana is more than just arranging flowers—it’s a mindful and grounding practice that brings balance and tranquility. In today’s fast-paced world, engaging in a creative and hands-on activity like Ikebana provides a refreshing escape from digital distractions and mass-produced decor.
            </p>
            <p className="mt-4 text-gray-700">
              In this workshop, you will learn the fundamental principles of Japanese floral arrangement, including line, space, and balance. You will have access to a selection of fresh flowers, kenzans (floral pin holders), and vases to create a composition that embodies natural beauty and simplicity.
            </p>
            <p className="mt-4 text-gray-700">
              At the end of the class you will take home the flowers that you used. If you wish, you can also purchase the vase at a special workshop discount.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/workshops/ike-4.jpeg"
              alt="Participants enjoying Ikebana workshop in Irvine"
              width={600}
              height={400}
              className="object-cover w-full h-full transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Important Details */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Important Details</h2>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li><strong>Location:</strong> Olomana Studios - 14988 Sand Canyon Ave Studio 6, Irvine CA 92618</li>
            <li><strong>Class Duration:</strong> 1.5 hours.</li>
            <li><strong>What to Bring:</strong> Comfortable clothing and an open mind for creativity.</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/82663099/calendar/12365772"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

