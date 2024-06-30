// pages/Home.jsx
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="home-background absolute top-0">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-[540px] aspect-[3/2]">
          <Image
            src="/transparent-logo.png"
            alt="Centered logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-2xl md:text-5xl leander">anthropology ceramics</h2>
      </div>
    </div>
  );
};

export default Home;
