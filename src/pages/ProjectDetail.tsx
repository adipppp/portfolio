import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Shield, Server, Database } from 'lucide-react';

const ProjectDetail = () => {
  // Mock data - in real app, fetch this based on ID
  const project = {
    title: "Platform E-commerce Microservices",
    description: "Analisis mendalam tentang arsitektur sistem e-commerce berskala besar.",
    longDescription: "Proyek ini dirancang untuk menangani beban trafik tinggi dengan memisahkan fungsi-fungsi utama menjadi layanan mandiri. Menggunakan gRPC untuk komunikasi antar layanan yang cepat dan efisien.",
    challenge: "Sinkronisasi stok barang secara real-time di seluruh instance layanan tanpa menyebabkan bottleneck pada database.",
    solution: "Implementasi pola Event Sourcing dengan RabbitMQ dan caching terdistribusi menggunakan Redis.",
    techStack: ["Go", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "gRPC"],
    github: "#",
    demo: "#"
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-4 max-w-4xl mx-auto"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
      </Link>

      <div className="space-y-12">
        <header>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Deskripsi Proyek</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Tantangan Teknis</h3>
              <p className="text-slate-400">{project.challenge}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">Solusi Arsitektur</h3>
              <p className="text-slate-400">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <h3 className="font-bold mb-4">Tautan Terkait</h3>
              <div className="space-y-3">
                <a href={project.github} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Github className="w-5 h-5" /> Source Code
                </a>
                <a href={project.demo} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
              <h3 className="font-bold mb-4">Metrik Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Server className="w-4 h-4 text-blue-400" /> Latency: &lt;100ms
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Database className="w-4 h-4 text-emerald-400" /> Uptime: 99.9%
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Shield className="w-4 h-4 text-amber-400" /> Auth: OAuth2.0
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
