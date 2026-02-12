/**
 * Client component for the Ceramic Charm Workshop page.
 * Bold, color-blocked design inspired by Linktree's editorial aesthetic.
 * Uses CSS-only animations (wiggle, fade-in, float) via style jsx.
 * Targeted at a younger audience (18-26) with vibrant but tasteful energy.
 */
'use client';

import React from 'react';
import Image from 'next/image';

export default function CharmWorkshopContent() {
  return (
    <div>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg) scale(1); }
          25% { transform: rotate(2.5deg) scale(1.02); }
          50% { transform: rotate(-2deg) scale(1); }
          75% { transform: rotate(3deg) scale(1.01); }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .anim-fade-up {
          animation: fadeInUp 0.6s ease-out both;
        }
        .anim-fade-up-d1 {
          animation: fadeInUp 0.6s ease-out 0.12s both;
        }
        .anim-fade-up-d2 {
          animation: fadeInUp 0.6s ease-out 0.24s both;
        }
        .anim-fade-up-d3 {
          animation: fadeInUp 0.6s ease-out 0.36s both;
        }
        .anim-fade-up-d4 {
          animation: fadeInUp 0.6s ease-out 0.48s both;
        }
        .charm-wiggle {
          animation: wiggle 3s ease-in-out infinite;
          border-radius: 48% 52% 44% 56% / 52% 46% 54% 48%;
        }
        .anim-float {
          animation: gentleFloat 3s ease-in-out infinite;
        }
        .charm-cta {
          position: relative;
          overflow: hidden;
        }
        .charm-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          background-size: 200% 100%;
          animation: shimmer 2.5s ease-in-out infinite;
        }
        .charm-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
        }
        .step-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.10);
        }
      `}</style>

      {/* ── Hero ── multi-color splash background with wiggling charm */}
      <section style={{ background: '#f3d390' }}>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Wiggling charm image — first on mobile, right on desktop */}
            <div className="anim-fade-up-d2 flex justify-center order-1 md:order-2">
              <div
                className="charm-wiggle relative overflow-hidden w-[288px] h-[288px] sm:w-[360px] sm:h-[360px]"
              >
                <Image
                  src="/workshops/3-charms-workshop-irvine-pottery.jpg"
                  alt="Three handmade ceramic charms from a charm making workshop in Irvine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 520px) 240px, 300px"
                  priority
                />
              </div>
            </div>

            {/* Text — second on mobile, left on desktop */}
            <div className="order-2 md:order-1">
              <p className="anim-fade-up text-sm font-bold uppercase tracking-widest" style={{ color: '#7a3b2e' }}>
                Ceramic Jewelry Making Workshop in Irvine
              </p>
              <h1 className="anim-fade-up-d1 leander mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]" style={{ color: '#3d1c12' }}>
                Charm Making Workshop
              </h1>
              <p className="anim-fade-up-d2 mt-5 text-lg sm:text-xl leading-relaxed" style={{ color: '#5c2e1f' }}>
                Make <strong>3 handmade ceramic charms</strong> in this 1-hour charm making workshop in Irvine.
                Sculpt your own pendants, keychains, and miniature figures from clay, then paint them
                however you like. All materials and kiln firing included.
              </p>

              {/* Pills */}
              <div className="anim-fade-up-d3 mt-6 flex flex-wrap gap-2.5">
                {[
                  { label: '1 hour', bg: '#fce4ec', color: '#7a3b2e' },
                  { label: '3 charms', bg: '#e0f2f1', color: '#2d4a3e' },
                  { label: 'All levels', bg: '#e8dff5', color: '#4a2d73' },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="rounded-full px-4 py-1.5 text-sm font-semibold"
                    style={{ background: tag.bg, color: tag.color }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="anim-fade-up-d4 mt-8">
                <a
                  href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/89051684/calendar/12365772"
                  className="charm-cta inline-block rounded-full px-10 py-3.5 text-lg font-semibold transition-all duration-300"
                  style={{ background: '#3d1c12', color: '#f5ddd0' }}
                >
                  Book Your Spot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Color block: What You Make ── deep sage green */}
      <section style={{ background: '#2d4a3e' }}>
        <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Workshop image — first on mobile, left on desktop */}
            <div className="rounded-3xl overflow-hidden relative h-72 sm:h-80 md:h-96">
              <Image
                src="/workshops/irvine-clay-jewlery-workshop.jpg"
                alt="Handmade ceramic charms from a clay jewelry workshop in Irvine"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: '#a8e6cf' }}
              >
                Handmade Ceramic Charms,<br />Designed by You
              </h2>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: '#c8ddd2' }}>
                Each ceramic charm is 1–2 inches of pure creativity. In this ceramic jewelry making class
                in Irvine you will sculpt miniature animals, flowers, letters, food, abstract
                shapes, anything you can imagine. Then paint them with colorful underglazes
                to make one-of-a-kind wearable art.
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: '#c8ddd2' }}>
                Our instructors guide every step. No pottery or ceramic jewelry making experience needed.
                After class we kiln-fire your ceramic charms so they become durable,
                glossy keepsakes you can pick up in about 4 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── warm cream with colored cards */}
      <section style={{ background: '#faf4ef' }}>
        <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <h2
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: '#6b3fa0' }}
          >
            How It Works
          </h2>
          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                step: '1',
                title: 'Shape',
                desc: 'Roll, pinch, and sculpt clay into 3 ceramic charm shapes. Think cute animals, geometric pendants, tiny food, initials, whatever you want.',
                bg: '#e8c4b0',
                accent: '#7a3b2e',
                text: '#5c2e1f',
              },
              {
                step: '2',
                title: 'Paint',
                desc: 'Use colorful underglazes to add patterns, faces, and fine details. Mix and match our full palette to your heart\'s content.',
                bg: '#c9b8e0',
                accent: '#4a2d73',
                text: '#3a2459',
              },
              {
                step: '3',
                title: 'Collect',
                desc: 'We glaze and fire your handmade charms until they\'re strong and glossy. Pick them up in about 4 weeks, ready to wear, attach, or gift.',
                bg: '#b5d8c7',
                accent: '#2d4a3e',
                text: '#1f3a2e',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="step-card rounded-3xl p-7 sm:p-8"
                style={{ background: item.bg }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white"
                  style={{ background: item.accent }}
                >
                  {item.step}
                </div>
                <h3
                  className="mt-5 text-xl sm:text-2xl font-bold"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: item.text }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perfect For ── rich lavender */}
      <section style={{ background: '#c9b8e0' }}>
        <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Workshop image — first on mobile, right on desktop */}
            <div className="rounded-3xl overflow-hidden relative h-72 sm:h-80 md:h-96 order-1 md:order-2">
              <Image
                src="/workshops/charms-collection-ceramic-workshop-irvine.jpg"
                alt="Collection of handmade ceramic charms from a charm making workshop in Irvine"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-2 md:order-1">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: '#2a1545' }}
              >
                A Ceramic Jewelry Class for Every Occasion
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  { bold: 'Date nights', rest: ': create matching charms together' },
                  { bold: 'Friend hangouts', rest: ': make a fun memories and fun charms' },
                  { bold: 'Birthday parties', rest: ': everyone leaves with a keepsake' },
                  { bold: 'Solo creative time', rest: ': a relaxing escape from screens' },
                ].map((item) => (
                  <li key={item.bold} className="flex items-start gap-3 text-lg" style={{ color: '#3a2060' }}>
                    <span
                      className="mt-2 shrink-0 block h-3 w-3 rounded-full"
                      style={{ background: '#6b3fa0' }}
                    />
                    <span><strong>{item.bold}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery placeholders ── coral/peach */}
      <section style={{ background: '#f0d9c8' }}>
        <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <h2
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: '#7a3b2e' }}
          >
            Ceramic Charm Ideas
          </h2>
          <p className="mt-3 text-center text-lg" style={{ color: '#9e5d4a' }}>
            These are just starting points. In our charm making workshop you can create anything you imagine.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'Tiny Animals', emojis: '\u{1F430}\u{1F431}\u{1F43B}', bg: '#2d4a3e', color: '#a8e6cf' },
              { label: 'Initials & Letters', emojis: '\u{1F48C}\u{2728}\u{1F380}', bg: '#6b3fa0', color: '#e0d0f5' },
              { label: 'Mini Food', emojis: '\u{1F353}\u{1F369}\u{1F366}', bg: '#c26840', color: '#fde8d8' },
              { label: 'Flowers & Plants', emojis: '\u{1F33B}\u{1F338}\u{1F337}', bg: '#b5547a', color: '#fce0eb' },
              { label: 'Hearts & Stars', emojis: '\u{1F496}\u{2B50}\u{1FA77}', bg: '#2a5fa0', color: '#d0e4ff' },
              { label: 'Abstract Shapes', emojis: '\u{1F300}\u{1FAA9}\u{1F52E}', bg: '#3d1c12', color: '#e8c4b0' },
            ].map((item) => (
              <div
                key={item.label}
                className="step-card rounded-2xl py-8 sm:py-10 px-4 flex flex-col items-center text-center"
                style={{ background: item.bg }}
              >
                <span className="text-2xl sm:text-3xl mb-2 flex gap-1" aria-hidden="true">{item.emojis}</span>
                <p className="text-base sm:text-lg font-bold" style={{ color: item.color }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Important Details ── deep clay */}
      <section style={{ background: '#3d1c12' }}>
        <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: '#e8c4b0' }}
          >
            Charm Workshop Details
          </h2>
          <ul className="mt-8 space-y-4 text-lg" style={{ color: '#d4a895' }}>
            <li><strong style={{ color: '#f5ddd0' }}>Location:</strong> Olomana Studios, 14988 Sand Canyon Ave Studio 6, Irvine CA 92618</li>
            <li><strong style={{ color: '#f5ddd0' }}>Duration:</strong> 1 hour</li>
            <li><strong style={{ color: '#f5ddd0' }}>What You Make:</strong> 3 ceramic charms (1 to 2 inches each), any shapes you like</li>
            <li><strong style={{ color: '#f5ddd0' }}>Includes:</strong> All clay, underglazes, tools, and kiln firing. Nothing extra to buy.</li>
            <li><strong style={{ color: '#f5ddd0' }}>Charm Pickup:</strong> Your finished ceramic charms will be ready in approximately 4 weeks</li>
            <li><strong style={{ color: '#f5ddd0' }}>What to Wear:</strong> Comfortable clothes you don&apos;t mind getting a little clay on</li>
            <li><strong style={{ color: '#f5ddd0' }}>Skill Level:</strong> No experience needed. This charm making class is completely beginner-friendly.</li>
          </ul>
          <div className="mt-10 text-center">
            <a
              href="https://olomanastudios.as.me/schedule/66629c2c/category/Special%2520Workshops/appointment/89051684/calendar/12365772"
              className="charm-cta inline-block rounded-full px-10 py-4 text-lg font-semibold transition-all duration-300"
              style={{ background: '#e8c4b0', color: '#3d1c12' }}
            >
              Book Your Workshop
            </a>
            <p className="mt-4 text-base" style={{ color: '#a88070' }}>
              Our Irvine charm making workshop is perfect for a creative day out with friends, a unique date, or some solo me-time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
