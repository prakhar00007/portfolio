"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { categoryColor, accentPillClass, accentDotClass } from "@/lib/utils";

export function TechSection() {
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
    <Wrapper id="tech" className="mb-24 scroll-mt-24" {...props}>
      <SectionHeading number="03" title="Tech I Use" />

      <div className="flex flex-col gap-6">
        {skillCategories.map((category) => {
          const color = categoryColor(category);
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <div key={category}>
              <h3 className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                <span className={`inline-block h-2 w-2 rounded-full ${accentDotClass(color)}`} />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full px-3 py-1 font-mono text-xs transition-colors hover:opacity-80 ${accentPillClass(color)}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Certifications */}
      <div className="mt-10 border-t border-border pt-6">
        <h3 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
          Certifications
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border bg-surface-1/50 p-4 transition-all hover:border-border-hover hover:bg-surface-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={cert.badgeImage}
                alt={cert.name}
                width={72}
                height={72}
                className="shrink-0"
              />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug text-foreground-bright transition-colors group-hover:text-accent">
                  {cert.name}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {cert.issuer}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
