export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | '3d' | 'ecommerce' | 'tools';
  icon: string;
  logoUrl?: string;
  level: number; // 1-100
  color: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: '3D & WebGL' | 'Full-Stack' | 'Frontend' | 'AI & Tools';
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  description: string[];
  status?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

export interface Metric {
  value: string;
  label: string;
  sublabel?: string;
  icon?: string;
}
