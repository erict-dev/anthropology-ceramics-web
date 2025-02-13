import React from 'react';
import Image from 'next/image';

export default function TeapotMakingWorkshop() {
  return (
    <div>
      {/* Handbuilt Teapot Making Workshop */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">Teapot Pottery Workshop in Irvine</h2>
            <p className="mt-4 text-black">
              Experience the traditional art of <strong>teapot making</strong> in our immersive pottery workshop in Irvine, CA. This 3.5-hour class guides you through the techniques used to handbuild unique, functional teapots perfect for tea ceremonies or everyday use. Under the guidance of expert instructors, you will learn to shape, assemble, and refine your teapot using traditional pottery handbuilding methods.
            </p>
          <div className="mt-6 mb-6 text-center">
            <a
              href=""
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              Book Online
            </a>
          </div>
          </header>

          <div className="h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-1.jpeg"
                alt="Handbuilt teapot in progress"
                width={400}
                height={600}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-2.jpeg"
                alt="Completed handmade teapot"
                width={400}
                height={600}
                className="hidden sm:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/workshops/teapot-3.jpeg"
                alt="Participants crafting their teapots"
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
            <h2 className="text-3xl font-bold text-gray-900">A Hands-On Teapot Making Experience</h2>
            <p className="mt-4 text-gray-700">
              Creating your own teapot is a deeply rewarding and meditative experience. In a world filled with mass-produced items, crafting a functional, handmade piece brings a sense of connection and creativity. This class offers a unique opportunity to engage with clay, learning traditional techniques to create a teapot that reflects your personal style.
            </p>
            <p className="mt-4 text-gray-700">
              During this workshop, we will teach you traditional techniques used by artisans from the famous purple clay teapot town of Yi Xing, China. Learn the fundamentals of teapot construction, including forming the body, crafting the spout and handle, and refining the lid for a perfect fit. Whether you’re making a teapot for tea ceremonies or everyday use, your piece will be both functional and uniquely yours.
            </p>
            <p className="mt-4 text-gray-700">
              After completion we will fire it for you. Your finished piece will be ready for pickup in approximately 3-4 weeks, ready to be enjoyed in your tea rituals.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/workshops/teapot-4.jpeg"
              alt="Participants enjoying teapot workshop in Irvine"
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
            <li><strong>Class Duration:</strong> 3.5 hours.</li>
            <li><strong>What to Bring:</strong> Closed-toed shoes, comfortable clothing, and a creative mindset.</li>
            <li><strong>Take Home:</strong> Your handcrafted teapot, after firing (ready in 3-4 weeks).</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href=""
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
