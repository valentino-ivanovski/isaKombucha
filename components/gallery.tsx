import * as React from 'react';
import { motion } from 'framer-motion';

const itemData = [
  {
    img: '/images/galleryPics/3.webp',
    title: '',
    span: 'row-span-2',
  },
  {
    img: '/images/galleryPics/5.webp',
    title: '',
    span: 'row-span-3',
  },
  {
    img: '/images/galleryPics/1.webp?v3',
    title: '',
    span: 'row-span-2',
  },
  {
    img: '/images/galleryPics/2.webp',
    title: '',
    span: 'row-span-2 md:row-span-1',
  },
  {
    img: '/images/galleryPics/4.webp',
    title: '',
    span: 'row-span-1',
  },
];

export default function WovenImageList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[300px]"
      >
        {itemData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-lg shadow-lg ${item.span}`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
              <h3 className="text-white font-medium text-xs md:text-sm drop-shadow-lg">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
