import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Shield, Server, Database } from 'lucide-react';

const projectsData: Record<string, any> = {
  "asrama-ui": {
    title: "Asrama UI Backend Engine",
    description: "Sistem manajemen asrama Universitas Indonesia yang baru.",
    longDescription: "Proyek ini bertujuan untuk menyediakan sistem pendaftaran dan pengelolaan asrama yang efisien bagi mahasiswa UI. Dibuat menggunakan framework Fiber (Go) dan database MongoDB untuk performa optimal.",
    challenge: "Menangani lonjakan trafik saat masa pendaftaran asrama dan memastikan konsistensi data pada ribuan pendaftar.",
    solution: "Optimasi indexing pada MongoDB dan implementasi caching strategis untuk mengurangi beban database utama.",
    techStack: ["Go", "Fiber", "MongoDB", "Redesign ERD", "Docker"],
    github: "https://github.com/fernandanp",
    demo: "https://residence.ui.ac.id"
  },
  "go-micro-auth": {
    title: "Microservices Auth Service",
    description: "Layanan autentikasi terdistribusi menggunakan JWT dan gRPC.",
    longDescription: "Layanan pusat untuk menangani autentikasi dan otorisasi di seluruh ekosistem microservices. Menggunakan gRPC untuk komunikasi antar-layanan yang efisien.",
    challenge: "Memastikan latensi rendah pada verifikasi token di setiap request ke layanan lain.",
    solution: "Penggunaan Redis untuk caching token dan gRPC pooling untuk menjaga koneksi tetap terbuka.",
    techStack: ["Go", "gRPC", "PostgreSQL", "Redis", "JWT"],
    github: "https://github.com/fernandanp",
    demo: "#"
  },
  "crawler-api": {
    title: "High Performance Web Crawler",
    description: "Crawler web konkuren yang dibangun dengan Go.",
    longDescription: "Sistem untuk merayapi data dari berbagai sumber secara konkuren dan menyimpannya dalam database time-series untuk analisis lebih lanjut.",
    challenge: "Menghindari pemblokiran oleh target website dan mengelola ribuan goroutine secara bersamaan.",
    solution: "Implementasi worker pool pattern dan rotasi proxy serta user-agent secara otomatis.",
    techStack: ["Go", "Concurrency", "PostgreSQL", "InfluxDB"],
    github: "https://github.com/fernandanp",
    demo: "#"
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Proyek tidak ditemukan</h1>
        <Link to="/" className="text-blue-500 hover:underline">Kembali ke Beranda</Link>
      </div>
    );
  }

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
            {project.techStack.map((tech: string) => (
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
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Github className="w-5 h-5" /> Source Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
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
