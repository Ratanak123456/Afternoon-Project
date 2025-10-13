export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="./src/Image/logo-square-01.png"
                alt="School Logo"
                className="h-16 w-auto rounded-lg shadow-lg"
              />
              <div>
                <p className="text-xs text-white/70 mb-1">Organized by</p>
                <span className="text-xl font-bold tracking-tight">ISTAD</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Institute of Science and Technology Advanced Development — Premier
              educational institution shaping future innovators.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-white">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="./src/pages/about.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-white">
              Product Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="./src/pages/shop/Categories/business.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Business Laptops
                </a>
              </li>
              <li>
                <a
                  href="./src/pages/shop/Categories/gaming.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Gaming Systems
                </a>
              </li>
              <li>
                <a
                  href="./src/pages/shop/Categories/desktop.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Desktop Computers
                </a>
              </li>
              <li>
                <a
                  href="./src/pages/shop/Categories/creative.html"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Creative Workstations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-white">
              Newsletter
            </h3>
            <p className="text-white/80 text-sm mb-3">
              Subscribe for exclusive deals and tech insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full rounded-l-lg focus:outline-none text-gray-800 text-sm"
              />
              <button className="bg-white text-[var(--color-primary)] hover:bg-gray-100 px-4 rounded-r-lg transition">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-white/60 text-xs mt-2">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>

        <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-xs mb-3 md:mb-0">
            © 2025 TechGo. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
