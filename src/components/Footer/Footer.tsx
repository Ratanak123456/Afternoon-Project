export default function Footer() {
  return (
    /* CHANGES: 
      - Replaced orange gradient with var(--color-card)
      - Changed default text to var(--color-subtext)
    */
    <footer className="bg-[var(--color-card)] text-[var(--color-subtext)] pt-12 pb-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo + About */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/src/Image/logo-square-01.png"
                alt="KechTravels Logo"
                className="h-16 w-auto rounded-lg shadow-lg"
              />
              <div>
                <p className="text-xs text-white/70 mb-1">Powered by</p>
                <span className="text-xl font-bold tracking-tight">
                  KechTravels
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Discover the beauty of Cambodia and beyond. KechTravels helps you
              explore stunning destinations, find the best hotels, and plan
              unforgettable adventures — all in one place.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            {/* CHANGED: text-white to var(--color-text) */}
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-[var(--color-text)]">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="./src/pages/about.html"
                  // CHANGED: text-white/80 to var(--color-subtext) and hover to var(--color-text)
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            {/* CHANGED: text-white to var(--color-text) */}
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-[var(--color-text)]">
              Product Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="./src/pages/shop/Categories/business.html"
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  Business Laptops
                </a>
              </li>
              <li>
                <a
                  href="./src/pages/shop/Categories/gaming.html"
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  Gaming Systems
                </a>
              </li>
              <li>
                <a
                  href="./src/pages/shop/Categories/desktop.html"
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  Desktop Computers
                </a>
              </li>
              <li>
                <a
                  href="./src/pages/shop/Categories/creative.html"
                  className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-sm transition"
                >
                  Creative Workstations
                </a>
              </li>
            </ul>
          </div>
          <div>
            {/* CHANGED: text-white to var(--color-text) */}
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-[var(--color-text)]">
              Newsletter
            </h3>
            {/* CHANGED: text-white/80 to var(--color-subtext) */}
            <p className="text-[var(--color-subtext)] text-sm mb-3">
              Subscribe for exclusive deals and tech insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                /* CHANGES: 
                  - Set background to var(--color-bg)
                  - Set text to var(--color-text)
                  - Set placeholder text to var(--color-subtext)
                */
                className="px-3 py-2 w-full rounded-l-lg focus:outline-none bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-subtext)] text-sm"
              />
              {/* CHANGES: 
                - Swapped to a neutral button style
                - bg-white becomes var(--color-text)
                - text-orange becomes var(--color-card) (or white in light mode)
              */}
              <button className="bg-[var(--color-text)] text-[var(--color-card)] hover:bg-[var(--color-subtext)] px-4 rounded-r-lg transition">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            {/* CHANGED: text-white/60 to var(--color-subtext) with more opacity */}
            <p className="text-[var(--color-subtext)]/80 text-xs mt-2">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>

        {/* CHANGED: border-white/30 to var(--color-border) */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* CHANGED: text-white/70 to var(--color-subtext) */}
          <p className="text-[var(--color-subtext)] text-xs mb-3 md:mb-0">
            © 2025 TechGo. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs">
            <a
              href="#"
              className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-xs transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-xs transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[var(--color-subtext)] hover:text-[var(--color-text)] text-xs transition"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
