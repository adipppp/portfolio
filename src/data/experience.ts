import type { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    id: "resqlink-freelance",
    role: "Freelance Backend Engineer",
    company: "ResQLink",
    period: "March 2026 – June 2026 (4 Months)",
    location: "Remote",
    description: [
      "Built the backend for ResQLink, an on-demand ambulance dispatch platform, using TypeScript with Hono on Cloudflare Workers (serverless edge runtime).",
      "Implemented geospatial ambulance matchmaking using Uber H3 spatial indexing (Resolution 7) with progressive multi-ring search up to radius 30 — achieving sub-50ms latency for real-time dispatch.",
      "Used Upstash Serverless Redis for O(1) ambulance presence tracking and real-time state, and Supabase Broadcast Channels for high-frequency GPS updates that bypass database writes.",
      "Configured GitHub Actions CI/CD pipeline for automated Supabase migration deployment and Cloudflare Worker releases.",
    ],
  },
  {
    id: "dtd-backend-intern",
    role: "Backend Engineer Intern",
    company: "Direktorat Transformasi Digital Universitas Indonesia",
    period: "February 2025 – July 2025 (6 Months)",
    location: "Depok, Indonesia",
    description: [
      "Built a RESTful API for the UI dormitory management system using Go (Fiber v3) and MongoDB, serving 20+ domain entities across the full resident lifecycle: registration, billing, payments, and room management.",
      "Redesigned the database schema (ERD normalization) to eliminate redundancy and improve query efficiency — including a full audit trail for billing changes (log_tagihan).",
      "Implemented JWT-based authentication integrated with Keycloak SSO for role-based access control across all API endpoints.",
      "Applied Clean Architecture (domain → repository → service → handler) across 634 commits over 5 months.",
      "Collaborated with the frontend team via 6 iterative Postman collection revisions to maintain a stable API contract.",
    ],
  },
];
