import Image from 'next/image';

export default function Kurinuki() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">Kurinuki Style Pottery</h2>
          <p className="mt-4 text-black">
            {"Kurinuki is a ceramic technique characterized by deep, tactile textures that resemble slices or carvings into the clay body. This technique traces its origins to ancient Japan, where it was initially used to create functional wares for daily use. The raw and expressive quality of Kurinuki reflects the Japanese aesthetic of celebrating the imperfect, impermanent, and incomplete, embodying the philosophy of wabi-sabi. Each piece showcases the natural properties and colors of the clay, inviting a closer look at its textured depth and rugged beauty."}
          </p>
        </header>
        <ul className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/kiriniku/kiriniku-1.jpg"
                alt="Classic Celadon vase"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/kiriniku/kiriniku-2.jpg"
                alt="Celadon tea set"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/kiriniku/kiriniku-3.jpg"
                alt="Modern Celadon artwork"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
        </ul>
        <p className="mt-8 text-black">
          {"The Kurinuki technique's distinctive approach to treating clay surfaces, through incisions or tearing, requires profound skill and understanding of the medium. Traditionally, these cuts were made while the clay was leather-hard, using tools that could range from simple knives to intricate carving instruments. The technique allows the artist to play with shadow and light, giving the finished product an almost sculptural feel that enhances the interaction between the artwork and its environment."}
        </p>
        <p className="mt-8 text-black">
          {"Today, Kurinuki is revered not just in Japan but globally, as modern ceramists continue to explore and expand upon this traditional technique. Its unique textural characteristics make Kurinuki pieces highly sought after in both functional and decorative arts. Collectors and enthusiasts appreciate the historic roots and cultural narrative embedded in each piece, making Kurinuki a celebrated example of Japanese ceramic heritage that transcends time and place, connecting past with present in every carved line."}
        </p>
        <p className="mt-8 text-black">
          {"As the world of art and design constantly evolves, Kurinuki remains a vital link to Japan's rich cultural past while adapting to contemporary artistic expressions. Modern artists are pushing the boundaries of Kurinuki by experimenting with different clays and carving techniques, creating works that are not only rooted in tradition but also resonate with modern aesthetics. This ongoing dialogue between old and new ensures that Kurinuki continues to inspire and innovate, making it a staple technique in the global ceramic community."}
        </p>
        <Image
          alt="line"
          width={1920}
          height={6}
          src="/handdrawn-line.png"
          className="mt-8 mb-8 w-full h-1.5"
        />
      </div>
    </section>
  );
}
