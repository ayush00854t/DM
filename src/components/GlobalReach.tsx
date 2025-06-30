'use client';

import React from 'react';
import Image from 'next/image';

const GlobalReach: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden" id="reach">
      {/* Globe Background */}
      <Image
        src="/globe.jpg"
        alt="World Map"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4 z-10">🌍 Global Reach</h2>
        <p className="text-lg max-w-2xl z-10">
          We’ve worked with high-end brands in <strong>12+ countries</strong>, helping them scale with strategy, creativity, and global impact.
        </p>
      </div>

      {/* Pin Animations (Adjusted to glowing areas on the image) */}
      <div className="absolute top-[28%] left-[22%] w-3 h-3 bg-red-500 rounded-full animate-ping z-10"></div>   {/* US */}
      <div className="absolute top-[42%] left-[47%] w-3 h-3 bg-blue-400 rounded-full animate-ping z-10"></div>  {/* Europe */}
      <div className="absolute top-[52%] left-[75%] w-3 h-3 bg-green-400 rounded-full animate-ping z-10"></div> {/* India */}
      <div className="absolute top-[65%] left-[35%] w-3 h-3 bg-yellow-400 rounded-full animate-ping z-10"></div> {/* South America */}
      <div className="absolute top-[55%] left-[85%] w-3 h-3 bg-pink-400 rounded-full animate-ping z-10"></div>  {/* SE Asia */}
      <div className="absolute top-[25%] left-[70%] w-3 h-3 bg-purple-400 rounded-full animate-ping z-10"></div> {/* Russia */}
      <div className="absolute top-[75%] left-[80%] w-3 h-3 bg-white rounded-full animate-ping z-10"></div>     {/* Australia */}
    </section>
  );
};

export default GlobalReach;
