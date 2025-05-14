import Link from "next/link"
import { Smartphone, Cloud, CreditCard, Wifi, Globe } from "lucide-react"

export default function ServiceIcons() {
  return (
    <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto my-8">
      <Link href="/national-id" className="group">
        <div className="service-icon-container">
          <Smartphone className="h-8 w-8 text-gray-700" />
        </div>
        <div className="service-icon-text">National ID</div>
      </Link>

      <Link href="/telecloud" className="group">
        <div className="service-icon-container">
          <Cloud className="h-8 w-8 text-gray-700" />
        </div>
        <div className="service-icon-text">telecloud</div>
      </Link>

      <Link href="/iat" className="group">
        <div className="service-icon-container">
          <CreditCard className="h-8 w-8 text-gray-700" />
        </div>
        <div className="service-icon-text">IAT</div>
      </Link>

      <Link href="/5g-packages" className="group">
        <div className="service-icon-container">
          <Wifi className="h-8 w-8 text-gray-700" />
        </div>
        <div className="service-icon-text">5G packages</div>
      </Link>

      <Link href="/vpn" className="group">
        <div className="service-icon-container">
          <Globe className="h-8 w-8 text-gray-700" />
        </div>
        <div className="service-icon-text">VPN</div>
      </Link>
    </div>
  )
}
