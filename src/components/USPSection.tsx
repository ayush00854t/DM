'use client';

import React from 'react';

const usps = [
  {
    title: '📊 Data-Driven',
    description: 'We analyze metrics deeply to drive real ROI, not vanity numbers.',
  },
  {
    title: '🎯 Storytelling Focused',
    description: 'We turn your brand into an emotional experience with content that resonates.',
  },
  {
    title: '🤝 Trusted by HNIs',
    description: 'We’ve helped high-net-worth individuals grow personal and business brands.',
  },
  {
    title: '🌍 Global Vision, Boutique Attention',
    description: 'We think big, act personally. Every client gets tailored strategy and care.',
  },
];

const USPSection: React.FC = () => {
  return (
    <section
      id="usp"
      className="w-full h-screen bg-cover bg-center relative flex items-center px-6 py-20"
      style={{
        backgroundImage: "url('earth/A.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center w-full text-white z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">🧠 Why Work With Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
              <p className="text-sm text-gray-300">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
