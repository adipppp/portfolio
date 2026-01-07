

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Fernanda Nadhiftya Putra. Dibuat dengan React & Tailwind CSS.</p>
        <p className="mt-2 text-slate-600 italic">"Membangun arsitektur yang kuat untuk masa depan digital."</p>
      </div>
    </footer>
  );
};

export default Footer;
