"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import HeroSection from "@/storyComponents/HeroSection";
import JourneySection from "@/storyComponents/JourneySection";
import ValuesSection from "@/storyComponents/ValuesSection";
import FlavorsSection from "@/storyComponents/FlavorsSection";
import CTASection from "@/storyComponents/CTASection";

export default function MyStoryPage() {
  const birthDate = new Date(2003, 0, 31); // Months are 0-indexed
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) {
    age--;
  }

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
    "/icons/SVG/fruit12.svg",
  ];

  const [fruitStyles, setFruitStyles] = useState<
    { left: string; top: string; animationDelay: string; animationDuration: string }[]
  >([]);

  useEffect(() => {
    const styles = fruitIcons.slice(0, 5).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 6}s`,
    }));
    setFruitStyles(styles);
  }, []);

  const flavors = [
    {
      name: "RAZMATAZZ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ingredients: "Organic tea, cane sugar, ginger, kombucha culture",
      color: "bg-flavor-purple",
      hoverColor: "hover:bg-flavor-purple/80",
      icons: ["/icons/SVG/fruit1.svg", "/icons/SVG/fruit6.svg", "/icons/SVG/fruit11.svg"],
    },
    {
      name: "LOV(E)ANDA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ingredients: "Organic tea, cane sugar, lavender, lemon, kombucha culture",
      color: "bg-flavor-green",
      hoverColor: "hover:bg-flavor-green/80",
      icons: ["/icons/SVG/fruit2.svg", "/icons/SVG/fruit7.svg", "/icons/SVG/fruit12.svg"],
    },
    {
      name: "HOT GRANNY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ingredients: "Organic tea, cane sugar, mixed berries, hibiscus, kombucha culture",
      color: "bg-flavor-yellow",
      hoverColor: "hover:bg-flavor-yellow/80",
      icons: ["/icons/SVG/fruit3.svg", "/icons/SVG/fruit8.svg", "/icons/SVG/fruit10.svg"],
    },
    {
      name: "PINAKO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ingredients: "Organic tea, cane sugar, cucumber, mint, kombucha culture",
      color: "bg-flavor-pink",
      hoverColor: "hover:bg-flavor-pink/80",
      icons: ["/icons/SVG/fruit4.svg", "/icons/SVG/fruit9.svg", "/icons/SVG/fruit11.svg"],
    },
    {
      name: "BASIL BREEZE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ingredients: "Organic tea, cane sugar, turmeric, black pepper, orange, kombucha culture",
      color: "bg-flavor-orange",
      hoverColor: "hover:bg-flavor-orange/80",
      icons: ["/icons/SVG/fruit5.svg", "/icons/SVG/fruit6.svg", "/icons/SVG/fruit12.svg"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white font-general-sans">
      <Header />
      <main className="flex-1 px-6">
        <HeroSection age={age} fruitIcons={fruitIcons} fruitStyles={fruitStyles} />
        <JourneySection />
        <ValuesSection />
        {/*<FlavorsSection flavors={flavors} />*/}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}