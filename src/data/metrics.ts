import type { Metric } from "@/types";

export const metrics: Metric[] = [
  { label: "Concurrent WebSocket Connections", value: "250", suffix: "+", accent: "blue" },
  { label: "Production System Uptime", value: "99.9", suffix: "%+", accent: "green" },
  { label: "RAG Retrieval Relevance", value: "85", suffix: "%+", accent: "purple" },
  { label: "Deep Learning Forecast R²", value: "94", suffix: "%", accent: "amber" },
  { label: "API Cost Reduction via Caching", value: "40", suffix: "%", accent: "cyan" },
  { label: "Enterprise Tenants Served", value: "50", suffix: "+", accent: "rose" },
];
