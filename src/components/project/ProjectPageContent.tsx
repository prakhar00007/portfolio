"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import type { Project } from "@/types";

const STAGGER_DELAY = 0.15;

function AnimatedSection({
  children,
  index,
  reduced,
}: {
  children: React.ReactNode;
  index: number;
  reduced: boolean;
}) {
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * STAGGER_DELAY }}
    >
      {children}
    </motion.div>
  );
}

export function ProjectPageContent({ project }: { project: Project }) {
  const reduced = useReducedMotion();

  return (
    <main className="mx-auto max-w-5xl px-6 pt-4 pb-24">
      {/* Back link */}
      <nav className="mb-10" aria-label="Breadcrumb">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-sm text-accent transition-colors hover:text-accent-green"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span>
          Projects
        </Link>
      </nav>

      <AnimatedSection index={0} reduced={reduced}>
        <header className="mb-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground-bright md:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-lg leading-relaxed text-muted">{project.subtitle}</p>
            </div>
            <div className="shrink-0 rounded-lg border border-border bg-surface-1 px-5 py-3 text-center">
              <span className="block font-mono text-3xl font-bold text-accent">
                {project.heroMetric.value}
              </span>
              <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                {project.heroMetric.label}
              </span>
            </div>
          </div>
        </header>
      </AnimatedSection>

      <AnimatedSection index={1} reduced={reduced}>
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Problem
          </h2>
          <p className="leading-relaxed">{project.problem}</p>
        </section>
      </AnimatedSection>

      <AnimatedSection index={2} reduced={reduced}>
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Solution
          </h2>
          <ul className="flex flex-col gap-2">
            {project.solution.map((item) => (
              <li key={item} className="relative pl-5 text-sm leading-relaxed">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </AnimatedSection>

      <AnimatedSection index={3} reduced={reduced}>
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> System Flow
          </h2>
          <ArchitectureDiagram slug={project.slug} />
        </section>
      </AnimatedSection>

      <AnimatedSection index={4} reduced={reduced}>
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Architecture
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.architecture.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-border border-l-2 border-l-accent bg-surface-1/50 p-3 text-sm leading-relaxed"
              >
                <span className="shrink-0 font-mono text-xs font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </AnimatedSection>

      <AnimatedSection index={5} reduced={reduced}>
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Impact
          </h2>
          <ul className="flex flex-col gap-2">
            {project.impact.map((item) => (
              <li key={item} className="relative pl-5 text-sm leading-relaxed">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </AnimatedSection>

      <AnimatedSection index={6} reduced={reduced}>
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent-dim px-3 py-1 font-mono text-xs text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
