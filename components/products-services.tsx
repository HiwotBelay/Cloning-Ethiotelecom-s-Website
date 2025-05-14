"use client"

import Image from "next/image"
import Link from "next/link"

export default function ProductsServices() {
  return (
    <section className="py-8">
      <h2 className="section-heading">PRODUCTS & SERVICES</h2>

      <div className="grid md:grid-cols-2 gap-6 px-4">
        <div className="rounded-lg overflow-hidden border">
          <Link href="/5g-network">
            <Image
              src="/5g-network-banner.jpeg"
              alt="5G Network in 16 Cities"
              width={600}
              height={300}
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=300&width=600"
              }}
            />
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden border">
          <Link href="/ev-charging">
            <Image
              src="/ev-charging-banner.jpeg"
              alt="Ultra-Fast EV Charging Station"
              width={600}
              height={300}
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=300&width=600"
              }}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
