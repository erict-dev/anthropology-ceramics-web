import Image from 'next/image';

export default function Classes() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="leander text-black text-3xl font-bold sm:text-5xl">classes</h2>
        </div>
        <div className="flex flex-row gap-x-4">
          <article
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
              <time datetime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
                10th Oct 2022
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
              </p>
            </div>
          </article>


          <article
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
              <time datetime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
                10th Oct 2022
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
              </p>
            </div>
          </article>
        </div>
        <div className="mt-8 md:mt-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-5xl text-black leander">our philosophy</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 rounded-lg overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt=""
                src="/pottery.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>

            <div className="lg:py-4">
              <article className="space-y-4 text-gray-600">
                <p>
                  {"At Screen Free Summer Camp, we cherish the simple joys of childhood. Our camp provides a sanctuary for kids to unplug from digital screens and engage with the natural world. Activities like crafting pottery teach children to appreciate life's simpler pleasures and foster curiosity."}
                </p>

                <p>{"We prioritize a relaxed environment over competition, focusing on play, teamwork, and self-discovery. This approach helps cultivate resilience and creativity, equipping kids with the confidence to face life's challenges. Join us for a summer of fun and learning, where kids can just be kids!"}</p>

                <p>{"We prioritize a relaxed environment over competition, focusing on play, teamwork, and self-discovery. This approach helps cultivate resilience and creativity, equipping kids with the confidence to face life's challenges. Join us for a summer of fun and learning, where kids can just be kids!"}</p>

              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

