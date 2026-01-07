
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "ecommerce",
    title: "Platform E-commerce Microservices",
    description: "Backend e-commerce yang sangat skalabel dibangun dengan Go dan Node.js. Menangani pelacakan inventaris real-time dan alur pembayaran yang kompleks.",
    tags: ["Go", "RabbitMQ", "PostgreSQL", "Docker"],
    github: "#",
    link: "#"
  },
  {
    id: "scheduler",
    title: "Distributed Task Scheduler",
    description: "Penjadwal tugas cloud-native yang menangani jutaan pekerjaan per detik dengan presisi dan toleransi kesalahan.",
    tags: ["Node.js", "Redis", "TypeScript", "Kubernetes"],
    github: "#",
    link: "#"
  },
  {
    id: "analytics",
    title: "Analytics API Engine",
    description: "Mesin analitik real-time untuk melacak perilaku pengguna di berbagai aplikasi multi-tenant.",
    tags: ["Python", "FastAPI", "ClickHouse", "AWS"],
    github: "#",
    link: "#"
  }
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
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col h-full bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden"
            >
              <div className="p-6 flex-1 text-left">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mb-4">
                  Lihat Detail <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-700 flex justify-between">
                <a href={project.github} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={project.link} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
