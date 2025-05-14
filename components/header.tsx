"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Phone, Mail, MapPin, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="hidden md:flex justify-between items-center py-2 px-4 text-sm border-b">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span>+251-994/+251-980</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-4 w-4" />
            <span>994@ethionet.et</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>8994</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-secondary">
            My Ethiotel
          </Link>
          <Link href="#" className="hover:text-secondary">
            My Ethiotel
          </Link>
          <div className="flex space-x-3">
            <Link href="#" aria-label="Twitter">
              <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook">
              <svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Telegram">
              <svg className="h-5 w-5 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </Link>
          </div>
          <div className="flex items-center">
            <button aria-label="Search" className="p-1">
              <Search className="h-5 w-5" />
            </button>
            <div className="relative ml-2">
              <select className="appearance-none bg-gray-100 border border-gray-300 rounded px-2 py-1 pr-8 focus:outline-none">
                <option>Eng</option>
                <option>አማርኛ</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex justify-between items-center py-2 px-4 border-b">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/ethio-logo.png"
            alt="Ethio Telecom"
            width={180}
            height={60}
            className="h-12 w-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=60&width=180"
            }}
          />
        </Link>

        <nav className="hidden lg:flex space-x-6">
          <Link href="/teleshares" className="py-2 hover:text-secondary">
            teleshares
          </Link>
          <Link href="/telebirr" className="py-2 hover:text-secondary">
            telebirr
          </Link>
          <div className="relative nav-dropdown">
            <Link href="/cloud-solutions" className="py-2 flex items-center hover:text-secondary">
              Cloud solutions
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/cloud-solutions/telecloud" className="block px-4 py-2 hover:bg-gray-100">
                telecloud
              </Link>
              <Link href="/cloud-solutions/iaas" className="block px-4 py-2 hover:bg-gray-100">
                IaaS
              </Link>
            </div>
          </div>
          <div className="relative nav-dropdown">
            <Link href="/online-services" className="py-2 flex items-center hover:text-secondary">
              Online Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/online-services/developer-portal" className="block px-4 py-2 hover:bg-gray-100">
                Developer Portal
              </Link>
              <Link href="/online-services/telehub" className="block px-4 py-2 hover:bg-gray-100">
                teleHub
              </Link>
            </div>
          </div>
          <div className="relative nav-dropdown">
            <Link href="/personal" className="py-2 flex items-center hover:text-secondary">
              Personal
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/personal/5g-packages" className="block px-4 py-2 hover:bg-gray-100">
                5G mobile packages
              </Link>
              <Link href="/personal/mobile-package" className="block px-4 py-2 hover:bg-gray-100">
                Mobile Package
              </Link>
            </div>
          </div>
          <div className="relative nav-dropdown">
            <Link href="/business" className="py-2 flex items-center hover:text-secondary">
              Business
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/business/5g-packages" className="block px-4 py-2 hover:bg-gray-100">
                5G mobile packages
              </Link>
              <Link href="/business/esim" className="block px-4 py-2 hover:bg-gray-100">
                eSIM
              </Link>
            </div>
          </div>
          <div className="relative nav-dropdown">
            <Link href="/international" className="py-2 flex items-center hover:text-secondary">
              International
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/international/call-sms" className="block px-4 py-2 hover:bg-gray-100">
                Call & SMS
              </Link>
              <Link href="/international/roaming" className="block px-4 py-2 hover:bg-gray-100">
                Roaming Service
              </Link>
            </div>
          </div>
          <div className="relative nav-dropdown">
            <Link href="/customer-service" className="py-2 flex items-center hover:text-secondary">
              Customer Service
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/customer-service/ashamtele" className="block px-4 py-2 hover:bg-gray-100">
                Ashamtele
              </Link>
              <Link href="/customer-service/shop-locations" className="block px-4 py-2 hover:bg-gray-100">
                Shop Locations
              </Link>
            </div>
          </div>
          <div className="relative nav-dropdown">
            <Link href="/company" className="py-2 flex items-center hover:text-secondary">
              Company
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/company/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
              <Link href="/company/history" className="block px-4 py-2 hover:bg-gray-100">
                History
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2" aria-label="Menu">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
