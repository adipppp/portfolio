import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { ContactFormData } from "../types";

const inputBase =
  "w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors";
const inputInvalid =
  "w-full bg-slate-900 border border-red-500 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors";

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
    if (!form.name.trim()) errs.name = "Nama harus diisi";
    if (!form.email.trim()) {
      errs.email = "Email harus diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Format email tidak valid";
    }
    if (!form.message.trim()) errs.message = "Pesan harus diisi";
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
    // Form is ready for backend integration (Formspree / EmailJS / custom API).
    // Currently shows a success state.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto bg-slate-800/40 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl text-center"
        >
          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-white">
            Pesan Terkirim!
          </h2>
          <p className="text-slate-400 mb-8">
            Terima kasih! Saya akan menghubungi Anda segera.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", message: "" });
              setErrors({});
            }}
            className="text-blue-400 hover:underline"
          >
            Kirim pesan lain
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-slate-800/40 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Mari Terhubung
        </h2>
        <p className="text-slate-400 text-center mb-10">
          Tertarik untuk bekerja sama atau memiliki pertanyaan? Tinggalkan pesan
          di bawah ini atau email langsung ke{" "}
          <a
            href="mailto:fernanda.nadhiftya@gmail.com"
            className="text-blue-400 hover:underline"
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
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Nama
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className={errors.name ? inputInvalid : inputBase}
                placeholder="Nama Anda"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              {errors.name && (
                <p id="contact-name-error" className="mt-1 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-slate-300 mb-2"
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
                placeholder="email@anda.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-1 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Pesan
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              className={errors.message ? inputInvalid : inputBase}
              placeholder="Apa yang bisa saya bantu?"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            ></textarea>
            {errors.message && (
              <p id="contact-message-error" className="mt-1 text-sm text-red-400">
                {errors.message}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Send className="w-5 h-5" /> Kirim Pesan
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
