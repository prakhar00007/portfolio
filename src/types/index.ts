export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  status: string;
  availableDate: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  instagram: string;
  resumePath: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
  accent: AccentColor;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  heroMetric: { value: string; label: string };
  description: string;
  problem: string;
  solution: string[];
  architecture: string[];
  impact: string[];
  techStack: string[];
  span: "large" | "medium";
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Languages"
  | "Frameworks"
  | "Cloud"
  | "Databases"
  | "ML/AI"
  | "DevOps";

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  awards?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  credlyUrl: string;
  date: string;
  badgeImage: string;
}

export type AccentColor =
  | "green"
  | "blue"
  | "purple"
  | "amber"
  | "cyan"
  | "rose";

export interface DiagramNode {
  label: string;
  accent: AccentColor;
  icon: string;
}

export interface DiagramStage {
  key: string;
  title: string;
  nodes: DiagramNode[];
}

export interface ProjectDiagram {
  slug: string;
  stages: DiagramStage[];
}
