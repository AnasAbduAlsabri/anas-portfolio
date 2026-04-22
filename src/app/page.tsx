"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, Globe } from "lucide-react"
import Link from "next/link"

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

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl group">
            <Globe className="h-6 w-6 text-accent group-hover:rotate-12 transition-transform" />
            <span>Anas Alsabri</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
              <Link href="https://github.com/anasalsabri" target="_blank" className="hover:text-foreground transition-colors">GitHub</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
              Senior Software Engineer
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Building the future <br />
              <span className="text-accent">one line at a time.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              I specialize in creating robust, AI-powered applications and scalable web systems with a focus on clean code and exceptional user experience.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-8 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:opacity-90 transition-all"
              >
                View My Work
              </Link>
              <Link
                href="https://github.com/anasalsabri"
                target="_blank"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-card px-8 py-2 text-sm font-semibold shadow-sm hover:bg-accent/5 hover:border-accent/30 transition-all gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub Profile
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground">A selection of my most impactful engineering work.</p>
            </div>
          </div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="mt-32 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card/50 p-8 sm:p-12 text-center space-y-8 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s build something great together.</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="mailto:contact@anasalsabri.org" className="p-3 rounded-full bg-accent/10 text-accent hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://github.com/anasalsabri" target="_blank" className="p-3 rounded-full bg-accent/10 text-accent hover:scale-110 transition-transform">
                <GithubIcon className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground sm:px-6">
          <p>© {new Date().getFullYear()} Anas Alsabri. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>author: <Link href="https://anasalsabri.org" target="_blank" className="text-accent hover:underline">anasalsabri.org</Link></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
