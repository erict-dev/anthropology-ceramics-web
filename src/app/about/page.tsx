import Image from 'next/image';

export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:order-last md:h-full">
            <Image
              alt=""
              src="/about-us-compressed.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>

          <div>
            <h2 className="leander text-black text-3xl font-bold sm:text-5xl">about us</h2>

            <p className="mt-4 text-gray-700">{"Olomana Studios is a ceramics studio founded by Christina and Eric. Together, they are dedicated to creating a space that celebrates the timeless art of pottery and the joy of creative expression."}
            </p>
            <p className="mt-4 text-gray-700">
              {"Welcome to Olomana Studios, a serene ceramics art studio nestled in the heart of sunny Southern California. Founded by Christina and Eric, a dynamic couple who left their corporate careers behind to pursue their passion for pottery, Olomana Studios is a haven for creativity and tranquility. Christina brings a rich background in business consulting and finance. Her journey into the world of ceramics took her from Laguna Beach to the revered pottery hubs of Mashiko and Shigaraki in Japan, and Jingdezhen in China, where she honed her skills under the tutelage of master artisans."}
            </p>
            <p className="mt-4 text-gray-700">{"Eric combines his expertise in tech and design with a deep appreciation for the tangible and the tactile. Having worked for tech giants Eric realized the importance of grounding ourselves in the physical world, away from the constant digital noise. He found his passion in ceramics after being inspired by Christina. Together, they work to create a sanctuary where art and nature converge, offering a moment of peace and reflection in our hectic lives."}
            </p>

          </div>
        </div>

        <h4 className="leander text-3xl font-bold sm:text-5xl mt-8 md:mt-16 text-black">our studio</h4>
        <p className="mt-4 mb-4 text-gray-700">
          {"Nestled in the heart of Southern California, Olomana Studios is a place where tradition meets innovation. Our studio is a labor of love, built by Christina and Eric to foster creativity and community. Surrounded by abundant greenery, the studio is a perfect escape from the hustle and bustle of everyday life. Here, we create unique ceramic art pieces, inspired by our travels and experiences around the world. We also offer classes, participate in art fairs, galleries, and markets, bringing the beauty and serenity of ceramics to a wider audience."}
        </p>
        <div className="relative h-64 mt-4 mb-4">
          <Image
            alt=""
            src="/home-studio-2-compressed.JPG"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>

        <div className="relative h-64 mb-4">
          <Image
            alt=""
            src="/home-studio-1-compressed.JPG"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <div className="relative h-64 mb-4">
          <Image
            alt=""
            src="/home-studio-3-compressed.JPG"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <div className="relative h-64 mb-4">
          <Image
            alt=""
            src="/home-studio-4-compressed.JPG"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <h4 className="leander text-3xl font-bold sm:text-5xl mt-8 md:mt-16 text-black">contact</h4>
        <p className="mt-4 mb-4 text-gray-700">
          {"We're always happy to hear from you so if you have any questions about our ceramics, our studio, classes, collaborations or events, please get in touch! Our email is: olomanastudios@gmail.com."}
        </p>
      </div>
    </section>
  );
}

