import { motion } from "framer-motion";

const principles = [
  {
    title: "I build until something breaks.",
    reason:
      "The real understanding comes from the failure, not the success — not the happy path.",
    evidence: [
      { label: "Marmut", slug: "marmut" },
      { label: "Parallel Matrix Multiplication", slug: "matrix-multiplication" },
    ],
  },
  {
    title: "I separate what changes from what doesn't.",
    reason:
      "Structure isn't decoration — it's what lets a system grow without becoming unpredictable.",
    evidence: [
      { label: "Marmut", slug: "marmut" },
      { label: "Asrama UI Backend", slug: "asrama-ui-backend" },
    ],
  },
  {
    title: "I care about what happens at 3am.",
    reason:
      "A service that works during a demo isn't the same as one that works when nobody's watching.",
    evidence: [
      { label: "Smart Invoice Reminder AI (SIRA)", slug: "smart-invoice-reminder" },
    ],
  },
];

const HowIWork = () => (
  <section
    id="how-i-work"
    className="py-20 px-6 sm:px-8"
    style={{ borderTop: "1px solid var(--color-border)" }}
  >
    <div className="max-w-5xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          How I work
        </h2>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--color-text-2)", maxWidth: "520px" }}
        >
          A few things I've noticed about how I actually work, based on what
          I've built and broken over the years.
        </p>
      </motion.div>

      {/* Principles grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden shadow-sm"
        style={{ border: "1px solid var(--color-border)", background: "var(--color-border)" }}
      >
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="p-7 flex flex-col"
            style={{ background: "var(--color-bg)" }}
          >
            <h3
              className="font-bold mb-3 leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                color: "var(--color-text)",
              }}
            >
              {p.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "var(--color-text-2)" }}
            >
              {p.reason}
            </p>

            {/* Evidence — links to relevant project detail pages */}
            <div
              className="flex flex-col gap-1.5 pt-4 mt-auto min-h-[112px]"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <span
                className="text-xs uppercase tracking-widest mb-0.5"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)", opacity: 0.7 }}
              >
                See it in
              </span>
              {p.evidence.map((e) => (
                <a
                  key={e.slug}
                  href={`/projects/${e.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm transition-colors w-fit"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={(ev) => (ev.currentTarget.style.opacity = "1")}
                >
                  {e.label} →
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default HowIWork;
