export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white pt-12 pb-6 transition-colors duration-300">
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
                <span className="text-xl font-bold tracking-tight">KechTravels</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Discover the beauty of Cambodia and beyond. KechTravels helps you explore stunning destinations, 
              find the best hotels, and plan unforgettable adventures — all in one place.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/explore"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="/hotels"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  href="/guides"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Travel Guides
                </a>
              </li>
              <li>
                <a
                  href="/deals"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Deals & Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-white">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold mb-3 uppercase tracking-wider text-white">
              Newsletter
            </h3>
            <p className="text-white/80 text-sm mb-3">
              Get travel inspiration, tips, and exclusive deals right to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white px-3 py-2 w-full rounded-l-lg focus:outline-none text-gray-800 text-sm"
              />
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-4 rounded-r-lg transition">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-white/60 text-xs mt-2">
              By subscribing, you agree to receive updates from KechTravels.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-xs mb-3 md:mb-0">
            © 2025 KechTravels. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs">
            <a
              href="/privacy"
              className="text-white/70 hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-white/70 hover:text-white transition"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-white/70 hover:text-white transition"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
