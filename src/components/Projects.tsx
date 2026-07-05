import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-zinc-950/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-zinc-50 font-sans"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex flex-col h-full bg-zinc-900/20 rounded-2xl border border-zinc-800/80 overflow-hidden hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              <a
                href={`/projects/${project.id}`}
                className="p-6 flex-1 flex flex-col text-left"
              >
                <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                {project.status === 'in-progress' && (
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-amber-500/10 text-amber-400 rounded-md border border-amber-500/20 mb-3 w-max font-mono">
                    In Progress
                  </span>
                )}
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-zinc-950 text-zinc-400 rounded border border-zinc-850"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-4">
                    View Details
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
              <div className="px-6 py-4 bg-zinc-900/40 border-t border-zinc-800/50 flex justify-between">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors font-mono"
                  >
                    <Github className="w-4 h-4 text-zinc-500" /> code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors font-mono"
                  >
                    <ExternalLink className="w-4 h-4 text-zinc-500" /> demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
