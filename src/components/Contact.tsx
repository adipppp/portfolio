import { useState, type FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { ContactFormData } from "../types";

const EMAIL = "fernanda.nadhiftya@gmail.com";

/* ─── Input style helpers ────────────────────────────────────── */
const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: "100%",
  background: "var(--color-surface)",
  border: `1px solid ${hasError ? "#B45309" : "var(--color-border)"}`,
  borderRadius: "2px",
  padding: "0.65rem 0.875rem",
  fontSize: "0.875rem",
  fontFamily: "var(--font-sans)",
  color: "var(--color-text)",
  outline: "none",
  transition: "border-color 0.2s",
});

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.72rem",
  fontFamily: "var(--font-mono)",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "var(--color-text-2)",
  marginBottom: "0.4rem",
};

const errorStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontFamily: "var(--font-mono)",
  color: "#B45309",
  marginTop: "0.3rem",
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<ContactFormData> = {};
    if (!form.name.trim())    errs.name = "Required";
    if (!form.email.trim())   errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); if (validate()) setSubmitted(true); };

  /* ── Success state ── */
  if (submitted) {
    return (
      <section id="contact" className="py-20 px-6 sm:px-8"
        style={{ borderTop: "1px solid var(--color-border)" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center py-16"
        >
          <CheckCircle
            className="w-10 h-10 mx-auto mb-5"
            style={{ color: "var(--color-accent)" }}
          />
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Message sent.
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--color-text-2)" }}>
            I'll get back to you shortly.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); setErrors({}); }}
            className="text-xs transition-opacity"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Send another →
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-8"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16">

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Get in touch
          </h2>
          <p className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--color-text-2)", maxWidth: "440px" }}>
            Open to new opportunities, collaborations, or just talking shop.
            Fill in the form or email me directly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label htmlFor="c-name" style={labelStyle}>Name</label>
                <input
                  id="c-name" type="text" value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your name"
                  style={inputStyle(!!errors.name)}
                  aria-invalid={!!errors.name}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "#B45309" : "var(--color-border)")}
                />
                {errors.name && <p style={errorStyle}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="c-email" style={labelStyle}>Email</label>
                <input
                  id="c-email" type="email" value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  style={inputStyle(!!errors.email)}
                  aria-invalid={!!errors.email}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "#B45309" : "var(--color-border)")}
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="c-message" style={labelStyle}>Message</label>
              <textarea
                id="c-message" rows={5} value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="What's on your mind?"
                style={{ ...inputStyle(!!errors.message), resize: "vertical" }}
                aria-invalid={!!errors.message}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? "#B45309" : "var(--color-border)")}
              />
              {errors.message && <p style={errorStyle}>{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-semibold rounded-sm transition-opacity"
              style={{ background: "var(--color-accent)", color: "var(--color-bg)", fontFamily: "var(--font-sans)" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Send message →
            </button>
          </form>
        </motion.div>

        {/* Sidebar — direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="self-start md:sticky md:top-20"
        >
          <div
            className="rounded-sm p-6"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
          >
            <h3
              className="text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
            >
              Direct
            </h3>
            <a
              href={`mailto:${EMAIL}`}
              className="block text-sm mb-5 break-all transition-colors"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {EMAIL}
            </a>
            <hr style={{ borderColor: "var(--color-border)", marginBottom: "1.25rem" }} />
            <h3
              className="text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
            >
              Elsewhere
            </h3>
            {[
              { label: "GitHub", href: "https://github.com/adipppp" },
              { label: "LinkedIn", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm mb-2 transition-colors"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-2)")}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
