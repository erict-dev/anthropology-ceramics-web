import Image from 'next/image';

export default function Gallery() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="leander text-3xl font-bold text-gray-900 sm:text-5xl">hakeme collection</h2>

          <p className="mt-4 text-black">Explore our hakeme collection, a celebration of the natural world and the art of tea. Each piece in this collection is crafted with care and intention, reflecting the diverse landscapes and cultures that inspire us. From the earthy tones of Mashiko to the delicate glazes of Jingdezhen, our ceramics invite you to slow down and savor the simple moments. Whether you’re enjoying a quiet tea ceremony or adding a touch of elegance to your home, our collection offers a perfect blend of beauty and functionality.</p>
        </header>

        <ul className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/gallery/hakeme/small-cup.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/gallery/hakeme/large-cup.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/gallery/hakeme/med-cup.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/gallery/hakeme/teapot.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
            </a>
          </li>
          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/gallery/hakeme/bowl.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="rounded-lg group block overflow-hidden">
              <img
                src="/gallery/hakeme/mug.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

