"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  age: number;
  fruitIcons: string[];
  fruitStyles: { left: string; top: string; animationDelay: string; animationDuration: string }[];
}

export default function HeroSection({ age, fruitIcons, fruitStyles }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
      className="relative min-h-[80vh] flex items-center justify-center text-center py-32"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/isa-portrait.jpg"
          alt="Isa with kombucha"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        {fruitStyles.map((style, index) => (
          <Image
            key={index}
            src={fruitIcons[index % fruitIcons.length]}
            alt="Fruit icon"
            width={40}
            height={40}
            className="absolute w-8 h-8 opacity-30 animate-float"
            style={style}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-richblack mb-6"
        >
          My Kombucha Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-richblack/80 leading-relaxed"
        >
          I’m Isa, a {age}-year-old entrepreneur, and this is the story of how my love for kombucha became a vibrant business full of life, culture, and spirit.
        </motion.p>
      </div>
    </motion.section>
  );
}