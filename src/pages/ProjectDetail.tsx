import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { ProjectData } from "../types";

const projectsData: Record<string, ProjectData> = {
  "asrama-ui": {
    title: "Asrama UI API",
    description: "Sistem manajemen asrama Universitas Indonesia yang baru.",
    longDescription:
      "Proyek ini bertujuan untuk menyediakan sistem pendaftaran dan pengelolaan asrama yang efisien bagi mahasiswa UI. API ini dibangun dengan arsitektur REST menggunakan framework Fiber (Go) dan database MongoDB, dengan fokus pada implementasi schema yang telah didesain ulang.",
    challenge:
      "Mengelola transisi dari struktur database legacy yang memiliki redundansi data tinggi dan schema yang tidak efisien.",
    solution:
      "Melakukan transformasi database dengan mendesain ulang ERD (Entity Relationship Diagram). Solusi ini mencakup migrasi schema legacy ke desain yang lebih modular, optimasi query dan indexing pada MongoDB, serta standarisasi API berbasis REST architecture.",
    techStack: [
      "Go",
      "Fiber",
      "REST API",
      "MongoDB",
      "ERD Redesign",
      "System Migration",
    ],
    github: "https://gitlab.ui.ac.id/dtd/asrama-ui-backend",
    demo: "https://residence.ui.ac.id",
  },
  marmut: {
    title: "Marmut (Mari Mutar Musik)",
    description:
      "Music player dengan audio engine yang menerapkan arsitektur distributed systems untuk pemrosesan audio secara real-time.",
    longDescription:
      "Marmut merupakan music player yang mampu mengelola orkestrasi audio processing melalui integrasi dengan distributed audio engine. Proyek ini memanfaatkan Lavalink untuk memisahkan logic audio decoding dari aplikasi utama untuk menjaga responsivitas aplikasi.",
    challenge:
      "Menghindari degradasi performa pada aplikasi utama akibat task resource-intensive seperti audio decoding dan streaming yang berjalan secara bersamaan.",
    solution:
      "Menerapkan arsitektur distributed systems dengan mendelegasikan seluruh beban audio processing ke server eksternal (Lavalink). Untuk manajemen state dari music player, implementasi music queue diterapkan secara custom menggunakan Prisma ORM dan database PostgreSQL.",
    techStack: [
      "Node.js",
      "Prisma",
      "Streams",
      "discord.js",
      "PostgreSQL",
      "Lavalink",
    ],
    github: "https://github.com/adipppp/marmut",
  },
  "sso-system": {
    title: "OIDC Identity System",
    description:
      "Studi kasus sistem identitas terpusat berbasis OpenID Connect.",
    longDescription:
      "Proyek ini merupakan studi kasus implementasi Identity Provider (IdP) menggunakan protokol OpenID Connect yang dideploy pada Google Cloud Platform. Tantangan utama proyek ini adalah menempatkan Authorization Server, Resource Server, dan Client pada subnet yang berbeda di dalam VPC dan memastikan proses autentikasi serta authorisasi berjalan dengan lancar.",
    challenge:
      "Melakukan segmentasi jaringan menggunakan VPC Subnetting dan konfigurasi security group dan routing yang sesuai pada Google Cloud Platform. OIDC handshake harus mampu berjalan dengan benar meskipun setiap komponen berada pada subnet yang berbeda.",
    solution:
      "Implementasi network topology yang terisolasi pada GCP dengan aturan ingress/egress yang sesuai serta penggunaan Spring Authorization Server untuk autentikasi lintas subnet.",
    techStack: [
      "OIDC",
      "Spring Boot",
      "GCP",
      "VPC Network",
      "Cloud Firewall",
      "PostgreSQL",
    ],
    github: "https://github.com/adipppp/ssoserver",
    extraLinks: [
      {
        name: "Client Implementation",
        url: "https://github.com/adipppp/ssoclient",
      },
      {
        name: "Resource Server",
        url: "https://github.com/adipppp/resourceserver",
      },
    ],
  },
  "booku-booklist": {
    title: "Book List Microservice",
    description:
      "Microservice REST API untuk manajemen buku dengan Spring Boot 3.",
    longDescription:
      "Proyek ini merupakan sebuah microservice untuk mengelola katalog buku pada platform BookU. Proyek ini dibangun menggunakan Spring Boot 3 dan Java 21, menyediakan API untuk operasi CRUD buku dengan fitur filtering dan sorting menggunakan Spring Data JPA Specifications.",
    challenge:
      "Membangun sistem pencarian buku yang fleksibel dengan berbagai parameter kriteria serta memastikan integritas data dan performa layanan di lingkungan microservices.",
    solution:
      "Implementasi Spring Data JPA Specifications untuk menangani query filtering dan sorting pada katalog buku. Proyek ini juga menggunakan PostgreSQL sebagai database utama untuk menjamin persistensi data.",
    techStack: [
      "Spring Boot",
      "Java 21",
      "Spring Data JPA",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/AdPro-C8/BookU-be-bookList",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Proyek tidak ditemukan</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-4 max-w-4xl mx-auto"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
      </Link>

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
