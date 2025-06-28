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
            <Slider className='w-[95%] sm:w-[50%]'>
              <Image src='/images/aboutPics/7.webp' alt='about image 7' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
            <Slider className='w-[85%] sm:w-[50%]'>
              <Image src='/images/aboutPics/8.webp' alt='about image 8' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
            <Slider className='w-[85%] sm:w-[30%]'>
              <Image src='/images/aboutPics/9.webp' alt='about image 9' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
            <Slider className='w-[95%] sm:w-[60%]'>
              <Image src='/images/aboutPics/10.webp' alt='about image 10' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
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
            "From Jars to a Living Brand."
          </motion.div>
          <motion.div
            className="w-full lg:w-1/3 min-h-[100px] lg:min-h-[200px] bg-white flex justify-center items-center px-4 pb-5 sm:py-6 sm:pt-8 text-sm"
            variants={itemVariants}
          >
          By 17, I had launched Isa Kombucha. No investors, no fancy launch. Just me, a tiny team, and a strong sense that this needed to exist.

            <br/> <br/> Today, we’re still small and intentional — brewing in Ljubljana, Slovenia, in 6-liter glass jars with raw cold-pressed juice, no additives, and no artificial carbonation. Every batch is alive. Every bottle holds flavor, fizz, and function — the way it’s meant to be.


          </motion.div>
        </motion.div>
      </>
    </>
  );
}

export default card2;
