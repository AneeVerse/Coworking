const pricing = [
    { name: '1 Hour', price: '₹1000' },
    { name: '4 Hours', price: '₹3000' },
    { name: '1 Day', price: '₹5000' },
    { name: '5 Days', price: '₹20000' },
    { name: '10 Days', price: '₹35000' },
    { name: '15 Days', price: '₹50000' },
  ];
  
  const PricingSection = () => {
    return (
      <section id="pricing" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-5xl font-bold text-center mb-6 tracking-wide">Flexible Pricing</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Choose from our flexible pricing plans designed to meet your needs. Whether it&apos;s hourly, daily, or weekly, we&apos;ve got you covered.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8 border border-gray-300 rounded-lg text-center bg-white shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: 'url("/images/pattern.png")', backgroundSize: 'cover' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#6b533a] uppercase tracking-wider">
                {plan.name}
              </h3>
  
              {/* Decorative divider */}
              <div className="w-12 mx-auto my-4 border-b-2 border-[#6b533a]"></div>
  
              <p className="text-4xl font-bold text-[#6b533a] mb-6">{plan.price}</p>
  
              <button className="bg-[#6b533a] text-white px-6 py-3 rounded-full hover:bg-[#4e412e] transition-shadow duration-300 shadow-lg hover:shadow-xl">
                Choose Plan
              </button>
  
              {/* Decorative badge */}
              <div className="absolute top-0 right-0 bg-[#6b533a] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Popular
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PricingSection;
  