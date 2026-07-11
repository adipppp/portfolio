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
    {/* Decorative geometric grid — desktop only, purely ambient, covers full Hero */}
    <svg
      className="hidden lg:block absolute inset-0 z-0 pointer-events-none select-none"
      style={{ width: "100%", height: "100%" }}
      viewBox="0 0 1280 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Fine repeating grid, tiled across the whole viewBox */}
        <pattern
          id="heroFineGrid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0 L0 0 0 40"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
          />
        </pattern>

        {/* Fade concentrated toward the right side, thinning out left/top/bottom */}
        <radialGradient id="heroGridFade" cx="78%" cy="42%" r="62%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="55%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="heroGridMask">
          <rect x="0" y="0" width="1280" height="800" fill="url(#heroGridFade)" />
        </mask>
      </defs>

      <g mask="url(#heroGridMask)">
        {/* Fine background grid */}
        <rect
          x="0"
          y="0"
          width="1280"
          height="800"
          fill="url(#heroFineGrid)"
          opacity="0.3"
        />

        {/* Major grid lines, sparser and slightly bolder */}
        <g stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.3" fill="none">
          <line x1="680" y1="0" x2="680" y2="800" />
          <line x1="800" y1="0" x2="800" y2="800" />
          <line x1="920" y1="0" x2="920" y2="800" />
          <line x1="1040" y1="0" x2="1040" y2="800" />
          <line x1="1160" y1="0" x2="1160" y2="800" />
          <line x1="600" y1="80" x2="1280" y2="80" />
          <line x1="600" y1="200" x2="1280" y2="200" />
          <line x1="600" y1="320" x2="1280" y2="320" />
          <line x1="600" y1="440" x2="1280" y2="440" />
          <line x1="600" y1="560" x2="1280" y2="560" />
          <line x1="600" y1="680" x2="1280" y2="680" />
        </g>

        {/* Concentric circles, primary focal point */}
        <g stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.25" fill="none">
          <circle cx="980" cy="340" r="40" />
          <circle cx="980" cy="340" r="80" />
          <circle cx="980" cy="340" r="130" />
          <circle cx="980" cy="340" r="190" />
        </g>

        {/* Secondary smaller circle cluster, lower right */}
        <g stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.18" fill="none">
          <circle cx="1120" cy="600" r="24" />
          <circle cx="1120" cy="600" r="48" />
        </g>

        {/* Diagonal accent lines cutting through the grid */}
        <g stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.15" fill="none">
          <line x1="700" y1="700" x2="980" y2="120" />
          <line x1="900" y1="760" x2="1200" y2="80" />
        </g>

        {/* Small filled nodes at a few grid intersections, for texture */}
        <g fill="var(--color-accent)" opacity="0.2">
          <circle cx="800" cy="200" r="3" />
          <circle cx="1040" cy="320" r="3" />
          <circle cx="920" cy="440" r="3" />
          <circle cx="1160" cy="560" r="3" />
          <circle cx="680" cy="80" r="3" />
        </g>
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
