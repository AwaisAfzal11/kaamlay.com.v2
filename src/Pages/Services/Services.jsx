import React from 'react';

// --- SVG Icon Components ---

// Existing Icons
const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// New Icons
const SnowflakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 21.5a1.5 1.5 0 001.5-1.5v-5.379a1.5 1.5 0 00-.44-1.06L5.62 8.12a1.5 1.5 0 00-2.12 0L2.44 9.18a1.5 1.5 0 000 2.12l5.44 5.44a1.5 1.5 0 001.06.44H13.5a1.5 1.5 0 001.5-1.5zM13.5 2.5a1.5 1.5 0 00-1.5 1.5v5.379a1.5 1.5 0 00.44 1.06l5.44 5.44a1.5 1.5 0 002.12 0l1.06-1.06a1.5 1.5 0 000-2.12l-5.44-5.44a1.5 1.5 0 00-1.06-.44H13.5z" />
  </svg>
);

const CarpenterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 21.168l-3.197-2.132A1 1 0 0010.748 18H7.5a2.5 2.5 0 01-2.5-2.5V8.5a2.5 2.5 0 012.5-2.5h5.252a1 1 0 00.748-.316l3.197-2.132a1 1 0 011.5 0l3.197 2.132A1 1 0 0021 6h3.5a1.5 1.5 0 010 3h-3.5a1 1 0 00-.748.316L17.252 12l2.697 1.798a1 1 0 00.748.316H24.5a1.5 1.5 0 010 3h-3.5a1 1 0 00-.748.316l-3.197 2.132a1 1 0 01-1.5 0z" />
  </svg>
);

const CarWashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const HomeCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Services = () => {
  const servicesList = [
    { name: 'Electrical Works', icon: <BoltIcon />, description: 'Certified handling of wiring, lighting, power sockets, and panel repairs with precision.' },
    { name: 'Plumbing Works', icon: <WrenchIcon />, description: 'Expert solutions for leaks, installations, and ensuring smooth water flow in kitchens and bathrooms.' },
    { name: 'AC & Refrigerator Services', icon: <SnowflakeIcon />, description: 'Complete maintenance, gas refilling, and compressor repairs to keep you cool and comfortable.' },
    { name: 'Carpenter Works', icon: <CarpenterIcon />, description: 'Skilled craftsmanship for furniture repair, wood polish, door fittings, and custom cabinets.' },
    { name: 'Car Wash (Home Service)', icon: <CarWashIcon />, description: 'Professional interior and exterior car cleaning and detailing right at your doorstep.' },
    { name: 'Free Home General Check-Up', icon: <HomeCheckIcon />, description: 'A complimentary annual inspection for members covering all essential home systems.' },
    { name: 'Free Winter Check-Up', icon: <SnowflakeIcon />, description: 'Get your home winter-ready with checks on geysers, heating, and insulation for safety.' },
  ];

  const additionalServicesList = [
    { name: 'Deep Cleaning', price: 'PKR 2,000', description: 'Complete home and office deep cleaning for kitchens, bathrooms, and carpets.' },
    { name: 'Glass & Window Cleaning', price: 'PKR 1,500', description: 'Crystal-clear window and façade cleaning for homes, shops, and offices.' },
    { name: 'Painting & Renovation', price: 'Custom', description: 'Wall painting, polish, ceiling work, and minor renovations by skilled painters.' },
    { name: 'Pest Control', price: 'Custom', description: 'Say goodbye to insects and rodents with safe, eco-friendly pest control treatments.' },
    { name: 'Water Tank Cleaning', price: 'PKR 2,500', description: 'Professional cleaning of overhead and underground tanks using anti-bacterial solutions.' },
    { name: 'Appliance Installation', price: 'Custom', description: 'Expert installation of ACs, geysers, washing machines, and refrigerators.' },
  ];

  const handleBookNow = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="bg-white font-lato">
      {/* ✅ FIXED Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'><path d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/20 to-transparent filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange-500/10 to-transparent filter blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
            Expert Home & Office Services, On-Demand
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">
            From minor fixes to major installations, Kaamlay delivers professional, reliable, and timely services right to your doorstep.
          </p>
          <button
            onClick={handleBookNow}
            className="mt-10 group bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/40 transform hover:-translate-y-1 flex items-center justify-center mx-auto"
          >
            Get a Free Quote
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black font-montserrat">Our Core Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At Kaamlay.com, we deliver excellence in every task. Our professional team ensures quality, safety, and reliability at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesList.map((service) => (
              <div
                key={service.name}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-brand-orange transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col text-center"
                onClick={handleBookNow}
              >
                <div className="bg-orange-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-black font-montserrat mb-3 group-hover:text-brand-orange">{service.name}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <span className="font-bold text-brand-orange text-lg group-hover:translate-x-2 transition-transform duration-300 self-center">
                  Book Now &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black font-montserrat">Additional On-Demand Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We understand every home has unique needs. That’s why we offer a wide range of services available whenever you need them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServicesList.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <h3 className="text-2xl font-bold font-montserrat text-brand-black mb-2">{service.name}</h3>
                <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-brand-orange">{service.price}</p>
                  </div>
                  <button
                    onClick={handleBookNow}
                    className="bg-orange-100 text-brand-orange font-bold px-5 py-2.5 rounded-lg hover:bg-brand-orange hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black font-montserrat">Your Peace of Mind is Our Priority</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👨‍🔧', title: 'Vetted Professionals', desc: 'Every technician is background-checked and certified.' },
              { icon: '⏰', title: 'On-Time Guarantee', desc: 'Punctual service, because we value your time.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Clear, upfront quotes with no hidden fees or surprises.' },
              { icon: '🛡️', title: 'Satisfaction Guaranteed', desc: 'We stand by our work with a 100% satisfaction guarantee.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-brand-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
