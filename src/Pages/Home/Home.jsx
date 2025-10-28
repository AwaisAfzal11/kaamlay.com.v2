import React, { useState } from 'react';

const Home = () => {
  const services = [
    { id: 1, name: 'Electrical Works', icon: '⚡', description: 'Wiring, repairs & installations' },
    { id: 2, name: 'Plumbing Works', icon: '🔧', description: 'Pipes, leaks & fixture solutions' },
    { id: 3, name: 'AC Services', icon: '❄️', description: 'Repair, maintenance & installation' },
    { id: 4, name: 'Carpentry', icon: '🪚', description: 'Custom furniture & woodwork' },
    { id: 5, name: 'Painting', icon: '🎨', description: 'Interior & exterior excellence' },
    { id: 6, name: 'Deep Cleaning', icon: '✨', description: 'Spotless home transformation' },
    { id: 7, name: 'Appliance Repair', icon: '🔌', description: 'Fast appliance fixes' },
    { id: 8, name: 'Pest Control', icon: '🐛', description: 'Safe pest elimination' }
  ];

  const testimonials = [
    { name: 'Aisha Khan', location: 'Lahore', text: 'The technician was incredibly professional and fixed my AC within an hour. No more dealing with unreliable workers!', rating: 5 },
    { name: 'Bilal Ahmed', location: 'Islamabad', text: 'Our office maintenance is now completely hassle-free. One call, and everything is taken care of. Game-changer for our operations!', rating: 5 },
    { name: 'Sara Malik', location: 'Karachi', text: 'The Premium membership has saved us so much money and stress. Highly professional service every single time.', rating: 5 }
  ];

  const handleBookNow = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ⭐ Trusted by 10,000+ Customers
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner for <span className="text-orange-600">Home & Office</span> Maintenance
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Professional, verified technicians at your doorstep. From electrical work to deep cleaning—we handle everything with trust, convenience, and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleBookNow}
                  className="group bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Book a Service Now
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a 
                  href="#membership"
                  className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                >
                  View Memberships
                </a>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-orange-600 border-2 border-white flex items-center justify-center text-white font-bold">A</div>
                    <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white font-bold">B</div>
                    <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center text-white font-bold">S</div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">10k+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg font-bold text-gray-900">4.9/5</span>
                  <span className="text-sm text-gray-600">(2,500+ reviews)</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-12 shadow-2xl border border-gray-200">
                  <div className="text-center space-y-6">
                    <div className="inline-block p-6 bg-orange-100 rounded-full">
                      <span className="text-8xl">👨‍🔧</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Certified Professionals</h3>
                    <p className="text-gray-600">Background-verified technicians ready to serve</p>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-orange-600">500+</p>
                        <p className="text-xs text-gray-600">Technicians</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-orange-600">15+</p>
                        <p className="text-xs text-gray-600">Services</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-orange-600">24/7</p>
                        <p className="text-xs text-gray-600">Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get professional maintenance in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200"></div>
            {[
              { step: '01', title: 'Book Online', desc: 'Select your service and you will get a phone call.', icon: '📱', color: 'from-orange-400 to-orange-500' },
              { step: '02', title: 'Verified Pro Arrives', desc: 'Our vetted technician arrives on time with all necessary tools', icon: '✅', color: 'from-orange-500 to-orange-600' },
              { step: '03', title: 'Problem Solved', desc: 'Quality work completed with 100% satisfaction guarantee', icon: '🎯', color: 'from-orange-600 to-orange-700' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg`}>
                    {item.step}
                  </div>
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive maintenance solutions for every need
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={handleBookNow}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Book Now
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      {/* Membership Section */}
      <section id="membership" className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-700 rounded-full filter blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  💎 Best Value
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Save Big with Kaamlay Membership
              </h2>
              <p className="text-xl text-white text-opacity-95 leading-relaxed">
                Get free services, priority scheduling, and exclusive discounts starting at just PKR 5,000 per year.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🎁', text: 'Up to Unlimited free services annually' },
                  { icon: '🔍', text: 'Regular preventive check-ups' },
                  { icon: '💰', text: 'Up to 15% discount on parts' },
                  { icon: '👤', text: 'Dedicated account manager (Premium & Elite)' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white">
                    <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm">
                      {benefit.icon}
                    </div>
                    <span className="text-lg font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <a 
                href="/membership"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore All Plans
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Membership Plans</h3>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Save up to 40%
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Basic', price: '5,000', services: '3 free services/year', features: ['Annual Check-up', 'Priority Booking'] },
                  { name: 'Standard', price: '10,000', services: '7 free services/year', features: ['Seasonal Check-up', '10% Discount'], popular: true },
                  { name: 'Premium', price: '25,000', services: 'Unlimited services/year', features: ['Emergency Visits', '15% Parts Discount'] },
                  { name: 'Elite', price: '50,000', services: 'Lifetime unlimited services', features: ['One-Time Fee', 'Lifetime Priority'] }
                ].map((plan, idx) => (
                  <div key={idx} className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${plan.popular ? 'border-orange-500 bg-orange-50 shadow-md' : 'border-gray-200 hover:border-orange-200'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          ⭐ MOST POPULAR
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{plan.services}</p>
                        <div className="space-y-1">
                          {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                              <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-3xl font-bold text-orange-600">PKR {plan.price}</div>
                        <p className="text-xs text-gray-500">{plan.name === 'Elite' ? 'one-time' : 'per year'}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Kaamlay?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your peace of mind is our top priority
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👨‍🔧', title: 'Vetted Professionals', desc: 'Every technician is background-checked, trained, and certified' },
              { icon: '⏰', title: 'On-Time Guarantee', desc: 'We value your time—punctual service or your money back' },
              { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer assistance whenever you need help' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Clear upfront quotes with no hidden fees or surprises' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-block p-4 bg-orange-100 rounded-2xl mb-6">
                  <span className="text-6xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied customers across Pakistan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Experience Hassle-Free Maintenance?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your first service today or join our membership program for exclusive benefits and peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBookNow}
              className="group bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Book Your Service Now
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a 
              href="/contact"
              className="bg-white text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            🔒 100% Secure | ✓ Money-Back Guarantee | 📞 24/7 Support
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;