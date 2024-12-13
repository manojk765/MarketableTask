'use client'

import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const [isVisible, setIsVisible] = useState(true); // Track visibility of navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const toggleMenu = () => {
    setIsOpen(!isOpen);  
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true);  // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Dependency on lastScrollY

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all ease-in-out duration-300 ${isVisible ? "opacity-100" : "opacity-0"} ${isVisible ? "pointer-events-auto" : "pointer-events-none"} bg-transparent shadow-md`}
    >
      <nav className="flex justify-between items-center max-container p-4">
        <a href="/">
          <img
            src="/assets/Nav/LOGO_BLUE.png"
            alt="Logo"
            width={130}
            height={15}
          />
        </a>

        <ul className="hidden lg:flex justify-center gap-16 text-white">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray"
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
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center shadow-lg lg:hidden z-20">
            {navLinks.map((item) => (
              <li key={item.label} className="py-4 w-full text-center">
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-slate-gray"
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
