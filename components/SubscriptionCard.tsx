import React, { useState, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';


const SubscriptionCard = () => {
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans>('weekly');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const plans = {
    weekly: { 
      label: 'Weekly', 
      price: '25', 
      savings: '24%',
      frequencyText: 'per week'
    },
    biweekly: { 
      label: 'Bi-weekly', 
      price: '25', 
      savings: '18%',
      frequencyText: 'per 2 weeks'
    },
    monthly: { 
      label: 'Monthly', 
      price: '25', 
      savings: '12%',
      frequencyText: 'per month'
    }
  };

  const features = [
    'Mix & Match Flavors',
    '12 Bottles',
    'Cancel Anytime',
    'Free Delivery'
  ];

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:p-8">
      <div className="relative flex bg-white border border-slate-600 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
        {/* Left Image Section */}
        <div className={`relative w-64 flex-shrink-0 ${isMobile ? 'hidden' : 'block'}`}>
          <img
            src="/images/heroPics/2.jpeg"
            alt="Premium Kombucha Subscription"
            className="object-cover w-full h-full"
          />
        </div>

            <div className="relative flex-1 p-8 relative">

                <div className="absolute top-0 right-0 w-64 h-64">
                    <motion.img 
                      src="/icons/SVG/minimalistic icons14.svg" 
                      alt="Decorative icon"
                      className="w-full h-full object-fill p-10"
                      initial={{ opacity: 0.08, scale: 1, y:60, x: -30 }}
                      animate={{ opacity: 0.08, scale: 1, y:60, x: -30 }}
                      transition={{ duration: 0.5, ease: "easeOut", opacity:0.04 }}
                      style={{ filter: 'invert(16%) sepia(100%) saturate(748%) hue-rotate(0deg) brightness(91%) contrast(91%)' }}
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 w-64 h-64">
                    <motion.img 
                      src="/icons/SVG/minimalistic icons10.svg" 
                      alt="Decorative icon"
                      className="w-full h-full object-fill p-10"
                      initial={{ opacity: 0.08, scale: 1, y:25, x: 40 }}
                      animate={{ opacity: 0.08, scale: 1, y:25, x: 40 }}
                      transition={{ duration: 0.5, ease: "easeOut", opacity:0.04 }}
                      style={{ filter: 'invert(36%) sepia(100%) saturate(748%) hue-rotate(200deg) brightness(91%) contrast(91%)' }}
                    />
                  </div>

                  {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 capitalize">
            {plans[selectedPlan].label}
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Get premium kombucha delivered fresh to your door. Choose your perfect delivery schedule and enjoy artisanal flavors.
          </p>
          
          {/* Price */}
          <div className="mb-3 flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-900">${plans[selectedPlan].price}</span>
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-400 line-through">33€</span>
              <span className="text-gray-500 text-sm">{plans[selectedPlan].frequencyText}</span>
            </div>
          </div>
          
          {/* Savings Pill */}
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Save up to {plans[selectedPlan].savings}
            </span>
          </div>
          
          {/* Dropdown Menu */}
          <div className="relative mb-6 z-100">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <span className="font-medium text-gray-900">{plans[selectedPlan].label} Delivery</span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {Object.entries(plans).map(([key, plan]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedPlan(key as keyof typeof plans);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-gray-900">{plan.label}</div>
                    <div className="text-sm text-gray-500">${plan.price} {plan.frequencyText} - Save {plan.savings}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Features Checklist */}
          <div className="mb-8">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Subscribe Button */}
          <button
            className="w-full bg-black text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 relative"
            type="button"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;