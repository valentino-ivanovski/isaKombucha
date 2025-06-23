"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import '../styles/globals.css'
import { SlMenu } from "react-icons/sl";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => setHasMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false)
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setShowHeader(true)
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    setScrolled(window.scrollY > 50);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const languageOptions = [
    { code: "EN", name: "English", flag: "/flags/sh.svg" },
    { code: "SI", name: "Slovenian", flag: "/flags/si.svg" },
    { code: "HR", name: "Croatian", flag: "/flags/hr.svg" },
    { code: "DE", name: "German", flag: "/flags/de.svg" },
  ]

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/my-story", label: "My Story" },
    { href: "/help", label: "Help & FAQ" },
    { href: "/b2b", label: "B2B" },
  ];

  const isHomePage = pathname === '/';
  const headerDelay = hasMounted ? 0 : (isHomePage ? 1.8 : 0);

  return (
    <div className="font-general-sans">
      {/* Desktop Header */}
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ opacity: 0, y: -40, x: '-50%', scale: 0.98 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: -40, x: '-50%', scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: headerDelay
            }}
            className={`hidden md:block fixed top-6 z-50 left-1/2 -translate-x-1/2 will-change-transform will-change-opacity w-[91.1%] xl:w-[800px] rounded-full ${
              scrolled
                ? 'bg-white shadow-[0px_4px_7px_-5px_rgba(0,0,0,0.15)] backdrop-blur-md'
                : 'bg-white shadow-[0px_4px_7px_-5px_rgba(0,0,0,0.15)] backdrop-blur-md'
            }`}
            id="desktop-header"
          >
            <div className="container flex items-center justify-between py-1.5 px-2.5 relative">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src={'/logos/logo.svg'}
                  alt="Isa's Kombucha Logo"
                  width={40}
                  height={40}
                  className="h-9 w-9 hover:opacity-60 transition-opacity duration-200"
                  priority
                />
              </Link>
              <nav className="flex w-[600px] justify-center items-center text-sm">
                <ul className="flex space-x-14 font-medium text-[#241f20]">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[#241f20] hover:text-black/60 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  className="text-black hover:text-richblack hover:bg-transparent focus:outline-none"
                  aria-label="Cart"
                >
                  <ShoppingCart />
                </Button>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 text-sm font-medium px-3 py-1 text-richblack"
                  >
                    <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.15 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                    <Image
                      src={languageOptions.find((lang) => lang.code === selectedLanguage)?.flag || '/flags/sh.svg'}
                      alt={`${selectedLanguage} flag`}
                      width={20}
                      height={14}
                      className="inline-block mr-0 rounded-sm"
                      priority={false}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-0 mt-2 w-40 bg-white border text-black border-gray-200 rounded shadow-lg z-50"
                      >
                        {languageOptions.map((lang) => (
                          <li key={lang.code}>
                            <button
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                              onClick={() => {
                                setSelectedLanguage(lang.code);
                                setDropdownOpen(false);
                              }}
                            >
                              <Image
                                src={lang.flag}
                                alt={`${lang.name} flag`}
                                width={20}
                                height={14}
                                className="inline-block mr-1 rounded-sm"
                                priority={false}
                              />
                              {lang.name}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Header */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: -3 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: headerDelay,
              duration: 0.4
            }}
            className="block md:hidden fixed top-0 left-0 w-full z-40 bg-white shadow-md will-change-transform will-change-opacity"
          >
            <div className="flex items-center justify-between px-4 pb-8 pt-9 relative">
              <Button
                variant="ghost"
                className="text-black hover:text-richblack hover:bg-transparent focus:outline-none"
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <SlMenu />
              </Button>

              <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
                <Image
                  src={'/logos/logo.svg'}
                  alt="Isa's Kombucha Logo"
                  width={90}
                  height={90}
                  className="h-20 w-20 hover:opacity-60 transition-opacity duration-200"
                  priority
                />
              </Link>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 text-sm font-medium px-3 py-1 text-richblack"
                  >
                    <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.15 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                    <Image
                      src={languageOptions.find((lang) => lang.code === selectedLanguage)?.flag || '/flags/sh.svg'}
                      alt={`${selectedLanguage} flag`}
                      width={20}
                      height={14}
                      className="inline-block mr-0 rounded-sm"
                      priority={false}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-0 mt-2 w-40 bg-white border text-black border-gray-200 rounded shadow-lg z-50"
                      >
                        {languageOptions.map((lang) => (
                          <li key={lang.code}>
                            <button
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                              onClick={() => {
                                setSelectedLanguage(lang.code);
                                setDropdownOpen(false);
                              }}
                            >
                              <Image
                                src={lang.flag}
                                alt={`${lang.name} flag`}
                                width={20}
                                height={14}
                                className="inline-block mr-1 rounded-sm"
                                priority={false}
                              />
                              {lang.name}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                <Button
                  variant="ghost"
                  className="text-black hover:text-richblack hover:bg-transparent focus:outline-none"
                  aria-label="Cart"
                >
                  <ShoppingCart />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && showHeader && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-[104px] w-full text-center bg-white z-30 shadow-md rounded-b-xl"
          >
            <ul className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-richblack hover:text-black/60 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}