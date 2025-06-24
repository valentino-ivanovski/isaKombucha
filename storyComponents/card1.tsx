"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  isMobile: boolean;
}

export default function HeroSection({ isMobile }: HeroSectionProps) {
  // Animation variants for the content section
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeInOut" } },
  };

  return (
    <section className="bg-white pt-20 sm:pt-16">
      <div className="flex flex-col h-full w-full items-center justify-center">
        {/* Image Container */}
        <div
          className="w-full px-4 sm:px-6 relative"
          style={{ aspectRatio: isMobile ? "3 / 2" : "25 / 9" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full absolute top-0 left-0"
          >
            <Image
              src="/images/aboutme.jpeg"
              alt="About Isa"
              fill
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        </div>

        {/* Content Section with Animation */}
        <motion.div
          className="w-full flex flex-col sm:flex-row pb-3 justify-center items-center"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
                      className="flex justify-center items-center sm:w-1/3 w-full sm:min-h-[200px] min-h-[150px] bg-white text-4xl sm:text-3xl md:text-4xl text-center sm:text-left sm:pl-8 px-4 py-2 font-medium italic"
                      variants={itemVariants}
                    >
                      "Trust your gut. <br /> That’s where this started."
                    </motion.div>
                    <motion.div
                      className="sm:w-1/3 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm"
                      variants={itemVariants}
                    >
                      I’m Isa. I’m 22. And I’ve never fit neatly into one place, one label, or one way of doing things.
          I was raised across continents — from Colorado to India to Slovenia — in a family that lived unconventionally and loved deeply. I was unschooled, wildly curious, and raised to learn through life.
          
                    </motion.div>
                    <motion.div
                      className="sm:w-1/3 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm"
                      variants={itemVariants}
                    >
                      I guess you could say I became an entrepreneur at 8, when I decided to set up lemonade stands three times a week and started saving money in a tin box. I didn’t stop there. I was always inventing things — coconut openers, umbrella hats, sewing my own gear, repurposing scraps into something new. I didn’t need toys, I just needed a project. My hands were always busy, and my imagination was always full. Looking back, it makes perfect sense that I’d end up building something of my own.
          
                    </motion.div>
        </motion.div>
      </div>
    
    </section>
  );
}