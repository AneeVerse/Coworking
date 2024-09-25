import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Track form submission status

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
    setLoading(true); // Start loading spinner

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

      setSuccess('Your details were successfully submitted!');
      setFormData({ name: '', email: '', phone: '' }); // Clear form data
    } catch (error) {
      setError('There was an error submitting your details.');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <form className="space-y-6 bg-white px-8 py-6 shadow-lg rounded-lg max-w-lg text-left mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4 text-left text-gray-800">Get in Touch</h2>

      {/* Error and Success Messages */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      {/* Name Input */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513] text-gray-800"
          placeholder="John Smith"
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
          className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513] text-gray-800"
          placeholder="email@gmail.com"
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
          className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513] text-gray-800"
          placeholder="+91 12345 67890"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading} // Disable button during loading
          className="w-full bg-[#6b533a] hover:bg-[#523b24] text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg flex justify-center items-center"
        >
          {loading ? ( // Show spinner if loading is true
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
  );
};

export default ContactForm;
