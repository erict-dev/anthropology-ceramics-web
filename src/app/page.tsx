import React from 'react';
import Image from 'next/image';

const customOffset = "-87px"

const Home = () => {
  return (
    <div className={`flex flex-col min-h-screen mb-[${customOffset}]`}>
      {/* Splash Screen */}
      <div className={`home-background flex flex-col items-center justify-center h-screen relative top-[${customOffset}]`}>
        <div className="relative w-full max-w-[680px] aspect-[3/2]">
          <Image
            src="/ac-logo-character-compressed.png"
            alt="Centered logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-3xl md:text-5xl leander mt-4">olomana studios</h2>
      </div>
      {/* Content below splash */}
    </div>
  );
};

export default Home;

