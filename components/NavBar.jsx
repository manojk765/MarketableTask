"use client";
import React, { useState, useEffect, useCallback } from "react";
//import Image from 'next/image';
// import Logo from './Logo.webp';
import Link from "next/link";

import { SlHome } from 'react-icons/sl';
import { FaTshirt, FaRedhat } from 'react-icons/fa';
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs';
import { FaWpforms } from "react-icons/fa";

import ThemeSwitch from "@/app/ThemeSwitch";

const MenuItem = ({ icon, name, route }) => (
  <Link
    href={route}
    className={`relative flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-black/50 dark:border-b-white/10 transition-all duration-300 group hover:text-[#007bff] dark:hover:text-[#1e90ff]`}
  >
    <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
    <div
      className={`transition-opacity duration-300`}
    >
      {name}
    </div>

    <span
      className="absolute bottom-0 left-0 h-[2px] bg-[#007bff] dark:bg-[#1e90ff] w-0 transition-all duration-300 ease-in-out group-hover:w-full"
    ></span>
  </Link>
);
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  //const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  //const [screenWidth, setScreenWidth] = useState(0);

  const toggleNav = () => {
    setIsClick(!isClick);
  };

  // const handleScroll = useCallback(() => {
  //   const currentScrollPos = window.pageYOffset;
  //   setIsVisible(prevScrollPos > currentScrollPos);
  //   setPrevScrollPos(currentScrollPos);
  // }, [prevScrollPos]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   handleResize();
  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [handleScroll]);

  return (
    <>
      <nav className={` bg-[#191c24] z-10 fixed top-0 w-full shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} font-nav`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-black hover:text-gray-500 transition duration-300">
                  <Image
                    src={Logo}
                    alt="Company Logo"
                    className="h-13 w-36"
                  />
                </a>
              </div>
            </div> */}

            <ThemeSwitch/>

            {/* <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/" className="text-white font-medium p-2 hover:text-blue-500 relative group">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link href="/about" className="text-white font-medium p-2 hover:text-blue-500 relative group">
                  About
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link href="/profile" className="text-black font-medium p-2 hover:text-blue-500 relative group">
                  Profile
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link href="/settings" className="text-black font-medium p-2 hover:text-blue-500 relative group">
                  Settings
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link href="/contact" className="text-black font-medium p-2 hover:text-blue-500 relative group">
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </div>
            </div> */}

            <div className="sm:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2"
                onClick={toggleNav}
              >
                {isClick ? (
                  <svg className="h-6 w-6 font-medium" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 font-medium" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      <div className={`md:hidden fixed right-0 top-[64px] bg-white dark:bg-black text-black dark:text-white transition-smooth duration-200 z-10 ${isClick ? 'h-screen w-auto lg:w-56 opacity-100 p-4 ' : 'w-0 opacity-0'}`}>
        <div className="flex flex-col items-left">
          <div className="mt-4">
            <MenuItem name="Home" route="/" icon={<SlHome />} />
          </div>
          <div className="mt-4">
            <MenuItem name="About" route="/about" icon={<FaTshirt />} />
          </div>
          <div className="mt-4">
            <MenuItem name="Profile" route="/profile" icon={<FaRedhat />} />
          </div>
          <div className="mt-4">
            <MenuItem name="Settings" route="/settings" icon={<BsInfoSquare />} />
          </div>
          <div className="mt-4">
            <MenuItem name="Leave Application" route="/leave" icon={<FaWpforms />} />
          </div>
          <div className="mt-4">
            <MenuItem name="Call Me" route="/contact" icon={<BsEnvelopeAt />} />
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;