"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Marquee from "react-fast-marquee"

const reviews = [
  {
    id: 1,
    name: "Name Surname",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Name Surname",
    rating: 5,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Name Surname",
    rating: 4,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    name: "Name Surname",
    rating: 5,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    name: "Name Surname",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    name: "Name Surname",
    rating: 5,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 7,
    name: "Name Surname",
    rating: 4,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]

// Duplicate reviews to create a seamless loop
const allReviews = [...reviews, ...reviews]

export default function MarqueeReviews() {
  const [isPaused, setIsPaused] = useState(false)

  return (
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Marquee 
          className="flex gap-4 p-0"
          pauseOnHover={true}
          speed={50}
          gradient={true}
          gradientColor="#F9FAFB"
          pauseOnClick={true}
          style={{ scale: 1}}
        >
          {allReviews.map((review, index) => (
            <Card
              key={`${review.id}-${index}`}
              className="min-w-[320px] max-w-[320px] flex-shrink-0 rounded-xl border border-gray-200 bg-white shadow-sm mx-3"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 text-yellow-300">
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
        </Marquee>
      </div>
  )
}