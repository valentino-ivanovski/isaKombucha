"use client";

import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    {
      title: "Authenticity",
      description: "We brew with wild fermentation and raw ingredients for real, unfiltered flavor.",
    },
    {
      title: "Sustainability",
      description: "Organic, eco-friendly practices are at the heart of every bottle.",
    },
    {
      title: "Community",
      description: "We’re building a vibrant tribe of kombucha enthusiasts who share our passion.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-richblack text-center mb-12"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-richblack mb-4">{value.title}</h3>
              <p className="text-md text-richblack/80">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}