'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mouseup', handleClickOutside);
    } else {
      document.removeEventListener('mouseup', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-transparent z-20">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

        <Link className="block leander text-2xl" href="/">
          anthropology ceramics
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <nav
            ref={menuRef}
            aria-label="Global"
            className={`absolute bg-white top-0 left-0 right-0 z-20 p-5 sm:static sm:bg-transparent sm:p-0 sm:block ${isMobileMenuOpen ? "block bg-opacity-[0.98]" : "hidden"}`}
          >
            <ul className="leander flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xl">
              <li>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/about" onClick={closeMobileMenu}>about</Link>
              </li>
              <li>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/gallery" onClick={closeMobileMenu}>gallery</Link>
              </li>
              <li>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/classes" onClick={closeMobileMenu}>classes</Link>
              </li>
              <li>
                <Link className="text-gray-700 transition hover:text-gray-500/75 block" href="/shop" onClick={closeMobileMenu}>shop</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 z-20">
            <button
              onClick={toggleMobileMenu}
              className="block rounded text-gray-600 transition hover:text-gray-600/75 sm:hidden"
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
