"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AboutSection() {
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
    <Wrapper id="about" className="mb-24 scroll-mt-24" {...props}>
      <p className="mb-4 leading-relaxed">
        I&apos;m an engineer who builds{" "}
        <span className="text-foreground-bright">production AI systems</span>{" "}
        that actually ship to real users. Not prototypes. Not demos. Systems
        running 24/7 across{" "}
        <span className="text-foreground-bright">50+ enterprise tenants</span>,
        handling{" "}
        <span className="text-foreground-bright">250+ concurrent users</span>,
        with{" "}
        <span className="text-foreground-bright">99.9% uptime</span>.
      </p>
      <p className="mb-4 leading-relaxed">
        At{" "}
        <a
          href="https://aurigo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground-bright hover:text-accent transition-colors"
        >
          Aurigo Software
        </a>
        , I&apos;ve designed and built the GenAI stack from scratch - a
        multi-tenant chatbot platform with hybrid RAG retrieval, an agent
        builder with visual workflow orchestration, an NL-to-SQL engine with
        circuit-breaker LLM failover, and deep learning models forecasting
        budgets across 5,000+ infrastructure projects.
      </p>
      <p className="leading-relaxed">
        My focus is on the intersection of{" "}
        <span className="text-foreground-bright">
          LLMs, retrieval systems, and distributed infrastructure
        </span>
        . I care about latency budgets, data isolation, and making AI systems
        that don&apos;t fall over at 2 AM.
      </p>
    </Wrapper>
  );
}
