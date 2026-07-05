import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { ContactFormData } from "../types";

const inputBase =
  "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-zinc-300 font-mono text-sm";
const inputInvalid =
  "w-full bg-zinc-950 border border-red-500 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors text-zinc-300 font-mono text-sm";

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
      <section id="contact" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto bg-zinc-900/20 border border-zinc-800/80 p-8 md:p-12 rounded-3xl shadow-2xl text-center"
        >
          <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-white">
            Message Sent!
          </h2>
          <p className="text-zinc-400 mb-8">
            Thank you! I will get back to you shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", message: "" });
              setErrors({});
            }}
            className="text-cyan-400 hover:underline font-mono"
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 border-t border-zinc-900 bg-zinc-950/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-zinc-900/20 border border-zinc-800/80 p-8 md:p-12 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Get In Touch
        </h2>
        <p className="text-zinc-400 text-center mb-10">
          Interested in working together or have a question? Leave a message
          below or email me directly at{" "}
          <a
            href="mailto:fernanda.nadhiftya@gmail.com"
            className="text-cyan-400 hover:underline"
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
                className="block text-sm font-medium text-zinc-300 mb-2 font-mono"
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
                <p id="contact-name-error" className="mt-1 text-sm text-red-400 font-mono">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-zinc-300 mb-2 font-mono"
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
                <p id="contact-email-error" className="mt-1 text-sm text-red-400 font-mono">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-zinc-300 mb-2 font-mono"
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
              <p id="contact-message-error" className="mt-1 text-sm text-red-400 font-mono">
                {errors.message}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-zinc-950 font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
