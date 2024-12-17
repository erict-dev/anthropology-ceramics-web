import React from 'react';
import Image from 'next/image';

export default function Workshops() {
  return (
    <div>
      {/* Traditional Matcha Bowl Workshop */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">Matcha Bowl Pottery Workshop</h2>
            <p className="mt-4 text-black">
              Join our <strong>Traditional Matcha Bowl Pottery Workshop</strong> in Irvine, CA, where you will create your own handmade ceramic matcha bowl (chawan). This hands-on pottery class introduces the ancient Japanese art of forming vessels specifically for tea ceremonies. Under expert guidance, you will shape, texture, and hand-build your matcha bowl to match your creative vision. Perfect for beginners and enthusiasts alike, this workshop provides a meditative, enjoyable experience with a meaningful keepsake to take home.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Highlights:</strong> Learn traditional hand-building techniques, discover the cultural significance of matcha bowls, and enjoy a creative, calming environment.
            </p>
            <p className="mt-2 text-gray-700"><strong>Location:</strong> Olomana Studios, Irvine, CA | <strong>Duration:</strong> 2.5 hours</p>
          </header>

          <div className="h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/library/matcha-bowls/matcha-workshop-1.jpg`}
                alt={`Handmade matcha bowl in progress`}
                width={400}
                height={600}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/library/matcha-bowls/matcha-workshop-2.jpg`}
                alt={`Completed chawan matcha bowl`}
                width={400}
                height={600}
                className="hidden sm:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/library/matcha-bowls/matcha-workshop-3.jpg`}
                alt={`Participants shaping their matcha bowls`}
                width={400}
                height={600}
                className="hidden md:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ikebana Flower Arrangement Workshop */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">Ikebana Flower Arrangement Workshop</h2>
            <p className="mt-4 text-black">
              Experience the beauty and mindfulness of <strong>Ikebana</strong>, the traditional Japanese art of flower arrangement, in our workshop in Irvine, CA. More than arranging flowers, Ikebana is about harmony, balance, and appreciating nature’s simplicity. Guided by experienced instructors, you will learn how to create stunning arrangements using seasonal blooms, emphasizing minimalism and the connection between nature and humanity.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Highlights:</strong> Discover the philosophy behind Ikebana, master basic design principles, and leave with an elegant floral creation to display in your home.
            </p>
            <p className="mt-2 text-gray-700"><strong>Location:</strong> Olomana Studios, Irvine, CA | <strong>Duration:</strong> 2 hours</p>
          </header>

          <div className="h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/library/ikebana/ikebana-main.jpg`}
                alt={`A minimalist Ikebana arrangement`}
                width={400}
                height={600}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/library/ikebana/ikebana-moon.jpg`}
                alt={`Elegant floral design in an Ikebana workshop`}
                width={400}
                height={600}
                className="hidden sm:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={`/library/ikebana/ikebana-vase.JPG`}
                alt={`Circular ikebana vase`}
                width={400}
                height={600}
                className="hidden md:block object-cover w-full h-full transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

