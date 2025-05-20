"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Isa's Kombucha has become my daily ritual. The Lavender Lemon is absolutely divine - the perfect balance of floral and citrus notes.",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "As someone who appreciates quality craftsmanship, I'm impressed by the attention to detail in every bottle. The Classic Ginger has the perfect amount of spice.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    rating: 4,
    text: "The Berry Hibiscus flavor is a game-changer! It's refreshing without being too sweet, and the deep red color is gorgeous.",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    text: "Our office switched to Isa's Kombucha for our weekly team meetings, and it's been a hit. The variety of flavors means everyone finds something they love.",
  },
  {
    id: 5,
    name: "Olivia Parker",
    rating: 5,
    text: "The Cucumber Mint is like a spa day in a bottle - so refreshing and elegant. I appreciate the sustainable practices and organic ingredients.",
  },
  {
    id: 6,
    name: "James Wilson",
    rating: 5,
    text: "I've been drinking kombucha for years, and Isa's is by far the best I've tried. The flavors are complex but balanced.",
  },
  {
    id: 7,
    name: "Sophia Garcia",
    rating: 4,
    text: "The packaging is so elegant, it makes a perfect gift. And the taste lives up to the beautiful presentation!",
  },
]

// Duplicate reviews to create a seamless loop
const allReviews = [...reviews, ...reviews]

export default function MarqueeReviews() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={cn("flex gap-6 py-4", isPaused ? "" : "animate-marquee")}
        style={{
          width: `${allReviews.length * 340}px`,
        }}
      >
        {allReviews.map((review, index) => (
          <Card
            key={`${review.id}-${index}`}
            className="min-w-[320px] max-w-[320px] flex-shrink-0 rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-1 text-midnightblue">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn("h-4 w-4 fill-current", i < review.rating ? "opacity-100" : "opacity-30")}
                  />
                ))}
              </div>
              <blockquote className="mt-3 text-base italic text-richblack">"{review.text}"</blockquote>
              <p className="mt-3 font-semibold text-richblack">{review.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
