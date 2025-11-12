'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
    setHoveredItem('')
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setHoveredItem('')
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
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
            ref={menuRef}
            aria-label="Global"
            className={`absolute bg-white top-0 left-0 right-0 z-20 p-5 md:static md:bg-transparent md:p-0 md:block ${isMobileMenuOpen ? "block bg-opacity-[0.98]" : "hidden"}`}
          >
            <ul className="leander flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-xl">
              <li onMouseEnter={() => setHoveredItem('about')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/about" onClick={handleNavItemClick}>about</Link>
              </li>
              <li onMouseEnter={() => setHoveredItem('calendar')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/calendar" onClick={handleNavItemClick}>calendar</Link>
              </li>
              <li className="relative" onMouseEnter={() => setHoveredItem('classes')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/classes" onClick={handleNavItemClick}>classes</Link>
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
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/workshops" onClick={handleNavItemClick}>workshops</Link>
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
                </ul>
              </li>
              <li className="relative" onMouseEnter={() => setHoveredItem('open-studio')}>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/open-studio" onClick={handleNavItemClick}>open studio</Link>
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
            </ul>
          </nav>

          <div className="flex items-center gap-4 z-20">
            <button
              onClick={toggleMobileMenu}
              className="block rounded text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <Image
                width={100}
                height={100}
                alt="mobile-menu-icon"
                src="/mobile-menu.png"
                className="h-8 w-8"
              />
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
