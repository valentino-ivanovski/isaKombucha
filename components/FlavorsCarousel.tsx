'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useEffect, useState } from 'react'

const flavors = [
  {
    name: "RAZMATAZZ",
    description: "A fruity and fizzy delight with bold flavors.",
    ingredients: "Organic tea, cane sugar, raspberries, hibiscus, kombucha culture",
    image: "images/kombucha/1.png",
  },
  {
    name: "LOV(E)ANDA",
    description: "Smooth and floral with a hint of lemon.",
    ingredients: "Organic tea, cane sugar, lavender, lemon, kombucha culture",
    image: "images/kombucha/2.png",
  },
  {
    name: "HOT GRANNY",
    description: "Spicy apple twist, just like grandma's hugs.",
    ingredients: "Organic tea, cane sugar, apple, ginger, kombucha culture",
    image: "images/kombucha/3.png",
  },
  {
    name: "PINAKO",
    description: "Tropical freshness with a cucumber crisp.",
    ingredients: "Organic tea, cane sugar, pineapple, cucumber, kombucha culture",
    image: "images/kombucha/4.png",
  },
  {
    name: "BASIL BREEZE",
    description: "Herbal lift with a citrus zing.",
    ingredients: "Organic tea, cane sugar, basil, orange, kombucha culture",
    image: "images/kombucha/5.png",
  },
]

export default function FlavorsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true }),
  ])
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return
    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return (
    <section className="py-24 bg-white">
      <h2 className="text-center text-4xl font-semibold tracking-tight text-richblack md:text-5xl mb-10">
        Our Signature Flavors
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {flavors.map((flavor, index) => (
            <div className="min-w-[300px] max-w-[300px] flex-shrink-0" key={index}>
              <div className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
                  <Image
                    src={`/${flavor.image}`}
                    alt={`${flavor.name} image`}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-sans text-base font-medium leading-relaxed text-blue-gray-900">
                      {flavor.name}
                    </p>
                    <p className="font-sans text-base font-medium leading-relaxed text-blue-gray-900">
                      $4.99
                    </p>
                  </div>
                  <p className="font-sans text-sm font-normal leading-normal text-gray-700 opacity-75">
                    {flavor.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Ingredients:</strong> {flavor.ingredients}
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <button
                    className="w-full py-2 px-4 bg-blue-gray-900/10 text-blue-gray-900 text-xs font-bold uppercase rounded-lg transition hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}