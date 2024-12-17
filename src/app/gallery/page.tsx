import Image from 'next/image';
import Link from 'next/link';

const library = [
  {
    name: "Hakeme",
    origin: "Korea",
    description: "Hakeme is a brushstroke style of decorating pottery that likely originated in Korea during the Joseon Dynasty (1392-1910). It later spread to Japan, becoming popular in the 16th century. This technique involves applying slip (liquid clay) with a coarse brush, creating textured, rhythmic patterns on the surface of the pottery.",
    image: "/library/hakeme/hakeme-pottery-1.jpg"
  },
  {
    name: "Kurinuki",
    origin: "Japan",
    description: "Kurinuki is a traditional Japanese method of carving into clay. Originating in ancient Japan, it has evolved into a popular decorative technique for pottery. Artists use sharp tools to carve out rough cuts, intricate patterns or images on leather-hard clay, often emphasizing the contrast between carved and uncarved surfaces.",
    image: "/library/kiriniku/kiriniku-2.jpg"
  },
  {
    name: "Celadon",
    origin: "China",
    description: "Celadon is a term for pottery with a pale green glaze, first developed in China during the Eastern Han Dynasty (25-220 AD). It became highly prized throughout East Asia for its jade-like appearance. The distinctive color is achieved through a reduction firing process, which transforms iron oxide in the glaze into its ferrous state.",
    image: "/gallery/summer-2024/celadon-2.jpg"
  }
];

export default function Gallery() {
  return (
    <div>
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

      <Image
        alt="Decorative line"
        src="/handdrawn-line.png"
        width={1920}
        height={6}
        className="mt-8 mb-8 w-full h-1.5"
      />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Styles that inspire our pottery</h2>
            <p className="mt-4 text-gray-600">
              {"Explore our ever-growing collection of ceramic styles from diverse cultures across the globe. This living reference showcases pottery techniques we've learned and incorporated into our studio work. As one of humanity's oldest art forms, pottery reflects the unique imprints of cultures throughout history. Our studio is committed to exploring this rich heritage, constantly learning and adapting techniques from various traditions. While not exhaustive, this curated selection offers a glimpse into the beautiful diversity of global ceramic traditions, inviting you to join us on a journey of discovery into the world's pottery styles."}
            </p>
          </header>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {library.map((style, index) => (
              <li key={index}>
                <Link href={`/gallery/${style.name.toLowerCase()}`} className="rounded-lg group block overflow-hidden">
                  <Image
                    src={style.image}
                    alt={`${style.name} pottery style`}
                    width={500}
                    height={500}
                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[320px]"
                  />
                  <div className="relative bg-white p-5">
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:underline group-hover:underline-offset-4">{style.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">{style.origin}</p>
                    <p className="mt-2 text-sm text-gray-900">{style.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
