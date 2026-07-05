import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="py-20 px-6 sm:px-8"
    style={{ borderTop: "1px solid var(--color-border)" }}
  >
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12">

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          About me
        </h2>

        <div
          className="space-y-5 text-base leading-relaxed"
          style={{ color: "var(--color-text-2)", maxWidth: "560px" }}
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

      {/* Sidebar — interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="self-start"
      >
        <div
          className="rounded-sm p-5"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h3
            className="text-xs uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
          >
            Outside of code
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-2)" }}
          >
            Solving PicoCTF security challenges, CryptoHack cryptography
            exercises, and training ML models on Kaggle. Watching{" "}
            <span style={{ color: "var(--color-text)" }}>
              JoJo's Bizarre Adventure
            </span>
            ,{" "}
            <span style={{ color: "var(--color-text)" }}>Spider-Noir</span>
            ,{" "}
            <span style={{ color: "var(--color-text)" }}>DanDaDan</span>
            , and{" "}
            <span style={{ color: "var(--color-text)" }}>The Sandman</span>.
          </p>
        </div>
      </motion.div>

    </div>
  </section>
);

export default About;
