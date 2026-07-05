import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { ContactFormData } from "../types";

const inputBase =
  "w-full bg-surface border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors text-text font-mono text-sm";
const inputInvalid =
  "w-full bg-surface border border-red-800 rounded-sm px-4 py-3 focus:outline-none focus:border-red-800 transition-colors text-text font-mono text-sm";

const Contact = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<ContactFormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Invalid email format";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto p-8 md:p-12 rounded-sm text-center"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <CheckCircle className="w-12 h-12 mx-auto mb-6" style={{ color: "var(--color-accent)" }} />
          <h2 
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Message Sent!
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--color-text-2)" }}>
            Thank you! I will get back to you shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", message: "" });
              setErrors({});
            }}
            className="hover:underline font-mono text-sm"
            style={{ color: "var(--color-accent)" }}
          >
            Send another message
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
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-3xl mx-auto p-8 md:p-12 rounded-sm"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <h2 
          className="text-2xl font-bold mb-4 text-center"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          Get In Touch
        </h2>
        <p 
          className="text-center mb-10 text-sm leading-relaxed"
          style={{ color: "var(--color-text-2)" }}
        >
          Interested in working together or have a question? Leave a message
          below or email me directly at{" "}
          <a
            href="mailto:fernanda.nadhiftya@gmail.com"
            className="hover:underline font-semibold"
            style={{ color: "var(--color-accent)" }}
          >
            fernanda.nadhiftya@gmail.com
          </a>
          .
        </p>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs uppercase tracking-wider mb-2 font-mono"
                style={{ color: "var(--color-text-2)" }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className={errors.name ? inputInvalid : inputBase}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              {errors.name && (
                <p id="contact-name-error" className="mt-1 text-sm text-red-800 font-mono">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs uppercase tracking-wider mb-2 font-mono"
                style={{ color: "var(--color-text-2)" }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className={errors.email ? inputInvalid : inputBase}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-1 text-sm text-red-800 font-mono">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs uppercase tracking-wider mb-2 font-mono"
              style={{ color: "var(--color-text-2)" }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              className={errors.message ? inputInvalid : inputBase}
              placeholder="How can I help you?"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            ></textarea>
            {errors.message && (
              <p id="contact-message-error" className="mt-1 text-sm text-red-800 font-mono">
                {errors.message}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            className="w-full py-3.5 px-6 rounded-sm flex items-center justify-center gap-2 transition-opacity cursor-pointer font-semibold text-sm"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Send className="w-4 h-4" /> Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
