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
        <h1 className="text-2xl font-bold mb-4">Proyek tidak ditemukan</h1>
        <a href="/" className="text-blue-500 hover:underline">
          Kembali ke Beranda
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
        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
      </a>

      <div className="space-y-12">
        {/* Header */}
        <header>
          {project.status === 'in-progress' && (
            <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider px-3 py-1.5 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 mb-4 w-max">
              <FlaskConical className="w-3.5 h-3.5" /> Riset Aktif
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {project.title}
          </h1>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-sm"
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
            <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-slate-700 pl-4 italic">
              {project.intro}
            </p>

            {/* Milestones */}
            <div className="space-y-10">
              {project.milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {milestone.title}
                    </h3>
                  </div>

                  {/* Problem */}
                  <p className="text-slate-400 leading-relaxed mb-4 ml-10">
                    {milestone.problem}
                  </p>

                  {/* Concept callout */}
                  <div className="ml-10 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 mb-4">
                    <p className="text-xs uppercase tracking-wider font-bold text-blue-400 mb-1">
                      Konsep
                    </p>
                    <p className="text-white font-semibold mb-1">
                      {milestone.concept}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {milestone.conceptExplain}
                    </p>
                  </div>

                  {/* Outcome */}
                  <p className="text-slate-300 leading-relaxed ml-10">
                    {milestone.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: links sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 sticky top-28">
              <h3 className="font-bold mb-4 text-white">Tautan Terkait</h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 flex-shrink-0" /> Source Code
                  </a>
                )}
                {project.extraLinks?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 flex-shrink-0" /> {link.name}
                  </a>
                ))}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" /> Live Demo
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
