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

        <div
            className="w-full h-full"
            style={{
            background: 'radial-gradient(circle,rgba(255, 209, 220, 0.43),rgba(255, 236, 179, 0.51),rgba(179, 229, 252, 0.5),rgba(200, 230, 201, 0.48),rgba(209, 196, 233, 0.52))',
            }}
        ></div>

      </div>
      <Header />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:pt-[125px] pt-[160px] md:text-5xl text-4xl px-5 font-semibold text-center text-black/80 top-28 left-0 right-0 mx-auto"
      >
        Frequently Asked Questions
      </motion.h1>
      <AccordionFAQ />
      <Footer />
    </main>
  );
};

export default HelpPage;