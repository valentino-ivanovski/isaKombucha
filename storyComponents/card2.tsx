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
            <Slider className='w-[60%]'>
              <Image src='/images/aboutPics/1.webp' alt='about image 1' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
            <Slider className='w-[70%]'>
              <Image src='/images/aboutPics/2.webp' alt='about image 2' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
            <Slider className='w-[40%]'>
              <Image src='/images/aboutPics/3.webp' alt='about image 3' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
            <Slider className='w-[60%]'>
              <Image src='/images/aboutPics/4.webp' alt='about image 4' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
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
            className="flex justify-center items-center w-full lg:w-1/3 min-h-[100px] lg:min-h-[200px] bg-white text-4xl sm:text-3xl md:text-4xl text-center lg:text-left px-4 py-0 font-medium italic"
            variants={itemVariants}
          >
            "The Shift."
          </motion.div>
          <motion.div
            className="w-full lg:w-1/3 min-h-[100px] lg:min-h-[200px] bg-white flex justify-center items-center px-4 pb-5 sm:py-6 sm:pt-8 text-sm"
            variants={itemVariants}
          >
          When we moved to Slovenia, I landed in a formal school for the first time — a Waldorf school, in a language I didn’t speak. It was structured, uniform, quiet. I had to learn cursive, memorize poems, follow someone else’s rhythm. It was jarring. Beautiful in some ways, but I missed the freedom. The play. The doing.

          <br/> <br/>  So I made my own outlet: kombucha.
</motion.div>
        </motion.div>
      </>
    </>
  );
}

export default card2;
