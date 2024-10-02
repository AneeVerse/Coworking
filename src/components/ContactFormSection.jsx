"use client";
import { useState } from 'react';
import Image from 'next/image';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSuccess('');
    setLoading(true); // Set loading state to true

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      setSuccess('Thank you! We have received your message.');
      setFormData({ name: '', email: '', phone: '' }); // Clear form data after success
    } catch (error) {
      setError('There was an error submitting your message.');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <section id='contact' className="relative py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mx-4 lg:flex-row items-stretch bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Left Side: Image */}
          <div className="relative hidden lg:block w-full lg:w-1/2 h-64 lg:h-auto">
            <Image
              src="/images/pic5.webp" // Replace with your actual image path
              alt="Contact Us"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"
            />
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-[#6b533a] mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Let us know how we can help you. Fill out the form, and we’ll get back to you soon.
              </p>

              {/* Error and Success Messages */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6b533a] text-gray-800 shadow-sm"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6b533a] text-gray-800 shadow-sm"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Phone Input */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6b533a] text-gray-800 shadow-sm"
                    placeholder="+91 12345 67890"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading} // Disable button when loading
                    className="w-full bg-[#6b533a] hover:bg-[#523b24] text-white font-semibold py-4 rounded-lg shadow-lg transition duration-300 flex justify-center items-center"
                  >
                    {loading ? ( // Show spinner when loading
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
