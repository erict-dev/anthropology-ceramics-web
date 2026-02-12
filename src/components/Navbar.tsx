'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { SHOW_OPEN_STUDIO } from '@/config/features';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
    setHoveredItem('')
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setHoveredItem('')
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-transparent z-20">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 md:px-6 lg:px-8">

        <Link className="block leander text-2xl" href="/">
          olomana studios
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <nav
            id="mobile-nav"
            ref={menuRef}
            aria-label="Global"
            className={`absolute bg-white top-0 left-0 right-0 z-20 p-5 md:static md:bg-transparent md:p-0 md:block ${isMobileMenuOpen ? "block bg-opacity-[0.98]" : "hidden"}`}
          >
            <ul className="leander flex flex-col md:flex-row md:items-center gap-3 md:gap-4 lg:gap-5 text-lg md:text-xl">
              <li onMouseEnter={() => setHoveredItem('about')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block whitespace-nowrap" href="/about" onClick={handleNavItemClick}>about</Link>
              </li>
              <li onMouseEnter={() => setHoveredItem('calendar')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block whitespace-nowrap" href="/calendar" onClick={handleNavItemClick}>calendar</Link>
              </li>
              <li className="relative" onMouseEnter={() => setHoveredItem('classes')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block whitespace-nowrap" href="/classes" onClick={handleNavItemClick}>classes</Link>
                <ul
                  className={`left-0 mt-2 w-48 bg-white md:shadow-md rounded-md md:border ${hoveredItem === 'classes' ? 'md:block' : 'md:hidden'} md:absolute md:z-30`}
                >
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/classes/adult-pottery-group-class-irvine'}
                      onClick={handleNavItemClick}
                    >
                      adult classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/classes/kids-and-family-pottery-irvine'}
                      onClick={handleNavItemClick}
                    >
                      kids classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/classes/4-week-pottery-course-irvine'}
                      onClick={handleNavItemClick}
                    >
                      4 week course
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/classes/private-pottery-event-irvine'}
                      onClick={handleNavItemClick}
                    >
                      private events
                    </Link>
                  </li>
                </ul>

              </li>
              <li className="relative" onMouseEnter={() => setHoveredItem('workshops')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block whitespace-nowrap" href="/workshops" onClick={handleNavItemClick}>workshops</Link>
                <ul
                  className={`left-0 mt-2 w-48 bg-white md:shadow-md rounded-md md:border ${hoveredItem === 'workshops' ? 'md:block' : 'md:hidden'} md:absolute md:z-30`}
                >
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/workshops/matcha-bowl-pottery-workshop-irvine'}
                      onClick={handleNavItemClick}
                    >
                      matcha bowl
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/workshops/ikebana-flower-arrangement-workshop-irvine'}
                      onClick={handleNavItemClick}
                    >
                      ikebana
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/workshops/teapot-pottery-workshop-irvine'}
                      onClick={handleNavItemClick}
                    >
                      teapot
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/workshops/ceramic-charm-workshop-irvine'}
                      onClick={handleNavItemClick}
                    >
                      jewelry charms
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Feature flag: SHOW_OPEN_STUDIO */}
              {SHOW_OPEN_STUDIO && (
              <li className="relative" onMouseEnter={() => setHoveredItem('open-studio')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block whitespace-nowrap" href="/open-studio" onClick={handleNavItemClick}>open studio</Link>
                <ul
                  className={`left-0 mt-2 w-48 bg-white md:shadow-md rounded-md md:border ${hoveredItem === 'open-studio' ? 'md:block' : 'md:hidden'} md:absolute md:z-30`}
                >
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href={'/open-studio'}
                      onClick={handleNavItemClick}
                    >
                      memberships
                    </Link>
                  </li>
                </ul>
              </li>
              )}
              <li className="relative" onMouseEnter={() => setHoveredItem('gift-cards')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block whitespace-nowrap" href="/gift-cards" onClick={handleNavItemClick}>gift cards</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 z-20">
            <button
              ref={buttonRef}
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              className="block rounded text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src="/mobile-menu.png"
                  className="h-8 w-8"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <Image
        alt="line"
        width={1920}
        height={6}
        src="/handdrawn-line.png"
        className="w-full h-1.5"
      />
    </header>
  );
}
