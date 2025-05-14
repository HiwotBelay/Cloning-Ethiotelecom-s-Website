"use client"

import HeroSlider from "@/components/hero-slider"
import ServiceIcons from "@/components/service-icons"
import ProductsServices from "@/components/products-services"
import LatestUpdates from "@/components/latest-updates"
import Statistics from "@/components/statistics"
import Testimonials from "@/components/testimonials"
import CSR from "@/components/csr"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <ServiceIcons />
      <ProductsServices />
      <LatestUpdates />
      <CSR />
      <Statistics />
      <Testimonials />
    </div>
  )
}
