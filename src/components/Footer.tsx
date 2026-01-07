

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Portofolio Backend. Dibuat dengan React & Tailwind CSS.</p>
        <p className="mt-2">Merancang sistem, bukan sekadar kode.</p>
      </div>
    </footer>
  );
};

export default Footer;
