"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { accentBgClass, accentTextClass } from "@/lib/utils";
import { getDiagram } from "@/data/diagrams";
import { getDiagramIcon } from "@/lib/diagram-icons";
import type { DiagramNode, DiagramStage } from "@/types";

function DiagramNodeCard({
  node,
  stageIndex,
  nodeIndex,
  reduced,
}: {
  node: DiagramNode;
  stageIndex: number;
  nodeIndex: number;
  reduced: boolean;
}) {
  const bg = accentBgClass(node.accent);
  const text = accentTextClass(node.accent);
  const Icon = getDiagramIcon(node.icon);
  const delay = stageIndex * 0.1 + nodeIndex * 0.06 + 0.05;

  const card = (
    <div
      className={`flex w-full items-center gap-2.5 rounded-lg border px-3 py-2.5 ${bg}`}
    >
      <Icon className={`size-4 shrink-0 ${text}`} />
      <span className={`font-mono text-xs ${text}`}>{node.label}</span>
    </div>
  );

  if (reduced) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      {card}
    </motion.div>
  );
}

function StageConnector({
  stageIndex,
  reduced,
}: {
  stageIndex: number;
  reduced: boolean;
}) {
  const delay = stageIndex * 0.1 + 0.15;

  const content = (
    <div className="flex items-center gap-0">
      <div className="h-px w-10 border-t-2 border-dashed border-border-hover" />
      <div className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-border-hover" />
    </div>
  );

  if (reduced) return content;

  return (
    <motion.div
      className="flex shrink-0 items-center self-center"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      style={{ originX: 0 }}
    >
      {content}
    </motion.div>
  );
}

function StageColumn({
  stage,
  stageIndex,
  reduced,
}: {
  stage: DiagramStage;
  stageIndex: number;
  reduced: boolean;
}) {
  const headerDelay = stageIndex * 0.1;

  const header = (
    <h4 className="mb-3 text-center font-mono text-[11px] uppercase tracking-widest text-muted">
      {stage.title}
    </h4>
  );

  return (
    <div className="flex min-w-[130px] max-w-[180px] shrink-0 flex-col">
      {reduced ? (
        header
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: headerDelay }}
        >
          {header}
        </motion.div>
      )}
      <div className="flex flex-col gap-2">
        {stage.nodes.map((node, nodeIndex) => (
          <DiagramNodeCard
            key={node.label}
            node={node}
            stageIndex={stageIndex}
            nodeIndex={nodeIndex}
            reduced={reduced}
          />
        ))}
      </div>
    </div>
  );
}

export function ArchitectureDiagram({ slug }: { slug: string }) {
  const diagram = getDiagram(slug);
  const reduced = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftGradient(el.scrollLeft > 0);
    setShowRightGradient(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  if (!diagram) return null;

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-surface-1/30">
      {showLeftGradient && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[var(--color-surface-1)] to-transparent" />
      )}
      {showRightGradient && (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[var(--color-surface-1)] to-transparent" />
      )}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto px-4 py-5 sm:px-6 sm:py-6"
      >
        <div className="flex items-start gap-2">
          {diagram.stages.map((stage, i) => (
            <div key={stage.key} className="contents">
              <StageColumn
                stage={stage}
                stageIndex={i}
                reduced={reduced}
              />
              {i < diagram.stages.length - 1 && (
                <StageConnector stageIndex={i} reduced={reduced} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
