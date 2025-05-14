import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-secondary font-bold mb-4">ONLINE SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/online-services/developer-portal" className="hover:text-secondary">
                  Developer Portal(telebirr)
                </Link>
              </li>
              <li>
                <Link href="/online-services/telehub" className="hover:text-secondary">
                  teleHub
                </Link>
              </li>
              <li>
                <Link href="/online-services/telegebeya" className="hover:text-secondary">
                  telegebeya
                </Link>
              </li>
              <li>
                <Link href="/online-services/bill-complaint" className="hover:text-secondary">
                  Postpaid bill complaint
                </Link>
              </li>
              <li>
                <Link href="/online-services/ecare" className="hover:text-secondary">
                  ecare
                </Link>
              </li>
              <li>
                <Link href="/online-services/ecare-service" className="hover:text-secondary">
                  Ethio ecare Service
                </Link>
              </li>
              <li>
                <Link href="/online-services/dns-webhosting" className="hover:text-secondary">
                  DNS and webhosting
                </Link>
              </li>
              <li>
                <Link href="/online-services/teleforum" className="hover:text-secondary">
                  teleforum
                </Link>
              </li>
              <li>
                <Link href="/online-services/self-support" className="hover:text-secondary">
                  Interactive self-support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-bold mb-4">PERSONAL</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/personal/getting-started" className="hover:text-secondary">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/personal/5g-packages" className="hover:text-secondary">
                  5G mobile packages
                </Link>
              </li>
              <li>
                <Link href="/personal/recurring-mobile" className="hover:text-secondary">
                  Recurring Mobile Package
                </Link>
              </li>
              <li>
                <Link href="/personal/long-validity" className="hover:text-secondary">
                  Long Validity Package
                </Link>
              </li>
              <li>
                <Link href="/personal/mobile-package" className="hover:text-secondary">
                  Mobile Package
                </Link>
              </li>
              <li>
                <Link href="/personal/fixed-bb" className="hover:text-secondary">
                  Fixed BB Internet
                </Link>
              </li>
              <li>
                <Link href="/personal/airtime-topup" className="hover:text-secondary">
                  Airtime Top Up
                </Link>
              </li>
              <li>
                <Link href="/personal/airtime-package" className="hover:text-secondary">
                  Airtime and Package Credit
                </Link>
              </li>
              <li>
                <Link href="/personal/vas" className="hover:text-secondary">
                  VAS
                </Link>
              </li>
              <li>
                <Link href="/personal/crbt" className="hover:text-secondary">
                  CRBT
                </Link>
              </li>
              <li>
                <Link href="/personal/phones-devices" className="hover:text-secondary">
                  Phones & Devices
                </Link>
              </li>
              <li>
                <Link href="/personal/womens-device" className="hover:text-secondary">
                  Women's device offer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-bold mb-4">BUSINESS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/business/5g-packages" className="hover:text-secondary">
                  5G mobile packages
                </Link>
              </li>
              <li>
                <Link href="/business/telecloud" className="hover:text-secondary">
                  telecloud
                </Link>
              </li>
              <li>
                <Link href="/business/esim" className="hover:text-secondary">
                  eSIM
                </Link>
              </li>
              <li>
                <Link href="/business/fixed-broadband" className="hover:text-secondary">
                  Fixed Broadband
                </Link>
              </li>
              <li>
                <Link href="/business/mobile-packages" className="hover:text-secondary">
                  Business Mobile Packages
                </Link>
              </li>
              <li>
                <Link href="/business/mobile-packages-all" className="hover:text-secondary">
                  Mobile Packages
                </Link>
              </li>
              <li>
                <Link href="/business/mobile-group" className="hover:text-secondary">
                  Mobile Group Offering Package
                </Link>
              </li>
              <li>
                <Link href="/business/vpn" className="hover:text-secondary">
                  VPN
                </Link>
              </li>
              <li>
                <Link href="/business/corporate-crbt" className="hover:text-secondary">
                  Corporate CRBT
                </Link>
              </li>
              <li>
                <Link href="/business/dns-hosting" className="hover:text-secondary">
                  DNS & Web Hosting
                </Link>
              </li>
              <li>
                <Link href="/business/conference-call" className="hover:text-secondary">
                  Mobile Conference Call
                </Link>
              </li>
              <li>
                <Link href="/business/wavelength" className="hover:text-secondary">
                  Wavelength Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-bold mb-4">INTERNATIONAL</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/international/call-sms" className="hover:text-secondary">
                  Call & SMS
                </Link>
              </li>
              <li>
                <Link href="/international/roaming" className="hover:text-secondary">
                  Roaming Service
                </Link>
              </li>
              <li>
                <Link href="/international/airtime-topup" className="hover:text-secondary">
                  Airtime Top Up
                </Link>
              </li>
              <li>
                <Link href="/international/data-service" className="hover:text-secondary">
                  Data Service
                </Link>
              </li>
              <li>
                <Link href="/international/vas" className="hover:text-secondary">
                  VAS
                </Link>
              </li>
              <li>
                <Link href="/international/wholesale" className="hover:text-secondary">
                  Wholesale Business
                </Link>
              </li>
              <li>
                <Link href="/international/visitors-plan" className="hover:text-secondary">
                  International Visitors Plan
                </Link>
              </li>
              <li>
                <Link href="/international/ookla-speed" className="hover:text-secondary">
                  International – Ookla Speed Test
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-bold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/customer-service/ashamtele" className="hover:text-secondary">
                  Ashamtele
                </Link>
              </li>
              <li>
                <Link href="/customer-service/shop-locations" className="hover:text-secondary">
                  Shop Locations
                </Link>
              </li>
              <li>
                <Link href="/customer-service/bill-payment" className="hover:text-secondary">
                  Bill Payment Options
                </Link>
              </li>
              <li>
                <Link href="/customer-service/bill-compliant" className="hover:text-secondary">
                  Bill Compliant
                </Link>
              </li>
              <li>
                <Link href="/customer-service/app-store" className="hover:text-secondary">
                  Ethio telecom App Store
                </Link>
              </li>
              <li>
                <Link href="/customer-service/isupplier" className="hover:text-secondary">
                  ISupplier Portal
                </Link>
              </li>
              <li>
                <Link href="/customer-service/local-speed" className="hover:text-secondary">
                  Ethio telecom – Local Speed Test
                </Link>
              </li>
              <li>
                <Link href="/customer-service/contact-us" className="hover:text-secondary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/customer-service/faq" className="hover:text-secondary">
                  FAQ
                </Link>
              </li>
            </ul>

            <h3 className="text-secondary font-bold mt-6 mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company/profile" className="hover:text-secondary">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/company/history" className="hover:text-secondary">
                  History
                </Link>
              </li>
              <li>
                <Link href="/company/financial" className="hover:text-secondary">
                  Annual Financial Statement
                </Link>
              </li>
              <li>
                <Link href="/company/gallery" className="hover:text-secondary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/company/csr" className="hover:text-secondary">
                  CSR
                </Link>
              </li>
              <li>
                <Link href="/company/cyber-awareness" className="hover:text-secondary">
                  Cyber Awareness
                </Link>
              </li>
              <li>
                <Link href="/company/whistleblowing" className="hover:text-secondary">
                  Corruption Whistleblowing
                </Link>
              </li>
              <li>
                <Link href="/company/supplier-portal" className="hover:text-secondary">
                  Supplier Portal
                </Link>
              </li>
              <li>
                <Link href="/company/partner-portal" className="hover:text-secondary">
                  Partner's Portal
                </Link>
              </li>
              <li>
                <Link href="/company/vacancy" className="hover:text-secondary">
                  Vacancy
                </Link>
              </li>
              <li>
                <Link href="/company/tender" className="hover:text-secondary">
                  Tender
                </Link>
              </li>
              <li>
                <Link href="/company/press-release" className="hover:text-secondary">
                  Press Release
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-1 text-sm">
                <span>+251-994/+251-980</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <span>994@ethionet.et</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <span>8994</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <Link href="#" aria-label="Facebook" className="bg-[#1877F2] text-white p-2 rounded-full">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="bg-[#1DA1F2] text-white p-2 rounded-full">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube" className="bg-[#FF0000] text-white p-2 rounded-full">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="bg-[#0A66C2] text-white p-2 rounded-full">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Telegram" className="bg-[#0088cc] text-white p-2 rounded-full">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
