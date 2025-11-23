'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { styles } from '../utils/style';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-[#03050C] shadow-md`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('Home');
            window.scrollTo(0, 0);
          }}
        >
         <p>:)</p>
          <p className="text-white text-lg sm:text-xl font-bold cursor-pointer">
            Tanuja <span className="hidden sm:inline">&nbsp;| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none flex-row gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-gray-400'
              } hover:text-white text-base lg:text-lg font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-1 justify-end">
          <button
            className="text-white text-3xl font-bold focus:outline-none"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 shadow-lg md:hidden z-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-gray-400'
              } hover:text-white text-lg font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
