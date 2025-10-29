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
            name: 'Basic',
            price: '5,000',
            period: '/ Year',
            description: 'Perfect for small households and individuals who want affordable and reliable care.',
            features: [
                '3 Free Services (any category) per year',
                'Free Annual Home General Check-Up',
                'Free Winter Check-Up',
                'Priority Booking & Discounted Additional Services'
            ],
            popular: false,
        },
        {
            name: 'Standard',
            price: '10,000',
            period: '/ Year',
            description: 'Best for families and small offices seeking regular maintenance coverage.',
            features: [
                '7 Free Services per year',
                'All Basic Plan Benefits',
                'Free Seasonal Appliance Check-Up (AC, Geyser, Refrigerator)',
                '10% Discount on Additional Services'
            ],
            popular: true,
        },
        {
            name: 'Premium',
            price: '25,000',
            period: '/ Year',
            description: 'Designed for those who want complete peace of mind and unlimited convenience.',
            features: [
                'Unlimited Free Services throughout the year',
                'All Standard Plan Benefits',
                'Free Emergency Visits (within city limits)',
                'Dedicated Account Manager',
                '15% Discount on Spare Parts'
            ],
            popular: false,
        },
        {
            name: 'Elite Lifetime',
            price: '50,000',
            period: '(One-Time)',
            description: 'The ultimate maintenance freedom for life.',
            features: [
                'Lifetime Unlimited Free Services',
                'Annual Renewal Fee: PKR 5,000 only',
                'Lifetime Priority Support',
                'Annual Home & Office Health Audit',
                'Exclusive Access to New Features & Rewards'
            ],
            popular: false,
        },
    ];

    // Function to handle redirection to the contact page
    const handleChoosePlan = () => {
        window.location.href = '/contact';
    };

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
                {/* Updated grid layout to handle 4 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${plan.popular ? 'bg-white border-4 border-brand-orange shadow-2xl scale-105' : 'bg-brand-gray border border-gray-200 shadow-lg hover:shadow-xl'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    {/* <span className="bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">Most Popular</span> */}
                                </div>
                            )}
                            <div className="flex-grow">
                                <h3 className="text-3xl font-bold text-brand-black font-montserrat text-center">{plan.name}</h3>
                                <p className="text-center text-gray-600 mt-2 min-h-[6rem]">{plan.description}</p>
                                <div className="text-center my-8">
                                    <span className="text-5xl font-extrabold text-brand-black tracking-tight">PKR {plan.price}</span>
                                    <span className="text-gray-500 font-medium">{plan.period}</span>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start text-gray-800">
                                            <div className="flex-shrink-0"><CheckIcon /></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Added onClick handler to this button */}
                            <button 
                                onClick={handleChoosePlan}
                                className={`w-full mt-auto py-4 rounded-lg font-bold text-lg transition-colors ${plan.popular ? 'bg-brand-orange text-white hover:bg-opacity-90 shadow-lg' : 'bg-white text-brand-orange border-2 border-brand-orange hover:bg-orange-50'}`}
                            >
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
                        { q: "What is Kaamlay.com?", a: "Kaamlay.com is Pakistan’s first all-in-one online service platform where you can book skilled workers like plumbers, electricians, AC technicians, carpenters, and car washers right at your doorstep." },
                        { q: "How does Kaamlay.com work?", a: "Simply visit our website, select the service you need, choose your city, and place your booking. A verified Kaamlay technician will arrive at your location to complete the job." },
                        { q: "Are Kaamlay technicians trained and verified?", a: "Yes. Every technician on Kaamlay.com goes through a complete verification and training process to ensure safety, professionalism, and quality work." },
                        { q: "What cities are currently covered?", a: "We are currently available in major cities like Islamabad, Lahore, Karachi, Peshawar, and Rawalpindi. More cities are being added every month through our franchise network." },
                        { q: "How can I become a Kaamlay member?", a: "You can join our membership program through the “Membership Plans” page on our website. Members enjoy discounts, priority bookings, and loyalty benefits." },
                        { q: "Can I join Kaamlay as a service provider?", a: "Yes. Skilled individuals and maintenance experts can register on the “Join as Technician” page to start getting jobs and earn monthly income." },
                        { q: "What payment methods do you accept?", a: "We accept cash on service completion, online transfers, and in selected cities, digital wallet payments." },
                        { q: "How can I contact customer support?", a: "📞 Phone: 0300-1311111 📧 Email: kaamlay.com@gmail.com 🌐 Website: www.kaamlay.com" }
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