import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Close mobile menu when resizing above md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation items
  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/explore",
      name: "Explore",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <header
      className="sticky top-6 z-50 mx-auto w-full max-w-screen-md lg:max-w-screen-lg
                 border border-[var(--color-border)] py-3 md:rounded-3xl 
                 shadow-lg backdrop-blur-2xl bg-[var(--color-card)]/40 
                 transition-all duration-300"
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              className="h-7 w-auto dark:invert"
              src=" "
              alt="Website Logo"
            />
            <p className="sr-only">Website Title</p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((items) => (
              <Link
                to={items.path}
                className="text-sm font-medium text-[var(--color-text)] px-3 py-1.5 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
              >
                {items.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-xl 
                         bg-[var(--color-card)] p-2 text-[var(--color-text)] 
                         ring-1 ring-inset ring-[var(--color-border)] shadow-sm 
                         hover:bg-[var(--color-bg)] transition-all duration-150"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Login Button */}
            <Link to="/Auth"

              className="hidden md:inline-flex items-center justify-center rounded-xl 
                         bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white 
                         shadow-sm hover:bg-[var(--color-primary-hover)] transition-all duration-150"
            >
              Login
            </Link>
            

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded-lg text-[var(--color-text)] 
                         hover:bg-[var(--color-bg)] transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            className="mt-3 flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] 
                          bg-[var(--color-card)] shadow-md p-3 md:hidden"
          >
            <a
              href="#"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] 
                         hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              Home
            </a>
            <a
              href="#explore"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] 
                         hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              Explore
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] 
                         hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              Contact
            </a>
            <a
              href="/login"
              className="mt-1 inline-flex items-center justify-center rounded-xl 
                         bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white 
                         shadow-sm hover:bg-[var(--color-primary-hover)] transition-all duration-150"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
