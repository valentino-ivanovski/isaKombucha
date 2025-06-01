/* eslint-disable */
"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Facebook, Instagram, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
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
  const totalFrames = 181 // 0000.png to 0180.png
  const frameRate = 30 // Adjust for animation speed (milliseconds)

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

  useEffect(() => {
    if (!imagesLoaded) return

    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames)
    }, frameRate)

    return () => clearInterval(interval)
  }, [imagesLoaded])

  const getImagePath = (frame: number): string => {
    return `/images/bottleBasilBreeze/${String(frame).padStart(4, "0")}.webp`
  }


  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="font-general-sans relative flex min-h-screen items-center font-general-sans bg-white justify-center pt-0 px-1">
          <div className="relative w-full h-[calc(100vh-10px)] max-w-10xl bg-gray-200 overflow-hidden rounded-lg">
            <div className="relative z-10 bg-[#fffaf0] h-[55%] flex flex-col items-start justify-center px-16 py-24 text-left text-white">
              <h1 className="font-general-sans text-3xl text-[#241f20] tracking-tight md:text-4xl">
                Full of Life. <br /> Alive with Culture, Energy, and Spirit.
              </h1>
              <p className="font-general-sans mt-6 max-w-2xl text-lg font-light text-[#241f20] leading-relaxed md:text-lg">
                Every bottle of Isa Kombucha is brewed with raw ingredients, wild fermentation, and a whole lot of soul. No shortcuts, no fake fizz - just nature doing its thing.
              </p>
            <a className="relative font-general-sans cursor-pointer inline-flex items-center transform translate-y-5 justify-center px-5 py-1.5 rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base whitespace-nowrap text-gray-950 data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20"> Explore </a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between h-[45%] z-20 w-full">
              <div className="w-1/4 h-full bg-[#fffaf0] relative">
                {imagesLoaded ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={getImagePath(currentFrame)}
                      alt="Bottle Basil Breeze Animation"
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#fffaf0] text-[#241f20] text-transparent">
                    Loading...
                  </div>
                )}
              </div>
              <div className="w-1/4 h-full bg-green-300" />
              <div className="w-1/4 h-full bg-[#fffaf0] relative">
              </div>
              <div className="w-2/4 h-full bg-red-300" />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-richblack mb-6">Hi, I'm Isa</h2>
                <p className="text-lg text-richblack/80 mb-4">
                  My journey with kombucha began five years ago in my small apartment kitchen. What started as a
                  curiosity quickly blossomed into a passion for crafting the perfect fermented tea.
                </p>
                <p className="text-lg text-richblack/80 mb-6">
                  Every bottle of Isa's Kombucha is handcrafted with care using traditional methods passed down through
                  generations, combined with innovative flavor profiles inspired by my travels around the world. I
                  believe in using only the finest organic ingredients and sustainable practices to create a product
                  that's good for both you and the planet.
                </p>
                <div>
                  <Button className="bg-lilac hover:bg-midnightblue text-richblack">Read My Full Story</Button>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=480"
                    alt="Isa, founder of Isa's Kombucha"
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
                <p>123 Brew Street</p>
                <p>Ferment City, FC 12345</p>
                <p className="mt-2">hello@isaskombucha.com</p>
                <p>(555) 123-4567</p>
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
    name: "Classic Ginger",
    description: "A timeless blend with a spicy kick",
    ingredients: "Organic tea, cane sugar, ginger, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Lavender Lemon",
    description: "Floral notes with citrus brightness",
    ingredients: "Organic tea, cane sugar, lavender, lemon, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Berry Hibiscus",
    description: "Sweet and tart with deep red hues",
    ingredients: "Organic tea, cane sugar, mixed berries, hibiscus, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Cucumber Mint",
    description: "Refreshing and cooling blend",
    ingredients: "Organic tea, cane sugar, cucumber, mint, kombucha culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Turmeric Sunrise",
    description: "Golden elixir with anti-inflammatory properties",
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
