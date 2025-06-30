'use client';

import React from 'react';

const pricingPlans = [
  {
    title: 'Starter',
    price: '₹25,000',
    description: 'Perfect for small luxury startups getting started.',
    features: [
      '3 Social Media Creatives / Week',
      '1 Landing Page',
      'Basic SEO Optimization',
      'Email Support',
    ],
    cta: 'Get Started',
  },
  {
    title: 'Premium',
    price: '₹75,000',
    description: 'For luxury brands seeking strong presence.',
    features: [
      'Daily Social Media Content',
      'Complete Website Design',
      'Advanced SEO & Analytics',
      'WhatsApp Marketing',
      'Dedicated Manager',
    ],
    cta: 'Let’s Talk',
  },
  {
    title: 'Elite',
    price: 'Custom',
    description: 'Tailored for elite brands with global ambitions.',
    features: [
      '360° Marketing Strategy',
      'Paid Ads Management',
      'Influencer & PR Campaigns',
      'Luxury Video Production',
      'Monthly Growth Report',
    ],
    cta: 'Book Consultation',
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6" id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">💼 Our Packages</h2>
        <p className="mt-2 text-gray-300 text-lg">Choose a plan crafted for growth & sophistication.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-3xl font-bold mb-2">{plan.price}</p>
            <p className="text-gray-300 mb-6">{plan.description}</p>

            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-white/90">• {feature}</li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block text-center w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-gray-300 transition"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
