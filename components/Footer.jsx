import React from 'react';

import { FaRegCopyright } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { RiTelegram2Fill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

export const footerLinks = [
  {
    title: 'Courses',
    links: [
      { name: 'Crypto currency', link: '/' },
      { name: 'Trading', link: '/' },
      { name: 'Investments', link: '/' },
      { name: 'Insurance', link: '/' },
      { name: 'Wealth Management', link: '/' },
      { name: 'Corporate Banking', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About Us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How It Works', link: '/' },
      { name: 'Privacy Policy', link: '/' },
      { name: 'Terms & Conditions', link: '/' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { name: 'support@fintech.com', link: 'mailto:support@fintech.com' },
      { name: '+1234567890', link: 'tel:+1234567890' },
    ],
  },
];

export const socialMedia = [
  { icon: <RiTelegram2Fill />, link: 'https://t.me/+gzef6ogHhCUxNmU1' },
  { icon: <FaDiscord />, link: 'https://discord.gg/bDsWf8mDuD' },
  { icon: <RiInstagramLine />, link: 'https://www.instagram.com/themarketable.in' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/company/marketable-in/' },
];  

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-12 relative z-[10]">
      <div className="max-container mx-auto px-6 flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <p className="mt-6 text-base leading-7 font-montserrat text-gray-400 sm:max-w-sm">
            Secure your financial future with our range of services tailored to your needs. Your trusted partner in fintech.
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-gray-400 font-montserrat text-base leading-normal hover:text-gray-200 cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6">
        <div className="flex justify-between text-gray-400 text-sm max-sm:flex-col max-sm:items-center">
          <div className="flex items-center gap-2">
            <FaRegCopyright width={20} height={20} className="text-gray-500" />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="cursor-pointer hover:text-gray-200">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
