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
              <div className='bg-red-500 h-[500px] w-full rounded-xl'></div>
            </Slider>
            <Slider className='w-[50%]'>
              <div className='bg-green-500  h-[500px] w-full rounded-xl'></div>
            </Slider>
            <Slider className='w-[50%]'>
              <div className='bg-blue-500  h-[500px] w-full rounded-xl'></div>
            </Slider>
            <Slider className='w-[80%]'>
              <div className='bg-yellow-500  h-[500px] w-full rounded-xl'></div>
            </Slider>
            <Slider className='w-[50%]'>
              <div className='bg-orange-500  h-[500px] w-full rounded-xl'></div>
            </Slider>
            <Slider className='w-[70%]'>
              <div className='bg-teal-500  h-[500px] w-full rounded-xl'></div>
            </Slider>
          </SliderContainer>
          <div className='absolute bottom-3 right-3 text-white rounded-lg w-20 h-12 grid place-content-center font-semibold border-2 z-10 dark:bg-black bg-white'>
            <SliderSnapDisplay className='mix-blend-difference' />
          </div>
        </Carousel>
        <motion.div
          className="w-full flex flex-col sm:flex-row pb-3 justify-center items-center"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center items-center sm:w-1/3 w-full sm:min-h-[200px] min-h-[150px] bg-white text-4xl sm:text-3xl md:text-4xl text-center sm:text-left sm:pl-8 px-4 py-2 font-medium italic"
            variants={itemVariants}
          >
            "Trust your gut. <br /> That’s where this started."
          </motion.div>
          <motion.div
            className="sm:w-1/3 w-full sm:min-h-[200px] min-h-[100px] bg-white flex justify-center items-center px-4 py-2 text-sm"
            variants={itemVariants}
          >
            When we moved to Slovenia, I landed in a formal school for the first time — a Waldorf school, in a language I didn’t speak. It was structured, uniform, quiet. I had to learn cursive, memorize poems, follow someone else’s rhythm. It was jarring. Beautiful in some ways, but I missed the freedom. The play. The doing.

So I made my own outlet: kombucha.


          </motion.div>
        </motion.div>
      </>
    </>
  );
}

export default card2;
