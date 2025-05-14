export default function Statistics() {
  return (
    <section className="py-8">
      <h2 className="section-heading">OUR STATISTICS</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
        <div className="border rounded-lg p-4 text-center">
          <div className="text-secondary text-3xl font-bold">79.14M</div>
          <div className="text-sm">Mobile Voice Subscribers</div>
        </div>

        <div className="border rounded-lg p-4 text-center">
          <div className="text-secondary text-3xl font-bold">44.9M</div>
          <div className="text-sm">Data and Internet Users</div>
        </div>

        <div className="border rounded-lg p-4 text-center">
          <div className="text-secondary text-3xl font-bold">796K</div>
          <div className="text-sm">Fixed Broadband subscribers</div>
        </div>

        <div className="border rounded-lg p-4 text-center">
          <div className="text-secondary text-3xl font-bold">738.7K</div>
          <div className="text-sm">Fixed Voice Subscribers</div>
        </div>

        <div className="border rounded-lg p-4 text-center">
          <div className="text-secondary text-3xl font-bold">82M</div>
          <div className="text-sm">Total Customers (As of March 2024)</div>
        </div>
      </div>
    </section>
  )
}
