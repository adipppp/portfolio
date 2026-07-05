import { useState, useCallback } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "/#home" },
  { name: "About", to: "/#about" },
  { name: "Experience", to: "/#experience" },
  { name: "Education", to: "/#education" },
  { name: "Projects", to: "/#projects" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleNavClick = useCallback(
    (to: string) => {
      closeMenu();
      window.location.href = to;
    },
    [closeMenu],
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-sm border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <Terminal className="text-cyan-400 group-hover:rotate-12 transition-transform" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.to}
                  className="text-zinc-400 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-md text-zinc-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-zinc-400" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b] border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.to)}
                  className="block w-full text-left hover:bg-zinc-900 hover:text-cyan-400 px-3 py-4 rounded-md text-base font-medium transition-colors font-mono"
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
