import Image from 'next/image';

export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src="/about-us.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>

          <div>
            <h2 className="leander text-black text-3xl font-bold sm:text-5xl">about us</h2>

            <p className="mt-4 text-gray-700">{"Anthropology Ceramics is a family-run ceramics studio founded by Christina and Eric. Together, they are dedicated to creating a space that celebrates the timeless art of pottery and the joy of creative expression."}
            </p>
            <p className="mt-4 text-gray-700">
              {"Christina develops her creative expressions through pottery, woodcarving, and drawing, from the parks in Milan to the markets in Oaxaca. As a management consultant turned ceramicist, she understands the importance of creativity and imagination in solving business problems and appreciating life. Trained in ceramics in Laguna Beach, Christina recently expanded her expertise by learning traditional pottery techniques in Japan and China, including firing, throwing, hand-building, and glazing. At the Ceramics Kids Summer Camp, Christina shares her love for pottery by guiding children through creative and fun activities. To see her work and follow her ceramics journey, visit her Instagram: @anthropology_ceramics."}
            </p>
            <p className="mt-4 text-gray-700">{"Eric fondly remembers a childhood in Irvine spent exploring outdoors and learning through play—long before smartphones and social media redefined recreation. As a software engineer at companies like Apple, Amazon, and Meta, he saw technology's benefits but also its overwhelming influence on young minds. This realization inspired him to create Screen Free Summer Camp. Passionate about reviving the classic camp experience, Eric is dedicated to giving kids a summer like those of the past—filled with adventure, imagination, and real-world interactions. His mission is to help children rediscover the joy of exploring, celebrating the curiosity and wonder that come naturally when screens are switched off."}
            </p>

          </div>
        </div>

        <h4 className="leander text-3xl font-bold sm:text-5xl mt-8 md:mt-16 text-black">our studio</h4>
        <p className="mt-4 mb-4 text-gray-700">
          {"At Anthropology Ceramics, we believe that art is a universal language that transcends borders and connects us all. Our studio is a sanctuary for artists of all levels, from curious beginners to seasoned professionals, offering a space where imagination and craftsmanship flourish. Join us in exploring the rich traditions and techniques of pottery from around the world. Whether you’re participating in one of our immersive workshops, attending a community event, or simply visiting to appreciate the beauty of handcrafted ceramics, you’ll find a welcoming environment that inspires and nurtures your artistic journey. Experience the joy of creating with your hands, the thrill of mastering new skills, and the satisfaction of producing something truly unique. At Anthropology Ceramics, we are more than just a studio—we are a community united by a shared passion for art and culture. Come, create, and connect with us."}
        </p>
        <div className="relative h-64 mt-4 mb-4">
          <Image
            alt=""
            src="/home-studio-2.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>

        <div className="relative h-64 mb-4">
          <Image
            alt=""
            src="/home-studio-1.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <div className="relative h-64 mb-4">
          <Image
            alt=""
            src="/home-studio-3.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <div className="relative h-64 mb-4">
          <Image
            alt=""
            src="/home-studio-4.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

