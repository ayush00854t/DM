'use client';

import React from 'react';

const videos = [
  { src: '/videos/video1.mp4', title: '🏠 Real Estate' },
  { src: '/videos/video2.mp4', title: '⌚ Watches' },
  { src: '/videos/video3.mp4', title: '💎 Jewelry' },
  { src: '/videos/video4.mp4', title: '👗 Fashion' },
  { src: '/videos/video5.mp4', title: '🌴 Holidays' },
  { src: '/videos/video6.mp4', title: '🚗 Car' },
];

const VisualShowcase: React.FC = () => {
  return (
    <section
      id="showcase"
      className="w-full min-h-screen py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold">📸 Work</h2>
        <p className="mt-2 text-white/80">
          A glimpse into our high-end productions across industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
          >
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisualShowcase;
