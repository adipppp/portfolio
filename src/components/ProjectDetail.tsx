import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, FlaskConical } from "lucide-react";
import { projectsData } from "../data/projects";

interface Props {
  slug: string;
}

const ProjectDetail = ({ slug: id }: Props) => {
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-zinc-100 font-sans">Project not found</h1>
        <a href="/" className="text-cyan-400 hover:underline font-mono">
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-4 max-w-4xl mx-auto"
    >
      <a
        href="/"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors font-semibold font-sans text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </a>

      <div className="space-y-12">
        {/* Header */}
        <header className="border-b border-zinc-900 pb-8">
          {project.status === 'in-progress' && (
            <span className="inline-flex items-center gap-1.5 text-xs uppercase font-mono font-bold tracking-wider px-3 py-1.5 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20 mb-4 w-max">
              <FlaskConical className="w-3.5 h-3.5" /> Active Research
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-50 font-sans">
            {project.title}
          </h1>
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded bg-zinc-900 text-zinc-450 border border-zinc-800 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Two-column layout: milestones + sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: intro + milestones */}
          <div className="md:col-span-2 space-y-10">
            {/* Intro */}
            <p className="text-zinc-300 leading-relaxed text-lg border-l-2 border-cyan-500/60 pl-4 italic">
              {project.intro}
            </p>

            {/* Milestones */}
            <div className="space-y-12">
              {project.milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-100 font-sans">
                      {milestone.title}
                    </h3>
                  </div>

                  {/* Problem */}
                  <div className="ml-10 mb-4 text-zinc-400 text-sm leading-relaxed">
                    <span className="block text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-1">The Problem</span>
                    {milestone.problem}
                  </div>

                  {/* Concept callout */}
                  <div className="ml-10 p-5 rounded-xl bg-cyan-950/20 border border-cyan-900/30 mb-4">
                    <p className="text-xs uppercase tracking-wider font-mono font-bold text-cyan-400 mb-1">
                      Concept
                    </p>
                    <p className="text-zinc-100 font-semibold mb-1 font-sans">
                      {milestone.concept}
                    </p>
                    <p className="text-zinc-400 text-sm">
                      {milestone.conceptExplain}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="ml-10 text-zinc-300 text-sm leading-relaxed">
                    <span className="block text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-1">Outcome</span>
                    {milestone.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: links sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 sticky top-28">
              <h3 className="font-bold mb-4 text-zinc-200 font-mono text-[10px] uppercase tracking-wider text-cyan-400">// Links</h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-450 hover:text-zinc-200 transition-colors text-sm font-mono"
                  >
                    <Github className="w-4 h-4 text-zinc-500" /> Source Code
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-450 hover:text-zinc-200 transition-colors text-sm font-mono"
                  >
                    <ExternalLink className="w-4 h-4 text-zinc-500" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
