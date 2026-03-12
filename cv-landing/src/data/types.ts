export interface ProjectTheme {
  gradient: string;
  pattern: string;
  glowColor: string;
  iconPath: string;
  ambientOpacity: number;
}

export interface Entry {
  name: string;
  role: string;
  year: string;
  bullets: string[];
  tags: string[];
  color: string;
  org?: string;
  theme: ProjectTheme;
}

export interface Certification {
  title: string;
  org: string;
  year: string;
  score: string;
}

export interface Language {
  lang: string;
  level: string;
  pct: number;
  color: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  note: string;
}

export interface CVData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  phone: string;
  about: string;
  skills: Record<string, string[]>;
  experience: Entry[];
  projects: Entry[];
  education: Education;
  certs: Certification[];
  languages: Language[];
}
