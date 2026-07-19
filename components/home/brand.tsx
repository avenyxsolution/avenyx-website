export default function Brands() {
  return (
    <section
      id="brands"
      className="py-20 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          Trusted Marketplaces
        </h2>

        <p className="mt-4 text-slate-400">
          We help brands grow across India's top ecommerce platforms.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "Amazon",
            "Flipkart",
            "Meesho",
            "Myntra",
            "AJIO",
            "Shopify",
            "Blinkit",
            "Zepto",
            "Nykaa",
            "JioMart",
            "FirstCry",
            "Snapdeal",
          ].map((brand) => (
            <div
              key={brand}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6 font-semibold"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}