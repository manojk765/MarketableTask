'use client';

import React, { useRef, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { gsap } from 'gsap';

const reviews = [
  {
    content: 'Incredible platform! Simplified my finances with seamless investment tracking and real-time analytics. Highly intuitive and user-friendly.',
    name: 'Alex Johnson',
    imgSrc: '/assets/customers/people-1.jpg',
    company: 'WealthPulse',
    rating: 5,
  },
  {
    content: 'Exceptional service! Streamlined payments, easy fund transfers, and detailed financial reports that improved my business operations.',
    name: 'Maya Patel',
    imgSrc: '/assets/customers/people-2.jpg',
    company: 'FinGrowth',
    rating: 4,
  },
  {
    content: 'A game changer for managing personal and business finances! Automated budgeting tools and fraud detection make it incredibly secure.',
    name: 'Daniel Smith',
    imgSrc: '/assets/customers/people-3.jpg',
    company: 'SecurePay',
    rating: 5,
  },
  {
    content: 'Fantastic user experience! Quick loan approvals and transparent fee structures helped streamline my small business’s financial planning.',
    name: 'Samantha Lee',
    imgSrc: '/assets/customers/people-4.jpg',
    company: 'QuickFinance',
    rating: 5,
  },
  {
    content: 'Highly recommended! The app integrates with multiple bank accounts and provides easy-to-understand visual reports for better planning.',
    name: 'Michael Brown',
    imgSrc: '/assets/customers/people-5.jpg',
    company: 'NetWealth',
    rating: 4,
  },
  {
    content: 'Superb platform for secure online transactions! Effortless to use and provides robust encryption features, boosting my confidence in digital banking.',
    name: 'Olivia Thompson',
    imgSrc: '/assets/customers/people-6.jpg',
    company: 'SafeTransfer',
    rating: 5,
  },
];

const Reviews = () => {
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const cards = cardRefs.current;

    if (slider && cards.length > 0) {
      // Calculate the total width of all cards
      const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0);

      // Clone the cards and append them to create a circular effect
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        slider.appendChild(clone);
      });

      // Set the initial position
      gsap.set(slider, { x: 0 });

      // Create the animation (right to left)
      animationRef.current = gsap.to(slider, {
        x: -totalWidth,
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const currentX = parseFloat(x);
            return currentX <= -totalWidth ? 0 : currentX;
          }),
        },
      });

      // Pause animation on hover
      slider.addEventListener('mouseenter', () => {
        animationRef.current.pause();
      });

      // Resume animation when the mouse leaves
      slider.addEventListener('mouseleave', () => {
        animationRef.current.play();
      });

      return () => {
        if (animationRef.current) {
          animationRef.current.kill();
        }
        slider.removeEventListener('mouseenter', () => {});
        slider.removeEventListener('mouseleave', () => {});
      };
    }
  }, []);

  return (
    <div className="bg-[#111827] p-4 w-full relative z-[10] overflow-hidden py-12 ">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-8 mb-6">
        What Our Customers Say..!
      </h2>

      <div className="overflow-hidden">
        <div ref={sliderRef} className="flex items-stretch gap-3 w-fit">
          {reviews.map((review, index) => (
            <div key={index} ref={(el) => (cardRefs.current[index] = el)}>
              <ReviewCard
                name={review.name}
                imgSrc={review.imgSrc}
                company={review.company}
                content={review.content}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
