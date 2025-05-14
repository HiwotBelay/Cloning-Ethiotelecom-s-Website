import Image from "next/image"
import Link from "next/link"

export default function CSR() {
  return (
    <section className="py-8">
      <h2 className="section-heading">CORPORATE SOCIAL RESPONSIBILITY</h2>

      <div className="grid md:grid-cols-2 gap-8 px-4 items-center">
        <div>
          <Image
            src="/csr-chart.png"
            alt="CSR Investment Chart"
            width={500}
            height={500}
            className="w-full h-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=500&width=500"
            }}
          />
        </div>

        <div>
          <div className="flex justify-center mb-6">
            <Image
              src="/csr-icon.png"
              alt="CSR Icon"
              width={100}
              height={100}
              className="w-20 h-20"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=80&width=80"
              }}
            />
          </div>

          <p className="text-accent text-center mb-6">
            At the heart of our company's business is our commitment to Corporate Social Responsibility. Our CSR
            interventions have a positive impact on society, environment, and all stakeholders. Our CSR projects focus
            on strengthening communities by targeting the fundamental drivers of long-term development such as
            education, health, environmental protection, greening and beautification.
          </p>

          <div className="text-center">
            <Link href="/csr" className="view-more-btn">
              View more
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-4">
        <Image
          src="/csr-education.jpg"
          alt="Education CSR"
          width={300}
          height={200}
          className="w-full h-auto rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=200&width=300"
          }}
        />
        <Image
          src="/csr-health.jpg"
          alt="Health CSR"
          width={300}
          height={200}
          className="w-full h-auto rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=200&width=300"
          }}
        />
        <Image
          src="/csr-environment.jpg"
          alt="Environment CSR"
          width={300}
          height={200}
          className="w-full h-auto rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=200&width=300"
          }}
        />
        <Image
          src="/csr-community.jpg"
          alt="Community CSR"
          width={300}
          height={200}
          className="w-full h-auto rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=200&width=300"
          }}
        />
      </div>
    </section>
  )
}
