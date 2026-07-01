import { Database, Server, Cloud, Shield, Cpu } from "lucide-react";
import type { CoreExpertise, SkillGroup } from "../types";

export const coreExpertise: CoreExpertise[] = [
  { name: "Go", rating: 4 },
  { name: "Java", rating: 4 },
  { name: "Google Cloud", rating: 4 },
  { name: "SQL", rating: 4 },
  { name: "MongoDB", rating: 4 },
  { name: "Docker", rating: 4 },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: Server,
    title: "Frameworks",
    skills: ["Go", "Fiber", "Java", "Spring Boot", "Node.js"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Prisma"],
  },
  {
    icon: Cloud,
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "GCP", "CI/CD", "Git"],
  },
  {
    icon: Cpu,
    title: "Architecture",
    skills: ["System Design", "Microservices", "Node.js Streams"],
  },
  {
    icon: Shield,
    title: "Security & Networking",
    skills: ["OIDC", "VPC Network", "Cloud Firewall", "Subnetting"],
  },
];
