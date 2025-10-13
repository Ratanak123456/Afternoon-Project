import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class on the root element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav
      className="shadow-lg"
      style={{
        backgroundColor: "var(--color-card)",
        color: "var(--color-text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className="text-2xl font-bold cursor-pointer"
              style={{ color: "var(--color-primary)" }}
            >
              TravelBook
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Explore", "Contact"].map((item) => (
              <button
                key={item}
                className="transition duration-300"
                style={{ color: "var(--color-text)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-primary)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
              >
                {item}
              </button>
            ))}

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-2 rounded-lg transition duration-300 text-white"
              style={{
                backgroundColor: "var(--color-primary)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-primary-hover)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-primary)")
              }
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              style={{ color: "var(--color-text)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-primary)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {["Home", "Explore", "Contact"].map((item) => (
              <button
                key={item}
                className="block w-full text-left px-4 transition duration-300"
                style={{ color: "var(--color-text)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-primary)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
              >
                {item}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="block w-full text-left px-4 py-2 rounded-lg text-white transition duration-300"
              style={{
                backgroundColor: "var(--color-primary)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-primary-hover)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-primary)")
              }
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
