import { useState, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "about",      to: "/#about" },
  { name: "experience", to: "/#experience" },
  { name: "projects",   to: "/#projects" },
  { name: "blog",       to: "/blog" },
  { name: "contact",    to: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu  = useCallback(() => setIsOpen((p) => !p), []);
  const closeMenu   = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    // If on /blog page or actual post, keep blog active
    if (window.location.pathname.startsWith("/blog")) {
      setActiveSection("/blog");
      return;
    }

    const sections = ["about", "experience", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`/#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Trigger when section occupies the middle portion of the screen
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback/Initial active section checking
    if (window.location.hash) {
      setActiveSection(`/${window.location.hash}`);
    } else {
      setActiveSection("/#about");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b"
      style={{
        background: "rgba(245, 241, 232, 0.94)",
        backdropFilter: "blur(8px)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Wordmark */}
          <a
            href="/"
            className="text-sm font-bold tracking-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Fernanda Nadhiftya Putra
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <a
                  key={link.name}
                  href={link.to}
                  className="text-xs transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: isActive ? "var(--color-accent)" : "var(--color-text-2)",
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: "0.05em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "var(--color-accent)" : "var(--color-text-2)")}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Open-to-work pill */}
            <a
              href="/#contact"
              className="text-xs px-3 py-1.5 border transition-all duration-200 rounded-sm"
              style={{
                fontFamily: "var(--font-mono)",
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-accent)";
                e.currentTarget.style.color = "var(--color-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
            >
              open to work
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded"
              style={{ color: "var(--color-text-2)" }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              background: "var(--color-bg)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.to;
                return (
                  <a
                    key={link.name}
                    href={link.to}
                    onClick={closeMenu}
                    className="w-full text-left py-3 text-sm transition-colors"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: isActive ? "var(--color-accent)" : "var(--color-text-2)",
                      fontWeight: isActive ? 600 : 400,
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
