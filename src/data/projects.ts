import type { Project, ProjectData } from "../types";

const unifiedProjects = [
  {
    id: "smart-invoice-reminder",
    title: "Smart Invoice Reminder AI (SIRA)",
    description:
      "A production Accounts Receivable automation platform that scores client payment risk and sends personalized email reminders — deployed at sira.nashtagroup.co.id with a full GitLab CI pipeline across 6 stages.",
    tags: ["FastAPI", "React", "Celery", "Redis", "Supabase", "PostgreSQL", "Telegram Bot", "Docker", "GitLab CI"],
    link: "https://sira.nashtagroup.co.id",
    // ─── REVISED INTRO ────────────────────────────────────────────────────────
    intro:
      "Accounts receivable sounds simple until you work at a company that does it manually. Someone opens a spreadsheet every morning, finds the overdue invoices, writes a personalized email, sends it, updates the tracker, repeats. For a small portfolio it's manageable. At scale, it's a full-time job — and it still gets things wrong: too soft a tone for a chronic late-payer, a missed follow-up for a first-timer, a client who should have been escalated two weeks ago. We built SIRA to make those decisions automatic, observable, and auditable — so the finance team could see what happened and why, not just receive an email saying a reminder was sent.",
    milestones: [
      {
        title: "Designing the risk scoring engine",
        // ─── REVISED PROBLEM ────────────────────────────────────────────
        problem:
          "The naive approach — remind everyone who is overdue — produces exactly the outcome you're trying to avoid: the first-time 3-day-late client gets a firm warning, the chronic 30-day offender gets a polite nudge. Getting the tone wrong doesn't just feel bad; it damages relationships and undermines the point of sending a reminder at all. We needed a way to rank clients by actual payment behavior, not just days past due.",
        concept: "Deterministic weighted scoring with Strategy pattern",
        conceptExplain:
          "The scorer computes a weighted formula over 5 features: delay severity, overdue count, outstanding balance, payment consistency, and account age — outputting LOW/MEDIUM/HIGH risk. It's implemented as a Strategy plug-in so an ML model can replace the rule-based scorer later without changing the calling code.",
        outcome:
          "Shipped a scoring service that categorizes clients consistently and predictably. The finance team can see risk scores in the dashboard and override them. The Strategy pattern proved its value during testing — we swapped in a test scorer without touching any business logic.",
      },
      {
        title: "Personalized reminders at scale",
        problem:
          "Generic reminder emails get ignored. We needed to send emails that felt intentional — polite for low-risk clients, firm for medium-risk, and a formal warning for high-risk — while letting the finance team control the actual template text without touching code.",
        concept: "Jinja2 templating + Celery background jobs",
        conceptExplain:
          "Templates are authored in Settings UI using Jinja2 syntax. Celery beat runs a daily job that fetches overdue invoices, scores clients, selects the appropriate template, renders it, and dispatches via Resend. This keeps the scheduling logic decoupled from the email content.",
        outcome:
          "Finance team can create and edit templates without touching code. Email delivery is reliable and observable — every sent reminder is logged and visible in the Reminders dashboard. Internal Telegram notifications keep the AR team informed in real-time.",
      },
      {
        title: "Building a production-grade CI pipeline",
        problem:
          "A team of multiple contributors working on the same codebase without guardrails is a reliability disaster. We needed to ensure code quality before any merge reached production.",
        concept: "GitLab CI with parallel stages + SonarQube quality gate",
        conceptExplain:
          "The pipeline runs 8 parallel jobs per commit: frontend lint + typecheck + build + unit tests, backend lint + typecheck + unit tests + integration tests. SonarQube scans enforce a quality gate before the build stage. Only passing pipelines can trigger a deploy.",
        outcome:
          "1,256-line CI configuration across 6 stages: pre, ci, quality, migrate, build, deploy. The quality gate caught several regressions before they reached production. The pipeline also enforces pre-commit hooks (Biome, Ruff, tsc, mypy, Knip) to catch issues even earlier.",
      },
    ],
    techStack: [
      "FastAPI", "Python", "React", "TypeScript", "Vite", "TanStack Query",
      "TanStack Router", "Tailwind CSS", "Celery", "Redis", "PostgreSQL",
      "Supabase", "Resend", "Telegram Bot API", "Docker", "GitLab CI",
      "SonarQube", "Sentry",
    ],
  },
  {
    id: "asrama-ui-backend",
    title: "Asrama UI Backend",
    description:
      "A Go REST API for UI's dormitory management system — built during a 6-month internship, handling the full resident lifecycle across 20+ domain entities with Keycloak SSO and Clean Architecture.",
    tags: ["Go", "Fiber", "MongoDB", "Keycloak", "JWT", "REST API", "Clean Architecture"],
    github: "https://gitlab.ui.ac.id/dtd/asrama-ui-backend",
    link: "https://residence.ui.ac.id",
    intro:
      "The old system worked — but its database schema had grown organically for years and it showed: redundant fields, inconsistent relations, and queries that fetched far more data than they needed. Armed only with vague technical documentation and an unclear ERD, I had to redesign the entire dormitory backend from scratch. Over 634 commits and 5 months, I threw out the legacy codebase and rebuilt the foundation using Go and Clean Architecture.",
    milestones: [
      {
        title: "Redesigning the database schema",
        problem:
          "The existing ERD had significant redundancy — the same data stored in multiple places, causing inconsistencies and inefficient queries. Any migration had to be done without disrupting the running system.",
        concept: "Database normalization & ERD redesign",
        conceptExplain:
          "Normalization eliminates data duplication by separating entities into the right collections and defining clear relations — resulting in more consistent data and more efficient queries. The new schema supports 20+ domain entities: buildings, floors, rooms, residents, occupancies, billing, payments, registrations, and more.",
        outcome:
          "Redesigned the most problematic parts of the ERD, separated previously conflated entities, and implemented the new schema in MongoDB. Added a full billing audit trail (log_tagihan) that records every change with old/new values and the actor who made it.",
      },
      {
        title: "Implementing role-based access with Keycloak SSO",
        problem:
          "The dormitory system serves multiple roles: admins, residents, and staff — each with different permissions. Managing this without a centralized identity system would mean duplicating auth logic across every endpoint.",
        concept: "JWT + Keycloak SSO integration",
        conceptExplain:
          "Keycloak acts as the identity provider. The API validates incoming JWTs using Keycloak's RSA public key — verifying the token signature without hitting Keycloak on every request. Role claims inside the token determine what each user can do.",
        outcome:
          "Implemented JWT validation middleware using the Keycloak public key. Every handler checks role-based permissions before executing business logic. The system supports multiple roles with different access levels across all 20+ domain entities.",
      },
      {
        title: "Applying Clean Architecture at scale",
        problem:
          "As the codebase grew to 20+ entities, keeping business logic out of HTTP handlers and database queries became critical for maintainability and testability.",
        concept: "Clean Architecture (domain → repository → service → handler)",
        conceptExplain:
          "Each layer has a single responsibility: domain defines entities, repository handles MongoDB queries, service contains business logic, handler manages HTTP. Dependencies only flow inward — the service doesn't know about HTTP, and the handler doesn't know about MongoDB.",
        outcome:
          "Maintained a consistent 4-layer architecture across all 634 commits. Adding a new entity (e.g., room damage tracking) meant writing a domain struct, a MongoDB repository, a service method, and a Fiber handler — each independently testable and replaceable.",
      },
    ],
    techStack: [
      "Go", "Fiber v3", "MongoDB", "Keycloak", "JWT", "Clean Architecture",
      "goose", "Makefile", "REST API",
    ],
  },
  {
    id: "resqlink",
    title: "ResQLink — Ambulance Dispatch Platform",
    description:
      "A real-time ambulance dispatch platform built on a serverless edge architecture — Cloudflare Workers, Upstash Redis, and Uber H3 geospatial indexing for sub-50ms ambulance matching.",
    tags: ["TypeScript", "Hono", "Cloudflare Workers", "Supabase", "PostgreSQL", "Upstash Redis", "Uber H3", "Mapbox"],
    github: "https://github.com/101-toyota-team/resqlink-be",
    intro:
      "Emergency response is a latency problem. When someone calls an ambulance, every second spent routing the request through a traditional server in a data center is a second wasted. ResQLink was built to remove that overhead entirely — by running the dispatch logic at the network edge, closest to where the request originates.",
    milestones: [
      {
        title: "Geospatial matchmaking with Uber H3",
        problem:
          "Finding the nearest available ambulance sounds simple — until you consider that 'nearest' changes every second as ambulances move, and a naive query over a GPS coordinates table does not scale. Traditional lat/long radius queries require full-table scans or expensive spatial indexes.",
        concept: "H3 hexagonal spatial indexing",
        conceptExplain:
          "H3 divides the Earth into hexagonal cells at multiple resolutions. At Resolution 7, each hex covers ~5km². Indexing ambulance positions by their H3 cell turns a spatial search into a hash lookup — O(1) instead of O(n). Progressive ring expansion (gridRingUnsafe up to radius 30) finds the nearest available provider without scanning the full table.",
        outcome:
          "Implemented H3-based ambulance matching in Upstash Redis. Static assets (hospitals) are queried from Supabase with gridDisk(1) neighbor expansion. The combined approach achieves sub-50ms dispatch latency — the target for emergency response systems.",
      },
      {
        title: "Real-time GPS tracking at the edge",
        problem:
          "High-frequency GPS updates from ambulances (every 1–2 seconds) cannot be written to a database on every tick — the write amplification would make the database the bottleneck and add significant latency to every update.",
        concept: "Supabase Broadcast Channels + serverless edge runtime",
        conceptExplain:
          "Supabase Broadcast Channels deliver real-time messages directly between clients over WebSocket, bypassing the database entirely. Cloudflare Workers run the routing logic at edge nodes distributed globally — requests are handled within milliseconds of the user's location, not at a central server.",
        outcome:
          "GPS updates flow through Broadcast Channels to connected clients with no database writes. Persistent state (presence, active dispatch status) lives in Upstash Redis. The architecture eliminates the traditional tradeoff between real-time performance and data durability.",
      },
    ],
    techStack: [
      "TypeScript", "Hono", "Cloudflare Workers", "Supabase", "PostgreSQL",
      "Upstash Redis", "Uber H3", "Mapbox API", "GitHub Actions",
    ],
  },
  {
    id: "thesis",
    title: "Thesis: CPU Pinning & LP Solver on Kubernetes",
    description:
      "Active research on the effect of CPU Pinning on LP solver crossover phase performance in a Kubernetes environment — from building a GCP cluster from scratch to designing controlled experiments.",
    tags: ["Kubernetes", "GCP", "Linux Scheduler", "Gurobi", "kubeadm"],
    github: "https://github.com/adipppp/crossover-experiment",
    status: "in-progress" as const,
    // ─── REVISED INTRO ────────────────────────────────────────────────────────
    intro:
      "LP solvers are supposed to be deterministic — run the same problem twice, get the same answer in the same time. Except that's not always what happens in practice. The crossover phase — where the barrier method hands off to simplex to find a basic feasible solution — is notoriously hard to parallelize, and its runtime can vary more than you'd expect on what looks like identical hardware. My hypothesis: the OS scheduler is a hidden variable. Containerized workloads share CPU time with everything else running on the node, and those preemptions show up as noise in your solver timing. This thesis is my attempt to prove or disprove that with a controlled Kubernetes experiment.",
    milestones: [
      {
        title: "Building a controlled environment",
        problem:
          "You cannot measure the impact of CPU Pinning without a controlled environment. Cloud VMs with default configurations use the CFS scheduler and shared resources, which introduce noise — meaning experimental results could reflect scheduler interference rather than the solver's performance itself.",
        concept: "Kubernetes CPU Manager (static policy)",
        conceptExplain:
          "When enabled, the CPU Manager pins container CPUs exclusively to physical cores using Linux cgroups — eliminating preemption and CPU migration by the scheduler for that workload.",
        outcome:
          "Built a multi-node Kubernetes cluster on GCP using kubeadm. Wrote two kubelet configurations — one baseline (CFS) and one with static CPU Manager — along with scripts to drain, switch configs, and uncordon nodes between experimental conditions.",
      },
      {
        title: "Measuring what really matters",
        // ─── REVISED PROBLEM ────────────────────────────────────────────
        problem:
          "Wall-clock time alone isn't enough to prove the hypothesis. If the pinned condition is faster, it could be because of CPU pinning — or it could be a quieter machine, a warmer cache, or a different Gurobi internal state. You need to show that the scheduler was actually interfering in the baseline condition, not just that it was slower.",
        concept: "Context switches & CPU throttling as evidence",
        conceptExplain:
          "OS metrics that show when the scheduler pulls resources from a process. A high number of context switches during the crossover phase, correlated with slower wall-clock time, is the evidence that the scheduler itself is the bottleneck — not just noise.",
        outcome:
          "Built a host-side metrics collector (collect_system_metrics.py) that runs alongside the solver pod, sampling context switches and throttle events throughout the crossover phase. Each experiment now produces two datasets: solver timing and OS behavior — so the results can actually prove causality, not just correlation.",
      },
    ],
    techStack: [
      "Python", "Kubernetes", "kubeadm", "GCP", "Gurobi", "Linux cgroups", "Docker",
    ],
  },
  {
    id: "matrix-multiplication",
    title: "Parallel Matrix Multiplication",
    description:
      "High-performance computing implementation of matrix multiplication exploring the architectural differences between CPU and GPU parallelization — using MPI, CUDA, OpenMP, and cuBLAS.",
    tags: ["CUDA", "C++", "MPI", "cuBLAS", "Kubernetes", "Parallel Computing"],
    github: "https://github.com/101-toyota-team/resqlink-be",
    // ─── REVISED INTRO ────────────────────────────────────────────────────────
    intro:
      "The CPU implementation worked: MPI scatter/gather across nodes, each process multiplying its assigned rows. Add more nodes, get more throughput — textbook distributed computing. Moving to a GPU should have been faster in every way, because GPUs have thousands of cores where CPUs have tens. Instead, the first GPU port was slower. Not a little slower — embarrassingly slower. Understanding why is what this project is actually about.",
    milestones: [
      {
        title: "From row-wise to dot product",
        // ─── REVISED PROBLEM ────────────────────────────────────────────
        problem:
          "The row-wise distribution from the MPI version seemed like a natural starting point for the GPU port — each thread block handles a row, just like each MPI process did. But GPU cores aren't CPU cores. They're not designed to handle large, independent chunks of work; they're designed to do thousands of tiny operations in parallel. Mapping rows to thread blocks left the vast majority of CUDA cores idle, especially on smaller matrix sizes.",
        concept: "Distributed memory vs. massive GPU threading",
        conceptExplain:
          "GPUs have thousands of tiny cores that operate efficiently when threads are grouped in warps. Doing row-wise splitting on the GPU leaves massive numbers of cores idle, especially for smaller matrix dimensions.",
        outcome:
          "Pivoted to a dot-product thread mapping approach to maximize parallelization across thousands of CUDA cores. This ensures that every element calculation maps directly to active threads, achieving real GPU hardware utilization.",
      },
      {
        title: "Overcoming cache thrashing with shared memory tiling",
        problem:
          "Even with coalesced global memory access, the GPU's memory bandwidth quickly becomes the bottleneck because every thread reads the same matrix elements from global memory repeatedly. When the matrices grow, cache thrashing degrades performance.",
        concept: "GPU shared memory tiling",
        conceptExplain:
          "Shared memory acts as a high-speed local scratchpad per thread block. Tiling partitions the matrices into sub-blocks (tiles), loads them into shared memory once, and reuses them across the block, reducing global memory accesses.",
        // ─── REVISED OUTCOME ────────────────────────────────────────────
        outcome:
          "Implemented matrix_mul_cuda_shared and ran it against the naive CUDA version at multiple matrix sizes. The result was counter-intuitive: tiling only yields speedups on massive inputs. On smaller matrices, the setup overhead causes a performance penalty rather than an improvement. The takeaway isn't that tiling is good or bad — it's that memory bandwidth is often a harder bottleneck than raw compute, and that 'optimization' requires knowing exactly which bottleneck you're hitting.",
      },
    ],
    techStack: ["C++", "CUDA", "cuBLAS", "MPI", "OpenMP", "Kubernetes", "Docker"],
  },
  {
    id: "marmut",
    title: "Marmut — Distributed Audio Streaming Service",
    description:
      "A Discord audio streaming service built across three generations and four years — starting as a Python experiment, rewritten in TypeScript, and eventually migrated to a distributed audio architecture with Lavalink and Docker.",
    tags: ["Node.js", "TypeScript", "Python", "Lavalink", "PostgreSQL", "Prisma", "discord.js", "Docker"],
    github: "https://github.com/adipppp/marmut",
    intro:
      "It started as a simple idea: build a bot that plays music in Discord. Existing YouTube-based music bots were either dead or heavily paywalled. I decided to build my own. What I didn't expect was that it would take three full rewrites over four years and teach me more about systems programming than any course did. The first version was 128 commits of Python held together by trial and error. The second was a TypeScript rewrite that forced me to think seriously about architecture. The third — Marmut — introduced me to distributed systems, Docker, and what 'production-ready' actually means.",
    milestones: [
      {
        title: "Generation 1: Learning by breaking things (Python)",
        problem:
          "The first version worked — sometimes. Audio would cut out, the bot would crash on large queues, and race conditions between join() and play() caused unpredictable behavior. The code was a single file that grew until it collapsed under its own weight.",
        concept: "Async I/O and process management in Python",
        conceptExplain:
          "discord.py uses asyncio under the hood — which means a blocking call anywhere can freeze the entire bot. Audio streaming with yt-dlp and ffmpeg requires spawning child processes correctly, handling their stdout as streams, and cleaning them up on exit. Getting this wrong causes memory leaks and zombie processes.",
        outcome:
          "128 commits of increasingly structured Python. Implemented multi-server audio state (one player per guild), a search menu with Discord button interactions, and a working song/queue repeat system. More importantly, identified the exact failure modes that would drive the next rewrite.",
      },
      {
        title: "Generation 2: Rewriting for structure (TypeScript)",
        problem:
          "Python's dynamic typing made it hard to reason about state across multiple guilds. Every time I added a feature, I introduced a bug somewhere else. The codebase needed a real architecture — not just better code.",
        concept: "Manager pattern and semantic versioning",
        conceptExplain:
          "Separating concerns into CommandManager, PlayerManager, and event Listeners meant each component had a single responsibility. Semantic versioning (v0.4 → v0.14) forced a discipline of shipping complete, tested increments rather than 'save checkpoint' commits.",
        outcome:
          "67 commits from v0.4 to v0.14 across 10 months. Implemented slash commands (following Discord's API migration), MongoDB-backed guild state, a cooldown system, and command blocking to prevent abuse. The jump from 'save' commit messages to structured versioning reflected a real shift in how I thought about software.",
      },
      {
        title: "Generation 3: Migrating to Lavalink (distributed audio)",
        problem:
          "Running ffmpeg inside the bot process meant audio quality was tied to bot memory and CPU. On servers with high activity, the bot became a bottleneck. The fundamental issue was that audio processing and bot logic were coupled in the same process.",
        concept: "Client-server audio architecture with Lavalink",
        conceptExplain:
          "Lavalink is a standalone audio server that streams audio to Discord directly. The bot becomes a thin client — it sends play/pause/stop commands to Lavalink over a WebSocket connection, and Lavalink handles all audio decoding and buffering independently.",
        outcome:
          "Migrated from ffmpeg to Lavalink, then from Lavalink to NodeLink (a self-hostable alternative). Added support for YouTube Music and Shorts. Containerized the entire stack using Docker with multi-stage builds, a separate PostgreSQL service, and authenticated health checks — 168 commits over two years.",
      },
    ],
    techStack: [
      "TypeScript", "Python", "discord.js", "discord.py", "Lavalink", "NodeLink",
      "PostgreSQL", "Prisma", "Docker", "yt-dlp", "ffmpeg",
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
      status: p.status,
    };
    return acc;
  },
  {} as Record<string, ProjectData>
);
