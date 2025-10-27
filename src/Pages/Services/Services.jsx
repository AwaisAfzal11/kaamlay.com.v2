import React from 'react';

// SVG Icon components for a cleaner look
const BoltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const WrenchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const AcIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>;
const PaintIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4H7zm0 0a4 4 0 014-4h4a4 4 0 014 4v0" /></svg>;
const CleaningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-14v4m-2-2h4m2 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" /></svg>;
const ApplianceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>;


const Services = () => {
  const servicesList = [
    { name: 'Electrical Works', icon: <BoltIcon />, description: 'Safe & certified electrical wiring, repairs, and installations.' },
    { name: 'Plumbing Works', icon: <WrenchIcon />, description: 'Expert solutions for leaks, pipes, and all plumbing fixtures.' },
    { name: 'AC Services', icon: <AcIcon />, description: 'Complete AC repair, maintenance, and installation services.' },
    { name: 'Painting', icon: <PaintIcon />, description: 'Professional interior and exterior painting for a fresh look.' },
    { name: 'Deep Cleaning', icon: <CleaningIcon />, description: 'Thorough and spotless cleaning for homes and offices.' },
    { name: 'Appliance Repair', icon: <ApplianceIcon />, description: 'Fast and reliable repairs for all major home appliances.' },
  ];

  const handleBookNow = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="bg-white font-lato">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black font-montserrat tracking-tight">
            Comprehensive Maintenance Solutions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            From minor fixes to major renovations, Kaamlay offers a complete range of professional services for your home and office, delivered with trust and precision.
          </p>
          <button
            onClick={handleBookNow}
            className="mt-10 bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black font-montserrat">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">The essentials, perfected for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div
                key={service.name}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-brand-orange transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col"
                onClick={handleBookNow}
              >
                <div className="bg-orange-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-black font-montserrat mb-3 group-hover:text-brand-orange">{service.name}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <span className="font-bold text-brand-orange text-lg group-hover:translate-x-2 transition-transform duration-300 self-start">
                  Book Now &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
       <section className="py-20 md:py-28 bg-brand-gray">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-brand-black font-montserrat">Your Peace of Mind is Our Priority</h2>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: '👨‍🔧', title: 'Vetted Professionals', desc: 'Every technician is background-checked and certified.' },
               { icon: '⏰', title: 'On-Time Guarantee', desc: 'Punctual service, because we value your time.' },
               { icon: '💰', title: 'Transparent Pricing', desc: 'Clear, upfront quotes with no hidden fees or surprises.' },
               { icon: '🛡️', title: 'Satisfaction Guaranteed', desc: 'We stand by our work with a 100% satisfaction guarantee.' }
             ].map((item) => (
               <div key={item.title} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
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