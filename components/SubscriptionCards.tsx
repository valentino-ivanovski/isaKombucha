"use client"

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Star, Check, ChevronDown } from "lucide-react";
import SubscriptionCard from "@/components/SubscriptionCard"


export default function SubscriptionCards() {

    const [selectedPlan, setSelectedPlan] = useState('weekly');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
          setIsMobile(window.innerWidth < 640);
        };
    
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
      }, []);

    const plans = {
        weekly: { label: 'Weekly', price: '12.99€', savings: '24%' },
        biweekly: { label: 'Bi-weekly', price: '22.99€', savings: '18%' },
        monthly: { label: 'Monthly', price: '39.99€', savings: '12%' }
    };

    const features = [
        'Free delivery on all orders',
        'Premium kombucha selection',
        'Flexible delivery schedule',
        'Cancel anytime, no commitment'
    ];

    const fruitIcons = [
        "/icons/SVG/fruit1.svg",
        "/icons/SVG/fruit2.svg", 
        "/icons/SVG/fruit3.svg",
        "/icons/SVG/fruit4.svg",
        "/icons/SVG/fruit5.svg",
        "/icons/SVG/fruit6.svg",
        "/icons/SVG/fruit7.svg",
        "/icons/SVG/fruit8.svg",
        "/icons/SVG/fruit9.svg",
        "/icons/SVG/fruit10.svg",
        "/icons/SVG/fruit11.svg",
        "/icons/SVG/fruit12.svg"
    ];

    const [fruitStyles, setFruitStyles] = useState<{ left: string; top: string; animationDelay: string; animationDuration: string; }[]>([]);

useEffect(() => {
  const predefinedPositions = [
    { left: '10%', top: '15%' },
    { left: '25%', top: '40%' },
    { left: '40%', top: '10%' },
    { left: '55%', top: '35%' },
    { left: '70%', top: '20%' },
    { left: '85%', top: '50%' },
    { left: '20%', top: '70%' },
    { left: '35%', top: '80%' },
    { left: '50%', top: '65%' },
    { left: '65%', top: '75%' },
    { left: '80%', top: '70%' },
    { left: '90%', top: '85%' }
  ];

  const styles = fruitIcons.map((_, index) => ({
    left: predefinedPositions[index]?.left || '50%',
    top: predefinedPositions[index]?.top || '50%',
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 2}s`
  }));

  setFruitStyles(styles);
}, []);

    return (
        <div className="min-h-screen bg-white to-slate-100 py-16 px-4 relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                {fruitStyles.length > 0 &&
                  fruitIcons.map((fruit, index) => (
                    <img
                      key={index}
                      src={fruit}
                      alt=""
                      className="absolute w-10 h-10 opacity-30"
                      style={fruitStyles[index]}
                    />
                  ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        Best way to get
                        <span className="text-black"> Isa's Kombucha?</span>
                    </h1>
                    <h2 className="text-3xl underline font-semibold mb-6">
                        A Subscription!
                    </h2>
                    <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                        Get a box of Isa's Kombucha
                        automatically delivered to
                        your home or office every
                        month. So refreshing... (both
                        the drink and the price 😉)
                    </p>
                </div>

                <SubscriptionCard />

                <div className="text-center mt-12">
                    <p className="text-slate-600 text-sm">
                        All plans include free shipping • Cancel or pause anytime • 100% satisfaction guarantee
                    </p>
                </div>
            </div>
        </div>
    );
}