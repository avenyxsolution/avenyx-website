const services = [
  {
    title: "Marketplace Management",
    description:
      "Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa & Tata CLiQ account management.",
  },
  {
    title: "Product Listing",
    description:
      "SEO optimized product listing, cataloging, variation & bulk uploads.",
  },
  {
    title: "Quick Commerce",
    description:
      "Blinkit, Zepto, Swiggy Instamart & BigBasket onboarding and growth.",
  },
  {
    title: "Digital Marketing",
    description:
      "Meta Ads, Google Ads, SEO & Social Media Marketing.",
  },
  {
    title: "Website Development",
    description:
      "Shopify, WordPress & custom eCommerce website development.",
  },
  {
    title: "Brand Building",
    description:
      "Brand identity, creatives, A+ Content and marketplace growth strategy.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Everything Your Brand Needs to Grow
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-600">
            AVENYX SOLUTION provides complete commerce solutions—from launching
            your business to scaling sales across marketplaces and digital channels.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">{service.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

              <button className="mt-8 font-semibold text-blue-600 hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}