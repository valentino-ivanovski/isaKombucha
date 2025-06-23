"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function JourneySection() {
  const journeySteps = [
    {
      title: "Homeschooling and Exotic Adventures",
      description:
        "Growing up in Boulder, CO, my family was anything but ordinary. We had a love for exotic spicy cuisine, always kept kombucha stocked in our fridge, and were homeschooled. Our family's deep appreciation for the outdoors led us to travel extensively, gaining valuable life experiences along the way.",
      image: "/images/boulder.jpg",
      alt: "Boulder, Colorado landscape",
      reverse: false,
    },
    {
      title: "New Beginnings in Slovenia",
      description:
        "All that changed when we moved to Slovenia and I found myself attending a Slovenian Waldorf school. It was a new experience for me, as I had never attended school before, let alone in a foreign language. Despite the challenges, I managed to get by. However, there were obstacles that I had to overcome. For instance, I had to adapt to the European cursive style of writing, and I had to learn that they said 'four and twenty' instead of 'twenty-four'. Despite language barriers and cultural differences, I soldiered on, learning new things and even finding a love for European history. But it wasn't enough. I missed the freedom to be creative and expressive that I had back home.",
      image: "/images/slovenia.jpg",
      alt: "Slovenian Waldorf school",
      reverse: true,
    },
    {
      title: "Brewing Up a New Passion",
      description:
        "That's when I turned to kombucha, ordering SCOBYs online and brewing up a storm in my dad's office. I experimented with all sorts of flavors and while some were 'interesting', I found my passion in brewing the perfect cup of kombucha. It was my escape from the rigidity of school and a way for me to express my creativity.",
      image: "/images/scoby.jpg",
      alt: "Kombucha SCOBY brewing",
      reverse: false,
    },
    {
      title: "From Passion to Business",
      description:
        "Fast forward to today, and I'm proud to have turned my passion into a business. Today, we have a small brewery in Ljubljana and a team of 5. The team is made up of young and bright individuals who are dedicated to producing the best kombucha possible. We work hard every day to maintain the quality of our product and to keep our customers satisfied. It's not always easy, but we're committed to our craft and proud of what we've accomplished so far.",
      image: "/images/brewery.jpg",
      alt: "Ljubljana brewery",
      reverse: true,
    },
    {
      title: "Crafting High-Quality in Small Batches",
      description:
        "It's important to note that all of my kombucha is made from freshly squeezed and cold-pressed fruits and vegetables. They are raw, brewed in 6-liter glass jars, with no added CO2. The effervescence that makes kombucha so refreshing is a natural byproduct of the fermentation process. I take great pride in using only the finest ingredients and brewing techniques to create a high-quality, flavorful product. And while my journey to get here hasn't been easy, I'm grateful for all the lessons I've learned along the way. It's empowering to trust your instincts and pursue your passions, even when it means forging your own path. I hope that through my kombucha, I can inspire others to do the same.",
      image: "/images/jars.jpg",
      alt: "Kombucha brewing jars",
      reverse: false,
    },
  ];

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
          How It All Began
        </motion.h2>
        <div className="space-y-16">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${step.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
            >
              <div className="md:w-1/2">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-richblack mb-4">{step.title}</h3>
                <p className="text-md text-richblack/80 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}