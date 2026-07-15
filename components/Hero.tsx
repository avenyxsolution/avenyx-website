export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          🚀 India's Complete Commerce Growth Partner
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Grow Your Brand
          <br />
          Across Every Marketplace.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          AVENYX SOLUTION helps businesses launch, manage and scale on
          Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit,
          Zepto and every major digital commerce platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
            Get Free Consultation
          </button>

          <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100">
            Explore Services
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-3xl font-bold text-blue-600">100+</h2>
            <p className="text-gray-600">Brands</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-3xl font-bold text-blue-600">5000+</h2>
            <p className="text-gray-600">Listings</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-3xl font-bold text-blue-600">7+</h2>
            <p className="text-gray-600">Marketplaces</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-3xl font-bold text-blue-600">99%</h2>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}