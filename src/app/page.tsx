// pages/Home.jsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 p-4 z-10">
        <Link href="/">
            anthropology ceramics
        </Link>
      </div>
      <Navbar />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[1200px] max-h-[800px] aspect-[3/2]">
          <Image
            src="/large-logo.jpg"
            alt="Centered logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
