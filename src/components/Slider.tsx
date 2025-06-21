'use client';

import React, { useState, useEffect } from 'react';

const slides = [
    {
        text: "80% of all luxury sales are digitally influenced, but..",
        img: "/img1.jpg",
    },
    {
        text: "55% of all money spent by luxury brands on digital is wasted.",
        img: "/img2.jpg",
    },
    {
        text: "Due to clutter, the budget reaches the wrong audience.",
        img: "/img3.jpg",
    },
    {
        text: "Digital is cluttered, we help luxury brands navigate.",
        img: "/img4.jpg",
    },
];

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto-scroll every 4 seconds
    useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, 2500); // Changed from 4000 to 2500

    return () => clearInterval(interval);
}, []);
    return (
        <section id="slider-section" className="h-screen w-full relative overflow-hidden">
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center text-center p-6 bg-cover bg-center transition-opacity duration-700 ease-in-out"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${slide.img}')`,
                            opacity: index === currentSlide ? 1 : 0,
                        }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl text-white">{slide.text}</h2>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors focus:outline-none"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors focus:outline-none"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            currentSlide === index ? 'bg-white' : 'bg-white/40'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Slider;
