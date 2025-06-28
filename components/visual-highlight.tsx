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
    useTransform(scrollYProgress, [0, 1], [50, 145]),  // clockwise
    useTransform(scrollYProgress, [0, 1], [145, 0]),  // counter-clockwise
    useTransform(scrollYProgress, [0, 1], [180, 360]),  // full clockwise
    useTransform(scrollYProgress, [0, 1], [360, 18]),   // full counter-clockwise
    useTransform(scrollYProgress, [0, 1], [25, 200]),  // new icon rotation
    useTransform(scrollYProgress, [0, 1], [200, -25])  // new icon rotation
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
      src: "/icons/SVG/minimalistic icons2.svg"
    },
    // Top right - different positions for mobile
    { 
      size: 150, 
      desktop: { top: "5%", right: "15%" },
      mobile: { top: "5%", right: "5%" },
      rotate: rotations[1], 
      opacity: 0.1,
      src: "/icons/SVG/minimalistic icons4.svg"
    },
    // Bottom left - different positions for mobile
    { 
      size: 180, 
      desktop: { bottom: "10%", left: "30%" },
      mobile: { bottom: "10%", left: "10%" },
      rotate: rotations[2], 
      opacity: 0.12,
      src: "/icons/SVG/minimalistic icons8.svg"
    },
    // Bottom right - different positions for mobile
    { 
      size: 130, 
      desktop: { bottom: "5%", right: "20%" },
      mobile: { bottom: "5%", right: "10%" },
      rotate: rotations[3], 
      opacity: 0.15,
      src: "/icons/SVG/minimalistic icons10.svg"
    },
    // Center left - desktop only
    { 
      size: 100, 
      desktop: { top: "40%", left: "2%" },
      rotate: rotations[4], 
      opacity: 0.08,
      src: "/icons/SVG/minimalistic icons15.svg"
    },
    // Center right - desktop only
    { 
      size: 110, 
      desktop: { top: "35%", right: "3%" },
      rotate: rotations[5], 
      opacity: 0.09,
      src: "/icons/SVG/minimalistic icons1.svg"
    }
  ]

  // Illustration badges to display below paragraph
  const illustrationBadges = [
  { 
    src: "/icons/SVG/illustration badge1-white.svg", 
    alt: "Organic Certification",
    rotate: -15,
    translateX: 4,
    translateY: 0,
    scale: 1
  },
  { 
    src: "/icons/SVG/illustration badge2-white.svg", 
    alt: "Natural Ingredients",
    rotate: 10,
    translateX: 3,
    translateY:0,
    scale: 1
  },
  { 
    src: "/icons/SVG/illustration badge3-white.svg", 
    alt: "Eco Friendly",
    rotate: -17,
    translateX: 3,
    translateY: 0,
    scale: 1
  },
  { 
    src: "/icons/SVG/illustration badge4-white.svg", 
    alt: "Quality Guarantee",
    rotate: 25,
    translateX: 3,
    translateY: 0,
    scale: 1
  }
]

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-[#c78887] py-24 text-softwhite"
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
              // Apply mobile or desktop positions
              ...(icon.mobile ? {
                ...icon.desktop,
                ...icon.mobile
              } : {
                ...icon.desktop
              })
            }}
            className={index >= 4 ? "hidden md:block" : "block"} // Hide last 2 icons on mobile
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
        <div className="flex flex-col md:grid md:grid-cols-2 max-w-6xl">
          {/* Text content with mobile image inside */}
          <div className="px-4 md:px-10 relative z-10 pb-20 md:pb-0">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl relative z-10">Why Isa's Kombucha?</h2>
            <p className="mt-6 text-lg leading-relaxed text-softwhite/70 relative z-10">
              Every bottle of Isa's Kombucha is brewed with care using traditional methods and the finest organic
              ingredients. Our small-batch approach ensures quality and flavor in every sip.
            </p>
            
            {/* Illustration badges row */}
            <div className="flex flex-wrap gap-3 mt-6 mx-auto relative z-10">
              {illustrationBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="w-16 h-16"
                  style={{
                    transform: `rotate(${badge.rotate}deg) translate(${badge.translateX}px, ${badge.translateY}px) scale(${badge.scale})`
                  }}
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-4 ml-2 relative z-10">
              <li className="flex items-start relative z-10">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-white">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>100% Organic Ingredients</span>
              </li>
              <li className="flex items-start relative z-10">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-white">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Small-Batch Fermentation</span>
              </li>
              <li className="flex items-start relative z-10">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-white">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Sustainable Packaging</span>
              </li>
              <li className="flex items-start relative z-10">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-white">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>No Artificial Additives</span>
              </li>
            </ul>
            <Button 
              className="mt-8 ml-3 bg-white rounded-full hover:bg-white/80 text-richblack relative z-10"
              asChild
            >
              <a href="/whyIsa">Discover More</a>
            </Button>

            {/* Mobile-only image positioned in bottom right corner */}
            <div className="md:hidden absolute -bottom-28 -right-16 w-72 h-72">
              <Image
                src="/images/whyIsaPic.webp?v3"
                alt="Bottles of Isa's Kombucha"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
          </div>

          {/* Desktop-only image (hidden on mobile) */}
          <div className="hidden md:block absolute lg:right-0 -right-14 lg:-bottom-72 -bottom-32 z-10 transform -translate-x-16 w-[450px] lg:w-[600px]">
            <Image
              src="/images/whyIsaPic.webp?v3"
              alt="Bottles of Isa's Kombucha"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}