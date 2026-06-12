"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronUp } from "lucide-react";

const SCROLL_THRESHOLD = 300;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-1/80 backdrop-blur-sm transition-colors hover:border-accent motion-reduce:transition-none motion-reduce:animate-none"
        >
          <span className="pointer-events-none absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface-1/90 px-2.5 py-1 text-xs font-medium text-muted opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 motion-reduce:transition-none">
            Back to top
          </span>
          <ChevronUp className="h-5 w-5 text-muted transition-colors group-hover:text-accent motion-reduce:transition-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
