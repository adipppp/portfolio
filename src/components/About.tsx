import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="py-20 px-6 sm:px-8"
    style={{ borderTop: "1px solid var(--color-border)" }}
  >
    <div className="max-w-5xl mx-auto">

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          About me
        </h2>

        <div
          className="space-y-5 text-base leading-relaxed"
          style={{ color: "var(--color-text-2)", maxWidth: "820px" }}
        >
          <p>
            I'm a Computer Science student at Universitas Indonesia, focused on
            backend architecture, infrastructure, and systems programming —
            the parts of software most people don't see.
          </p>
          <p>
            I'm naturally drawn to understanding how things work under the hood:
            how schedulers allocate CPU time, why GPU memory access patterns
            matter, and how applications become bottlenecks under load.
            I learn best by building things until they break — and then
            understanding exactly why.
          </p>
        </div>
      </motion.div>

    </div>
  </section>
);

export default About;
