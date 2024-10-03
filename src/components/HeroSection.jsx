"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './Navbar';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/banner-vid2.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        />
      </div>

      <div className="bg-[#160d03] absolute inset-0 opacity-50 min-h-screen w-screen" />

      {/* Navbar */}
      <motion.header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
          }`}
      >
        <Navbar isScrolled={scrolled} />
      </motion.header>

      {/* Hero Content and Contact Form */}
      <div className="relative min-h-screen pb-8 md:pb-0 flex flex-col-reverse md:flex-row items-center justify-center text-center z-10 px-6">
        <div className="grid mt-[90px] md:mt-0 grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full items-center">
          {/* Left Side: Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className=" text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-wider leading-tight">
              1st & Best Co-working Space with Cafe in New Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              Elevate Work at New Mumbai’s Top Co-working Space & Cafe.
            </p>
            <a href="#pricing" className="bg-[#7a634b] hover:bg-[#574533] text-white px-8 py-3 sm:py-4 rounded-full transition-shadow duration-300 shadow-lg hover:shadow-xl">
              See Plans
            </a>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="px-0 py-0 shadow-lg rounded-lg w-full md:w-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
