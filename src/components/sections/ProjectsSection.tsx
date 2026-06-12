"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const reduced = useReducedMotion();

  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <SectionHeading number="01" title="Things I've Built" id="projects-heading" />

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => {
          const card = (
            <Link
              href={`/project/${project.slug}`}
              className="group relative block rounded-lg border border-transparent border-t-2 border-t-accent/40 p-5 transition-[border-color,background-color,box-shadow] duration-200 hover:border-border hover:border-t-accent hover:bg-surface-1/50 hover:shadow-[inset_0_1px_0_0_rgba(100,255,218,0.05),0_0_30px_-10px_rgba(100,255,218,0.15)] hover:backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex items-start gap-4">
                {/* Metric badge */}
                <div className="hidden shrink-0 rounded-lg border border-border bg-accent-dim px-4 py-3 text-center sm:block">
                  <span className="block font-mono text-xl font-bold text-accent">
                    {project.heroMetric.value}
                  </span>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                    {project.heroMetric.label}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-medium leading-snug text-foreground-bright transition-colors group-hover:text-accent">
                    {project.title}
                    <svg className="ml-1 inline-block h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    {project.subtitle}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent-dim px-2.5 py-0.5 font-mono text-[10px] text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );

          if (reduced) return <div key={project.slug}>{card}</div>;

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {card}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
