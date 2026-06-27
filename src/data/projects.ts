import type { Project, ProjectData } from "../types";

export interface UnifiedProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  longDescription: string;
  challenge: string;
  solution: string;
  techStack: string[];
  extraLinks?: { name: string; url: string }[];
}

const unifiedProjects: UnifiedProject[] = [
  {
    id: "asrama-ui",
    title: "Asrama UI API",
    description:
      "REST API untuk sistem manajemen asrama Universitas Indonesia. Memanfaatkan Fiber (Go) dan MongoDB untuk menghadirkan sistem pendaftaran hunian yang lebih andal dan efisien.",
    tags: ["Go", "Fiber", "MongoDB", "REST API"],
    github: "https://gitlab.ui.ac.id/dtd/asrama-ui-backend",
    link: "https://residence.ui.ac.id",
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
  },
  {
    id: "sso-system",
    title: "OIDC Identity System",
    description:
      "Implementasi SSO berbasis OIDC pada Google Cloud untuk memvalidasi konektivitas dan keamanan antar jaringan (VPC & Firewall).",
    tags: ["OIDC", "GCP", "VPC Network", "Cloud Firewall"],
    github: "https://github.com/adipppp/ssoserver",
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
  {
    id: "booku-booklist",
    title: "Book List Microservice",
    description:
      "Microservice REST API untuk manajemen buku dengan Spring Boot 3. Fokus pada clean architecture dan fleksibilitas query menggunakan JPA Specifications.",
    tags: ["Spring Boot", "Java", "JPA Specs", "PostgreSQL"],
    github: "https://github.com/AdPro-C8/BookU-be-bookList",
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
  },
  {
    id: "marmut",
    title: "Marmut (Mari Mutar Musik)",
    description:
      "Music player berbasis audio engine yang menerapkan arsitektur distributed systems untuk pemrosesan audio secara real-time.",
    tags: ["Node.js", "Prisma", "Streams", "discord.js"],
    github: "https://github.com/adipppp/marmut",
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
  },
];

export const projects: Project[] = unifiedProjects.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  tags: p.tags,
  github: p.github,
  link: p.link,
}));

export const projectsData: Record<string, ProjectData> = unifiedProjects.reduce(
  (acc, p) => {
    acc[p.id] = {
      title: p.title,
      description: p.description,
      longDescription: p.longDescription,
      challenge: p.challenge,
      solution: p.solution,
      techStack: p.techStack,
      github: p.github,
      demo: p.link,
      extraLinks: p.extraLinks,
    };
    return acc;
  },
  {} as Record<string, ProjectData>
);
