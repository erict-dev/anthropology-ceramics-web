import Image from 'next/image';

export default function Celadon() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">Celadon Pottery</h2>
          <p className="mt-4 text-black">
            Celadon is a type of ceramic that originated in China, renowned for its distinctive jade-like green glaze. This ancient technique, dating back to the Eastern Han Dynasty, was highly prized for its subtle yet vivid sea-green color achieved through high firing temperatures and iron oxide glazes. The allure of Celadon lies in its translucent quality and the depth of its glaze, which can range from very light, almost translucent greens to deep, rich moss tones. The term 'Celadon' was coined by Europeans, inspired by the ceramic's resemblance to green stones cherished in their culture.
          </p>
        </header>

        <ul className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/celadon/celadon-1.jpg"
                alt="Classic Celadon vase"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/celadon/celadon-2.jpg"
                alt="Celadon tea set"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/library/celadon/celadon-3.jpg"
                alt="Modern Celadon artwork"
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
        </ul>
        <p className="mt-4 text-black">
          Celadon production reached its zenith during the Song Dynasty in China, synonymous with the highest quality of ceramic craftsmanship. The technique spread to Korea and Japan, where local artisans infused their unique cultural aesthetics into the designs. In Korea, known as 'Cheong-ja,' Celadon is considered a national treasure, celebrated for its intricate inlays and elegant forms, often used in royal households and temples.
        </p>
        <p className="mt-4 text-black">
          Today, Celadon is revered worldwide for its historical significance and timeless beauty. Its production continues to employ both traditional techniques and modern innovations, making it a popular choice for collectors and ceramists alike. Each piece of Celadon ware is not only a functional object but also a piece of art that bridges centuries of ceramic history, embodying the skills and stories of generations of potters.
        </p>
        <p className="mt-4 text-black">
          In the contemporary ceramic scene, Celadon has seen a resurgence as artists and designers experiment with new formulations and techniques to push the boundaries of the traditional glaze. These innovations include varying firing temperatures and experimenting with mineral mixes to achieve a wider spectrum of colors and finishes. This modern take on Celadon not only honors its storied past but also secures its place in the future of ceramic arts, demonstrating the dynamic and evolving nature of this ancient art form.
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
