"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react';

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
    { code: "AT", name: "Austrian", flag: "/flags/at.svg" },
  ];

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Shop" },
    { href: "#", label: "My Story" },
    { href: "#", label: "Help & FAQ" },
    { href: "#", label: "For Offices" },
  ];

  return (
    <>
      {/* Desktop Header */}
        <header
            className={`md:block fixed top-3 z-50 md:w-[91.1%] xl:w-[55%] rounded-full transition-all duration-500 left-1/2 transform -translate-x-1/2 ${
            scrolled 
                ? 'opacity-100 bg-white shadow-sm': 'opacity-100 hover:opacity-100 bg-transparent'}`}
            id="desktop-header"
        >
            <div className={`container flex items-center justify-between py-2 px-3`}>
            <Link href="/" className="flex items-center space-x-2">
                <Image
                src={scrolled ? "/logos/logo.svg" : "/logos/logo-light.svg"}
                alt="Isa's Kombucha Logo"
                width={40}
                height={40}
                className="h-12 w-12 pl-1"
                priority
                />
            </Link>
            <nav className="flex-1 flex w-3/4 justify-center text-sm absolute left-1/2 transform -translate-x-1/2">
                <ul className="flex space-x-14">
                {navItems.map((item) => (
                    <li key={item.label}>
                    <Link href={item.href} className="text-richblack">
                        {item.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>
            <div className="relative ml-4">
                <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-2 text-sm font-medium px-3 transform translate-x-0 py-1 transition-all text-richblack`}
                >
                <motion.div
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.15 }}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
                <Image
                    src={languageOptions.find((lang) => lang.code === selectedLanguage)?.flag || "/flags/sh.svg"}
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
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
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
        </header>

      {/* Mobile Header */}
      <header
        className={`md:hidden fixed top-0 z-50 w-full transition-all duration-500 
        
        ${
          scrolled 
        ? 'bg-white shadow-sm' 
        : 'bg-blue-200'
        } 
        
        h-20 flex items-center justify-between px-4`}
        id="mobile-header"
      >
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`flex items-center gap-2 text-sm font-medium px-3 py-1 transition-all ${
            scrolled ? "text-richblack" : "text-white"
          }`}
        >
          <Image
            src={languageOptions.find((lang) => lang.code === selectedLanguage)?.flag || "/flags/sh.svg"}
            alt={`${selectedLanguage} flag`}
            width={20}
            height={14}
            className="inline-block mr-0 rounded-sm"
            priority={false}
          />
          <motion.div
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.15 }}
            >
                <ChevronDown className="w-4 h-4 text-black" />
            </motion.div>
        </button>
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src={scrolled ? "/logos/logo.svg" : "/logos/logo-light.svg?v2"}
            alt="Isa's Kombucha Logo"
            width={40}
            height={40}
            className="h-12 w-12 mb-1"
            priority
          />
        </Link>
        <Button
          variant="ghost"
          className={`
            ${scrolled ? "text-richblack" : "text-white"}
            hover:text-richblack hover:bg-transparent focus:outline-none focus:ring-0 active:ring-0 active:outline-none
          `}
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
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
        <AnimatePresence>
          {dropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: 95 }}
              animate={{ opacity: 1, y: 105 }}
              exit={{ opacity: 0, y: 95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-3 w-40 bg-white border text-black border-gray-200 rounded shadow-lg z-50"
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
      </header>

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
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-richblack">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}