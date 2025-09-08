import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function OpenStudioMembership() {
  return (
    <div>
      <Head>
        <title>Pottery Open Studio in Irvine | Olomana Studios</title>
        <meta
          name="description"
          content="Olomana Studios open studio membership spots are limited due to our small studio space and focus on a quality experience. If you're interested, email olomanastudios@gmail.com."
        />
      </Head>

      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 pb-0 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Pottery Open Studio Memberships in Irvine
          </h1>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Our open studio memberships spots are limited and invite-only due to our small studio space and our focus on a high-quality experience for every student and member. If you’re interested in being considered, please email <strong className="underline">olomanastudios@gmail.com</strong>.
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
        </div>
      </section>

      {/* Offerings (Invite-Only) */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
          <div className="border rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800">Handbuilding Ceramics Membership</h2>
            <p className="mt-2 text-gray-700">
              For artists who prefer handbuilding and want to be part of a small, supportive community.
            </p>
            <p className="mt-4 text-xl font-semibold text-gray-900">
              $185/month <span className="text-sm font-normal">+ $25 initiation fee</span>
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ Access during designated open studio hours (handbuilding)</li>
              <li>✓ 1 × 25lb bag of clay &amp; wetbox</li>
              <li>✓ Use of studio tools, handbuilding tables, and brushing glazes</li>
              <li>✓ Half shelf/month for firing (Cone 5/6)</li>
            </ul>
            <p className="mt-6 text-gray-600">
              email <strong>olomanastudios@gmail.com</strong> to request an invite
            </p>
          </div>

          <div className="border rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800">Open Studio Membership</h2>
            <p className="mt-2 text-gray-700">
              For experienced potters seeking flexible, independent practice time and want to be a part of a small artist community.
            </p>
            <p className="mt-4 text-xl font-semibold text-gray-900">
              $224/month <span className="text-sm font-normal">+ $25 initiation fee</span>
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ Open studio access during business hours</li>
              <li>✓ 1 × 25lb bag of clay &amp; wetbox</li>
              <li>✓ Use of studio wheels, tools, handbuilding tables, and glazes</li>
              <li>✓ Half shelf/month for firing (Cone 5/6)</li>
            </ul>
            <p className="mt-6 text-gray-600">
              email <strong>olomanastudios@gmail.com</strong> to request an invite
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Join Our Pottery Studio?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            We keep memberships intentionally small to protect a calm, focused atmosphere where you can grow your craft. If our approach resonates with you, reach out at{" "}
            <a className="underline" href="mailto:olomanastudios@gmail.com">olomanastudios@gmail.com</a>.
          </p>
          <div className="mt-8">
            <a
              href="https://olomanastudios.as.me"
              className="inline-block rounded-lg bg-black px-8 py-3 text-white text-lg font-medium transition duration-300 hover:bg-gray-700"
            >
              View Classes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
