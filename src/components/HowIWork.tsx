import { motion } from "framer-motion";

const principles = [
  {
    title: "I build until something breaks.",
    body: "A system that works on the happy path isn't finished. The first version of Marmut worked — until a large queue caused a race condition. The first GPU port of the matrix multiplier was slower than the CPU version, not faster. The pattern is consistent: the real understanding comes from the failure, not the success. I try to design experiments where the failure mode is informative, not just unfortunate.",
  },
  {
    title: "I separate what changes from what doesn't.",
    body: "Every project where I've added features without structure has eventually paid for it in bugs I couldn't trace. The Marmut TypeScript rewrite wasn't about TypeScript — it was about separating CommandManager from PlayerManager so adding a feature in one place didn't break something in another. In Go, that becomes Clean Architecture. The design pattern isn't decoration; it's what makes a system extensible without becoming unpredictable.",
  },
  {
    title: "I care about what happens at 3am.",
    body: "A service that works during a demo isn't the same as a service that works when nobody's watching. The 1,256-line CI pipeline in SIRA, the billing audit trail that records every change with the actor who made it, the metrics collector that runs alongside the solver pod — these aren't nice-to-haves. I think about observability and failure recovery at the design stage, not as an afterthought.",
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
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
        style={{ border: "1px solid var(--color-border)", background: "var(--color-border)" }}
      >
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="p-7"
            style={{ background: "var(--color-bg)" }}
          >
            <h3
              className="font-bold mb-3 leading-snug"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.05rem",
                color: "var(--color-text)",
              }}
            >
              {p.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-2)" }}
            >
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default HowIWork;
