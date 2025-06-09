"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

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

export default function ScrollableReviews() {
  return (
    <div className="w-full overflow-x-auto pb-6 hide-scrollbar">
      <div className="flex gap-6 pl-4 md:pl-0" style={{ minWidth: "max-content" }}>
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="min-w-[280px] max-w-[320px] flex-shrink-0 rounded-xl border border-gray-200 bg-white shadow-sm"
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
