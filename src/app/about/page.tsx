import Link from 'next/link';
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

            <p className="mt-4 text-gray-700">
              {"Olomana Studios is a ceramics studio founded by Christina and her partner, Eric, in Irvine, CA. Together, they are dedicated to creating a space that celebrates the timeless art of pottery and the joy of creative expression."}
            </p>
            <p className="mt-4 text-gray-700">
              {"Welcome to Olomana Studios, a serene ceramics art studio nestled in the heart of sunny Southern California. Founded by Christina and Eric, Olomana Studios is a haven where art, nature, and tranquility converge. Christina's journey into ceramics has taken her from Laguna Beach to the pottery villages of Mashiko and Shigaraki in Japan, and Jingdezhen in China, where she apprenticed under master ceramicists Hozan Tanii, Tomoko Yamato, and Changcai Zhang. She draws inspiration from her time living in Japan’s mountains, crafting functional pieces that embody simplicity and interconnectedness."}
            </p>
            <p className="mt-4 text-gray-700">
              {"Eric combines his expertise in tech and design with a deep appreciation for the tangible and the tactile. Having worked for tech giants Eric realized the importance of grounding ourselves in the physical world, away from the constant digital noise. He found his passion in ceramics after being inspired by Christina. Together, they work to create a sanctuary where art and nature converge, offering a moment of peace and reflection in our hectic lives."}
            </p>
          </div>
        </div>

        <h4 className="leander text-3xl font-bold sm:text-5xl mt-8 md:mt-16 text-black">our studio</h4>
        <p className="mt-4 mb-4 text-gray-700">
          {"Nestled in the heart of Southern California, Olomana Studios is a place where tradition meets innovation. Our studio is a labor of love, built by Christina and Eric to foster creativity and community. Situated in a historic building in Old Town Irvine, the studio is a perfect escape from the hustle and bustle of everyday life. Here, we create unique ceramic art pieces, inspired by our travels and experiences around the world. We also offer classes, participate in art fairs, galleries, and markets, bringing the beauty and serenity of ceramics to a wider audience."}
        </p>
        <div className="relative h-96 mt-4 mb-4">
          <Image
            alt=""
            src="/olomana-irvine-pottery-studio/olomana-studios-irvine-pottery-studio.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>

        <div className="relative h-96 mb-4">
          <Image
            alt=""
            src="/olomana-irvine-pottery-studio/olomana-studios-irvine-pottery-studio-tools.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <div className="relative h-96 mb-4">
          <Image
            alt=""
            src="/olomana-irvine-pottery-studio/irvine-pottery-studio-wheels.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <div className="relative h-96 mb-4">
          <Image
            alt=""
            src="/olomana-irvine-pottery-studio/olomana-studios-greenware-pottery.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <div className="mt-8 md:mt-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-5xl text-black leander">our philosophy</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 rounded-lg overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt=""
                src="/pottery.JPG"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>

            <div className="lg:py-4">
              <article className="space-y-4 text-gray-600">
                <p>
                  {"At Olomana Studios, our philosophy is deeply intertwined with our personal journeys and the timeless traditions of ceramics. We believe that art is not just a form of expression, but a way of connecting with the world and with each other. Our work is a reflection of the places we’ve been, the cultures we’ve experienced, and the beauty we see in everyday life. Embracing the ancient techniques of pottery from Japan and China, we infuse our creations with a sense of tradition and authenticity, focusing on the process as much as the final product. Each piece we craft tells a story, evokes emotions, and invites contemplation, offering a moment of peace in our hectic lives."}
                </p>
                <p>{"In today’s fast-paced digital world, it’s easy to lose touch with the tangible and the tactile. At our studio, we strive to create an environment where people can reconnect with their senses and with each other. Our ceramics are designed to celebrate life’s simplest and most beautiful moments: a shared meal, a quiet moment in nature, the warmth of a handmade cup. By focusing on simple, elegant designs, we hope to enhance your daily life, bring a sense of calm, and remind you to appreciate the little things. Committed to sustainability, we use locally sourced materials and mindful practices, ensuring that our art is not only beautiful but also respectful of the earth. Join us at Olomana Studios, where tradition meets innovation, and every piece tells a story."}</p>
              </article>
            </div>
          </div>
        </div>
        <h4 className="leander text-3xl font-bold sm:text-5xl mt-8 md:mt-16 text-black">contact</h4>
        <p className="mt-4 mb-4 text-gray-700">
          {"We're always happy to hear from you so if you have any questions about our ceramics, our studio, classes, collaborations or events, please get in touch! Our email is: contact@olomanastudios.com."}
        </p>
        <p className="mt-4 mb-4 text-gray-700">
          We are located at 14988 Sand Canyon Ave Studio 6, Irvine, CA 92618. See our <Link href="https://share.google/YVWMAyRy8UHpgOVam" target="_blank">Google Maps</Link> listing for the most up to date hours. We are closed Mondays and Tuesday.
        </p>
      </div>
    </section>
  );
}

