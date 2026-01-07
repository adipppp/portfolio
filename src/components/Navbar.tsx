
import { Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Terminal className="text-blue-500" />
            <span className="font-bold text-xl tracking-tight">FernandaNP</span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/#home" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Beranda</Link>
              <a href="#skills" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Keahlian</a>
              <a href="#experience" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Pengalaman</a>
              <a href="#education" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Pendidikan</a>
              <a href="#projects" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Proyek</a>
              <a href="#contact" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Kontak</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
