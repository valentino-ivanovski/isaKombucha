"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function VisualHighlight() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bottlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !bottlesRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const scrollPosition = window.innerHeight - containerRect.top

      if (scrollPosition > 0 && scrollPosition < window.innerHeight + containerRect.height) {
        const parallaxValue = scrollPosition * 0.15
        bottlesRef.current.style.transform = `translateY(-${parallaxValue}px) rotate(${parallaxValue * 0.05}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-richblack py-24 text-softwhite">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Crafted with Passion</h2>
            <p className="mt-6 text-lg leading-relaxed text-softwhite/70">
              Every bottle of Isa's Kombucha is brewed with care using traditional methods and the finest organic
              ingredients. Our small-batch approach ensures quality and flavor in every sip.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-lilac text-richblack">
                  ✓
                </div>
                <span>100% Organic Ingredients</span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-lilac text-richblack">
                  ✓
                </div>
                <span>Small-Batch Fermentation</span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-lilac text-richblack">
                  ✓
                </div>
                <span>Sustainable Packaging</span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-lilac text-richblack">
                  ✓
                </div>
                <span>No Artificial Additives</span>
              </li>
            </ul>
            <Button className="mt-8 bg-lilac hover:bg-midnightblue text-richblack">Why Isa&apos;s Kombucha</Button>
          </div>

          <div ref={bottlesRef} className="order-1 md:order-2 transition-transform duration-300 ease-out">
            <div className="relative h-[500px] w-full">
              <div className="absolute left-[10%] top-[5%] h-[300px] w-[120px] rotate-[-15deg]">
                <Image
                  src="/placeholder.svg?height=600&width=240"
                  alt="Kombucha bottle"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute left-[35%] top-[15%] h-[350px] w-[120px] rotate-[5deg]">
                <Image
                  src="/placeholder.svg?height=600&width=240"
                  alt="Kombucha bottle"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute left-[60%] top-[0%] h-[320px] w-[120px] rotate-[20deg]">
                <Image
                  src="/placeholder.svg?height=600&width=240"
                  alt="Kombucha bottle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
