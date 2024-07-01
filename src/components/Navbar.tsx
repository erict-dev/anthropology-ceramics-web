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
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-transparent z-20">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

        <Link className="block leander text-xl" href="/">
          anthropology ceramics
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <nav
            ref={menuRef}
            aria-label="Global"
            className={`absolute bg-white top-0 left-0 right-0 z-20 p-5 border-b-4 ${isMobileMenuOpen ? "border-pink-500" : "border-transparent"} md:static md:bg-transparent md:p-0 md:block md:border-0 ${isMobileMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="leander flex flex-col md:flex-row md:items-center gap-6 text-xl">
              <li>
                <Link className="text-gray-700 transition hover:text-gray-500/75" href="/about" onClick={closeMobileMenu}>about</Link>
              </li>
              <li>
                <Link className="text-gray-700 transition hover:text-gray-500/75" href="/gallery" onClick={closeMobileMenu}>gallery</Link>
              </li>
              <li>
                <Link className="text-gray-700 transition hover:text-gray-500/75" href="/classes" onClick={closeMobileMenu}>classes</Link>
              </li>
              <li>
                <Link className="text-gray-700 transition hover:text-gray-500/75" href="/shop" onClick={closeMobileMenu}>shop</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 z-20">
            <button
              onClick={toggleMobileMenu}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
