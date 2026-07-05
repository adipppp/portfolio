import { Database, Server, Cloud, Shield, Cpu } from "lucide-react";
import type { CoreExpertise, SkillGroup } from "../types";

export const coreExpertise: CoreExpertise[] = [
  { name: "Go", rating: 4 },
  { name: "Python", rating: 4 },
  { name: "TypeScript", rating: 4 },
  { name: "SQL", rating: 4 },
  { name: "MongoDB", rating: 4 },
  { name: "Docker", rating: 4 },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: Server,
    title: "Backend",
    skills: ["Go", "Fiber", "FastAPI", "Java", "Spring Boot", "Node.js", "C++"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis (Upstash)", "Supabase", "Prisma"],
  },
  {
    icon: Cloud,
    title: "DevOps & Infra",
    skills: ["Docker", "Kubernetes", "GCP", "Cloudflare Workers", "GitLab CI", "Celery"],
  },
  {
    icon: Cpu,
    title: "Frontend",
    skills: ["React", "TypeScript", "Vite", "TanStack Query", "Tailwind CSS"],
  },
  {
    icon: Shield,
    title: "Security & Systems",
    skills: ["Keycloak SSO", "JWT", "OIDC", "CUDA", "MPI", "OpenMP"],
  },
];
