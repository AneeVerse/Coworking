import {
    FaWifi,
    FaCoffee,
    FaPrint,
    FaChalkboardTeacher,
    FaHeadset,
    FaMapMarkerAlt,
    FaBoxOpen,
    FaPhone,
    FaConciergeBell,
    FaArchive,
    FaVideo,
    FaDesktop,
  } from 'react-icons/fa';
  
  const amenities = [
    { name: 'High-Speed Wifi', icon: <FaWifi /> },
    { name: 'Free Coffee', icon: <FaCoffee /> },
    { name: 'Printing Service', icon: <FaPrint /> },
    { name: 'Meeting Rooms', icon: <FaChalkboardTeacher /> },
    { name: '24/7 Support', icon: <FaHeadset /> },
    { name: 'Prime Location', icon: <FaMapMarkerAlt /> },
    { name: 'Mail & Package Handling', icon: <FaBoxOpen /> },
    { name: 'Phone Booth', icon: <FaPhone /> },
    { name: 'Reception Welcome', icon: <FaConciergeBell /> },
    { name: 'Storage Facility', icon: <FaArchive /> },
    { name: 'Conference Room', icon: <FaVideo /> },
    { name: 'Virtual Office', icon: <FaDesktop /> },
  ];
  
  const AmenitiesSection = () => {
    return (
      <section id='amenities' className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-5xl font-bold text-center mb-6 tracking-wider text-gray-800">What We Offer</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover the range of amenities designed to make your coworking experience comfortable and efficient.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                Enjoy our {amenity.name.toLowerCase()} to enhance your productivity.
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AmenitiesSection;
  