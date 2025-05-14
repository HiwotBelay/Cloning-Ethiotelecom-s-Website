"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Plus, Minus } from "lucide-react"

export default function NationalIDPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-[#00c4b3]">FAYDA</span> NATIONAL ID
          </h1>
          <p className="text-lg text-gray-600">Digital Identity to Foster an Inclusive Digital Economy!</p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* ID Card Image */}
          <div className="flex justify-center items-center">
            <div className="border-2 border-gray-200 rounded-lg p-2 shadow-lg">
              <Image
                src="/fayda-id-card.png"
                alt="Ethiopian Digital ID Card"
                width={500}
                height={300}
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=300&width=500"
                }}
              />
            </div>
          </div>

          {/* Information Accordion */}
          <div className="space-y-2">
            <AccordionItem title="What is Fayda?">
              <p>
                Fayda is Ethiopia's National Digital ID program that provides a unique identity to all Ethiopian
                citizens and residents. It serves as the foundation for digital services and financial inclusion.
              </p>
            </AccordionItem>

            <AccordionItem title="Benefits of Digital Identity">
              <ul className="list-disc pl-5 space-y-1">
                <li>Simplified access to government and private services</li>
                <li>Enhanced financial inclusion</li>
                <li>Reduced fraud and identity theft</li>
                <li>Streamlined service delivery</li>
                <li>Support for digital economy growth</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Eligibility">
              <p>All Ethiopian citizens and legal residents aged 15 and above are eligible for Fayda National ID.</p>
            </AccordionItem>

            <AccordionItem title="Acceptable Documents for Registration">
              <ul className="list-disc pl-5 space-y-1">
                <li>Birth certificate</li>
                <li>Passport</li>
                <li>Driver's license</li>
                <li>Kebele ID</li>
                <li>Refugee ID (for refugees)</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Register on Fayda">
              <p>
                Visit any of the Fayda registration centers across Ethiopia with your required documents to register for
                your National Digital ID.
              </p>
            </AccordionItem>

            <AccordionItem title="Get your ID via telebirr SuperApp!">
              <p>
                You can now access your digital ID through the telebirr SuperApp. Download the app and follow the
                instructions to link your Fayda ID.
              </p>
            </AccordionItem>

            <AccordionItem title="Useful Tip">
              <p>
                Keep your Fayda ID number safe and secure. Do not share it with unauthorized individuals or
                organizations.
              </p>
            </AccordionItem>
          </div>
        </div>

        {/* Proclamation Button */}
        <div className="text-center mb-12">
          <Link
            href="#"
            className="bg-primary text-white px-6 py-3 rounded-md inline-block hover:bg-primary/90 transition-colors"
          >
            Click Here to read Ethiopian Digital Indetification Proclamation
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-700 text-white p-6 rounded-md text-center">
            <div className="text-4xl font-bold mb-2">90,000,000</div>
            <div className="text-lg">Total Planned Registration</div>
          </div>
          <div className="bg-gray-700 text-white p-6 rounded-md text-center">
            <div className="text-4xl font-bold mb-2">32,000,000</div>
            <div className="text-lg">Our Target at the end of 2018 E.C</div>
          </div>
          <div className="bg-gray-700 text-white p-6 rounded-md text-center">
            <div className="text-4xl font-bold mb-2">1,000,000</div>
            <div className="text-lg">Average Monthly Registration</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <div className="bg-primary text-white p-4 rounded-md flex justify-between items-center cursor-pointer">
            <div className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              <span className="font-bold">Frequently Asked Questions</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <div className="bg-gray-800 text-white p-4 rounded-t-md">
            <h2 className="font-bold">NID Locations</h2>
          </div>
          <div className="border border-gray-300 rounded-b-md p-2 h-[400px] relative">
            <Image
              src="/nid-locations-map.png"
              alt="NID Locations Map"
              fill
              className="object-cover rounded-b-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=400&width=800"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface AccordionItemProps {
  title: string
  children: React.ReactNode
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <div
        className="bg-primary text-white p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {isOpen ? <Minus className="h-5 w-5 mr-2" /> : <Plus className="h-5 w-5 mr-2" />}
          <span className="font-bold">{title}</span>
        </div>
        <ChevronRight className={`h-5 w-5 transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </div>
      <div className={`p-4 bg-white transition-all ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  )
}
