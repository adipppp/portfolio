import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => (
  <section
    id="projects"
    className="py-20 px-6 sm:px-8"
    style={{ borderTop: "1px solid var(--color-border)" }}
  >
    <div className="max-w-5xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-baseline justify-between pb-3 mb-1"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          Selected Work
        </h2>
        <span
          className="text-xs"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
        >
          {projects.length} projects
        </span>
      </motion.div>

      {/* Project list — editorial numbered entries */}
      <div>
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={`/projects/${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="group grid py-7 no-underline"
            style={{
              gridTemplateColumns: "48px 1fr",
              gap: "0 1.25rem",
              borderBottom: "1px solid var(--color-border)",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* Number in margin */}
            <span
              className="font-bold leading-tight pt-1 transition-colors duration-200"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                color: "var(--color-border)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div>
              {/* Eyebrow — first 3 tags as readable label */}
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
              >
                {project.tags.slice(0, 3).join(" · ")}
              </p>

              {/* Title */}
              <h3
                className="font-bold mb-2 transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.125rem",
                  color: "var(--color-text)",
                  lineHeight: 1.3,
                }}
              >
                <span className="group-hover:text-[var(--color-accent)]"
                  style={{ transition: "color 0.2s" }}>
                  {project.title}
                </span>
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--color-text-2)", maxWidth: "600px" }}
              >
                {project.description}
              </p>

              {/* Footer: remaining tags + in-progress + arrow */}
              <div className="flex items-center gap-2 flex-wrap">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: "var(--color-tag)",
                      color: "var(--color-text-2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
                  >
                    +{project.tags.length - 4} more
                  </span>
                )}
                {project.status === "in-progress" && (
                  <span
                    className="text-xs px-2 py-0.5 border rounded-sm ml-1"
                    style={{
                      fontFamily: "var(--font-mono)",
                      borderColor: "var(--color-amber)",
                      color: "var(--color-amber)",
                    }}
                  >
                    in progress
                  </span>
                )}
                <span
                  className="ml-auto text-xs transition-colors duration-200"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
                >
                  read more →
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
