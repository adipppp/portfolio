import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "asrama-ui",
    title: "Asrama UI API",
    description:
      "REST API untuk sistem manajemen asrama Universitas Indonesia. Memanfaatkan Fiber (Go) dan MongoDB untuk menghadirkan sistem pendaftaran hunian yang lebih andal dan efisien.",
    tags: ["Go", "Fiber", "MongoDB", "REST API"],
    github: "https://gitlab.ui.ac.id/dtd/asrama-ui-backend",
    link: "https://residence.ui.ac.id",
  },
  {
    id: "sso-system",
    title: "OIDC Identity System",
    description:
      "Implementasi SSO berbasis OIDC pada Google Cloud untuk memvalidasi konektivitas dan keamanan antar jaringan (VPC & Firewall).",
    tags: ["OIDC", "GCP", "VPC Network", "Cloud Firewall"],
    github: "https://github.com/adipppp/ssoserver",
  },
  {
    id: "booku-booklist",
    title: "Book List Microservice",
    description:
      "Microservice REST API untuk manajemen buku dengan Spring Boot 3. Fokus pada clean architecture dan fleksibilitas query menggunakan JPA Specifications.",
    tags: ["Spring Boot", "Java", "JPA Specs", "PostgreSQL"],
    github: "https://github.com/AdPro-C8/BookU-be-bookList",
  },
  {
    id: "marmut",
    title: "Marmut (Mari Mutar Musik)",
    description:
      "Music player berbasis audio engine yang menerapkan arsitektur distributed systems untuk pemrosesan audio secara real-time.",
    tags: ["Node.js", "Prisma", "Streams", "discord.js"],
    github: "https://github.com/adipppp/marmut",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Proyek Pilihan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col h-full bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden"
            >
              <Link
                to={`/project/${project.id}`}
                className="p-6 flex-1 flex flex-col text-left group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-sm text-blue-400 group-hover:text-blue-300 transition-colors mb-4">
                    Lihat Detail
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
              <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-700 flex justify-between">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" /> {"Code"}
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
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
