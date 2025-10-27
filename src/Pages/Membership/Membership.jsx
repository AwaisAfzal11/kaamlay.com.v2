import React from 'react';

// Checkmark Icon
const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const Membership = () => {
    const plans = [
        {
            name: 'Basic', price: '5,000', description: 'For essential peace of mind.',
            features: ['3 Free Services Annually', '1 Free Annual Check-up', '10% Discount on services', 'Priority Booking'],
            popular: false,
        },
        {
            name: 'Standard', price: '9,000', description: 'Best value for families.',
            features: ['6 Free Services Annually', '2 Free Annual Check-ups', '15% Discount on services', 'High Priority Booking', 'Phone & Email Support'],
            popular: true,
        },
        {
            name: 'Premium', price: '15,000', description: 'Comprehensive home care.',
            features: ['9 Free Services Annually', '4 Free Annual Check-ups', '20% Discount on services', 'Highest Priority Booking', 'Dedicated Account Manager'],
            popular: false,
        },
    ];

  return (
    <div className="bg-white font-lato">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-orange-100 py-24 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black font-montserrat tracking-tight">Unlock Exclusive Savings</h1>
                <p className="mt-6 text-lg md:text-xl text-gray-700 leading-8">
                    Invest in a Kaamlay Membership for free services, priority support, and complete peace of mind.
                </p>
            </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${plan.popular ? 'bg-white border-4 border-brand-orange shadow-2xl scale-105' : 'bg-brand-gray border border-gray-200 shadow-lg hover:shadow-xl'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    <span className="bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">Most Popular</span>
                                </div>
                            )}
                            <div className="flex-grow">
                                <h3 className="text-3xl font-bold text-brand-black font-montserrat text-center">{plan.name}</h3>
                                <p className="text-center text-gray-600 mt-2 h-8">{plan.description}</p>
                                <div className="text-center my-8">
                                    <span className="text-5xl font-extrabold text-brand-black tracking-tight">PKR {plan.price}</span>
                                    <span className="text-gray-500 font-medium">/year</span>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-800">
                                            <CheckIcon />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className={`w-full py-4 rounded-lg font-bold text-lg transition-colors ${plan.popular ? 'bg-brand-orange text-white hover:bg-opacity-90 shadow-lg' : 'bg-white text-brand-orange border-2 border-brand-orange hover:bg-orange-50'}`}>
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-brand-gray">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-montserrat text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-8">
                    {[
                        { q: "How do I book a free service?", a: "Once you are a member, simply log into your account, choose a service, and your available free service credits will be automatically applied at checkout." },
                        { q: "Can I upgrade or downgrade my plan?", a: "Yes! You can change your plan at any time from your account dashboard. The new plan will be prorated based on your current subscription." },
                        { q: "What does a 'Preventive Check-up' include?", a: "Our technician will perform a multi-point inspection of key areas like your AC units, plumbing system, and electrical panel to identify potential issues before they become major problems." }
                    ].map(faq => (
                        <div key={faq.q} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h4 className="font-bold text-xl text-brand-black font-montserrat">{faq.q}</h4>
                            <p className="text-gray-700 mt-2 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Membership;