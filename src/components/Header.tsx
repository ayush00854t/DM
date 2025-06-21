'use client';

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById('hero');

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Case Studies', href: '#case-study' },
    { name: 'Work', href: '#work' },
    { name: 'Contact Us', href: '#contact' },
  ];

  if (!isHeroVisible) return null; // Hide header when hero is not in view

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-6 py-12 flex items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold whitespace-nowrap">
          <a href="/">AAS Digitech</a>
        </h1>
        <div className="hidden md:flex flex-grow justify-evenly ml-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg md:text-xl font-medium hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
