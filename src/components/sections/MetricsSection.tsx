"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useCountUp } from "@/hooks/useCountUp";
import { metrics } from "@/data/metrics";
import { accentTextClass, accentBorderClass } from "@/lib/utils";
import type { Metric } from "@/types";

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const reduced = useReducedMotion();
  const numericValue = parseFloat(metric.value);
  const { value, ref } = useCountUp(numericValue, 1500);
  const displayValue = reduced ? metric.value : String(value);

  const inner = (
    <div
      ref={ref}
      className={`rounded-lg border border-border border-l-2 ${accentBorderClass(metric.accent)} bg-surface-1/50 p-4 backdrop-blur-sm transition-colors hover:border-border-hover`}
    >
      <span className={`font-mono text-3xl font-bold tracking-tight ${accentTextClass(metric.accent)}`}>
        {displayValue}
        {metric.suffix && <span className="text-base">{metric.suffix}</span>}
      </span>
      <p className="mt-1 font-mono text-[11px] text-muted">{metric.label}</p>
    </div>
  );

  if (reduced) return <div>{inner}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {inner}
    </motion.div>
  );
}

export function MetricsSection() {
  return (
    <section id="metrics" className="mb-24 scroll-mt-24 lg:-mt-20 xl:mt-0">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {metrics.map((m, i) => (
          <MetricCard key={m.label} metric={m} index={i} />
        ))}
      </div>
    </section>
  );
}
