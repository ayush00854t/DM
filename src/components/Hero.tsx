'use client';

import React, { useEffect, useState } from 'react';

const heroContent = [
    {
    heading: 'ABOUT US 👉',
  },
  {
    heading: 'What We Do 😊',
    text: 'In the world of luxury, perception is everything. At AAS Digitech, we specialize in crafting digital marketing experiences that elevate high-end brands and captivate affluent audiences. From precision-targeted campaigns to visually stunning content, we blend storytelling with strategy to ensure your brand not only stands out—but speaks the language of sophistication, exclusivity, and timeless value. Whether you\'re in luxury fashion, real estate, hospitality, or lifestyle, we help you build digital presence with intention, elegance, and measurable results.'
  },
  {
    heading: 'Build a Luxury Brand with us — How?',
    text: 'Our approach goes beyond conventional marketing. We combine in-depth market analysis, audience psychology, and the latest in digital technology to curate bespoke marketing strategies tailored to your brand’s identity. Every touchpoint—from social media to paid advertising, SEO, and web design—is designed to reflect the quality and prestige of your offerings. With a commitment to discretion, creativity, and performance, we position your brand exactly where it belongs: at the top.'
  },
  {
    heading: 'Our Mission',
    text: 'We transform ideas into premium digital experiences, delivering results through data-backed storytelling, curated visuals, and luxury-standard strategies.'
  },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-scroll speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/cor.jpg')",
      }}
    >
      <div className="max-w-4xl px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">{heroContent[currentIndex].heading}</h2>

        <p className={`text-sm md:text-base bg-white/10 backdrop-blur-md px-6 py-4 rounded-md`}>
          {heroContent[currentIndex].text}
        </p>
      </div>

      {/* Right-arrow manual trigger (optional) */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:scale-110 transition"
        aria-label="Next"
      >
        →
      </button>
    </section>
  );
};

export default Hero;
