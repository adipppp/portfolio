const Footer = () => {
  return (
    <footer 
      className="py-12 text-center text-sm"
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        color: "var(--color-text-2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 font-mono">
        <p>&copy; {new Date().getFullYear()} Nadhif Nadhiftya Putra.</p>
      </div>
    </footer>
  );
};

export default Footer;
