'use client';
import React from 'react';

const servicesData: { title: string; description: string }[] = [
  { title: "SEO & SEM", description: "Boost your visibility on search engines and attract high-quality organic traffic." },
  { title: "Social Media Marketing", description: "Engage your audience and build a strong community around your brand on social platforms." },
  { title: "Content Strategy", description: "Create compelling content that resonates with your target audience and tells your story." },
  { title: "Web & App Development", description: "Build high-performance, visually stunning websites and applications." },
  { title: "Brand Consulting", description: "Craft your brand identity and create unforgettable impressions." },
  { title: "Influencer Marketing", description: "Collaborate with influencers to boost brand trust and reach new audiences." },
  { title: "Luxury Product Launches", description: "Design and execute high-end digital campaigns for luxury brand launches." },
  { title: "Automation & CRM", description: "Use AI, automation, and CRMs to build smart systems that scale your brand." },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="h-screen py-28 bg-black w-full">
      <div className="max-w-7xl mx-auto px-6 text-left flex flex-col justify-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">Our Expertise</h2>
        <p className="text-gray-400 max-w-3xl mb-16 text-lg">
          We provide a full spectrum of digital marketing services to elevate your brand's presence and drive results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/60 p-8 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
