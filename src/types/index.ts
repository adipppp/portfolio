import type { LucideIcon } from "lucide-react";

// ─── GitHub ───────────────────────────────────────────
export interface GithubUserStats {
  public_repos: number;
  followers: number;
  following: number;
}

// ─── Skills ───────────────────────────────────────────
export interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  index: number;
}

export interface CoreExpertise {
  name: string;
  rating: number;
}

export interface SkillGroup {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

// ─── Experience ───────────────────────────────────────
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

// ─── Education ────────────────────────────────────────
export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
}

// ─── Projects (list) ──────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  status?: 'in-progress';
}

// ─── Project Detail ───────────────────────────────────
export interface ExtraLink {
  name: string;
  url: string;
}

export interface Milestone {
  title: string;
  problem: string;
  concept: string;
  conceptExplain: string;
  outcome: string;
}

export interface ProjectData {
  title: string;
  description: string;
  intro: string;
  milestones: Milestone[];
  techStack: string[];
  github?: string;
  demo?: string;
  extraLinks?: ExtraLink[];
  status?: 'in-progress';
}

// ─── Contact Form ─────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
