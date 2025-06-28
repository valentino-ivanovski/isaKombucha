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
      className="relative h-screen overflow-hidden bg-[#FEFAF1] pb-24 pt-44 text-softwhite"
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
        <div className="relative w-full max-w-7xl h-[700px]">
        {/* Rotated Bottle Image */}
        <div className="absolute left-[51%] top-[51%] transform -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10">
          <Image
            src="/images/bottleBasilBreeze/0000.webp"
            alt="Isa's Kombucha Bottle"
            width={200}
            height={400}
            className="w-48 h-auto md:w-[200px] lg:w-[370px]"
            priority
          />
        </div>

        {/* Title - What is Kombucha? */}
        <div className="absolute top-[-5%] left-0 right-0 z-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center max-w-full">
            What is Kombucha?
          </h1>
        </div>
        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-center transform -translate-y-7 justify-center z-0">
          {/* Text Div 1 */}
          <div className="absolute top-[12%] left-0 right-0">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] text-center max-w-full">
              Kombucha is an ancient fermented tea.
            </p>
          </div>

          {/* Text Div 2 */}
          <div className="absolute top-[21%] left-0 right-0">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 text-center max-w-full">
              Kombucha fermentation begins
            </p>
          </div>

          {/* Text Div 3 */}
          <div className="absolute bottom-[64%] left-[26%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-full">with tea,</p>
          </div>

          {/* Text Div 4 */}
          <div className="absolute bottom-[64%] right-[32%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-full">sugar,</p>
          </div>

          {/* Text Div 5 */}
          <div className="absolute bottom-[56%] left-[32%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-full">and</p>
          </div>

          {/* Text Div 6 */}
          <div className="absolute bottom-[56%] right-[26%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-full">a scoby.</p>
          </div>

          {/* Text Div 7 */}
          <div className="absolute bottom-[48%] left-[10%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-full">In the process it</p>
          </div>

          {/* Text Div 8 */}
          <div className="absolute bottom-[48%] right-[23%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-full">changes,</p>
          </div>

          {/* Text Div 9 */}
          <div className="absolute bottom-[40%] left-[10%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-full">from a normal tea</p>
          </div>

          {/* Text Div 10 */}
          <div className="absolute bottom-[40%] right-[18%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-full">to a tea that</p>
          </div>

          {/* Text Div 11 */}
          <div className="absolute bottom-[30%] left-[22%]">
            <p className="text-3xl underline underline-offset-[6px] md:text-4xl lg:text-5xl font-bold text-gray-800 text-center max-w-full">
              is full of life.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}