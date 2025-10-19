import { useEffect, useState, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/white.svg";
import dark from "../../assets/dark.svg";

export default function Header() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return (
        typeof window !== "undefined" &&
        localStorage.getItem("theme") === "dark"
      );
    } catch {
      return false;
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const avatarButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  // keep document theme class in sync with state
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // do nothing
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close dropdown on outside click / escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const tgt = e.target as Node;
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(tgt) &&
        avatarButtonRef.current &&
        !avatarButtonRef.current.contains(tgt)
      ) {
        setShowDropdown(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowDropdown(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [showDropdown]);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/explore", name: "Explore" },
    { path: "/contact", name: "Contact" },
  ];

  const onNavClick = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

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
          <Link
            to="/"
            onClick={onNavClick}
            className="ml-4 md:ml-8 flex items-center gap-3"
          >
            <div className="flex items-center justify-center backdrop-blur-md p-2 rounded-xl">
              <img
                src={isDark ? logo : dark}
                alt="Website Logo"
                className="h-8 md:h-12 w-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:rotate-3"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onNavClick}
                className="text-lg md:text-xl font-medium text-[var(--color-text)] 
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
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            {/* Login / Avatar */}
            {isAuthenticated ? (
              isMobile ? (
                <Link
                  to="/profile"
                  onClick={onNavClick}
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner hover:shadow-md transition-all duration-200"
                >
                  <img
                    src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                    alt="Profile"
                    className="w-auto h-12 md:h-20 rounded-full object-cover"
                  />
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown((s) => !s)}
                    type="button"
                    ref={avatarButtonRef}
                    className="overflow-hidden rounded-full shadow-inner hover:shadow-md transition-all duration-200 mt-2"
                    aria-haspopup="menu"
                    aria-expanded={showDropdown}
                  >
                    <img
                      src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                      alt="Profile"
                      className="w-auto h-10 md:h-12 rounded-full object-cover"
                    />
                  </button>

                  {/* Profile Dropdown */}
                  {showDropdown && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mt-3 w-48 rounded-xl border bg-[var(--color-bg)] border-[var(--color-border)] shadow-xl transition-all duration-200"
                      role="menu"
                    >
                      <Link
                        to="/profile"
                        onClick={onNavClick}
                        className="block px-4 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary-hover)] hover:text-white rounded-t-xl"
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          onNavClick();
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-xl"
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
                onClick={onNavClick}
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
              className="md:hidden flex items-center justify-center p-2 rounded-lg text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-all duration-200"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            className="mt-3 flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] 
                          bg-[var(--color-card)] 
                          shadow-md p-3 md:hidden transition-all duration-300"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onNavClick}
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
                  onClick={onNavClick}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] 
                             hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
                >
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    onNavClick();
                  }}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/Auth"
                onClick={onNavClick}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-primary-hover)] transition-all duration-200"
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
