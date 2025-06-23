"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-richblack mb-6"
        >
          Join the Kombucha Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-richblack/80 mb-8"
        >
          Follow us on social media to become part of our vibrant community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          <a href="https://www.facebook.com/isakombucha/" aria-label="Twitter" className="mx-1">
            <FaFacebook className="w-6 h-6 fill-current" />
          </a>
          <a href="https://www.instagram.com/isakombucha/?hl=en" aria-label="YouTube" className="mx-1">
            <FaInstagram className="w-6 h-6 fill-current" />
          </a>
          <a href="https://www.linkedin.com/company/isa-s-kombucha/?originalSubdomain=si" aria-label="Facebook" className="mx-1">
            <FaLinkedin className="w-6 h-6 fill-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}