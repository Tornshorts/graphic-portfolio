// Shared TypeScript types and interfaces for the portfolio project

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface Service {
  name: string;
  icon: string;
  description: string;
}
