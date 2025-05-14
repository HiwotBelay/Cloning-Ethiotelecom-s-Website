import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title:
      "Ethio telecom launches telebirr Mobile Financial Services and Device Financing in partnership with Siinqee Bank!",
    excerpt: "Ethio telecom, serving a great nation and its people by making telecom and...",
    image: "/news-telebirr.jpg",
  },
  {
    id: 2,
    title:
      'Ethio telecom celebrates the Opening of "South South-East Region," aiming for greater customer accessibility!',
    excerpt: "Our company is driving a large-scale expansion of digital infrastructure, furthering our vision...",
    image: "/news-region.jpg",
  },
  {
    id: 3,
    title: "Ethio telecom Launches the Second Ultra-Fast EV Charging Station in Addis Ababa",
    excerpt: "Bringing New Possibilities: Ethio telecom Powers Ethiopia's EV Future with Ultra-Fast Charging!",
    image: "/news-ev-charging.jpg",
  },
]

export default function LatestUpdates() {
  return (
    <section className="py-8">
      <h2 className="section-heading">LATEST UPDATES</h2>

      <div className="grid md:grid-cols-3 gap-6 px-4">
        {newsItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
              <Link href={`/news/${item.id}`} className="read-more-btn inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
