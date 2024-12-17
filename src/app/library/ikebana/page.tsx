import React from 'react';
import Image from 'next/image';

export default function Ikebana() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">The Art of Ikebana</h2>
          <p className="mt-4 text-black">
            {"Ikebana, the Japanese art of flower arrangement, is more than merely placing flowers in a container; it's a disciplined art form where nature and humanity are brought together. It emphasizes minimalism, shape, line, form, and a reflection of the natural world, encapsulated through a spiritual and philosophical approach to floral design."}
          </p>
        </header>

        <div className="h-[600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={`/library/ikebana/ikebana-main.jpg`}
              alt={`Ikebana arrangement`}
              width={400}
              height={600} // Adjusted for a 3:2 portrait ratio
              className="object-cover h-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={`/library/ikebana/ikebana-moon.jpg`}
              alt={`Ikebana arrangement`}
              width={400}
              height={600} // Adjusted for a 3:2 portrait ratio
              className="object-cover h-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={`/library/ikebana/ikebana-main.jpg`}
              alt={`Ikebana arrangement`}
              width={400}
              height={600} // Adjusted for a 3:2 portrait ratio
              className="object-cover h-full transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <h3 className="mt-8 text-2xl font-bold text-gray-900">Philosophy of Ikebana</h3>
        <p className="mt-4 text-black">
          {"At its core, Ikebana is more than aesthetic decoration; it's a meditative practice that helps one connect with nature and learn to appreciate the beauty in all forms of life. It teaches patience and respect for all things, emphasizing the rhythms of the seasons and the ever-changing life cycles of plants. Ikebana arrangements strive to capture the essence of an environment, bringing the outdoors inside in a harmonious display that balances simplicity with complexity."}
        </p>

         <ul className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                alt="Ikebana seasonal arrangement"
                src="/library/hakeme/hakeme-pottery-1.jpg"
                width={1080}
                height={1080}
                className="transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                alt="Ikebana minimalist arrangement"
                src="/library/hakeme/hakeme-pottery-1.jpg"
                width={1080}
                height={1080}
                className="transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                alt="Ikebana formal arrangement"
                src="/library/hakeme/hakeme-pottery-1.jpg"
                width={1080}
                height={1080}
                className="transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8">Styles of Ikebana</h3>
        <p className="text-black mt-4">
          {"There are many schools and styles of Ikebana, each with its unique traditions and techniques. Some of the most famous include:"}
        </p>
        <ul className="list-disc pl-8 mt-4">
          <li><strong>Rikka</strong>{"- Represents the magnificence of nature; it's a complex style that often symbolizes mountains and waterfalls."}</li>
          <li><strong>Shoka</strong>{"- Seeks to express the life forces of plants; its arrangements are usually more subdued and focus on the vitality of each branch and flower."}</li>
          <li><strong>Moribana</strong>{"- Known for its 'piled-up flowers' style, Moribana uses a shallow vessel to arrange cut flowers, giving a full and lush appearance."}</li>
          <li><strong>Nageire</strong>{"- A style for tall vases and involves 'thrown-in' arrangements that are more informal and spontaneous."}</li>
        </ul>

        <h3 className="mt-8 text-2xl font-bold text-gray-900">Essential Elements of Ikebana</h3>
        <h4 className="text-xl font-bold text-gray-800 mt-6">Vessel</h4>
        <p className="text-black mt-2">
          {"The choice of vessel is integral to Ikebana, often reflecting the season and the mood of the arrangement. Vessels range from simple ceramic bowls to elaborate bronze vases."}
        </p>

        <h4 className="text-xl font-bold text-gray-800 mt-4">Kenzan</h4>
        <p className="text-black mt-2">
          {"A kenzan is a spiked flower frog used to hold the stems in place. Placed at the bottom of the vessel, it is key to maintaining the structure and form of the Ikebana arrangement."}
        </p>

        <h4 className="text-xl font-bold text-gray-800 mt-4">Flowers and Plant Matter</h4>
        <p className="text-black mt-2">
          {"The selection of plant material is not arbitrary in Ikebana. Every element is chosen to express the season and to convey specific emotions or symbolism. This may include branches, leaves, grasses, and flowers, each selected for their aesthetic contribution and symbolic meaning."}
        </p>

        <h3 className="mt-8 text-2xl font-bold text-gray-900">Ikebana Inspirational Gallery</h3>
        <div className="h-[600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={`/library/ikebana/ikebana-main.jpg`}
              alt={`Ikebana arrangement`}
              width={400}
              height={600} // Adjusted for a 3:2 portrait ratio
              className="object-cover h-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={`/library/ikebana/ikebana-moon.jpg`}
              alt={`Ikebana arrangement`}
              width={400}
              height={600} // Adjusted for a 3:2 portrait ratio
              className="object-cover h-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={`/library/ikebana/ikebana-main.jpg`}
              alt={`Ikebana arrangement`}
              width={400}
              height={600} // Adjusted for a 3:2 portrait ratio
              className="object-cover h-full transition duration-500 hover:scale-105"
            />
          </div>
        </div>
        
        <Image
          alt="Decorative line"
          src="/handdrawn-line.png"
          width={1920}
          height={6}
          className="mt-8 mb-8 w-full h-1.5"
        />

        <Image
          alt="Introductory Ikebana arrangement"
          src="/library/hakeme/hakeme-pottery-1.jpg"
          width={1920}
          height={1080}
          className="mt-8 w-full object-cover"
        />


      </div>
    </section>
  );
}
