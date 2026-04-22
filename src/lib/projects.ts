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
    image: "/thumb_images/Exchange System.png",
    tags: ["Python", "Flask", "SocketIO", "SQLAlchemy"],
    githubUrl: "https://github.com/AnasAbduAlsabri/Exchange-System-DS",
    liveUrl: "https://github.com/AnasAbduAlsabri/Exchange-System-DS"
  },
  {
    title: "Rio Panel",
    description: "Full-stack dashboard application with a Next.js frontend and Python backend, featuring robust authentication and dynamic content management.",
    image: "/thumb_images/Rio Panel.png",
    tags: ["Next.js", "Python", "FastAPI", "SQLite"],
    githubUrl: "https://github.com/AnasAbduAlsabri/rio-frontend",
    liveUrl: "https://rio-frontend.vercel.app/"
  },
  {
    title: "Tamayoz AI",
    description: "An advanced AI-powered chat interface designed for specialized interactions, featuring a sleek, responsive design and real-time responses.",
    image: "/thumb_images/Tamayoz AI.png",
    tags: ["JavaScript", "HTML/CSS", "AI Integration"],
    githubUrl: "https://github.com/AnasAbduAlsabri/Tamayoz_AI",
    liveUrl: "https://github.com/AnasAbduAlsabri/Tamayoz_AI"
  },
  {
    title: "Virtual Teacher AI",
    description: "An innovative educational tool that reads PDFs and generates voice-over lectures, leveraging AI for accessible learning experiences.",
    image: "/thumb_images/Virtual Teacher AI.png",
    tags: ["Next.js", "React", "AI APIs", "Voice Generation"],
    githubUrl: "https://github.com/AnasAbduAlsabri/Virtual_Teacher_Ai",
    liveUrl: "https://github.com/AnasAbduAlsabri/Virtual_Teacher_Ai"
  },
  {
    title: "ATM Locator",
    description: "A real-time geolocation service built to help users find the nearest ATM facilities with precise mapping and availability status.",
    image: "/thumb_images/ATM Locator.png",
    tags: ["React", "Google Maps API", "Geolocation", "Tailwind CSS"],
    githubUrl: "https://github.com/anasalsabri/atm-locator",
    liveUrl: "https://atm-locator.anasalsabri.org"
  },
  {
    title: "Smart Converter",
    description: "An advanced multi-utility conversion tool supporting high-precision currency, unit, and scientific conversions with a clean, modern UI.",
    image: "/thumb_images/Smart Converter.png",
    tags: ["Next.js", "TypeScript", "Financial APIs", "Modern UI"],
    githubUrl: "https://github.com/anasalsabri/smart-converter",
    liveUrl: "https://smart-converter.anasalsabri.org"
  },
];
