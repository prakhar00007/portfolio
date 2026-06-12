"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences, education } from "@/data/experience";

export function ExperienceSection() {
  const reduced = useReducedMotion();
  const Wrapper = reduced ? "section" : motion.section;
  const props = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      };

  return (
    <Wrapper id="experience" className="mb-24 scroll-mt-24" {...props}>
      <SectionHeading number="02" title="Where I've Worked" />

      <div className="relative pl-8">
        {/* Vertical timeline line */}
        <div className="absolute left-3 top-2 bottom-0 w-px bg-border" />

        {experiences.map((exp) => (
          <div key={exp.role} className="relative mb-8">
            {/* Timeline dot - centered on the vertical line at left-3 (12px) */}
            <div className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-medium text-foreground-bright">{exp.role}</h3>
              <span className="shrink-0 font-mono text-xs text-muted">{exp.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-accent">{exp.company}</p>

            <ul className="mt-4 flex flex-col gap-2">
              {exp.achievements.map((a) => (
                <li key={a} className="relative pl-5 text-sm leading-relaxed">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  {a}
                </li>
              ))}
            </ul>

            {exp.awards && (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.awards.map((award) => (
                  <span
                    key={award}
                    className="rounded-full bg-accent-amber/10 px-3 py-1 font-mono text-[11px] text-accent-amber"
                  >
                    {award}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
          Education
        </h3>
        <div className="relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
          {education.map((edu) => (
            <div key={edu.institution} className="relative mb-6 last:mb-0 rounded-lg border border-border bg-surface-1/50 p-4 transition-colors hover:border-border-hover">
              <div className="absolute -left-[26px] top-5 h-3 w-3 rounded-full border-2 border-accent-blue bg-background" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium text-foreground-bright">{edu.degree}</p>
                <span className="shrink-0 font-mono text-xs text-muted">{edu.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent-blue">{edu.institution}</p>
              {edu.gpa && (
                <span className="mt-2 inline-block rounded-full bg-accent-blue/10 px-3 py-0.5 font-mono text-[11px] text-accent-blue">
                  {edu.gpa}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
