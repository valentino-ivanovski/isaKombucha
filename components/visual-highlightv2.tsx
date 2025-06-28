"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function VisualHighlight() {
  const sectionRef = useRef(null)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const totalFrames = 70

  // Set up scroll animation for decorative icons
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Decorative icons without rotation
  const decorativeIcons = [
    // Top left - different positions for mobile
    { 
      size: 120, 
      
      desktop: { top: "10%", left: "35%" },
      mobile: { top: "10%", left: "5%" },
      opacity: 0.15,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Top right - different positions for mobile
    { 
      size: 150, 
      desktop: { top: "5%", right: "15%" },
      mobile: { top: "5%", right: "5%" },
      opacity: 0.1,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Bottom left - different positions for mobile
    { 
      size: 180, 
      desktop: { bottom: "10%", left: "30%" },
      mobile: { bottom: "10%", left: "10%" },
      opacity: 0.12,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Bottom right - different positions for mobile
    { 
      size: 130, 
      desktop: { bottom: "5%", right: "20%" },
      mobile: { bottom: "5%", right: "10%" },
      opacity: 0.15,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Center left - desktop only
    { 
      size: 100, 
      desktop: { top: "40%", left: "2%" },
      opacity: 0.08,
      src: "/icons/SVG/minimalistic icons14.svg"
    },
    // Center right - desktop only
    { 
      size: 110, 
      desktop: { top: "35%", right: "3%" },
      opacity: 0.09,
      src: "/icons/SVG/minimalistic icons14.svg"
    }
  ]

  // Helper function to parse percentage string to number
  const parsePercentage = (value) => {
    if (!value) return 50
    return parseFloat(value.replace('%', ''))
  }

  // Helper function to get rotation angle for icon to face center (50%, 50%)
  const getRotationAngle = (icon) => {
    // Determine position percentages
    // For left/right: if left defined, use left, else if right defined, use 100 - right
    // For top/bottom: if top defined, use top, else if bottom defined, use 100 - bottom
    const desktopPos = icon.desktop || {}

    let leftPercent = 50
    if ('left' in desktopPos) {
      leftPercent = parsePercentage(desktopPos.left)
    } else if ('right' in desktopPos) {
      leftPercent = 100 - parsePercentage(desktopPos.right)
    }

    let topPercent = 50
    if ('top' in desktopPos) {
      topPercent = parsePercentage(desktopPos.top)
    } else if ('bottom' in desktopPos) {
      topPercent = 100 - parsePercentage(desktopPos.bottom)
    }

    // Vector from icon to center (50,50)
    const dx = 50 - leftPercent
    const dy = 50 - topPercent

    // atan2 returns radians, convert to degrees
    const angleRad = Math.atan2(dy, dx)
    const angleDeg = angleRad * (180 / Math.PI)

    // Add 90 degrees to face the center (adjust so icons face inward)
    return angleDeg + 90
  }

  // Scroll-driven animation frame update (stops after section)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const sectionBottom = sectionRef.current?.offsetHeight ?? 0
      if (scrollTop > sectionBottom) return

      const scrollFraction = Math.max(0, Math.min(1, scrollTop / sectionBottom))
      const newFrame = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames))
      setCurrentFrame(newFrame)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Preload images
  useEffect(() => {
    let isCancelled = false

    const preloadImages = async () => {
      const promises = []
      for (let i = 0; i < totalFrames; i++) {
        const src = getImagePath(i)
        const img = new window.Image()
        img.src = src
        promises.push(
          new Promise((resolve) => {
            img.onload = resolve
            img.onerror = resolve
          })
        )
      }

      await Promise.all(promises)
      if (!isCancelled) setImagesLoaded(true)
    }

    preloadImages()

    return () => {
      isCancelled = true
    }
  }, [])

  // Generate image path for current frame
  const getImagePath = (frame) => {
    return `/images/bottleBasilBreeze/${frame.toString().padStart(4, '0')}.webp`
  }

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#FEFAF1] pb-24 pt-44 text-softwhite"
    >
      {/* Decorative icons without rotation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {decorativeIcons.map((icon, index) => (
          <motion.div
            key={index}
            style={{
              width: icon.size,
              height: icon.size,
              position: 'absolute',
              opacity: icon.opacity,
              ...(icon.mobile ? {
                ...icon.desktop,
                ...icon.mobile
              } : {
                ...icon.desktop
              }),
              rotate: getRotationAngle(icon)
            }}
            className={index >= 4 ? "hidden md:block" : "block"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: icon.opacity, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <img
              src={icon.src}
              alt=""
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container flex justify-center mx-auto px-4 relative z-10">
        <div className="relative w-full max-w-7xl h-[700px]">
          {/* Animated Bottle Image */}
          <div className="absolute left-[51%] top-[51%] transform -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10">
            <img
              src={getImagePath(currentFrame)}
              alt="Isa's Kombucha Bottle"
              className="w-48 h-auto md:w-[200px] lg:w-[370px]"
            />
          </div>

          {/* Title - What is Kombucha? */}
          <div className="absolute top-[-5%] left-0 right-0 z-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#241f20] text-center max-w-full">
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
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] text-center max-w-full">
                Kombucha fermentation begins
              </p>
            </div>

            {/* Text Div 3 */}
            <div className="absolute bottom-[64%] left-[26%]">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] max-w-full">with tea,</p>
            </div>

            {/* Text Div 4 */}
            <div className="absolute bottom-[64%] right-[32%]">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] max-w-full">sugar,</p>
            </div>

            {/* Text Div 5 */}
            <div className="absolute bottom-[56%] left-[32%]">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] max-w-full">and</p>
            </div>

            {/* Text Div 6 */}
            <div className="absolute bottom-[56%] right-[26%]">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] max-w-full">a scoby.</p>
            </div>

            {/* Text Div 7 */}
            <div className="absolute bottom-[48%] left-[10%]">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] max-w-full">In the process it</p>
            </div>

            {/* Text Div 8 */}
            <div className="absolute bottom-[48%] right-[23%]">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] max-w-full">changes,</p>
            </div>

            {/* Text Div 9 */}
            <div className="absolute bottom-[40%] left-[10%]">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] max-w-full">from a normal tea</p>
            </div>

            {/* Text Div 10 */}
            <div className="absolute bottom-[40%] right-[18%]">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#241f20] max-w-full">to a tea that</p>
            </div>

            {/* Text Div 11 */}
            <div className="absolute bottom-[30%] left-[22%]">
              <p className="text-3xl underline underline-offset-[6px] md:text-4xl lg:text-5xl font-bold text-[#241f20] text-center max-w-full">
                is full of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}