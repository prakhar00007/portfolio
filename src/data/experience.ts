import type { Experience, Education } from "@/types";

function formatDuration(startYear: number, startMonth: number): string {
  const now = new Date();
  let years = now.getFullYear() - startYear;
  let months = now.getMonth() + 1 - startMonth;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ") || "< 1 mo";
}

export const experiences: Experience[] = [
  {
    company: "Aurigo Software Technologies",
    role: "Software Engineer - GenAI & Machine Learning",
    period: `Jun 2024 – Present · ${formatDuration(2024, 6)}`,
    achievements: [
      "Engineered production multi-tenant AI chatbot on AWS Bedrock (Claude Sonnet 4.5) using Python FastAPI and WebSocket streaming - 250+ concurrent connections across 50+ enterprise tenants with 2-layer caching (Valkey + semantic) cutting latency by 60% and API costs by 40%",
      "Built hybrid RAG combining pgvector (1024-dim Titan embeddings) + BM25 via Reciprocal Rank Fusion (RRF), indexing 100K+ chunks in Aurora PostgreSQL - 85%+ retrieval relevance with LLM-based reranking",
      "Architected SQS-based async ETL ingesting 1000+ docs/day via PyMuPDF and Docling OCR with ThreadPoolExecutor (12 parallel workers) and adaptive memory scaling - 99.5% ingestion success rate",
      "Built NL-to-SQL engine with circuit breaker, Sonnet-to-Haiku failover, sqlglot AST validation for SQL injection prevention, and PII filtering - 500+ queries/day at 99.9% uptime",
      "Established RAGAS-aligned LLM evaluation framework (MRR, correctness, groundedness, completeness) with golden test datasets from 100K+ chunks and SQS-based regression testing for continuous drift detection",
      "Built TensorFlow/Keras DNN for infrastructure budget forecasting across 5000+ projects - 94% R², 40% error reduction, deployed on Lambda at sub-500ms latency with S3 model storage with SSM Parameter Store versioning",
      "Orchestrated 40+ table MWAA Airflow ETL from S3 CSVs and Pendo API into Aurora PostgreSQL across 10+ tenants - 85% failure reduction via intelligent CSV chunking and 30 concurrent parallel batch operations",
      "Established S3-based data quality monitoring with config-driven transformations - 99% data accuracy across 10+ customer instances in production",
    ],
    awards: [
      "Bravo Award (Jan 2025) - Recognized for exemplifying innovation and simplification in production GenAI systems",
    ],
  },
  {
    company: "Aurigo Software Technologies",
    role: "Software Engineer Intern",
    period: "Dec 2023 – May 2024 · 6 mos",
    achievements: [
      "Built PoC multi-document search chatbot using AWS Kendra and Anthropic Claude - validated retrieval quality on construction project documents",
      "Prototyped early RAG-based chatbot for construction document and database search, laying the foundation for the production multi-tenant system",
      "Developed sentiment analysis pipeline for construction bidding documents using transformer-based models",
      "Built early budget prediction prototype in TensorFlow/Keras - later evolved into the production forecasting system (94% R²)",
      "Contributed to multi-tenant S3/Pendo → Aurora PostgreSQL data warehouse ETL on AWS MWAA",
      "Converted to full-time Software Engineer in June 2024 based on performance",
    ],
    awards: [],
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Birla Institute of Technology, Ranchi",
    period: "2020 – 2024",
    gpa: "8.66 CGPA",
  },
  {
    degree: "Std XII",
    institution: "Chinmaya Vidyalaya, Bokaro Steel City",
    period: "Jun 2017 – May 2019",
    gpa: "94.4%",
  },
];
