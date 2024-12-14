'use client';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const heroSection = document.querySelector('#hero');
    const heroHeight = heroSection?.offsetHeight || 0;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (window.scrollY > heroHeight) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-20 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isTransparent ? 'bg-transparent' : 'bg-[#141b2d]'} transition-colors duration-300`}  
    >
      <nav className="flex justify-between items-center max-container p-4">
        <a href="/" className="bg-white">
          <img src="/assets/Nav/LOGO_BLUE.png" alt="Logo" width={130} style={{ height: 'auto', maxHeight: '25px' }} />
        </a>

        <ul className="hidden lg:flex justify-center gap-16 text-[#F3F4F6]">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg hover:text-[#6EE7B7] transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <GiHamburgerMenu
            width={25}
            height={25}
            className="cursor-pointer text-[#F3F4F6]"
            onClick={toggleMenu}
          />
        </div>

        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#1f2937] flex flex-col items-center shadow-lg lg:hidden z-20">
            {navLinks.map((item) => (
              <li key={item.label} className="py-4 w-full text-center">
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-[#F3F4F6] hover:text-[#6EE7B7] transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
