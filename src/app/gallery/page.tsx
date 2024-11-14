import Image from 'next/image';

export default function Gallery() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">Hakeme Collection</h2>

          <p className="mt-4 text-black">
            Our Hakeme collection showcases Ikebana vases and jars crafted from dark stoneware, adorned with sweeping brushstrokes reminiscent of traditional Chinese, Korean, and Japanese pottery. Each piece is designed to evoke a serene elegance, a balance of form and function, and a sense of cultural depth. This collection invites a connection to time-honored artistry, harmonizing with the rhythm and flow of natural beauty.
          </p>
        </header>

        <ul className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/winter-2024/1.jpg"
                alt="Hakeme Vase 1"
                width={500}
                height={500}
                className="transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/winter-2024/3.jpg"
                alt="Hakeme Vase 2"
                width={500}
                height={500}
                className="transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/winter-2024/2.jpg"
                alt="Hakeme Vase 3"
                width={500}
                height={500}
                className="transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">Earthen Collection</h2>

          <p className="mt-4 text-black">
            Explore our Earthen Collection, a celebration of the natural world and the art of tea. Each piece is crafted with care, reflecting diverse landscapes and cultural inspirations—from the earthy tones of Mashiko to the delicate glazes of Jingdezhen. These ceramics invite you to savor simple, quiet moments, offering a perfect blend of beauty and functionality.
          </p>
        </header>

        <ul className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/hakeme-1.jpg"
                alt="Earthen Vase 1"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/wabi-2.jpg"
                alt="Earthen Vase 2"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/hakeme-3.jpg"
                alt="Earthen Vase 3"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/celadon-1.jpg"
                alt="Celadon Vase 1"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/celadon-2.jpg"
                alt="Celadon Vase 2"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/celadon-3.jpg"
                alt="Celadon Vase 3"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/kiriniku-1.jpeg"
                alt="Kiriniku Vase 1"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/kiriniku-2.jpeg"
                alt="Kiriniku Vase 2"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <Image
                src="/gallery/summer-2024/kiriniku-3.jpeg"
                alt="Kiriniku Vase 3"
                width={500}
                height={260}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
