"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text and Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold text-gray-800 tracking-wide">About Us</h2>
          <div className="w-16 h-1 bg-[#6b533a] mb-4"></div> {/* Decorative Divider */}

          <p className="text-gray-600 leading-relaxed">
            Welcome to our coworking space. We provide an inspiring and productive work environment for a diverse range of professionals. Whether you&apos;re a startup, freelancer, or a remote worker, our workspace caters to all your needs with modern amenities and a vibrant community.
          </p>

          <blockquote className="italic text-[#6b533a] font-semibold border-l-4 border-[#6b533a] pl-4">
          &quot;Fostering creativity and collaboration in a well-designed space where individuals thrive.&quot;
          </blockquote>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to create a dynamic community that supports innovation and success. Join us and experience a space where you can grow and collaborate.
          </p>

          <button className="bg-[#6b533a] text-white px-8 py-3 rounded-full mt-6 hover:bg-[#58422a] transition-shadow duration-300 shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </motion.div>

        {/* Right Side: Image Gallery with Shadow Effects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="relative w-full h-56 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <Image
              src="/images/Lux-Cabin_1.jpg"
              alt="Workspace 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-56 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <Image
              src="/images/Lux-Desk.jpg"
              alt="Workspace 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-56 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <Image
              src="/images/Mini-Cabin.jpg"
              alt="Workspace 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-56 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <Image
              src="/images/studio_0.jpg"
              alt="Workspace 4"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
