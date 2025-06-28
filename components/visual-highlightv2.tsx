"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function VisualHighlight() {
  const sectionRef = useRef(null)
  
  // Set up scroll animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Create multiple rotation transforms with different ranges and directions
  const rotations = [
    useTransform(scrollYProgress, [0, 1], [100, 200]),  // clockwise
    useTransform(scrollYProgress, [0, 1], [145, 245]),  // counter-clockwise
    useTransform(scrollYProgress, [0, 1], [260, 360]),  // full clockwise
    useTransform(scrollYProgress, [0, 1], [360, 260]),   // full counter-clockwise
    useTransform(scrollYProgress, [0, 1], [5, 105]),  // new icon rotation
    useTransform(scrollYProgress, [0, 1], [75, -25])  // new icon rotation
  ]

  // Different SVG icons for each decorative icon
  const decorativeIcons = [
    // Top left - different positions for mobile
    { 
      size: 120, 
      desktop: { top: "10%", left: "35%" },
      mobile: { top: "10%", left: "5%" },
      rotate: rotations[0], 
      opacity: 0.15,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Top right - different positions for mobile
    { 
      size: 150, 
      desktop: { top: "5%", right: "15%" },
      mobile: { top: "5%", right: "5%" },
      rotate: rotations[1], 
      opacity: 0.1,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Bottom left - different positions for mobile
    { 
      size: 180, 
      desktop: { bottom: "10%", left: "30%" },
      mobile: { bottom: "10%", left: "10%" },
      rotate: rotations[2], 
      opacity: 0.12,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Bottom right - different positions for mobile
    { 
      size: 130, 
      desktop: { bottom: "5%", right: "20%" },
      mobile: { bottom: "5%", right: "10%" },
      rotate: rotations[3], 
      opacity: 0.15,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Center left - desktop only
    { 
      size: 100, 
      desktop: { top: "40%", left: "2%" },
      rotate: rotations[4], 
      opacity: 0.08,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Center right - desktop only
    { 
      size: 110, 
      desktop: { top: "35%", right: "3%" },
      rotate: rotations[5], 
      opacity: 0.09,
      src: "/icons/SVG/minimalistic icons14.svg"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#c78887] pb-24 pt-44 text-softwhite"
    >
      {/* Decorative rotating icons with different SVGs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {decorativeIcons.map((icon, index) => (
          <motion.div
            key={index}
            style={{
              rotate: icon.rotate,
              width: icon.size,
              height: icon.size,
              position: 'absolute',
              opacity: icon.opacity,
              ...(icon.mobile ? {
                ...icon.desktop,
                ...icon.mobile
              } : {
                ...icon.desktop
              })
            }}
            className={index >= 4 ? "hidden md:block" : "block"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: icon.opacity, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <Image
              src={icon.src}
              alt=""
              width={icon.size}
              height={icon.size}
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Rest of your component remains the same */}
      <div className="container flex justify-center mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          {/* Text content with mobile image inside */}
          <div className="px-4 md:px-10 relative z-10 pb-20 md:pb-0">
            <motion.h2 
              className="text-4xl font-bold tracking-tight md:text-5xl relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              What is Kombucha?
            </motion.h2>
            <motion.p 
              className="mt-6 text-4xl w-[700px] leading-relaxed font-medium text-softwhite/70 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Kombucha is an ancient fermented drink. Kombucha fermentation begins
            with tea,
            sugar,
            and
            a scoby.
            In the process it
            changes,
            from a normal
            to a tea that
            is full of life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}