"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/5g-event-banner.png",
    title: "5G Network now available in 16 cities",
    buttonText: "Learn more",
  },
  {
    id: 2,
    image: "/ev-charging-station.jpg",
    title: "The second ultra-fast EV charging station Inaugurated",
    buttonText: "Click here",
  },
  {
    id: 3,
    image: "/telebirr-mobile-money.jpg",
    title: "telebirr Mobile Financial Services",
    buttonText: "Discover telebirr",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-w-full h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `/placeholder.svg?height=400&width=800`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="slider-arrow slider-arrow-left" aria-label="Previous slide">
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button onClick={nextSlide} className="slider-arrow slider-arrow-right" aria-label="Next slide">
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
