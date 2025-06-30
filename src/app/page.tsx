'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import Clients from '@/components/Clients';
import CaseStudy from '@/components/casestudy'; // ✅ CaseStudy Component
import VisualShowcase from '@/components/VisualShowcase'; // ✅ Newly added
import USPSection from '@/components/USPSection';
import ClientTestimonials from '@/components/ClientTestimonials';
import Pricing from '@/components/Pricing';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white antialiased relative">
      <Header />
      <main>
        <Hero />
        <Slider />
        <Services />
        <Clients />
        <USPSection />
        <CaseStudy />
        <VisualShowcase /> {/* ✅ Added Visual Showcase section */}
        <ClientTestimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default HomePage;
