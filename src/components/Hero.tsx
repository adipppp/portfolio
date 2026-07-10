import { Github, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
  <section
    id="home"
    className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 sm:px-8 overflow-hidden"
  >
    {/* Decorative contour lines — desktop only, purely ambient */}
    <svg
      className="hidden lg:block absolute pointer-events-none select-none"
      style={{ top: "8%", right: "4%", width: "320px", height: "320px" }}
      viewBox="0 0 320 320"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="var(--color-accent)"
        strokeWidth="0.75"
        opacity="0.16"
        fill="none"
      >
        <path d="M40 90 Q 110 55 170 95 Q 235 135 220 195 Q 205 250 135 265 Q 70 278 55 220 Q 42 170 90 145" />
        <path d="M55 120 Q 110 100 150 125 Q 195 150 182 195 Q 170 232 118 238 Q 75 244 68 205" />
        <path d="M70 150 Q 108 138 135 155 Q 162 172 152 198 Q 144 218 112 218" />
      </g>
    </svg>

    <div className="max-w-5xl mx-auto relative z-10">

      {/* Eyebrow */}
      <motion.p
        {...fade(0.05)}
        className="flex items-center gap-2 text-xs uppercase tracking-widest mb-6"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
      >
        <span
          className="inline-block w-5 h-px"
          style={{ background: "var(--color-accent)" }}
        />
        Backend & Systems Developer · Depok, Indonesia
      </motion.p>

      {/* Headline */}
      <motion.h1
        {...fade(0.12)}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-text)",
          letterSpacing: "-0.02em",
          maxWidth: "700px",
        }}
      >
        Building systems that hold up{" "}
        <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
          under pressure.
        </em>
      </motion.h1>

      {/* Sub */}
      <motion.p
        {...fade(0.2)}
        className="text-base md:text-lg leading-relaxed mb-10"
        style={{ color: "var(--color-text-2)", maxWidth: "520px" }}
      >
        CS student at Universitas Indonesia, working in the parts of software
        most people don't see — schedulers, distributed queues, edge runtimes,
        and the layer between your application and the OS.
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fade(0.28)}
        className="flex flex-wrap items-center gap-3 mb-14"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          style={{
            background: "var(--color-accent)",
            color: "var(--color-bg)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          See my work
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium border rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.color = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.color = "var(--color-text-2)";
          }}
        >
          <FileText className="w-4 h-4" />
          Resume
        </a>

        <div className="flex gap-2 sm:ml-2">
          {[
            { href: "https://github.com/adipppp", icon: Github, label: "GitHub" },
            { href: "mailto:fernanda.nadhiftya@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 border rounded-full transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.color = "var(--color-text-2)";
              }}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div {...fade(0.36)}>
        <hr style={{ borderColor: "var(--color-border)" }} className="mb-8" />
        <div className="flex flex-wrap gap-10">
          {[
            { n: "6",      l: "Systems built" },
            { n: "1,500+", l: "Commits" },
            { n: "Go / Py / TS", l: "Primary stack" },
          ].map(({ n, l }) => (
            <div key={l}>
              <span
                className="block text-2xl font-bold mb-0.5"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                {n}
              </span>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
              >
                {l}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default Hero;
