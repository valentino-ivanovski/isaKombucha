"use client";

import React from 'react';
import Header from '@/components/header';
import AccordionFAQ from '@/components/accordionFAQ';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const HelpPage: React.FC = () => {
    return (
        <main className='flex flex-col items-center justify-center min-h-screen bg-slate-100'>
            <Header />
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='md:pt-[125px] pt-[160px] md:text-5xl text-4xl px-5 font-semibold text-center top-28 left-0 right-0 mx-auto'
                >
                Frequently Asked Questions
            </motion.h1>
            <AccordionFAQ />
            <Footer />
        </main>
    );
};

export default HelpPage;