"use client"

import Image from "next/image"
import Link from "next/link"
import {Facebook, Instagram, Twitter, Globe, ChevronDown } from "lucide-react"
import { GoArrowUpRight } from "react-icons/go";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import VisualHighlight from "@/components/visual-highlight"
import ScrollableReviews from "@/components/scrollable-reviews"
import Header from "@/components/header"
import '../styles/globals.css'
import EmblaCarousel from "@/components/FlavorsCarousel";
import Marquee from "react-fast-marquee"
import MarqueeReviews from "@/components/marquee-reviews"
import { Star, Check } from "lucide-react";
import { Sub } from "@radix-ui/react-context-menu";
import MyStory from "@/components/MyStory"
import SubscriptionCards from "@/components/SubscriptionCards"
import StoresMarquee from "@/components/StoresMarquee";
import AboutMeSection from "@/components/AboutMeSection";
import Footer from "@/components/Footer"
import WovenImageList from "@/components/gallery";

export default function Home() {

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const totalFrames = 30 // 0000.png to 0180.png
  const heroRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLDivElement>(null)
  const [gradientWidth, setGradientWidth] = useState(150)
  const [bgImage, setBgImage] = useState("/images/heroPics/3.png")
  const [isMobile, setIsMobile] = useState(false);

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
      const styles = fruitIcons.map(() => ({
        left: `${3 * 100}%`,
        top: `${2 * 100}%`,
        animationDelay: `${5 * 3}s`,
        animationDuration: `${3 + 6 * 2}s`
      }));
      setFruitStyles(styles);
    }, []);

  useEffect(() => {
    // Set on mount
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkWidth(); // Initial check
    window.addEventListener('resize', checkWidth); // Listen to resize
    return () => window.removeEventListener('resize', checkWidth); // Cleanup
  }, []);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBgImage("/images/heroPics/1.webp")
      } else {
        setBgImage("/images/heroPics/3.webp")
      }
    }

    updateBackground()
    window.addEventListener("resize", updateBackground)
    return () => window.removeEventListener("resize", updateBackground)
  }, [])


 // Load images and set loaded state
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!heroRef.current) return;

      const h1 = heroRef.current.querySelector("h1");
      if (!h1) return;

      const { words: h1Words } = splitText(h1);

      animate(
        h1Words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setGradientWidth(window.innerWidth < 768 ? 25 : 150)
    }

    // Set initially
    handleResize()

    // Update on resize
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
        <Header />
        <style>{`
          .hero-section {
            visibility: visible !important;
          }
        `}</style>
      
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          ref={el => {
            heroRef.current = el as HTMLDivElement | null
            heroSectionRef.current = el as HTMLDivElement | null
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          className="font-general-sans relative flex min-h-screen items-center bg-white justify-center pt-0 px-1"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="relative w-full h-[calc(100vh-10px)] max-w-10xl bg-gray-200 overflow-hidden rounded-lg">
            <div
              className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
              <div
              className="absolute inset-0 bg-black/10"
              style={{
                zIndex: -1,
              }}
              ></div>
              <div className="flex flex-col items-center justify-center transform translate-y-[-10%] px-8">
              <motion.h1
                className="font-general-sans font-semibold text-2xl max-w-2xl text-white tracking-tight md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2
                }}
              >
                Full of Life. Alive with Culture, Energy, and Spirit.
              </motion.h1>
              <motion.p
                className="font-general-sans px-5 mt-6 max-w-lg text-sm sm:text-md sm:max-w-3xl text-md font-regular text-white leading-relaxed md:text-base text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              >
                Every bottle of Isa Kombucha is brewed with raw ingredients, wild fermentation, and a whole lot of soul. No shortcuts, no fake fizz - just nature doing its thing.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="relative font-general-sans font-regular text-sm mt-8 cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-full bg-white shadow-md text-black hover:bg-white/80 transition-colors duration-300"
              >
                Shop Now
              </motion.a>
              </div>
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ zIndex: -1 }}
              >
                <Image
                  src="/images/heroPics/1.webp?v2"
                  alt="Hero background mobile"
                  fill
                  priority
                  className="object-cover md:hidden"
                />
                <Image
                  src="/images/heroPics/3.webp"
                  alt="Hero background desktop"
                  fill
                  priority
                  className="object-cover hidden md:block"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Flavors Section */}
        <section className="bg-white overflow-hidden relative">
          <div className="container transform translate-y-10 mx-auto px-4 pb-0">
            <h2 className="text-center text-3xl transform translate-y-6 font-bold tracking-tight text-richblack md:text-5xl">
              Discover Our Flavours
            </h2>
            <p className="text-center text-xl text-richblack/80 mt-10 ">
              Each flavor is a unique blend of organic ingredients, wild fermentation, and a whole lot of love.
            </p>
          </div>
          <EmblaCarousel />
        </section>

        {/* Stores Section */}
        <StoresMarquee />

        {/* Subscription Cards Section */}
        <SubscriptionCards />

        {/* Visual Highlight Section */}
        <VisualHighlight />
            
        <WovenImageList />

        {/* Reviews Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold tracking-tight text-richblack md:text-5xl mb-16">
              What Our Customers Say
            </h2>

            <MarqueeReviews />
          </div>
        </section>


        {/* My Story */}
         <AboutMeSection isMobile={isMobile} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

const flavors = [
  {
    name: "RAZMATAZZ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, ginger, kombucha culture",
    image: "images/kombucha/1.png",
  },
  {
    name: "LOV(E)ANDA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, lavender, lemon, kombucha culture",
    image: "images/kombucha/2.png",
  },
  {
    name: "HOT GRANNY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, mixed berries, hibiscus, kombucha culture",
    image: "images/kombucha/3.png",
  },
  {
    name: "PINAKO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, cucumber, mint, kombucha culture",
    image: "images/kombucha/4.png",
  },
  {
    name: "BASIL BREEZE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, turmeric, black pepper, orange, kombucha culture",
    image: "images/kombucha/5.png",
  },
]

const flavorColors = [
  "bg-flavor-purple/20",
  "bg-flavor-green/20",
  "bg-flavor-yellow/20",
  "bg-flavor-pink/20",
  "bg-flavor-orange/20",
]

const flavorButtonColors = [
  "bg-flavor-purple hover:bg-flavor-purple/80",
  "bg-flavor-green hover:bg-flavor-green/80",
  "bg-flavor-yellow hover:bg-flavor-yellow/80",
  "bg-flavor-pink hover:bg-flavor-pink/80",
  "bg-flavor-orange hover:bg-flavor-orange/80",
]
