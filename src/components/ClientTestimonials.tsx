'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Riya Mehta',
    company: 'The Luxe Address',
    photo: '/clients/riya.jpg',
    quote: 'Working with AAS Digitech was a game-changer. Our leads tripled in 2 months!',
  },
  {
    name: 'Arjun Kapoor',
    company: 'Elegance Timepieces',
    photo: '/clients/arjun.jpg',
    quote: 'Their visual storytelling and ad creatives are unmatched. Highly recommended!',
  },
  {
    name: 'Meher Singh',
    company: 'Meher Fine Jewelry',
    photo: '/clients/meher.jpg',
    quote: 'We saw a 220% jump in engagement after partnering with them. Exceptional service.',
  },
];

const ClientTestimonials: React.FC = () => {
  return (
    <section
      className="w-full h-screen bg-black text-white py-20 px-6 flex flex-col items-center justify-center space-y-10"
      id="testimonials"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">🌟 Client Testimonials</h2>

      <div className="overflow-y-auto max-h-[65vh] w-full max-w-4xl space-y-6 px-4 scrollbar-hide">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg animate-fade-in-up opacity-0 animate-delay-200"
            style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'forwards' }}
          >
            <div className="flex items-center space-x-4 mb-4">
              {t.photo && (
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white"
                />
              )}
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-300">{t.company}</p>
              </div>
            </div>
            <p className="text-sm text-gray-200 italic">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
