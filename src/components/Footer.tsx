const Footer = () => (
  <footer
    className="py-10 px-6 sm:px-8"
    style={{
      borderTop: "1px solid var(--color-border)",
      background: "var(--color-surface)",
    }}
  >
    <div
      className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <p
        className="text-xs"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
      >
        &copy; {new Date().getFullYear()} Fernanda Nadhiftya Putra
      </p>

      <div className="flex gap-6">
        {[
          { label: "GitHub",   href: "https://github.com/adipppp" },
          { label: "LinkedIn", href: "#" },
          { label: "Email",    href: "mailto:fernanda.nadhiftya@gmail.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-xs transition-colors"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-2)")}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
