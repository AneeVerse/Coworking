"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pricing = [
  { name: "1 Hour Pass", price: "₹399", type: "hourly" },
  { name: "4 Hours Pass", price: "₹549", type: "hourly" },
  { name: "1 Day Pass", price: "₹745", type: "day" },
  { name: "5 Days Pass", price: "₹1250", type: "day" },
  { name: "10 Days Pass", price: "₹2250", type: "day" },
  { name: "15 Days Pass", price: "₹4500", type: "day" },
];

const PricingSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [filterType, setFilterType] = useState("all"); // State to store filter type

  const handleBookPlan = (plan) => {
    setSelectedPlan(plan);
    setIsFormOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/bookplan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          plan: `${selectedPlan.name} - ${selectedPlan.price}`,
        }),
      });

      if (response.ok) {
        setIsFormOpen(false);
        setShowThankYou(true);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to filter the plans based on the selected filter type
  const filteredPricing = pricing.filter((plan) => {
    if (filterType === "all") return true;
    return plan.type === filterType;
  });

  // Animation settings for pop-in effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section id="pricing" className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-6 tracking-wide">
        Flexible Pricing
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        Choose from our flexible pricing plans designed to meet your needs.
        Whether it&apos;s hourly, daily, or weekly, we&apos;ve got you covered.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`${
            filterType === "all"
              ? "bg-[#6b533a] text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-md font-semibold`}
          onClick={() => setFilterType("all")}
        >
          All
        </button>
        <button
          className={`${
            filterType === "hourly"
              ? "bg-[#6b533a] text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-md font-semibold`}
          onClick={() => setFilterType("hourly")}
        >
          Hourly
        </button>
        <button
          className={`${
            filterType === "day"
              ? "bg-[#6b533a] text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-md font-semibold`}
          onClick={() => setFilterType("day")}
        >
          Day
        </button>
      </div>

      {/* Pricing Cards with pop-in animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredPricing.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              className="relative p-8 border border-gray-300 rounded-lg text-center bg-white shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#6b533a] uppercase tracking-wider">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-[#6b533a] mb-6">
                {plan.price}
              </p>
              <button
                onClick={() => handleBookPlan(plan)}
                className="bg-[#6b533a] text-white px-6 py-3 rounded-full"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-3 pt-4 sm:pt-8 px-4 sm:px-8 relative overflow-y-auto"
            style={{ height: "90%", scrollbarWidth: "none" }} // Hide scrollbar for Firefox
          >
            <style jsx>{`
              /* Hide scrollbar for Chrome, Safari and Opera */
              .overflow-y-auto::-webkit-scrollbar {
                display: none;
              }
              /* Hide scrollbar for IE, Edge and Firefox */
              .overflow-y-auto {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
              }
            `}</style>
            <h2 className="text-3xl font-semibold text-center mb-6 text-[#6b533a]">
              Book Your Plan
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="plan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Plan Selected
                </label>
                <input
                  type="text"
                  id="plan"
                  name="plan"
                  value={`${selectedPlan.name} - ${selectedPlan.price}`}
                  disabled
                  className="mt-1 p-4 border border-gray-300 rounded-lg w-full bg-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-4 border border-gray-300 rounded-lg w-full"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-4 border border-gray-300 rounded-lg w-full"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 p-4 border border-gray-300 rounded-lg w-full"
                  placeholder="+91 12345 67890"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 p-4 border border-gray-300 rounded-lg w-full"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center sticky pb-8 bottom-0 bg-white py-2">
                <button
                  type="submit"
                  className="bg-[#6b533a] w-full text-white px-6 py-3 rounded-md"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex justify-center items-center">
                      <svg
                        className="animate-spin mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-4xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white mx-3 rounded-lg shadow-lg  p-4  sm:p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#6b533a] mb-4">
              Thank you!
            </h3>
            <p>
              Your booking request has been received. We will get back to you
              shortly.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="mt-6 bg-[#6b533a] text-white px-6 py-3 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
