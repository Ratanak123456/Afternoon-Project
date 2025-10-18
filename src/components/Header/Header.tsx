import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/white.svg";
import dark from "../../assets/dark.svg";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/explore", name: "Explore" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header
      className="sticky top-6 z-50 mx-auto w-full max-w-screen-xl
                 border border-[var(--color-border)] py-3 md:rounded-3xl 
                 shadow-lg backdrop-blur-lg bg-[var(--color-card)]/70 
                 transition-all duration-300"
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="ml-8 flex items-center gap-3  ">
            <div className="flex items-center justify-center bg-[var(--color-primary)]/10 backdrop-blur-md p-2 rounded-xl">
              <img
                src={isDark ? logo : dark}
                alt="Website Logo"
                className="h-12 w-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:rotate-3"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-[var(--color-text)] 
                           px-3 py-2 rounded-lg hover:bg-[var(--color-primary)] 
                           hover:text-white dark:hover:bg-[var(--color-primary-hover)] 
                           transition-all duration-200"
              >
                {item.name}
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
                         hover:bg-[var(--color-primary-hover)] 
                         transition-all duration-200 hover:text-white"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Login / Avatar */}
            {isAuthenticated ? (
              isMobile ? (
                <Link
                  to="/profile"
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner hover:shadow-md transition-all duration-200"
                >
                  <img
                    src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                    alt="Profile"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    type="button"
                    className="overflow-hidden rounded-full border border-gray-300 shadow-inner hover:shadow-md transition-all duration-200"
                  >
                    <img
                      src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                      alt="Profile"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  </button>

                  {/* Profile Dropdown */}
                  {showDropdown && (
                    <div
                      className="absolute right-0 mt-3
                     w-48 rounded-xl border 
                               bg-[var(--color-bg)] border-[var(--color-border)] 
                               shadow-xl dark:ring-1 transition-all duration-200"
                      role="menu"
                    >
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-sm text-(var[--color-text])
                                 hover:bg-[var(--color-primary-hover)] hover:text-white  rounded-t-xl "
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 
                                 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-b-xl"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )
            ) : (
              <Link
                to="/Auth"
                className="hidden md:inline-flex items-center justify-center rounded-xl 
                         bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white 
                         shadow-md hover:shadow-lg hover:bg-[var(--color-primary-hover)] 
                         transition-all duration-200"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded-lg 
                         text-[var(--color-text)] hover:bg-[var(--color-bg)] 
                         dark:hover:bg-gray-800 transition-all duration-200"
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
                          bg-[var(--color-card)] dark:bg-gray-900 dark:border-gray-700 
                          shadow-md p-3 md:hidden transition-all duration-300"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] 
                           hover:bg-[var(--color-primary)] hover:text-white 
                           transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] 
                             hover:bg-[var(--color-primary)] hover:text-white 
                             transition-all duration-200"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="mt-2 inline-flex items-center justify-center rounded-xl 
                             bg-red-600 px-4 py-2 text-sm font-semibold text-white 
                             shadow-sm hover:bg-red-700 transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/Auth"
                className="mt-2 inline-flex items-center justify-center rounded-xl 
                           bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white 
                           shadow-sm hover:bg-[var(--color-primary-hover)] transition-all duration-200"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
