"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/personal";

export function ContactSection() {
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
    <Wrapper id="contact" className="mb-16 scroll-mt-24" {...props}>
      <SectionHeading number="04" title="Get In Touch" />

      <p className="mb-8 max-w-md leading-relaxed">
        I&apos;m currently looking for my next opportunity starting{" "}
        <span className="text-foreground-bright">July 2026</span>. Whether you
        have a question, a role, or just want to say hi - my inbox is open.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <div className="relative inline-flex">
          <div className="absolute -inset-1 rounded bg-accent/20 blur-md" />
          <a
            href={`mailto:${personalInfo.email}`}
            className="relative inline-flex items-center justify-center rounded bg-accent px-8 py-3 font-mono text-sm font-medium text-background transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Say Hello
          </a>
        </div>
        <a
          href={personalInfo.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded border border-border px-6 py-3 font-mono text-sm text-muted transition-colors hover:border-border-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-8 flex flex-col gap-2 text-sm">
        <a
          href={`mailto:${personalInfo.email}`}
          className="font-mono text-muted transition-colors hover:text-accent"
        >
          {personalInfo.email}
        </a>
        <span className="font-mono text-muted">{personalInfo.phone}</span>
        <span className="font-mono text-muted">{personalInfo.location}</span>
      </div>
    </Wrapper>
  );
}
