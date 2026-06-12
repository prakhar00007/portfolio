"use client";

import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { personalInfo } from "@/data/personal";
import { ParticleField } from "@/components/three/ParticleField";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "metrics", label: "Metrics" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Contact" },
];

function AvailabilityBadge() {
  const target = new Date(`${personalInfo.availableDate} 1`);
  const isPast = new Date() >= target;
  const label = isPast
    ? "Open to GenAI / ML / LLM / Agentic AI Engineer Roles"
    : `Serving Notice - Can Join by ${personalInfo.availableDate}`;

  return (
    <div className="mt-2 space-y-1 lg:mt-4 lg:scale-[1.15] lg:origin-top-left xl:mt-3 xl:scale-100 xl:space-y-1.5">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
        </span>
        <span className="font-mono text-xs text-accent-green">{label}</span>
      </div>
      <p className="font-mono text-xs text-accent-rose">
        Open to GenAI / ML / LLM / Agentic AI Engineer Roles
      </p>
    </div>
  );
}

const ROTATING_TITLES = [
  "GenAI Engineer",
  "ML Engineer",
  "Agentic AI Engineer",
  "LLM Engineer",
  "2x AWS Certified",
];

const ROTATION_INTERVAL_MS = 3000;

export function Sidebar() {
  const [active, setActive] = useState("about");
  const [titleIndex, setTitleIndex] = useState(0);

  const navigateToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `/${id}`);
    setActive(id);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target.id) {
          setActive(visible.target.id);
          const path = `/${visible.target.id}`;
          if (window.location.pathname !== path) {
            window.history.replaceState(null, "", path);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    const match = NAV_ITEMS.find((item) => item.id === path);
    if (match) {
      requestAnimationFrame(() => {
        document.getElementById(match.id)?.scrollIntoView({ behavior: "instant" });
        setActive(match.id);
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="scrollbar-none relative lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:overflow-y-auto lg:scale-[1.12] lg:origin-top-left lg:pt-4 lg:pb-0 xl:scale-100 xl:py-24">
      <ParticleField />

      <div>
        <motion.div
          className="profile-ring mb-3 inline-block xl:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="h-20 w-20 overflow-hidden rounded-full bg-background lg:h-28 lg:w-28 xl:h-36 xl:w-36">
            <Image
              src="/profile.webp"
              alt={personalInfo.name}
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>
        <motion.h1
          className="text-3xl font-bold tracking-tight text-foreground-bright lg:text-3xl xl:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/">{personalInfo.name}</Link>
        </motion.h1>
        <motion.div
          className="mt-2 h-6 overflow-hidden xl:mt-3 xl:h-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={titleIndex}
              className="text-lg font-medium text-foreground sm:text-xl lg:text-base xl:text-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {ROTATING_TITLES[titleIndex]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>
        <motion.p
          className="mt-1 max-w-xs text-sm leading-normal lg:mt-3 lg:text-xs xl:mt-4 xl:text-sm xl:leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AvailabilityBadge />
        </motion.div>

        {/* Nav links - desktop only */}
        <nav className="mt-4 hidden lg:mt-14 lg:block xl:mt-16" aria-label="In-page navigation">
          <ul className="flex flex-col gap-1 xl:gap-3">
            {NAV_ITEMS.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
              >
                <a
                  href={`/${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection(item.id);
                  }}
                  className={clsx(
                    "group flex items-center gap-3 font-mono text-xs uppercase tracking-widest transition-all",
                    active === item.id
                      ? "text-foreground-bright"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  <span
                    className={clsx(
                      "h-px transition-all",
                      active === item.id
                        ? "w-16 bg-accent"
                        : "w-8 bg-muted group-hover:w-16 group-hover:bg-foreground"
                    )}
                  />
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social links */}
      <motion.div
        className="mt-8 flex items-center gap-5 lg:mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-all duration-200 hover:scale-110 hover:text-foreground-bright"
          aria-label="GitHub"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-all duration-200 hover:scale-110 hover:text-foreground-bright"
          aria-label="LinkedIn"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href={personalInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-all duration-200 hover:scale-110 hover:text-foreground-bright"
          aria-label="Instagram"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-muted transition-all duration-200 hover:scale-110 hover:text-foreground-bright"
          aria-label="Email"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a
          href={personalInfo.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 rounded border border-accent px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent-dim"
        >
          Resume
        </a>
      </motion.div>
    </header>
  );
}
