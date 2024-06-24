// pages/Home.jsx
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
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
  );
};

export default Home;
