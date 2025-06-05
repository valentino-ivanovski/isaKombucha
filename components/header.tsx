"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react';
import '../styles/globals.css'
import { SlMenu } from "react-icons/sl";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 4;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const languageOptions = [
    { code: "EN", name: "English", flag: "/flags/sh.svg" },
    { code: "SI", name: "Slovenian", flag: "/flags/si.svg" },
    { code: "HR", name: "Croatian", flag: "/flags/hr.svg" },
    { code: "DE", name: "German", flag: "/flags/de.svg" },
  ];

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Shop" },
    { href: "#", label: "My Story" },
    { href: "#", label: "Help & FAQ" },
    { href: "#", label: "B2B" },
  ];

  return (
    <div className="font-general-sans">
      <>
      {/* Desktop Header */}
        <motion.header
          initial={{ opacity: 0, y: -20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay:1.8 }}
          className={`block fixed top-6 z-50 left-1/2 -translate-x-1/2 will-change-transform will-change-opacity w-[91.1%] md:w-[91.1%] xl:w-[800px] rounded-full ${
            scrolled
              ? 'bg-white shadow-[0px_4px_7px_-5px_rgba(0,0,0,0.15)] backdrop-blur-md'
              : 'bg-white shadow-[0px_4px_7px_-5px_rgba(0,0,0,0.15)] backdrop-blur-md'
          }`}
          id="desktop-header"
        >
          <div className="container flex items-center justify-between py-2 px-3 relative">
            <Button
              variant="ghost"
              className="block md:hidden text-black hover:text-richblack hover:bg-transparent focus:outline-none"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <SlMenu />
            </Button>
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:flex md:items-center md:space-x-2">
              <Image
                src={scrolled ? '/logos/logo.svg' : '/logos/logo-light.svg'}
                alt="Isa's Kombucha Logo"
                width={40}
                height={40}
                className="h-10 w-10 pl-0 hover:opacity-60 transition-opacity duration-200"
                priority
              />
            </Link>
            <nav className="hidden md:flex flex-row w-[600px] justify-center transform translate-x-5 items-center text-sm">
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
            <div className="relative ml-4">
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
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
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
        </motion.header>

      {/* Mobile Hamburger Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
            initial={{ opacity: 0, y: '8%', x: '50%', width: '50%' }}
            animate={{ opacity: 1, y: '12%', x: "50%", width: '50%' }}
            exit={{ opacity: 0, y: '8%', x: "50%", width: '50%' }}
            transition={{ duration: 0.3 }}
            className={`md:hidden fixed top-16 text-center bg-white/90 backdrop-blur-md z-40 shadow-md rounded-xl ${
              scrolled ? 'mt-0' : 'mt-0'
            }`}
            >
            <ul className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
              <li key={item.label}>
              <Link href={item.href} className="text-richblack hover:text-black/60 transition-colors duration-200">
              {item.label}
              </Link>
              </li>
              ))}
            </ul>
            </motion.div>
        )}
      </AnimatePresence>
      </>
    </div>
  );
}