import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#201203] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className='mb-4 flex gap-3'>
                <Image
                src={"/images/logo.png"}
                alt='co-working logo'
                height={50}
                width={50}
                className='rounded-full self-center'
                />
            <h4 className="text-xl sm:text-2xl self-center font-bold ">{"Co-Working with Cafe".toUpperCase()}</h4>
            </div>
            <p className="text-gray-400 mb-4">
              An inspiring workspace designed for creativity and productivity. We cater to freelancers, startups, and remote workers with
              flexible solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-gray-100">About Us</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-gray-100">Amenities</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-gray-100">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gray-100">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
            <div className="flex items-center text-gray-300 mb-2">
              <FaPhoneAlt className="mr-2" /> +91 97692 41829
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <FaEnvelope className="mr-2" /> info@coworking.com
            </div>
            <div className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="mr-2" /> 123 Coworking Street, Mulund, Mumbai, India
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <div className="mt-12 text-center text-gray-300">
          &copy; 2024 Coworking Space. All rights reserved.
        </div> */}
         {/* Footer bottom section */}
         <div className="mt-8 border-t border-gray-700 pt-6 gap-5 flex flex-col md:flex-row justify-between text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Co-Working with Cafe. All Rights
            Reserved.
          </p>

          <Link href={"https://aneeverse.com/en/"} className="text-gray-300 hover:text-gray-100 flex justify-center text-center items-center gap-2">Managed & Designed By Aneeverse
          <Image src={"/images/aneeverse-logo.png"} width={16} height={16} alt="aneeverse logo"/></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  