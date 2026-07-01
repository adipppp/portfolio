import type { Project, ProjectData } from "../types";

const unifiedProjects = [
  {
    id: "thesis",
    title: "Skripsi: CPU Pinning & LP Solver on Kubernetes",
    description:
      "Riset aktif tentang pengaruh CPU Pinning terhadap performa fase crossover LP solver di lingkungan Kubernetes — mulai dari membangun klaster GCP dari nol hingga mendesain eksperimen.",
    tags: ["Kubernetes", "GCP", "Linux Scheduler", "Gurobi", "kubeadm"],
    github: "https://github.com/adipppp/crossover-experiment",
    status: "in-progress" as const,
    intro:
      "Fase crossover adalah bagian dari LP solver yang jarang dibicarakan — titik di mana metode barrier menyerahkan solusi ke simplex untuk menemukan basic feasible solution, dan fase ini notorius sulit diparalelkan. Saya ingin tahu apakah OS scheduler sendiri merupakan variabel tersembunyi yang memengaruhi performanya.",
    milestones: [
      {
        title: "Membangun environment yang terkontrol",
        problem:
          "Kamu tidak bisa mengukur pengaruh CPU Pinning tanpa lingkungan yang terkontrol. VM cloud dengan konfigurasi default menggunakan CFS scheduler dan shared resource yang menimbulkan noise — artinya hasil eksperimen bisa saja mencerminkan interferensi scheduler, bukan performa solver itu sendiri.",
        concept: "Kubernetes CPU Manager (static policy)",
        conceptExplain:
          "Ketika diaktifkan, CPU Manager mem-pin CPU container secara eksklusif ke core fisik menggunakan Linux cgroups — menghilangkan preemption dan CPU migration oleh scheduler untuk workload tersebut.",
        outcome:
          "Membangun klaster Kubernetes multi-node di GCP menggunakan kubeadm. Menulis dua konfigurasi kubelet — satu baseline (CFS) dan satu dengan static CPU Manager — beserta skrip untuk drain, ganti konfigurasi, dan uncordon node antar kondisi eksperimen.",
      },
      {
        title: "Mengukur yang benar-benar penting",
        problem:
          "Wall-clock time saja tidak cukup untuk menjelaskan mengapa sesuatu lebih lambat. Kamu butuh tahu apakah CPU di-interrupt atau di-migrate di tengah komputasi — karena itulah yang akan membuktikan atau membantah hipotesis.",
        concept: "Context switches & CPU throttling",
        conceptExplain:
          "Metrik OS yang menunjukkan kapan scheduler menarik resource dari sebuah proses. Jumlah context switch yang tinggi selama fase crossover mengindikasikan bahwa scheduler-lah yang menjadi bottleneck.",
        outcome:
          "Membangun host-side metrics collector (collect_system_metrics.py) yang berjalan bersamaan dengan solver pod, mengambil sampel context switch dan throttle event sepanjang fase crossover. Setiap eksperimen kini menghasilkan dua dataset: timing solver dan perilaku OS.",
      },
    ],
    techStack: [
      "Python",
      "Kubernetes",
      "kubeadm",
      "GCP",
      "Gurobi",
      "Linux cgroups",
      "Docker",
    ],
  },
  {
    id: "marmut",
    title: "Marmut — Discord Music Bot",
    description:
      "Bot musik Discord yang berkembang dari ide sederhana menjadi distributed system — dengan setiap versinya memaksa pemahaman baru tentang cara komputer bekerja.",
    tags: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "Lavalink", "discord.js"],
    github: "https://github.com/adipppp/marmut",
    intro:
      "TODO: Tulis 2–3 kalimat tentang mengapa kamu memulai Marmut. Bot lain tidak bisa diandalkan? Kamu ingin membuat sendiri? Awalnya terlihat mudah?",
    milestones: [
      {
        title: "TODO: Judul untuk milestone Streams",
        problem:
          "TODO: Apa yang rusak atau tidak bekerja dengan baik pada versi pertama? Jelaskan masalahnya secara konkret (misalnya: crash saat file besar, memori habis, dsb.).",
        concept: "Node.js Streams & backpressure",
        conceptExplain:
          "Data mengalir dalam potongan kecil; producer yang cepat (download) tidak membanjiri consumer yang lebih lambat (playback), sehingga penggunaan memori tetap konstan terlepas dari ukuran file.",
        outcome:
          "TODO: Apa yang kamu lakukan untuk mengatasinya? Apa hasilnya setelah menggunakan streams?",
      },
      {
        title: "TODO: Judul untuk milestone OS processes",
        problem:
          "TODO: Apa yang rusak atau tidak responsif terkait pemrosesan audio? Jelaskan secara konkret.",
        concept: "OS-level process management",
        conceptExplain:
          "Perbedaan antara thread dan process, exit code, sinyal (SIGTERM/SIGKILL), dan resource limit saat melakukan spawn child process dari Node — semua hal yang tidak dipaksa oleh aplikasi JS murni.",
        outcome:
          "TODO: Apa yang kamu lakukan? Bagaimana perilaku bot berubah setelahnya?",
      },
      {
        title: "TODO: Judul untuk milestone WebSocket Gateway",
        problem:
          "TODO: Bagaimana koneksi bot bisa putus atau terasa tidak responsif? Apa yang mendorong kamu untuk turun ke level gateway?",
        concept: "Discord WebSocket Gateway protocol",
        conceptExplain:
          "Koneksi persisten yang dijaga hidup oleh Discord menggunakan heartbeat; ketika putus, kamu butuh resume logic (sequence number + session ID) agar tidak kehilangan event.",
        outcome:
          "TODO: Apa yang kamu implementasikan di level gateway? Bagaimana reliabilitas bot berubah?",
      },
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "discord.js",
      "Prisma",
      "PostgreSQL",
      "Lavalink",
    ],
  },
  {
    id: "sso-system",
    title: "OIDC Identity System",
    description:
      "Implementasi SSO berbasis OIDC yang di-deploy lintas subnet VPC yang terisolasi di GCP — dibangun untuk memahami apa arti 'network security' sesungguhnya di level infrastruktur.",
    tags: ["OIDC", "GCP", "VPC", "Cloud Firewall", "Spring Boot"],
    github: "https://github.com/adipppp/ssoserver",
    extraLinks: [
      { name: "Client Implementation", url: "https://github.com/adipppp/ssoclient" },
      { name: "Resource Server", url: "https://github.com/adipppp/resourceserver" },
    ],
    intro:
      "Saya ingin tahu apa yang terjadi ketika kamu benar-benar menegakkan segmentasi jaringan — bukan hanya mengonfigurasinya, tapi mencoba membobolnya. Jawabannya: jauh lebih sulit dari yang terlihat di paper.",
    milestones: [
      {
        title: "Desain topologi jaringan",
        problem:
          "Jaringan flat berarti setiap service yang terkompromi bisa menjangkau service lain. Menempatkan komponen di subnet terpisah hanya bekerja jika routing dan firewall rule sudah benar — dan itu lebih sulit daripada yang tampak, karena satu rule yang salah bisa memblokir handshake OIDC sepenuhnya.",
        concept: "VPC subnetting & firewall rules",
        conceptExplain:
          "Aturan ingress/egress di level subnet mengontrol tepat service mana yang bisa berbicara ke service mana, dan dari arah mana — ini adalah unit fundamental dari network isolation.",
        outcome:
          "Mendesain topologi 3-subnet di GCP: Authorization Server, Resource Server, dan Client masing-masing di subnet sendiri, dengan allow rule eksplisit hanya di mana diperlukan. Memverifikasi bahwa traffic yang tidak diizinkan benar-benar ditolak.",
      },
      {
        title: "Menjalankan OIDC handshake lintas subnet",
        problem:
          "OIDC authorization code flow melibatkan beberapa redirect lintas ketiga komponen. Membuat token mengalir dengan benar ketika setiap komponen hanya bisa melihat tetangganya yang diizinkan membutuhkan pemahaman mendalam tentang protokolnya — tidak cukup hanya menyambungkan library.",
        concept: "OpenID Connect (OIDC) authorization code flow",
        conceptExplain:
          "Alur multi-langkah di mana klien mendapatkan authorization code, menukarnya dengan token di Authorization Server, lalu memvalidasi ID token — setiap langkah membutuhkan jalur jaringan spesifik yang harus terbuka.",
        outcome:
          "Mengimplementasikan Authorization Server dengan Spring Authorization Server, memverifikasi full OIDC handshake bekerja dengan hanya firewall rule minimum yang diperlukan antar subnet.",
      },
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Authorization Server",
      "OIDC",
      "GCP",
      "VPC Network",
      "Cloud Firewall",
      "PostgreSQL",
    ],
  },
  {
    id: "matrix-multiplication",
    title: "Matrix Multiplication — CPU vs GPU",
    description:
      "Studi perbandingan lima implementasi algoritma yang sama — dari satu loop CPU hingga cuBLAS yang diakselerasi GPU — untuk memahami apa yang membuat masing-masing lebih cepat, dan mengapa beberapa di antaranya mengejutkan.",
    tags: ["CUDA", "C", "MPI", "cuBLAS", "Kubernetes", "Parallel Computing"],
    github: "https://github.com/adipppp/pr2-gpu",
    intro:
      "Tugasnya adalah mengimplementasikan perkalian matriks dengan lima cara berbeda. Bagian yang menarik bukan menulis kodenya — tapi memahami mengapa versi GPU tidak semuanya sama cepatnya, dan mengapa versi CUDA naive bisa lebih lambat dari MPI pada input tertentu.",
    milestones: [
      {
        title: "Dari satu core ke banyak core (MPI)",
        problem:
          "Implementasi sekuensial sudah benar tapi lambat — runtime-nya tumbuh O(N³). Pertanyaannya: berapa banyak speedup yang bisa didapat hanya dengan membagi pekerjaan ke beberapa CPU, dan apa biaya komunikasi yang harus dibayar?",
        concept: "Distributed memory parallelism (MPI)",
        conceptExplain:
          "Setiap process memiliki slice data sendiri; MPI Scatter/Gather menangani pembagian dan pengumpulan data, tapi komunikasi itu sendiri punya biaya yang nyata — dan biaya itulah yang membatasi speedup.",
        outcome:
          "Mengimplementasikan MPI dengan distribusi baris via Scatter/Gather dan broadcast matriks B. Mengukur bahwa speedup tidak linear: communication overhead mulai mendominasi setelah jumlah rank tertentu.",
      },
      {
        title: "Dari CPU cluster ke GPU — dan jebakan coalescing",
        problem:
          "Versi CUDA pertama (uncoalesced) ternyata lebih lambat dari yang diharapkan. Penyebabnya bukan logika komputasinya — melainkan cara thread mengakses memori.",
        concept: "GPU memory coalescing",
        conceptExplain:
          "Thread dalam satu warp yang mengakses alamat memori berurutan mendapat satu transaksi; thread yang mengakses alamat acak mendapat penalti. Tiga mode CUDA (coalesced, row-wise, uncoalesced) mendemonstrasikan ini secara langsung dan terukur.",
        outcome:
          "Mengimplementasikan ketiga mode CUDA dan mengukur perbedaan performanya. Mode coalesced secara konsisten lebih cepat — perbedaannya cukup signifikan untuk membuktikan bahwa memory access pattern, bukan jumlah komputasi, yang mendominasi runtime GPU.",
      },
      {
        title: "Shared memory tiling — mengurangi global memory traffic",
        problem:
          "Meskipun mode coalesced sudah lebih baik, setiap thread masih membaca elemen yang sama dari global memory berulang kali — bandwidth global memory menjadi bottleneck.",
        concept: "GPU shared memory & tiling",
        conceptExplain:
          "Shared memory adalah scratchpad cepat per thread block. Tiling memuat sub-matriks ke shared memory satu kali, lalu menggunakannya berkali-kali — mengurangi global memory access sebesar faktor blockSize.",
        outcome:
          "Mengimplementasikan kernel tiled dengan __shared__ memory. Mengukur peningkatan performa yang signifikan dibanding versi coalesced biasa, khususnya untuk ukuran matriks besar di mana bandwidth global memory menjadi bottleneck dominan.",
      },
      {
        title: "cuBLAS — batas dari optimasi manual",
        problem:
          "Kernel tiled sudah jauh lebih baik, tapi masih kalah dari cuBLAS. Mengapa sebuah library bisa mengalahkan implementasi manual yang sudah dioptimasi?",
        concept: "Library-level GPU optimization (cuBLAS)",
        conceptExplain:
          "cuBLAS menggunakan fused operation, kernel yang di-tune khusus per arsitektur GPU, dan Tensor Cores — optimasi yang tidak bisa direplikasi dengan tangan tanpa akses ke detail hardware internal.",
        outcome:
          "Mengukur bahwa cuBLAS mengalahkan semua implementasi manual secara konsisten. Memahami bahwa jarak antara 'kernel yang baik' dengan 'kernel yang optimal' diisi oleh pengetahuan arsitektur yang sangat spesifik — dan library seperti cuBLAS mewakili akumulasi pengetahuan itu.",
      },
    ],
    techStack: [
      "C",
      "CUDA",
      "cuBLAS",
      "MPI",
      "OpenMP",
      "Kubernetes",
      "Docker",
      "NVHPC",
    ],
  },
  {
    id: "asrama-ui",
    title: "Asrama UI API",
    description:
      "Backend untuk sistem manajemen asrama baru Universitas Indonesia — dibangun selama magang 6 bulan, dengan fokus pada membersihkan desain database yang telah menumpuk technical debt bertahun-tahun.",
    tags: ["Go", "Fiber", "MongoDB", "REST API"],
    github: "https://gitlab.ui.ac.id/dtd/asrama-ui-backend",
    link: "https://residence.ui.ac.id",
    intro:
      "Sistem yang lama berfungsi, tapi schema database-nya tumbuh secara organik selama bertahun-tahun dan itu terlihat jelas — field yang redundan, relasi yang tidak konsisten, query yang mengambil jauh lebih banyak data dari yang dibutuhkan. Tugasnya adalah memperbaiki fondasi itu sebelum membangun di atasnya.",
    milestones: [
      {
        title: "Mendesain ulang schema database",
        problem:
          "ERD lama memiliki redundansi yang tinggi: data yang sama disimpan di beberapa tempat, menyebabkan inkonsistensi dan query yang tidak efisien. Migrasi harus dilakukan tanpa mengganggu sistem yang sedang berjalan.",
        concept: "Database normalization & ERD redesign",
        conceptExplain:
          "Normalisasi menghilangkan data duplikat dengan memisahkan entitas ke tabel/koleksi yang tepat dan mendefinisikan relasi yang jelas — menghasilkan data yang lebih konsisten dan query yang lebih efisien.",
        outcome:
          "Mendesain ulang bagian ERD yang paling bermasalah, memisahkan entitas yang sebelumnya digabungkan, dan mengimplementasikan schema baru di MongoDB. Query yang sebelumnya mengambil dokumen berlebih kini hanya mengambil yang diperlukan.",
      },
      {
        title: "Membangun REST API layer",
        problem:
          "Dengan schema yang sudah diperbaiki, API perlu dibangun di atasnya — dengan autentikasi yang aman dan endpoint yang konsisten untuk digunakan oleh tim frontend.",
        concept: "JWT-based authentication & REST API design",
        conceptExplain:
          "JWT memungkinkan server memverifikasi identitas pengguna tanpa menyimpan state sesi — token yang di-sign berisi klaim yang bisa diverifikasi di setiap request.",
        outcome:
          "Mengimplementasikan RESTful API menggunakan Go (Fiber) dengan JWT authentication, melayani endpoint untuk pendaftaran dan pengelolaan asrama. Berkolaborasi dengan tim frontend untuk memastikan kontrak API yang jelas.",
      },
    ],
    techStack: [
      "Go",
      "Fiber",
      "MongoDB",
      "JWT",
      "REST API",
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
  ...(p.status ? { status: p.status } : {}),
}));

export const projectsData: Record<string, ProjectData> = unifiedProjects.reduce(
  (acc, p) => {
    acc[p.id] = {
      title: p.title,
      description: p.description,
      intro: p.intro,
      milestones: p.milestones,
      techStack: p.techStack,
      github: p.github,
      demo: p.link,
      extraLinks: p.extraLinks,
      status: p.status,
    };
    return acc;
  },
  {} as Record<string, ProjectData>
);
