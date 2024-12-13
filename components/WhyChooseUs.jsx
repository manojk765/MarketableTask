'use client';

import React from 'react';
import { Button } from './Animations/MovingBorders';

const features = [
  {
    id: 1,
    thumbnail: '/assets/features/1.png',
    title: 'Learn from Scratch',
    desc: 'This course is perfect for beginners, starting with the basics for easy understanding, even if you\'re new to crypto trading.',
  },
  {
    id: 2,
    thumbnail: '/assets/features/2.png',
    title: 'Expert Guidance',
    desc: 'You\'ll benefit from experts\' knowledge, simplifying complex topics and guiding you through every step in a straightforward manner.',
  },
  {
    id: 3,
    thumbnail: '/assets/features/3.png',
    title: 'Practical Learning',
    desc: 'Dive into real-life examples and exercises, gaining hands-on experience that builds your confidence for actual trading.',
  },
  {
    id: 4,
    thumbnail: '/assets/features/4.png',
    title: 'Stay Safe',
    desc: 'Discover essential risk management tips, ensuring you can make informed decisions while navigating the ups and downs of crypto markets.',
  },
  {
    id: 5,
    thumbnail: '/assets/features/5.png',
    title: 'Premium Community Access',
    desc: 'Lifetime free access to our exclusive members-only Discord Community section and Telegram channel where our Master traders post their Technical Analysis.',
  },
  {
    id: 6,
    thumbnail: '/assets/features/5.png',
    title: 'Community Support',
    desc: 'Join a community of like-minded traders to discuss strategies and share tips. Learn how to analyze crypto markets effectively and make informed decisions.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-[#001F54] via-[#3A6073] to-[#00D084] w-full relative z-[10]">
      <h1 className="text-center text-4xl font-bold text-[#F3F4F6] mb-10">
        Why should you Buy <span className="text-[#6EE7B7]">This course?</span>
      </h1>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-6">
        {features.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.25rem"
            style={{
              background: "#2D3B5B", // Dark shade to complement the background gradient
              borderRadius: "1.25rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Subtle shadow to highlight the card
            }}
            className="relative flex-1 p-6 rounded-lg border border-[#3A6073] hover:bg-[#4A6A80] transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-24 h-24 mb-4 rounded-lg object-cover"
              />
              <div className="flex flex-col text-center">
                <h2 className="text-xl font-semibold text-[#F3F4F6] mb-2">{card.title}</h2>
                <p className="text-[#A9A9A9]">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
