/* eslint-disable */
"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Facebook, Instagram, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import VisualHighlight from "@/components/visual-highlight"
import ScrollableReviews from "@/components/scrollable-reviews"
export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed h-15 top-0 z-50 w-full bg-white text-richblack transition-transform duration-300" id="header">
        {/* Desktop Header */}
        <div className="container hidden md:flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/logo.svg"
              alt="Isa's Kombucha Logo"
              width={40}
              height={40}
              className="h-12 w-12"
              priority
            />
          </Link>
          <nav className="flex-1 flex justify-center absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-8">
              <li>
                <Link href="#">
                  Home
                </Link>
                
              </li>
              <li>
                <Link href="#" className="">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  My Story
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  For Offices
                </Link>
              </li>
            </ul>
          </nav>
          <div className="relative ml-4">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-sm font-medium text-richblack px-3 transform translate-x-7 py-1 transition-all"
            >
              <Image
              src={
                selectedLanguage === "EN"
                ? "/flags/sh.svg"
                : selectedLanguage === "SI"
                ? "/flags/si.svg"
                : selectedLanguage === "HR"
                ? "/flags/hr.svg"
                : selectedLanguage === "AT"
                ? "/flags/at.svg"
                : "/flags/sh.svg"
              }
              alt={`${selectedLanguage} flag`}
              width={20}
              height={14}
              className="inline-block mr-1 rounded-sm"
              priority={false}
              />
              {selectedLanguage}
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50"
                >
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                      onClick={() => {
                        setSelectedLanguage("EN")
                        setDropdownOpen(false)
                        // router.push('/en')
                      }}
                    >
                      <Image
                        src="/flags/sh.svg"
                        alt="English flag"
                        width={20}
                        height={14}
                        className="inline-block mr-1 rounded-sm"
                        priority={false}
                      />
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                      onClick={() => {
                        setSelectedLanguage("SI")
                        setDropdownOpen(false)
                        // router.push('/en')
                      }}
                    >
                      <Image
                        src="/flags/si.svg"
                        alt="English flag"
                        width={20}
                        height={14}
                        className="inline-block mr-1 rounded-sm"
                        priority={false}
                      />
                      Slovenian
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                      onClick={() => {
                        setSelectedLanguage("HR")
                        setDropdownOpen(false)
                        // router.push('/en')
                      }}
                    >
                      <Image
                        src="/flags/hr.svg"
                        alt="English flag"
                        width={20}
                        height={14}
                        className="inline-block mr-1 rounded-sm"
                        priority={false}
                      />
                      Croatian
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                      onClick={() => {
                        setSelectedLanguage("AT")
                        setDropdownOpen(false)
                        // router.push('/en')
                      }}
                    >
                      <Image
                        src="/flags/at.svg"
                        alt="English flag"
                        width={20}
                        height={14}
                        className="inline-block mr-1 rounded-sm"
                        priority={false}
                      />
                      Austrian
                    </button>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Mobile Header */}
        <div className="md:hidden flex w-full justify-between items-center px-4 pt-1 h-16">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-sm font-medium text-richblack px-3 py-1 transition-all"
          >
            <Image
              src={
                selectedLanguage === "EN"
                ? "/flags/sh.svg"
                : selectedLanguage === "SI"
                ? "/flags/si.svg"
                : selectedLanguage === "HR"
                ? "/flags/hr.svg"
                : selectedLanguage === "AT"
                ? "/flags/at.svg"
                : "/flags/sh.svg"
              }
              alt={`${selectedLanguage} flag`}
              width={20}
              height={14}
              className="inline-block mr-1 rounded-sm"
              priority={false}
              />
            {selectedLanguage}
            <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/logos/logo.svg"
              alt="Isa's Kombucha Logo"
              width={40}
              height={40}
              className="h-12 w-12 mb-1"
              priority
            />
          </Link>
          <Button variant="ghost" className="text-richblack" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </Button>
          {/* Language Dropdown on mobile */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 top-16 w-40 bg-white border border-gray-200 rounded shadow-lg z-50"
              >
                <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                      onClick={() => {
                        setSelectedLanguage("EN")
                        setDropdownOpen(false)
                        // router.push('/en')
                      }}
                    >
                      <Image
                        src="/flags/sh.svg"
                        alt="English flag"
                        width={20}
                        height={14}
                        className="inline-block mr-1 rounded-sm"
                        priority={false}
                      />
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                      onClick={() => {
                        setSelectedLanguage("SI")
                        setDropdownOpen(false)
                        // router.push('/si')
                      }}
                    >
                      <Image
                        src="/flags/si.svg"
                        alt="English flag"
                        width={20}
                        height={14}
                        className="inline-block mr-1 rounded-sm"
                        priority={false}
                      />
                      Slovenian
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                      onClick={() => {
                        setSelectedLanguage("HR")
                        setDropdownOpen(false)
                        // router.push('/hr')
                      }}
                    >
                      <Image
                        src="/flags/hr.svg"
                        alt="English flag"
                        width={20}
                        height={14}
                        className="inline-block mr-1 rounded-sm"
                        priority={false}
                      />
                      Croatian
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                      onClick={() => {
                        setSelectedLanguage("AT")
                        setDropdownOpen(false)
                        // router.push('/at')
                      }}
                    >
                      <Image
                        src="/flags/at.svg"
                        alt="English flag"
                        width={20}
                        height={14}
                        className="inline-block mr-1 rounded-sm"
                        priority={false}
                      />
                      Austrian
                    </button>
                  </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        {/* Mobile Hamburger Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-white z-40 shadow-md"
            >
              <ul className="flex flex-col p-4 space-y-4">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Shop</Link></li>
                <li><Link href="#">My Story</Link></li>
                <li><Link href="#">Help & FAQ</Link></li>
                <li><Link href="#">For Offices</Link></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center bg-white justify-center pt-0 px-2">
          <div className="relative w-full h-[calc(100vh-72px)] max-w-10xl mt-14 overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-0">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Kombucha bottle"
                fill
                className="object-cover brightness-50"
                priority
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center text-white">
              <h1 className="font-playfair text-5xl font-bold tracking-tight md:text-7xl">
                Hero Title 🌞
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
              </p>
              <Button className="mt-8 bg-midnightblue hover:bg-accent text-white">Button</Button>
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
