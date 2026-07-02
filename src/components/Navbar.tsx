import { useState, useCallback } from "react";
import { Terminal, Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", to: "/#home" },
  { name: "Keahlian", to: "/#skills" },
  { name: "Pengalaman", to: "/#experience" },
  { name: "Pendidikan", to: "/#education" },
  { name: "Proyek", to: "/#projects" },
  { name: "Blog", to: "/blog" },
  { name: "Kontak", to: "/#contact" },
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
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <Terminal className="text-blue-500 group-hover:rotate-12 transition-transform" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.to}
                  className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              className="p-2 rounded-md text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
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
            className="md:hidden bg-[#0f172a] border-b border-slate-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.to)}
                  className="block w-full text-left hover:bg-slate-800 px-3 py-4 rounded-md text-base font-medium transition-colors"
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
