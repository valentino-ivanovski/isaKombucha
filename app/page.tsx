/* eslint-disable */
"use client"

import Image from "next/image"
import Link from "next/link"
import {Facebook, Instagram, Twitter, Globe } from "lucide-react"
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
import SubscriptionCards from "@/components/SubscriptionCards"

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const totalFrames = 30 // 0000.png to 0180.png
  const heroRef = useRef<HTMLDivElement>(null)
  const bottleRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLDivElement>(null)
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
            features: ["6 Bottles", "Free Delivery", "Cancel Anytime", "Mix & Match Flavors"]
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
            features: ["8 Bottles", "Free Priority Delivery", "Cancel Anytime", "20% Off Regular Price"]
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
            features: ["4 Bottles", "Free Delivery", "Cancel Anytime", "Seasonal Specials"]
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

  // Scroll-driven animation frame update (stops after hero section)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      // Stop scroll animation after hero section
      const heroBottom = heroSectionRef.current?.offsetHeight ?? 0
      if (scrollTop > heroBottom) return

      const scrollFraction = Math.max(0, Math.min(1, scrollTop / heroBottom))
      const newFrame = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames))
      setCurrentFrame(newFrame)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!heroRef.current) return
      heroRef.current.style.visibility = "visible"

      const h1 = heroRef.current.querySelector("h1")
      if (!h1) return

      const { words: h1Words } = splitText(h1)

      animate(
        h1Words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      )
    })
  }, [])

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

  // The scroll-driven effect above replaces the interval animation.

  const getImagePath = (frame: number): string => {
    return `/images/bottleBasilBreeze/${String(frame).padStart(4, "0")}.webp`
  }


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
        <section
          ref={el => {
            heroRef.current = el as HTMLDivElement | null
            heroSectionRef.current = el as HTMLDivElement | null
          }}
          style={{ visibility: "hidden" }}
          className="font-general-sans relative flex min-h-screen items-center font-general-sans bg-white justify-center pt-0 px-1"
        >

          <div className="relative w-full h-[calc(100vh-10px)] max-w-10xl bg-gray-200 overflow-hidden rounded-lg">
            <div
              className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white"
              style={{
              backgroundImage: "url('/images/heroPics/3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              }}
            >
              <div
              className="absolute inset-0 bg-black/10"
              style={{
                zIndex: -1,
              }}
              ></div>
              <div className="flex flex-col items-center justify-center transform translate-y-[-10%] px-8">
              <h1 className="font-general-sans font-semibold text-2xl max-w-2xl text-white tracking-tight md:text-3xl">
                Full of Life. Alive with Culture, Energy, and Spirit.
              </h1>
              <motion.p
                className="font-general-sans px-5 mt-6 max-w-lg text-sm sm:text-md sm:max-w-3xl text-md font-light text-white leading-relaxed md:text-base text-center"
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
              style={{
                backgroundImage: "url('/images/heroPics/3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              ></motion.div>
            </div>
          </div>
        </section>

        {/* Flavors Section */}
        <section className="bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 pt-10 sm:pt-16">
            <h2 className="text-center text-4xl transform translate-y-6 font-bold tracking-tight text-richblack md:text-5xl">
              Discover Our Flavors
            </h2>
          </div>
          {/* Gradient divs for edges */}
          <EmblaCarousel />
        </section>

        {/* Stores Section */}
        <section className="bg-gray-50 py-10 overflow-hidden">
  <div className="container mx-auto px-4">
    <Marquee 
          className="flex gap-4 p-0"
          pauseOnHover={false}
          speed={50}
          gradientWidth={25}
          gradient={true}
          gradientColor="#F9FAFB"
          pauseOnClick={true}
          style={{ scale: 1}}
        >
      {[0, 1, 2, 3].map((dupIdx) => (
        <div
          key={`store-set-${dupIdx}`}
          className="flex gap-12 sm:gap-32 items-center whitespace-nowrap"
        >
          {[
            "/stores/Mercator.webp",
            "/stores/Tus.webp",
            "/stores/Spar.webp",
            "/stores/DM.webp",
          ].map((src, idx) => (
            <div
              key={`store-${dupIdx}-${idx}`}
              className="flex justify-center flex-shrink-0"
              style={{ margin: idx === 0 ? "0 6px 0 80px" : idx === 3 ? "0 12px 0 6px" : "0 6px" }} // Added custom margins
            >
              <Image
                src={src}
                alt={`Store ${idx + 1}`}
                width={idx === 2 ? 180 : idx === 3 ? 150 : idx === 0 ? 130 : 100}
                height={idx === 2 ? 50 : idx === 3 ? 50 : 130}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      ))}
</Marquee>    
  </div>
</section>

        <SubscriptionCards />

        {/* Visual Highlight Section */}
        <VisualHighlight />

        {/* Reviews Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold tracking-tight text-richblack md:text-5xl mb-16">
              What Our Customers Say
            </h2>

            <MarqueeReviews />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-richblack py-12 text-softwhite">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold">Isa&apos;s Kombucha</h3>
              <p className="mt-4 text-softwhite/70">
                Premium kombucha crafted with organic ingredients and traditional brewing methods.
              </p>
            </div>

            <div>
              <h4 className="font-bold">Navigation</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-softwhite/70 hover:text-lilac transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-softwhite/70 hover:text-lilac transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-softwhite/70 hover:text-lilac transition-colors">
                    My Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-softwhite/70 hover:text-lilac transition-colors">
                    Help & FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-softwhite/70 hover:text-lilac transition-colors">
                    B2B
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">Contact</h4>
              <address className="mt-4 not-italic text-softwhite/70">
                <p>test test test</p>
                <p>test test test</p>
                <p className="mt-2">hello@email.com</p>
                <p>(123) 123-4567</p>
              </address>
            </div>

            <div>
              <h4 className="font-bold">Follow Us</h4>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-softwhite/70 hover:text-lilac transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-softwhite/70 hover:text-lilac transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-softwhite/70 hover:text-lilac transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
              <div className="mt-6">
                <p className="text-sm text-softwhite/70">
                  Subscribe to our newsletter for updates and exclusive offers.
                </p>
                <form className="mt-2 flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-l-md border-0 bg-softwhite/10 px-3 py-2 text-softwhite placeholder-softwhite/50 focus:outline-none focus:ring-2 focus:ring-lilac"
                  />
                  <Button type="submit" className="rounded-l-none bg-lilac hover:bg-midnightblue text-richblack">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-softwhite/10 pt-8 text-center text-sm text-softwhite/70">
            <p>&copy; {new Date().getFullYear()} Isa&apos;s Kombucha. All rights reserved.</p>
          </div>
        </div>
      </footer>
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
