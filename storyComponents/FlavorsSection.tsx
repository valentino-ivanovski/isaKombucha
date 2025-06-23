"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Flavor {
  name: string;
  description: string;
  ingredients: string;
  color: string;
  hoverColor: string;
  icons: string[];
}

interface FlavorsSectionProps {
  flavors: Flavor[];
}

export default function FlavorsSection({ flavors }: FlavorsSectionProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-richblack text-center mb-12"
        >
          Taste the Passion
        </motion.h2>
        <p className="text-center text-lg text-richblack/80 mb-12">
          Every flavor reflects my love for bold, natural ingredients. Discover the kombucha that started it all.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative ${flavor.color} text-white border-none shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:rotate-y-3 hover:rotate-x-2 card-3d pointer-events-auto`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">{flavor.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative h-40">
                  {flavor.icons.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon}
                      alt={`Fruit icon ${i + 1}`}
                      width={60}
                      height={60}
                      className={`absolute opacity-10 w-16 h-16 ${
                        i === 0 ? "top-0 left-0" : i === 1 ? "bottom-0 right-0" : "top-1/2 left-1/2 -translate-x-1/2"
                      }`}
                    />
                  ))}
                  <p className="text-sm text-white/90 mt-2">{flavor.description}</p>
                  <p className="text-sm text-white/80 mt-2">
                    <strong>Ingredients:</strong> {flavor.ingredients}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/flavors">
            <Button className="px-8 py-3 bg-white text-richblack hover:bg-white/80 rounded-full">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}