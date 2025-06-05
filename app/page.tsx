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
      {/* Header */}
      <Header />
      
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
            <div className="relative z-10 bg-gradient-to-br from-white to-[#D2D2D2] h-[100%] flex flex-col items-center justify-start px-16 py-36 text-center text-white gap -">
                {/* Background Icons */}
                <div className="absolute inset-0 hidden -z-10">
                    {[
                      { src: "/icons/SVG/minimalistic icons10.svg", alt: "Icon 10", width: 150, height: 150, className: "absolute bottom-10 left-10 blur-sm opacity-100 text-black w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" },
                      { src: "/icons/SVG/minimalistic icons15.svg", alt: "Icon 15", width: 120, height: 120, className: "absolute bottom-20 right-20 blur-sm opacity-100 text-black w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" },
                      { src: "/icons/SVG/minimalistic icons8.svg", alt: "Icon 8", width: 130, height: 130, className: "absolute top-1/2 left-20 blur-sm opacity-100 text-black rotate-45 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" },
                      { src: "/icons/SVG/minimalistic icons13.svg", alt: "Icon 13", width: 80, height: 80, className: "absolute top-1/3 transform translate-y-10 left-1/4 blur-sm opacity-100 text-black xl:block hidden w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" },
                      { src: "/icons/SVG/minimalistic icons3.svg", alt: "Icon 6", width: 100, height: 100, className: "absolute top-2/3 transform translate-y-10 left-1/4 blur-sm opacity-100 rotate-45 text-black xl:block hidden w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" },
                      { src: "/icons/SVG/minimalistic icons6.svg", alt: "Icon 3", width: 100, height: 100, className: "absolute bottom-1/3 left-3/4 blur-sm opacity-100 text-black w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" },
                      { src: "/icons/SVG/minimalistic icons4.svg", alt: "Icon 4", width: 100, height: 100, className: "absolute top-10 left-16 blur-sm opacity-100 text-black w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" },
                      { src: "/icons/SVG/minimalistic icons1.svg", alt: "Icon 1", width: 95, height: 95, className: "absolute top-10 right-10 blur-sm opacity-100 text-black w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" },
                      { src: "/icons/SVG/minimalistic icons5.svg", alt: "Icon 5", width: 90, height: 90, className: "absolute top-1/4 left-3/4 transform translate-x-32 blur-sm opacity-100 text-black hidden 2xl:block w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" },
                    ].map((icon, index) => (
                      <Image
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                        className={icon.className}
                      />
                    ))}
                </div>
                <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-96 h-96 bg-[#D15052]/30 rounded-full blur-3xl opacity-80"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#241f20]/20 rounded-full blur-2xl opacity-80"></div>
                <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#D2D2D2]/40 rounded-full blur-3xl opacity-80"></div>
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#A8D5BA]/30 rounded-full blur-3xl opacity-80"></div>
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#F7C8E0]/30 rounded-full blur-3xl opacity-80"></div>
                <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-[#F9E79F]/30 rounded-full blur-3xl opacity-80"></div>
                <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-[#BFD7EA]/30 rounded-full blur-3xl opacity-80"></div>
                </div>

              <h1 className="font-general-sans font-semibold text-3xl max-w-2xl text-[#241f20] tracking-tight md:text-exl">
              Full of Life. Alive with Culture, Energy, and Spirit.
              </h1>
                <p className="font-general-sans mt-6 max-w-lg sm:max-w-3xl text-md font-light text-[#241f20] leading-relaxed md:text-base">
                Every bottle of Isa Kombucha is brewed with raw ingredients, wild fermentation, and a whole lot of soul. No shortcuts, no fake fizz - just nature doing its thing.
                </p>
              <div className="flex flex-row gap-4 transform translate-y-8 items-center justify-center">
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  className="relative font-general-sans cursor-pointer inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full text-base whitespace-nowrap text-gray-950 data-disabled:bg-white/15 data-disabled:opacity-40 hover:bg-gray-50 transition-colors duration-300"
                >
                  About
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  className="relative font-general-sans cursor-pointer inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-transparent bg-[#241f20] shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full text-base whitespace-nowrap text-white data-disabled:bg-white/15 data-disabled:opacity-40  hover:bg-black/80 transition-colors duration-300"
                >
                  Shop Now
                </motion.a>
                <style jsx>{`
                  @media (min-width: 768px) {
                  .bottle-image {
                    max-width: 100%;
                  }
                  }
                `}</style>
              </div>
              {/* Absolutely positioned bottles container */}
                <div className="absolute mt-56 flex flex-row z-0 h-[2150px] w-[1080px] overflow-hidden">
                <Image
                  src="/images/bottles.png"
                  alt="Isa Kombucha Bottles"
                  width={2150}
                  height={980}
                  className="object-contain"
                />
                </div>
            </div>
          </div>
        </section>
        <style>{`
          .split-word {
            will-change: transform, opacity;
          }
        `}</style>

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

        {/* Flavors Section */}
        <section className="bg-softwhite py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold tracking-tight text-richblack md:text-5xl">
              Our Signature Flavors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-richblack/70">
              Handcrafted in small batches using only the finest organic ingredients
            </p>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {flavors.map((flavor, index) => (
                <Card key={flavor.name} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className={`relative h-48 ${flavorColors[index]}`}>
                    <Image src={flavor.image || "/placeholder.svg"} alt={flavor.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{flavor.name}</CardTitle>
                    <CardDescription>{flavor.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-richblack/70">Ingredients:</p>
                    <p className="text-sm">{flavor.ingredients}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full text-white ${flavorButtonColors[index]}`}>Shop Now</Button>
                  </CardFooter>
                </Card>
              ))}
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
                    For Offices
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
    name: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, ginger, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, lavender, lemon, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, mixed berries, hibiscus, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, cucumber, mint, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: "Organic tea, cane sugar, turmeric, black pepper, orange, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
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
