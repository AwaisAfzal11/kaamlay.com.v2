import React from 'react';

// Trust Icon
const TrustIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
// Convenience Icon
const ConvenienceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
// Professionalism Icon
const ProfessionalismIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;


const About = () => {
    const values = [
        { icon: <TrustIcon />, title: 'Trust', desc: 'Every technician is background-checked, trained, and certified to ensure your complete safety and peace of mind.' },
        { icon: <ConvenienceIcon />, title: 'Convenience', desc: 'Our platform makes booking, scheduling, and payment seamless, saving you valuable time and effort.' },
        { icon: <ProfessionalismIcon />, title: 'Professionalism', desc: 'From our uniforms to our on-time guarantee, we deliver a superior and reliable service experience.' },
    ];

    return (
        <div className="bg-white font-lato">
            {/* Hero Section */}
            {/* Developer Note: Replace bg-brand-gray with a real background image e.g., style={{backgroundImage: 'url(...)'}} */}
            {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-gray-100 py-32 md:py-40 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 rounded-full bg-orange-200/50 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 rounded-full bg-orange-200/50 filter blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 font-montserrat tracking-tight">
            Building Trust, One Service at a Time.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
            Kaamlay was founded to solve a simple problem: finding reliable, professional, and trustworthy maintenance help in Pakistan shouldn't be a hassle. We're here to change that.
          </p>
        </div>
      </section>

            {/* Our Values Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-black font-montserrat">Our Core Philosophy</h2>
                        <p className="mt-4 text-lg text-gray-600">These three pillars guide everything we do.</p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((value) => (
                            <div key={value.title} className="text-center">
                                <div className="inline-block p-5 bg-orange-100 rounded-xl mb-6 shadow-sm">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-brand-black font-montserrat mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="bg-brand-gray py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-black font-montserrat text-center mb-12">Our Journey</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-8">
                        <p>
                            Frustrated by the endless cycle of unreliable handymen, missed appointments, and non-transparent pricing, our founders set out to create a modern solution. Kaamlay was born from a desire to professionalize the local maintenance industry through technology, rigorous vetting, and a customer-first approach.
                        </p>
                        <p>
                            We started in Islamabad with a small team of dedicated technicians and a simple web platform. Today, we are proud to serve thousands of homes and businesses across major cities, but our mission remains the same: to be the most trusted and convenient maintenance partner for every Pakistani.
                        </p>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-brand-orange rounded-2xl p-12 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat">Join the Kaamlay Family</h2>
                    <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
                        Experience the difference that professional, reliable service makes. Book your first service or become a member today.
                    </p>
                    <a
                        href="/contact"
                        className="mt-8 inline-block bg-white text-brand-orange px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Book Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;