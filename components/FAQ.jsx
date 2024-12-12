'use client'

import React, { useState, useEffect } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-6 border-b border-gray-300 dark:border-gray-600 ">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="flex-1 text-xl font-semibold text-gray-900 dark:text-gray-100">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${
            isOpen ? 'transform rotate-45 text-cyan-500 dark:text-cyan-300' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>

      <div
        className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400 mt-2">{answer}</p>
      </div>
    </div>
  );
};

function FAQ() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111827] to-[#1b263b] py-20 relative z-10 ">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <h2 className="text-center text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mt-4">
          Everything you need to know about our services
        </p>
        <div className="mt-12 bg-white dark:bg-[#1b263b] rounded-lg shadow-lg p-8">
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    question: "Should I Choose a Course if I'm New to Trading?",
    answer:
      "Absolutely! If you're looking to grasp the fundamentals of trading and start your trading journey while learning how to analyze your trades, our foundational course is an ideal starting point. Both courses are designed specifically for beginners, ensuring a smooth and comprehensive learning experience without the need for any prior knowledge of trading.",
  },
  {
    question: 'Are the courses available in English?',
    answer:
      'English Trading Batch Starting from January Third Week 2024! Stay tuned for further updates and important information. For more frequent updates, be sure to join our Discord groups. Don\'t miss out on this exciting opportunity to delve into the world of trading with us!',
  },
  {
    question:
      'I want to learn from basics to advanced concepts about trading. Which course should I choose?',
    answer:
      'Our upcoming trading course led by Sreekanth covers a comprehensive spectrum of topics, starting from the fundamentals and progressing to advanced concepts. Stay tuned for this course if you\'re eager to delve into trading strategies and gain insights from the basics to the more intricate aspects.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.',
  },
];

export default FAQ;
