'use client';

import React, { useEffect, useState } from 'react';

const caseStudies = [
  {
    heading: 'Luxury Fashion Brand',
    text: 'Before partnering with us, the business was struggling with low engagement rates and stagnant, flatlining revenue. \nDespite consistent efforts, their marketing campaigns failed to connect with their target audience, leading to missed opportunities and a lack of measurable growth.\n After implementing our data-driven strategies and launching hyper-targeted marketing campaigns, they saw a dramatic turnaround.\n In just three months, their return on investment skyrocketed by 320%, fueled by improved customer engagement, smarter audience segmentation, and optimized messaging that resonated. \nWhat was once a plateau in performance became a phase of rapid, sustainable growth and renewed confidence in their marketing efforts.',
    metric: '📊 Increased Monthly Revenue by 4.5x',
  },
  {
    heading: 'Luxury Real Estate Group',
    text: 'Before: Wrong audience targeting.\n Before working with us, the business was pouring time and money into campaigns that simply weren’t reaching the right people. Their message was falling on deaf ears, and despite decent traffic, conversions were nearly nonexistent. The problem? Misaligned audience targeting and an unclear funnel structure. After a deep dive into their customer personas and journey, we rebuilt their funnel from the ground up—strategically aligning it with the right audience segments. In just 45 days, they generated 98 highly qualified leads—real prospects with genuine interest—proving that when you speak to the right people in the right way, results follow fast.,metric: 📉 Bounce Rate dropped by 60%,\nAfter: 98 qualified leads in 45 days through smart funnels.'


  },
  {
    heading: 'High-end Skincare Label',
    text: '\nAfter: 2M+ views via storytelling content.The brand was invisible—no buzz, no recognition, and no connection with its audience. Despite having a solid product, their messaging lacked emotion and consistency, making it easy for people to forget them after just one scroll. That changed when we introduced a storytelling-driven content strategy. Instead of pushing features, we told stories—about people, problems, and meaningful change. Within weeks, engagement soared. In a matter of months, their content racked up over 2 million views across platforms, creating real emotional resonance and brand recall that stuck. They weren’t just seen—they were remembered',
    metric: '💥 Tripled conversion rate within 6 weeks',
  },
];

const CaseStudy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="case-study"
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center relative text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/service.jpg')",
      }}
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">📈 Case Studies</h2>

      {/* Slide Content */}
      <div className="max-w-5xl px-8 text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold">{caseStudies[currentIndex].heading}</h3>
        <p className="whitespace-pre-line text-base md:text-lg bg-gray-100/40 text-black backdrop-blur-md px-8 py-6 rounded-xl">
          {caseStudies[currentIndex].text}
        </p>
        <p className="text-green-700 font-medium text-base md:text-lg">{caseStudies[currentIndex].metric}</p>
      </div>

      {/* Manual next arrow */}
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

export default CaseStudy;
