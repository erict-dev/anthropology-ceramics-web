import Image from 'next/image';

export default function Classes() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <h2 className="leander text-black text-3xl font-bold sm:text-5xl">pottery classes</h2>
          <p className="mt-4 text-black">Come join us for a pottery class! We host group pottery classes in our beautiful home backyard studio located in Quail Hill in Irvine, CA. If you have questions about our class or want to book a private class for your family, friend group or organization, feel free to email us at olomanastudios@gmail.com.</p>
        </div>
        <div className="flex flex-col gap-y-4 md:flex-row gap-x-4">
          <a href="https://olomanaceramics.classly.com/classes">
            <article
              className="overflow-hidden rounded-lg shadow transition hover:shadow-lg shadow-gray-700/25"
            >
              <img
                alt=""
                src="/adult-classes.jpg"
                className="h-64 w-full object-cover"
              />

              <div className="p-4 sm:p-6 bg-gray-900 h-full">
                <h3 className="mt-0.5 text-lg text-gray-900 text-white">
                  Pottery Group Class (Adults)
                </h3>

                <p className="mt-2 text-sm/relaxed text-gray-500 text-gray-400">{"Learn and create your own pottery with our group classes. Enjoy a beautiful hour throwing and glazing your own ceramics. It's a great way to relax, learn something new and create unique, beautiful pieces that you can use at home."}</p>
              </div>
            </article>
          </a>
          <a href="https://olomanaceramics.classly.com/classes">
            <article
              className="overflow-hidden rounded-lg shadow transition hover:shadow-lg shadow-gray-700/25"
            >
              <img
                alt=""
                src="kids-class.JPG"
                className="h-64 w-full object-cover"
              />

              <div className="p-4 sm:p-6 bg-gray-900 h-full">
                <h3 className="mt-0.5 text-lg text-gray-900 text-white">Kids and Families Pottery Class</h3>

                <p className="mt-2 text-sm/relaxed text-gray-500 text-gray-400">{"Kids love our pottery classes! The class is all about sparking creativity and joy. We encourage and empower your child to exercise their innate creativity and your kids will have a blast exploring hand-building pottery and ceramics. Parents also welcome to attend this class with their kids and makes for a wonderful family event."}</p>
              </div>
            </article>
          </a>
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
                <p>{"In today’s fast-paced digital world, it’s easy to lose touch with the tangible and the tactile. At our studio, we strive to create an environment where people can reconnect with their senses and with each other. Our ceramics are designed to celebrate life’s simplest and most beautiful moments—a shared meal, a quiet moment in nature, the warmth of a handmade cup. By focusing on simple, elegant designs, we hope to enhance your daily life, bring a sense of calm, and remind you to appreciate the little things. Committed to sustainability, we use locally sourced materials and mindful practices, ensuring that our art is not only beautiful but also respectful of the earth. Join us at Olomana Studios, where tradition meets innovation, and every piece tells a story."}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

