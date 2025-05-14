"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Abel Fikre",
    handle: "@abel_fikre",
    content: "Inbox them You'll get a fast response. They fixed the wifi through inbox request.",
    date: "11:27 PM · Feb 2, 2022 from Ethiopia · Twitter for Android",
    platform: "Twitter",
    avatar: "/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Ismael Tsuro",
    content:
      "እኔ ከብዙዎች ጋር እንደምናገረው ሰለ ኢትዮቴሌኮም ሰርቪስ ከፍተኛ ለውጥ አምጥቷል። ከሁሉ አገልግሎቶቹ ዉስጥ ከሁሉም ቀድሞ ያሚያስደስተኝ የፈጣን ምላሽ ጉዳይ ነው። ተቀብለው ምላሽ ሰጥተው ስራ ሰርተው ሚልክልህ ኢሜል ሁሉ አስደሳች ነው።",
    platform: "Facebook",
    avatar: "/avatar-2.jpg",
  },
  {
    id: 3,
    name: "The Children's Heart Fund of Ethiopia",
    content: "የልብ ልጆች ድርጅት ለልጆች ልብ ህክምና በሚደረገው የገንዘብ ድጋፍ ላይ ኢትዮ ቴሌኮም ከአጋሮቻችን አንዱ ነው። እናመሰግናለን!",
    platform: "Facebook",
    avatar: "/avatar-3.jpg",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-8">
      <h2 className="section-heading">TESTIMONIES</h2>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="border rounded-lg p-4 bg-white shadow-sm">
              <div className="flex items-start gap-2 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar || "/placeholder-avatar.jpg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=40&width=40"
                    }}
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  {testimonial.handle && <div className="text-xs text-gray-500">{testimonial.handle}</div>}
                </div>
              </div>
              <p className="text-sm">{testimonial.content}</p>
              {testimonial.date && <div className="text-xs text-gray-500 mt-2">{testimonial.date}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
