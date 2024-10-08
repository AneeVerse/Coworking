import {
  FaWifi,
  FaPrint,
  FaCoffee,
  FaChair,
  FaSmile,
  FaBroom,
  FaSnowflake,
  FaCalendarAlt,
  FaShieldAlt,
  FaCamera,
  FaConciergeBell,
  FaParking,
  FaGamepad,
  FaHandshake,
} from 'react-icons/fa'; // Updated icons

const amenities = [
  { name: 'Clean and Sanitized Workspaces', icon: <FaBroom />, description: 'Enjoy a clean and sanitized workspace for peace of mind.' },
  { name: 'High-Speed Internet', icon: <FaWifi />, description: 'Stay connected with our high-speed internet.' },
  { name: 'Print and Copy', icon: <FaPrint />, description: 'Print and copy your documents with ease.' },
  { name: 'Tea, Coffee, Snacks', icon: <FaCoffee />, description: 'Enjoy tea, coffee, and snacks to keep you energized.' },
  { name: 'Ergonomic Furniture', icon: <FaChair />, description: 'Work comfortably with our ergonomic furniture.' },
  { name: 'Friendly Staff', icon: <FaSmile />, description: 'Our friendly staff is here to assist you with anything.' },
  { name: 'Housekeeping', icon: <FaBroom />, description: 'Housekeeping services to maintain a clean environment.' },
  { name: 'Air Conditioned', icon: <FaSnowflake />, description: 'Work in a cool and comfortable air-conditioned environment.' },
  { name: 'Events & Socials', icon: <FaCalendarAlt />, description: 'Join our events and socials for networking and fun.' },
  { name: 'Security', icon: <FaShieldAlt />, description: 'Feel safe with our top-notch security services.' },
  { name: 'CCTV Surveillance', icon: <FaCamera />, description: '24/7 CCTV surveillance for added safety.' },
  { name: 'Tea/Coffee Services', icon: <FaConciergeBell />, description: 'Get tea and coffee delivered right to your desk.' },
  { name: 'Open Parking Space for 2/4 Wheelers', icon: <FaParking />, description: 'Free parking space available for two and four wheelers.' },
  { name: 'Indoor Games', icon: <FaGamepad />, description: 'Take a break and enjoy indoor games in your free time.' },
  { name: 'Networking', icon: <FaHandshake />, description: 'Build connections and network with like-minded professionals.' },
];

const AmenitiesSection = () => {
  return (
    <section id='amenities' className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-6 tracking-wider text-gray-800">What We Offer</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Discover the range of amenities designed to make your coworking experience comfortable and efficient.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {amenities.map((amenity) => (
          <div
            key={amenity.name}
            className="relative p-4 lg:p-8 border border-gray-300 rounded-lg text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon with Decorative Background */}
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute w-20 h-20 bg-[#6b533a] opacity-20 rounded-full"></div>
              <div className="text-6xl text-[#6b533a] z-10">{amenity.icon}</div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{amenity.name}</h3>

            {/* Decorative Divider */}
            <div className="w-12 mx-auto my-4 border-b-2 border-[#6b533a]"></div>

            <p className="text-gray-600">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesSection;
