import React, { useState, useEffect } from 'react';
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ isScrolled }) => {
  const navItems = [
    { name: 'About Us', url: '#about' },
    { name: 'Who Are Our Players', url: '#players' },
    { name: 'Amenities', url: '#amenities' },
    { name: 'Pricing', url: '#pricing' },
    { name: 'Contact Us', url: '#contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-transparent">
      {/* Navbar for Desktop */}
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 h-16 md:h-20 transition-all duration-300">
        <div className="flex items-center space-x-3">
          <Link href={"#"} className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Coworking Logo"
              width={40}
              height={40}
              objectFit="contain"
            />
          </Link>
          <div className={`text-lg sm:text-2xl font-bold ${isScrolled ? "text-[#7a634b]" : "text-white"} transition-colors duration-300`}>
            {"Co-Working with Cafe".toUpperCase()}
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className={`text-2xl ${isScrolled ? "text-[#7a634b]" : "text-white"} transition-colors duration-300`}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navbar for Desktop */}
        <div className="hidden lg:flex lg:space-x-4 space-x-8">
          {navItems.map((item, ind) => (
            <Link
              key={ind}
              href={item.url}
              className={`${isScrolled ? "text-gray-800 hover:text-[#7a634b]" : "text-gray-200 hover:text-[#ffff]"} transition-colors duration-300 cursor-pointer`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Phone Number for Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="tel:+919769241829"
            className={`flex items-center space-x-2 ${isScrolled ? "text-gray-800 hover:text-[#7a634b]" : "text-gray-200 hover:text-[#ffff]"} transition-all`}
          >
            <FiPhoneCall className="text-lg" />
            <span>+91 97692 41829</span>
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar with Overlay */}
      <div className={`${isOpen ? 'fixed inset-0 z-40' : 'hidden'} lg:hidden`}>
        <div
          className="absolute inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
        <motion.div
          initial={{ x: '-100%' }}
          animate={isOpen ? { x: 0 } : { x: '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 h-full w-64 sm:w-96 bg-white shadow-xl z-40"
        >
          {/* Sidebar Content */}
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Coworking Logo"
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                </div>
                <div className="text-md sm:text-2xl font-bold text-[#7a634b]">
                {"Co-Working".toUpperCase()}
                </div>
              </div>
              {/* Close Button */}
              <button onClick={toggleSidebar} className="text-2xl text-[#7a634b]">
                <FiX />
              </button>
            </div>

            {/* Sidebar Nav Links */}
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-gray-800 hover:text-[#7a634b] text-lg font-medium transition"
                  onClick={toggleSidebar} // Close sidebar on click
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">Contact Us</p>
              <Link href="tel:+919769241829" className="text-gray-800 hover:text-[#7a634b] flex items-center space-x-2 mt-2">
                <FiPhoneCall className="text-lg" />
                <span>+91 97692 41829</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
