"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { Sidebar } from "@/components/layout/Sidebar";
import { AboutSection } from "@/components/sections/AboutSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechSection } from "@/components/sections/TechSection";
import { ContactSection } from "@/components/sections/ContactSection";

const SIDEBAR_DONE_DELAY = 0.5;

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-6 md:px-12 md:py-16 lg:flex lg:gap-4 lg:px-24 lg:pt-0 lg:pb-0">
      <Sidebar />

      <motion.main
        id="main-content"
        className="pt-24 lg:w-1/2 lg:pt-6 lg:pb-0 xl:py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: SIDEBAR_DONE_DELAY }}
      >
        <AboutSection />
        <MetricsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechSection />
        <ContactSection />

        <footer className="border-t border-border pb-16 pt-8" />
      </motion.main>
    </div>
  );
}
