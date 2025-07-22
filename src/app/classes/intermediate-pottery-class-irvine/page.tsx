// The goal of this page is to target the Google SEO Keyword for intermediate pottery class, intermediate pottery handbuilding class, intermediate pottery wheel throwing class and intermediate pottery class in Irvine / Orange County. It should present a menu of our offerings geared towards intermediate pottery students interested in advancing their skills on the wheel, handbuilding or both.
// Our level two 6 week course is great for those who can comfortable make small cups, bowls and plates on the wheel and want to learn how to make more difficult shapes like medium sized vases, jars with lids, small to medium moon jars, hump throwing and throw with up to 5 LBs of clay. You will learn advanced  pottery skills on the wheel and at the end of this course you will be able to make lidded jars, medium sized rounded vases and jars, matcha bowls and other similar forms.
// Our upcoming teapot handbuilding class is also geared towards pottery studios with some experience.

import React from 'react';
import Image from 'next/image';

export default function IntermediatePotteryClasses() {
  return (
    <div>
      {/* Traditional Matcha Bowl Workshop */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">Matcha Bowl Workshop in Irvine</h2>
            <p className="mt-4 text-black">
              Experience the art of creating your own <strong>handmade ceramic matcha bowl (chawan)</strong> in our Matcha Bowl Workshop in Irvine, CA. This immersive class blends creativity, tradition, and relaxation as you learn the time-honored techniques of Japanese pottery. Under the guidance of expert instructors, you will hand-build, texture, and shape a matcha bowl that reflects your personal style. Whether you are a beginner or a pottery enthusiast, this workshop offers a meditative, hands-on experience that results in a unique, functional piece for your tea rituals.
            </p>
          <div className="mt-6 mb-6 text-center">
            <a
              href="https://olomanaceramics.classly.com/classes/matcha-bowl-handbuilding-workshop/3881bf61-5c95-424a-bb49-879587e08135"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Online
            </a>
          </div>
          </header>

          <div className="h-[600px] md:h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/irvine-matcha-bowl-class/matcha-bowl-3.jpg`}
                alt={`Handmade matcha bowl in progress`}
                width={400}
                height={600}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/irvine-matcha-bowl-class/matcha-bowl-7.jpg`}
                alt={`Completed chawan matcha bowl`}
                width={400}
                height={600}
                className="sm:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/irvine-matcha-bowl-class/matcha-bowl-1.jpg`}
                alt={`Participants shaping their matcha bowls`}
                width={400}
                height={600}
                className="md:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Experience */}
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">A Hands-On Matcha Bowl Making Experience</h2>
            <p className="mt-4 text-gray-700">{"Pottery is more than just an art form, it is a meditative and grounding experience. In today’s fast-paced world, making something with your hands is a refreshing escape from screens and mass-produced goods. In this workshop, you’ll experience the beauty of shaping raw clay into a meaningful, everyday object while immersing yourself in the craftsmanship of Japanese ceramics."}</p>
            <p className="mt-4 text-gray-700">
              In this class you will be guided through the process of hand-building your own traditional matcha bowl using time-honored Japanese pottery techniques, no prior experience necessary. In the middle of class we will also host a calming tea ritual while we wait for our bowls to dry enough for texturing. Learn how to shape the clay, carve the bottom to form a foot and use kurinuki carving techniques to create a natural intricate design.
            </p>
            <p className="mt-4 text-gray-700">
              After completing your bowl, we will fire it for you, and in just 2-3 weeks, you can pick up your finished matcha bowl, ready to elevate your tea-drinking experience.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/home-studio-2-compressed.JPG"
              alt="Adults enjoying pottery class in Irvine"
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
            <li><strong>Location:</strong> Our home studio in Irvine (Exact address provided upon registration).</li>
            <li><strong>Class Duration:</strong> 2.5 hours.</li>
            <li><strong>What to Bring:</strong> Closed-toed shoes with socks, long pants, and clothes that can get dirty.</li>
            <li><strong>Pottery Pickup:</strong> Pieces will be dried, fired, and ready for pickup in 2-3 weeks. We use all lead-free, food-safe glazes.</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="https://olomanaceramics.classly.com/classes/matcha-bowl-handbuilding-workshop/3881bf61-5c95-424a-bb49-879587e08135"
              className="mt-6 inline-block rounded-lg bg-black px-8 py-3 text-white font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Your Workshop
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
