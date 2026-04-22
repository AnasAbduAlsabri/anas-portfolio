"use client"

import { motion } from "framer-motion"
import { Terminal, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm hover:border-accent hover:shadow-md transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <GithubIcon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        </div>
      </div>

      <Link 
        href={project.liveUrl || project.githubUrl} 
        target="_blank"
        className="relative mt-4 block aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted/30 group-hover:border-accent/50 transition-colors"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <Terminal className="h-10 w-10 text-accent/10" />
        </div>
      </Link>
      
      <p className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Link
          href={project.githubUrl}
          target="_blank"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <GithubIcon className="h-4 w-4" />
          Code
        </Link>
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        )}
      </div>
    </motion.div>
  )
}
