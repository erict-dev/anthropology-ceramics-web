import React from 'react';
import Image from 'next/image';

export default function Hakeme() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">Hakeme Style Pottery</h2>

          <p className="mt-4 text-black">
            {"Hakeme, deriving from the Japanese term for brush stroke, is a distinguished pottery technique that originated in Korea before spreading to Japan. This technique uses a unique brush made from local dried grasses or animal hair to apply a thick white slip onto the dark clay body, creating stark and engaging contrasts. This process not only decorates the pottery with organic, sweeping strokes but also imbues each piece with a distinct artisanal signature, reflecting the individuality of its creator. The beauty of Hakeme lies in its imperfections and the tactile quality that these brush strokes impart to the surface of the clay, making each piece uniquely appealing."}
          </p>
        </header>

        <ul className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/hakeme/hakeme-pottery-1.jpg"
                alt="Example of Hakeme technique on a bowl"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/hakeme/hakeme-pottery-0.jpg"
                alt="Wabi-sabi style pottery with Hakeme brush strokes"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/hakeme/hakeme-pottery-2.jpg"
                alt="Modern Hakeme vase"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
        </ul>
        <p className="mt-8 text-black">
          {"The journey of Hakeme from its traditional roots to contemporary applications is a tale of cultural exchange and artistic evolution. Initially used to enhance the aesthetics of utilitarian wares, the technique gained prominence in Japan's tea ceremony culture. The tea masters of the 15th century celebrated Hakeme for its rustic simplicity, aligning perfectly with the principles of Wabi-Sabi, which finds beauty in imperfection. This relation enriched the technique's heritage and cemented its status in the world of fine art ceramics. The migration of Hakeme through Asia into Western practices reflects an evolving appreciation of this beautiful style of the imperfectly beautiful flowing brush."}
        </p>
        <p className="mt-8 text-black">
          {"Our first exposure to Hakeme was in Mashiko, Japan, a town renowned for its pottery. We learned from a venerable couple in their 80s, who dedicated their lives to ceramics and pottery. Their workshop, a trove of different ceramic styles and techniques was a reflection of their dedication. The rough, hand-made brushes they used for Hakeme, crafted from local grasses and bristles, impart a unique texture to each piece, making the final outcome somewhat unpredictable. This element of surrender to the creative process, where control is partially relinquished to the will of the brush and clay, ensures that every piece is not only uniquely beautiful but also carries a distinct signature of its own creation."}</p>

        <ul className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/hakeme/hakeme-pottery-3.jpg"
                alt="Detailed close-up of Hakeme decoration"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/hakeme/hakeme-pottery-4.jpg"
                alt="Display of various Hakeme pottery pieces"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/hakeme/hakeme-pottery-5.jpg"
                alt="Contemporary Hakeme pottery workshop"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
        </ul>
        <p className="mt-8 text-black">
          {"Today, Hakeme has spread across the globe, its practice adopted and adapted by modern potters who are drawn to its elemental and imperfectly beautiful essence. The technique allows artists to experiment with various textures and layers, offering a canvas that is both rich in creativity and steeped in culture. In Mashiko, master potters continue to use Hakeme, pushing the boundaries of traditional forms while respecting the roots of their cultural heritage. Each piece serves not only as a functional item but as a bearer of cultural history, connecting the past with the present through the language of clay and brush. The organic movements of each brushstroke, dictated by the rough nature of the handmade brushes, adds a sense of unpredictability to the creation process, making each finished product a reminder of the beauty of the imperfect, the unpredictable, the unmanufactured, and the elegance found in the way things are."}
        </p>
        <Image
          alt="Decorative line"
          width={1920}
          height={6}
          src="/handdrawn-line.png"
          className="mt-8 mb-8 w-full h-1.5"
        />
      </div>
    </section>
  );
}
