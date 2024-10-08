"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
          Welcome to our unique coworking space, where work and cafe culture co-exist seamlessly. We offer an inspiring and productive environment tailored for startups, freelancers, and remote workers. With modern amenities and a vibrant community, we provide everything you need to achieve your goals.
          </p>

          <blockquote className="italic text-[#6b533a] font-semibold border-l-4 border-[#6b533a] pl-4">
          &quot;Fostering creativity and collaboration, our space is designed for individuals and teams to thrive. Find the perfect balance between focus and connection.&quot;
          </blockquote>

          <p className="text-gray-600 leading-relaxed">
          Our mission is to build a dynamic community that nurtures innovation and success. Join us and experience a space where you can grow, connect, and collaborate, all in one inspiring setting.
          </p>

          <Link href={"#amenities"} className="bg-[#6b533a] inline-block text-white px-8 py-3 rounded-full mt-6 hover:bg-[#58422a] transition-shadow duration-300 shadow-lg hover:shadow-xl">
            Learn More
          </Link>
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
              src="/images/pic5.png"
              alt="Workspace 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-56 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <Image
              src="/images/pic6.png"
              alt="Workspace 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-56 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <Image
              src="/images/pic4.png"
              alt="Workspace 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-56 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <Image
              src="/images/pic7.PNG"
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
