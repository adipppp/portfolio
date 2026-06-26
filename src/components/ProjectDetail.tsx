
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
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
        <header>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
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

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                Deskripsi Proyek
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                Tantangan Teknis
              </h3>
              <p className="text-slate-400">{project.challenge}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">
                Solusi Arsitektur
              </h3>
              <p className="text-slate-400">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <h3 className="font-bold mb-4">Tautan Terkait</h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />{" "}
                    {id === "sso-system"
                      ? "Authorization Server"
                      : "Source Code"}
                  </a>
                )}
                {project.extraLinks &&
                  project.extraLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" /> {link.name}
                    </a>
                  ))}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
