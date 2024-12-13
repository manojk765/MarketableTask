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
    <footer className="bg-gray-900 p-8 md:p-12 relative z-[10]">
      <div className="max-container mx-auto px-4 md:px-6 flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start text-center max-sm:text-left">
          <p className="mt-6 text-base leading-7 font-montserrat text-gray-400 sm:max-w-sm">
            Secure your financial future with our range of services tailored to your needs. Your trusted partner in fintech.
          </p>
          <div className="flex items-center gap-4 mt-8 justify-center max-sm:justify-start">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap max-sm:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-xl md:text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul className="text-left max-sm:text-left">
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
        <div className="flex justify-center text-gray-400 text-sm flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-4 text-center">
          <div className="flex items-center gap-2 justify-center">
            <FaRegCopyright width={20} height={20} className="text-gray-500" />
            <p>Copyright. All rights reserved.</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
