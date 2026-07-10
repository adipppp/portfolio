import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, FlaskConical } from "lucide-react";
import { projectsData } from "../data/projects";

interface Props { slug: string; }

const ProjectDetail = ({ slug: id }: Props) => {
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="pt-36 pb-20 px-6 text-center">
        <h1
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
        >
          Project not found
        </h1>
        <a
          href="/"
          className="text-sm"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
        >
          ← Back to home
        </a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">

        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs mb-10 transition-colors"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to projects
        </a>

        {/* Header */}
        <header
          className="pb-8 mb-10"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          {project.status === "in-progress" && (
            <span
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 border rounded-sm mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                borderColor: "var(--color-amber)",
                color: "var(--color-amber)",
              }}
            >
              <FlaskConical className="w-3 h-3" />
              Active Research
            </span>
          )}

          <h1
            className="font-bold mb-3 leading-tight"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
            }}
          >
            {project.title}
          </h1>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--color-text-2)", maxWidth: "640px" }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--color-tag)",
                  color: "var(--color-text-2)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Two-column: milestones + sidebar */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-12 items-start"
        >
          {/* Left column */}
          <div>
            {/* Intro pullquote */}
            <p
              className="text-base leading-[1.82] mb-12 pl-5"
              style={{
                fontFamily: "var(--font-sans)",
                fontStyle: "italic",
                color: "var(--color-text-2)",
                borderLeft: "2px solid var(--color-accent)",
                maxWidth: "640px",
              }}
            >
              {project.intro}
            </p>

            {/* Milestones */}
            <div className="space-y-12">
              {project.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="grid"
                  style={{ gridTemplateColumns: "36px 1fr", gap: "0 1.25rem" }}
                >
                  {/* Step number */}
                  <span
                    className="font-medium pt-1"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.05em",
                      color: "var(--color-accent)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    {/* Milestone title */}
                    <h3
                      className="font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        color: "var(--color-text)",
                      }}
                    >
                      {milestone.title}
                    </h3>

                    {/* Problem */}
                    <span
                      className="block text-xs uppercase tracking-widest mb-1.5"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
                    >
                      The Problem
                    </span>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--color-text-2)" }}
                    >
                      {milestone.problem}
                    </p>

                    {/* Concept callout */}
                    <div
                      className="rounded-sm p-4 mb-4"
                      style={{
                        background: "var(--color-accent-dim)",
                        borderLeft: "2px solid var(--color-accent)",
                      }}
                    >
                      <p
                        className="font-bold mb-1.5"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.95rem",
                          color: "var(--color-accent)",
                        }}
                      >
                        {milestone.concept}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-2)" }}
                      >
                        {milestone.conceptExplain}
                      </p>
                    </div>

                    {/* Outcome */}
                    <span
                      className="block text-xs uppercase tracking-widest mb-1.5"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
                    >
                      Outcome
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text)" }}
                    >
                      {milestone.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:sticky md:top-20">
            <div
              className="rounded-sm p-5"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h4
                className="text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
              >
                Links
              </h4>
              <div className="flex flex-col gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-2)")}
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source code
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-2)")}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetail;
