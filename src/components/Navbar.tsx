import { useState, useCallback } from "react";
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
  const toggleMenu  = useCallback(() => setIsOpen((p) => !p), []);
  const closeMenu   = useCallback(() => setIsOpen(false), []);

  const handleNavClick = useCallback(
    (to: string) => { closeMenu(); window.location.href = to; },
    [closeMenu]
  );

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
            Nadhif Nadhiftya Putra
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                className="text-xs transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-2)",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-2)")}
              >
                {link.name}
              </a>
            ))}

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
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.to)}
                  className="w-full text-left py-3 text-sm transition-colors"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-text-2)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
