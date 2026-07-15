export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-blue-600">AVENYX</span>
          <span className="text-black"> SOLUTION</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Case Studies</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* CTA */}
        <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Free Consultation
        </button>
      </div>
    </header>
  );
}