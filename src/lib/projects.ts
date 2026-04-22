export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Exchange System",
    description: "A comprehensive web application for currency conversion and real-time transaction management. Built with Flask and WebSockets for live notifications.",
    image: "/images/exchange-system.jpg",
    tags: ["Python", "Flask", "SocketIO", "SQLAlchemy"],
    githubUrl: "https://github.com/anasalsabri/exchange-system",
  },
  {
    title: "Rio Panel",
    description: "Full-stack dashboard application with a Next.js frontend and Python backend, featuring robust authentication and dynamic content management.",
    image: "/images/rio-panel.jpg",
    tags: ["Next.js", "Python", "FastAPI", "SQLite"],
    githubUrl: "https://github.com/anasalsabri/rio-panel",
  },
  {
    title: "Tamayoz AI",
    description: "An advanced AI-powered chat interface designed for specialized interactions, featuring a sleek, responsive design and real-time responses.",
    image: "/images/tamayoz-ai.jpg",
    tags: ["JavaScript", "HTML/CSS", "AI Integration"],
    githubUrl: "https://github.com/anasalsabri/tamayoz-ai",
  },
  {
    title: "Virtual Teacher AI",
    description: "An innovative educational tool that reads PDFs and generates voice-over lectures, leveraging AI for accessible learning experiences.",
    image: "/images/virtual-teacher.jpg",
    tags: ["Next.js", "React", "AI APIs", "Voice Generation"],
    githubUrl: "https://github.com/anasalsabri/virtual-teacher-ai",
  },
];
