"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaRocket, FaMugHot, FaBaby, FaBook, FaUserCircle } from 'react-icons/fa'; // Updated icons

const players = [
  { name: 'Someone who wants a space to work in peace', icon: <FaUserCircle /> }, // New description and icon
  { name: 'Remote Working Employees', icon: <FaLaptop /> }, 
  { name: 'Startups', icon: <FaRocket /> }, 
  { name: 'Freelancers', icon: <FaMugHot /> }, 
  { name: 'Working Parents', icon: <FaBaby /> }, // New addition and icon for working parents
  { name: 'Students who want a quiet space', icon: <FaBook /> }, 
];

const PlayerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Changed default activeIndex to 0

  return (
    <section id='players' className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-8 text-gray-800 tracking-wide">Who Are Our Players</h2>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
        We cater to various professional profiles, offering a versatile space for growth, networking, and productivity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {players.map((player, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={player.name}
            onClick={() => setActiveIndex(index)}
            className={`relative cursor-pointer p-4 lg:p-8 border border-gray-300 rounded-lg text-center transition-transform duration-300 shadow-lg ${
              activeIndex === index
                ? 'bg-[#6b533a] text-white transform scale-105 shadow-xl'
                : 'bg-white text-gray-800 hover:shadow-md'
            }`}
          >
            {/* Icon with background */}
            <div className="relative flex items-center justify-center mb-6">
              <div className={`absolute w-16 h-16 bg-${activeIndex === index ? 'white' : '#6b533a'} opacity-20 rounded-full`}></div>
              <div className={`text-6xl ${activeIndex === index ? 'text-white' : 'text-[#6b533a]'} z-10`}>
                {player.icon}
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">{player.name}</h3>

            {activeIndex === index && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                layoutId="activeUnderline"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlayerSection;
