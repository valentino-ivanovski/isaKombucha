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

        {/* Flavors Section */}
        <section className="bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 pt-16">
            <h2 className="text-center text-4xl transform translate-y-6 font-bold tracking-tight text-richblack md:text-5xl">
              Discover Our Flavors
            </h2>
          </div>
          {/* Gradient divs for edges */}
          <EmblaCarousel />
        </section>

        {/* Stores Section */}
        <section className="bg-gray-50 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-row gap-12 sm:gap-32 items-center justify-center">
              <div className="flex justify-center">
          <Image
            src="/stores/Mercator.webp"
            alt="Store 1"
            width={130}
            height={130}
            className="object-contain"
          />
              </div>
              <div className="flex justify-center">
          <Image
            src="/stores/Tus.webp"
            alt="Store 2"
            width={100}
            height={100}
            className="object-contain"
          />
              </div>
              <div className="flex justify-center">
          <Image
            src="/stores/Spar.webp"
            alt="Store 3"
            width={180}
            height={50}
            className="object-contain"
          />
              </div>
              <div className="flex justify-center">
          <Image
            src="/stores/DM.webp"
            alt="Store 4"
            width={150}
            height={50}
            className="object-contain"
          />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-richblack md:text-5xl mb-6">
                Never Run Out of Your Favorite Flavors
              </h2>
              <p className="text-lg text-richblack/80 max-w-2xl mx-auto">
                Subscribe and save with our flexible delivery options. Get your kombucha delivered fresh to your door,
                exactly when you need it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-lilac transition-colors duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-richblack">Weekly</CardTitle>
                  <CardDescription className="text-richblack/70">Perfect for daily drinkers</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-richblack mb-4">Save 10%</div>
                  <ul className="space-y-2 text-richblack/80">
                    <li>• Delivered every week</li>
                    <li>• Free shipping</li>
                    <li>• Skip or cancel anytime</li>
                    <li>• Mix & match flavors</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-lilac hover:bg-midnightblue text-richblack">
                    Start Weekly Subscription
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-lilac bg-lilac/5 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-lilac text-richblack px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-richblack">Bi-Weekly</CardTitle>
                  <CardDescription className="text-richblack/70">Great for regular enjoyment</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-richblack mb-4">Save 15%</div>
                  <ul className="space-y-2 text-richblack/80">
                    <li>• Delivered every 2 weeks</li>
                    <li>• Free shipping</li>
                    <li>• Skip or cancel anytime</li>
                    <li>• Priority customer support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-richblack hover:bg-richblack/80 text-softwhite">
                    Start Bi-Weekly Subscription
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 hover:border-lilac transition-colors duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-richblack">Monthly</CardTitle>
                  <CardDescription className="text-richblack/70">Casual kombucha lovers</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-richblack mb-4">Save 20%</div>
                  <ul className="space-y-2 text-richblack/80">
                    <li>• Delivered monthly</li>
                    <li>• Free shipping</li>
                    <li>• Skip or cancel anytime</li>
                    <li>• Exclusive flavor previews</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-lilac hover:bg-midnightblue text-richblack">
                    Start Monthly Subscription
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-richblack md:text-5xl mb-6">My Story</h2>
                <p className="text-xl text-richblack/80">From kitchen experiments to your favorite kombucha</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-richblack mb-4">The Beginning</h3>
                  <p className="text-lg text-richblack/80 mb-4">
                    It all started in my tiny apartment kitchen in 2018. I was dealing with digestive issues and
                    discovered kombucha's incredible benefits. But store-bought versions were either too sweet, too
                    expensive, or filled with artificial ingredients.
                  </p>
                  <p className="text-lg text-richblack/80">
                    So I decided to brew my own. What began as a personal health journey quickly became an obsession
                    with perfecting the craft of fermentation.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-80 h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Isa in her kitchen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 md:order-1 flex justify-center">
                  <div className="relative w-80 h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Kombucha brewing process"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-richblack mb-4">The Craft</h3>
                  <p className="text-lg text-richblack/80 mb-4">
                    I spent months perfecting my recipes, experimenting with wild fermentation techniques and sourcing
                    the finest organic ingredients. Each batch taught me something new about the delicate balance of
                    flavors and probiotics.
                  </p>
                  <p className="text-lg text-richblack/80">
                    Friends and family became my taste testers, and their enthusiasm convinced me that this wasn't just
                    a hobby anymore – it was my calling.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-richblack mb-4">Today</h3>
                <p className="text-lg text-richblack/80 mb-8 max-w-3xl mx-auto">
                  Every bottle of Isa's Kombucha is still crafted with the same passion and attention to detail that
                  started in my kitchen. We've grown, but our commitment to quality, authenticity, and your health
                  remains unchanged. This is more than a business – it's my life's work, and I'm honored to share it
                  with you.
                </p>
                <Button className="bg-lilac hover:bg-midnightblue text-richblack text-lg px-8 py-3">
                  Read the Full Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Isa's Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-richblack md:text-5xl mb-6">Why Choose Isa's?</h2>
              <p className="text-xl text-richblack/80 max-w-2xl mx-auto">
                Not all kombucha is created equal. Here's what makes ours special.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-lilac/10 transition-colors duration-300">
                <div className="w-16 h-16 bg-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-richblack mb-3">100% Organic</h3>
                <p className="text-richblack/80">
                  We use only certified organic ingredients, from our tea leaves to our cane sugar. No shortcuts, no
                  compromises.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-lilac/10 transition-colors duration-300">
                <div className="w-16 h-16 bg-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-xl font-bold text-richblack mb-3">Wild Fermentation</h3>
                <p className="text-richblack/80">
                  Our SCOBY cultures are naturally wild-fermented, creating complex flavors and maximum probiotic
                  benefits.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-lilac/10 transition-colors duration-300">
                <div className="w-16 h-16 bg-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-richblack mb-3">No Artificial Fizz</h3>
                <p className="text-richblack/80">
                  Our carbonation comes naturally from the fermentation process. Real bubbles, real flavor, real
                  benefits.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-lilac/10 transition-colors duration-300">
                <div className="w-16 h-16 bg-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-richblack mb-3">Artisan Crafted</h3>
                <p className="text-richblack/80">
                  Every batch is carefully monitored and taste-tested. We're artisans, not a factory.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-lilac/10 transition-colors duration-300">
                <div className="w-16 h-16 bg-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-richblack mb-3">Sustainable</h3>
                <p className="text-richblack/80">
                  From our glass bottles to our local sourcing, we're committed to protecting the planet we all share.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-lilac/10 transition-colors duration-300">
                <div className="w-16 h-16 bg-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-richblack mb-3">Made with Love</h3>
                <p className="text-richblack/80">
                  This isn't just business for us – it's our passion. You can taste the difference that genuine care
                  makes.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-richblack hover:bg-richblack/80 text-softwhite text-lg px-8 py-3">
                Experience the Difference
              </Button>
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
