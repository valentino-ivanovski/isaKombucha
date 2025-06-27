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
            <Slider className='w-[95%] sm:w-[60%]'>
              <Image src='/images/aboutPics/6.webp' alt='about image 6' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
            </Slider>
            <Slider className='w-[95%] sm:w-[70%]'>
              <Image src='/images/aboutPics/5.webp' alt='about image 5' width={800} height={500} className='rounded-xl w-full h-[500px] object-cover' />
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
            "Fermentation as Expression."
          </motion.div>
          <motion.div
            className="w-full lg:w-1/3 min-h-[100px] lg:min-h-[200px] bg-white flex justify-center items-center px-4 pb-5 sm:py-6 sm:pt-8 text-sm"
            variants={itemVariants}
          >
          At 15, I ordered a SCOBY online and started brewing in my dad’s office. It was a mess at first — bottles exploded, fruit got weird — but something about it lit me up. Fermentation was alive. It was intuitive. It taught me to be patient, to pay attention, to let things evolve in their own time.

          <br/> <br/> I didn’t realize it yet, but it was the beginning of my real work.

          </motion.div>
        </motion.div>
      </>
    </>
  );
}

export default card2;
