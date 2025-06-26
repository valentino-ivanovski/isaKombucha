"use client";

import React from 'react';
import Header from '@/components/header';
import AccordionFAQ from '@/components/accordionFAQ';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HelpPage: React.FC = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-transparent">
      {/* Background Container */}
      <div className="fixed inset-0 -z-10">

        <div className="relative w-full h-full">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#D15052]/60 rounded-full blur-xl opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#241f20]/40 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#D2D2D2]/50 rounded-full blur-xl opacity-50"></div>
        </div>

      </div>
      <Header />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:pt-[125px] pt-[160px] md:text-5xl text-4xl px-5 font-semibold text-center top-28 left-0 right-0 mx-auto"
      >
        Frequently Asked Questions
      </motion.h1>
      <AccordionFAQ />
      <Footer />
    </main>
  );
};

export default HelpPage;