"use client"

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Star, Check } from "lucide-react";

export default function SubscriptionCards() {
    const plans = [
        {
            id: "weekly",
            title: "Weekly",
            description: "Perfect for kombucha enthusiasts",
            price: 31,
            originalPrice: 36,
            period: "week",
            bottles: 6,
            gradient: "from-slate-50 to-slate-100",
            bgColor: "bg-white",
            buttonColor: "bg-slate-900 hover:bg-slate-800",
            savings: 14,
            features: ["Mix & Match Flavors", "12 Bottles", "Cancel Anytime", "Free Delivery"]
        },
        {
            id: "biweekly",
            title: "Bi-Weekly",
            description: "Most popular choice - Best Value!",
            price: 25,
            originalPrice: 33,
            period: "2 weeks", 
            bottles: 8,
            gradient: "from-slate-50 to-slate-100",
            bgColor: "bg-white",
            buttonColor: "bg-black hover:bg-slate-800",
            bestSeller: true,
            savings: 24,
            features: ["Mix & Match Flavors", "12 Bottles", "Cancel Anytime", "Free Delivery"]
        },
        {
            id: "monthly",
            title: "Monthly",
            description: "Great for occasional sippers",
            price: 21,
            originalPrice: 25,
            period: "month",
            bottles: 4,
            gradient: "from-slate-50 to-slate-100",
            bgColor: "bg-white",
            buttonColor: "bg-slate-900 hover:bg-slate-800",
            savings: 16,
            features: ["Mix & Match Flavors", "12 Bottles", "Cancel Anytime", "Free Delivery"]
        }
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

    const [fruitStyles, setFruitStyles] = useState([]);

    useEffect(() => {
      const styles = fruitIcons.map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
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
                      className="absolute w-10 h-10 opacity-50 animate-bounce"
                      style={fruitStyles[index]}
                    />
                  ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Best way to get some
                        <span className="text-black"> Isa's Kombucha?</span>
                    </h1>
                    <h2 className="text-3xl md:text-4xl underline font-semibold text-[#d9b547] mb-6">
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

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center px-4 sm:px-0">
                    {plans.map((plan, index) => (
                        <div key={plan.id} className="relative max-w-sm w-full mx-auto">
                            {plan.bestSeller && (
                                <div 
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-4 z-20"
                                    style={{ top: '-0.7rem' }} // Adjust this value to move it further up
                                >
                                    <div className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-slate-200">
                                        BEST VALUE
                                    </div>
                                </div>
                            )}
                            
                            <Card className={`
                                relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl
                                ${plan.bestSeller ? 'ring-2 ring-black shadow-xl scale-105' : 'shadow-lg hover:shadow-xl'}
                                ${plan.bgColor} border border-slate-200
                            `}>
                                {/* Subtle gradient background overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`} />

                                <CardHeader className="relative z-10 text-center pb-4">
                                    {plan.bestSeller && (
                                        <div className="flex justify-center mb-2">
                                            <Star className="text-yellow-500 fill-current" size={20} />
                                        </div>
                                    )}
                                    <CardTitle className="text-2xl font-bold text-black mb-2">
                                        {plan.title}
                                    </CardTitle>
                                    <CardDescription className="text-slate-600 font-medium">
                                        {plan.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="relative z-10 text-center pb-6">
                                    <div className="mb-6">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <span className="text-4xl font-bold text-black">
                                                €{plan.price}
                                            </span>
                                            <div className="text-left">
                                                <div className="text-sm text-slate-400 line-through">
                                                    €{plan.originalPrice}
                                                </div>
                                                <div className="text-sm text-slate-600">
                                                    per {plan.period}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                                            Save up {plan.savings}%
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-6 text-left md:text-left sm:text-center">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-3 justify-center md:justify-start">
                                                <Check className="text-green-600 flex-shrink-0" size={16} />
                                                <span className="text-slate-700 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="relative z-10">
                                    <Button 
                                        className={"align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg block w-full bg-black text-white hover:bg-gray-800 focus:bg-gray-800"}
                                    >
                                        Start {plan.title} Plan
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-600 text-sm">
                        All plans include free shipping • Cancel or pause anytime • 100% satisfaction guarantee
                    </p>
                </div>
            </div>
        </div>
    );
}