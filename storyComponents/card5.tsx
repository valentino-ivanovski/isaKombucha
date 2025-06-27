import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { motion } from 'framer-motion';
import Carousel, {
  Slider,
  SliderContainer,
  SliderSnapDisplay,
} from '@/components/ui/carousel';
import Image from 'next/image';

function card2() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeInOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <>
        <Carousel options={OPTIONS} className='relative'>
          <SliderContainer className='gap-1'>
            <Slider className='w-[85%] sm:w-[50%]'>
              <Image src='/images/aboutPics/11.webp' alt='about image 11' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
            <Slider className='w-[90%] sm:w-[70%]'>
              <Image src='/images/aboutPics/12.webp' alt='about image 12' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
          </SliderContainer>
          <div className='absolute bottom-3 right-3 text-white rounded-lg w-20 h-12 grid place-content-center font-semibold border-2 z-10 dark:bg-black bg-white'>
            <SliderSnapDisplay className='mix-blend-difference' />
          </div>
        </Carousel>
        <motion.div
          className="w-full flex flex-col lg:flex-row pb-3 justify-center items-center"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center items-center w-full lg:w-1/3 min-h-[100px] lg:min-h-[200px] bg-white text-4xl sm:text-3xl md:text-4xl text-center lg:text-left px-4 py-4 pt-8 font-medium italic"
            variants={itemVariants}
          >
            "Alive with Culture, Energy, and Spirit."
          </motion.div>
          <motion.div
            className="w-full lg:w-1/3 min-h-[100px] lg:min-h-[200px] bg-white flex justify-center items-center px-4 pb-5 sm:py-6 sm:pt-8 text-sm"
            variants={itemVariants}
          >
          Isa Kombucha is more than a drink. It’s a reflection of how I live: instinct-first, hands-on, not afraid to do things differently. I’ve always lived between places — between cultures, between expectations. That space between has become my superpower.

<br/> <br/>I created this brand for people who want more from what they drink. Who crave presence. Who trust their bodies. Who believe that the things we consume should be full of life — not just shelf life.

<br/> <br/>Thanks for being here.


          </motion.div>
        </motion.div>
      </>
    </>
  );
}

export default card2;
