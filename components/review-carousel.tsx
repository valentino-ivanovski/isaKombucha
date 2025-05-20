"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Isa's Kombucha has become my daily ritual. The Lavender Lemon is absolutely divine - the perfect balance of floral and citrus notes. I've tried many kombucha brands, but this one stands out for its refined flavor profile and elegant packaging.",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "As someone who appreciates quality craftsmanship, I'm impressed by the attention to detail in every bottle. The Classic Ginger has the perfect amount of spice, and I love knowing I'm supporting a small-batch, artisanal producer.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    rating: 4,
    text: "The Berry Hibiscus flavor is a game-changer! It's refreshing without being too sweet, and the deep red color is gorgeous. My only complaint is that I can't stop buying it - my fridge is now permanently stocked with Isa's Kombucha.",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    text: "Our office switched to Isa's Kombucha for our weekly team meetings, and it's been a hit. The variety of flavors means everyone finds something they love, and it's a much healthier alternative to the sodas we used to stock.",
  },
  {
    id: 5,
    name: "Olivia Parker",
    rating: 5,
    text: "The Cucumber Mint is like a spa day in a bottle - so refreshing and elegant. I appreciate the sustainable practices and organic ingredients. This kombucha feels like a luxury that I can feel good about enjoying.",
  },
]

export default function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <Card key={review.id} className="min-w-full rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 text-midnightblue">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn("h-5 w-5 fill-current", i < review.rating ? "opacity-100" : "opacity-30")}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-xl italic text-richblack">"{review.text}"</blockquote>
                <p className="mt-4 font-semibold text-richblack">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-midnightblue" : "bg-lilac/30"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full border border-lilac/30 bg-softwhite text-richblack shadow-sm backdrop-blur-sm hover:bg-lilac/10"
        onClick={prevSlide}
        aria-label="Previous review"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full border border-lilac/30 bg-softwhite text-richblack shadow-sm backdrop-blur-sm hover:bg-lilac/10"
        onClick={nextSlide}
        aria-label="Next review"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
