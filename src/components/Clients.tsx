'use client';

import React from 'react';

const clientLogos = [
  { src: '/clients/client1.png', alt: 'Client One' },
  { src: '/clients/client2.png', alt: 'Client Two' },
  { src: '/clients/client3.png', alt: 'Client Three' },
  { src: '/clients/client4.png', alt: 'Client Four' },
  // Add more clients as needed
];

const Clients: React.FC = () => {
  return (
    <section
      id="clients"
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/cimg.png')",
      }}
    >
      <div className="text-center px-6 mt-[-3rem]">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
          Our Clients
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Proudly working with these esteemed clients
        </p>
        <div className="flex flex-wrap justify-center gap-y-12 gap-x-16">
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-xl w-52 h-36 flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
