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
      const p = heroRef.current.querySelector("p")
      if (!h1 || !p) return

      const { words: h1Words } = splitText(h1)
      const { words: pWords } = splitText(p)

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

      animate(
        pWords,
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
              <div className="flex flex-col items-center justify-center transform translate-y-[-25%]">
              <h1 className="font-general-sans font-semibold text-3xl max-w-2xl text-white tracking-tight md:text-exl">
                Full of Life. Alive with Culture, Energy, and Spirit.
              </h1>
              <p className="font-general-sans mt-6 max-w-lg sm:max-w-3xl text-md font-light text-white leading-relaxed md:text-base">
                Every bottle of Isa Kombucha is brewed with raw ingredients, wild fermentation, and a whole lot of soul. No shortcuts, no fake fizz - just nature doing its thing.
              </p>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="relative font-general-sans font-light text-sm mt-8 cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-full bg-white shadow-md text-black hover:bg-white/80 transition-colors duration-300"
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
        <style>{`
          .split-word {
            will-change: transform, opacity;
          }
        `}</style>

        {/* Flavors Section */}
        <div className="flex justify-center items-center py-24 bg-white">
          <div className="max-w-[720px] mx-auto">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <Image
                  src="/images/kombucha/1.png"
                  alt="RAZMATAZZ flavor image"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900">
                    {flavors[0].name}
                  </p>
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900">
                    $4.99
                  </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 opacity-75">
                  {flavors[0].description} <br />
                  <strong>Ingredients:</strong> {flavors[0].ingredients}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-richblack mb-6">Hi, I'm Isa</h2>
                <p className="text-lg text-richblack/80 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.


                </p>
                <p className="text-lg text-richblack/80 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                </p>
                <div>
                  <Button className="bg-lilac hover:bg-midnightblue text-richblack">Read My Full Story</Button>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=480"
                    alt="Pic1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Highlight Section */}
        <VisualHighlight />

        {/* Reviews Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold tracking-tight text-richblack md:text-5xl mb-16">
              What Our Customers Say
            </h2>

            <ScrollableReviews />
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
