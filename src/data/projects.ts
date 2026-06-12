import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "genai-chatbot",
    title: "Enterprise Multi-Tenant GenAI Chatbot",
    subtitle:
      "Production AWS Bedrock chatbot serving 50+ enterprise tenants - 250+ concurrent WebSocket connections at 99.9% uptime",
    heroMetric: { value: "250+", label: "Concurrent Connections" },
    description:
      "Production multi-tenant AI chatbot platform built on AWS Bedrock (Claude Sonnet 4.5 + Haiku 4.5) using Python FastAPI and WebSocket streaming. Serves 50+ enterprise tenants with complete per-tenant isolation, 2-layer caching, Bedrock tool calling, and structured observability with per-tenant cost dashboards.",
    problem:
      "Enterprise teams needed domain-specific AI assistants that could answer from their own document corpus in real time, with strict tenant isolation, sub-second response latency, and 99.9% availability - at a cost sustainable for 50+ concurrent deployments.",
    solution: [
      "Built a FastAPI backend with WebSocket streaming to Claude Sonnet 4.5 on AWS Bedrock for real-time token delivery.",
      "Step router selects the optimal model across 20+ LLM steps; circuit breaker with Sonnet-to-Haiku automatic failover guarantees uptime when primary model degrades.",
      "2-layer cache — Valkey (L1) for exact matches, semantic similarity (L2) for near-duplicate queries — cuts latency by 60% and API costs by 40%.",
      "Multi-tenant isolation at every layer: per-tenant JWT auth (JWE+JWS), RBAC, rate limiting, PII filtering at the LLM gateway, and isolated vector stores.",
      "Bedrock tool calling with custom tool schemas for structured data access across tenant-specific datasets.",
      "Full observability: structlog JSON logging, token usage tracking per model family, and per-tenant cost dashboards.",
      "Session state managed via DynamoDB with S3 for file and incident storage.",
    ],
    architecture: [
      "Python FastAPI + WebSocket for real-time Claude Sonnet 4.5 token streaming",
      "AWS Bedrock with circuit breaker + Sonnet-to-Haiku automatic failover",
      "Step router for per-step model selection across 20+ LLM orchestration steps",
      "2-layer cache: Valkey (L1 exact) + semantic similarity (L2) - 60% latency reduction",
      "Per-tenant isolation: JWT (JWE+JWS) auth, RBAC, rate limiting, PII filtering at LLM gateway",
      "Bedrock tool calling with custom tool schemas for structured data access",
      "Session management with DynamoDB, S3 for files/incidents, multi-turn context",
      "Observability: structlog JSON logging, token tracking per model family, per-tenant cost dashboards",
    ],
    impact: [
      "250+ concurrent WebSocket connections across 50+ enterprise tenants",
      "99.9% production uptime with zero cross-tenant data leaks",
      "60% latency reduction and 40% API cost reduction via 2-layer caching",
      "Sub-second first-token latency with full response streaming",
    ],
    techStack: [
      "Python", "FastAPI", "WebSocket", "AWS Bedrock", "Claude Sonnet 4.5",
      "Valkey", "PostgreSQL", "DynamoDB", "S3", "JWT", "Docker", "Kubernetes",
      "Bedrock Tools", "Structlog",
    ],
    span: "large",
  },
  {
    slug: "hybrid-rag-nl-to-sql",
    title: "Hybrid RAG & NL-to-SQL Engine",
    subtitle:
      "Dual-mode enterprise Q&A - document RAG at 85%+ relevance + NL-to-SQL processing 500+ queries/day at 99.9% uptime",
    heroMetric: { value: "85%+", label: "Retrieval Relevance" },
    description:
      "Retrieval and reasoning core for Aurigo's enterprise AI assistant. Dual-mode system: hybrid RAG for document Q&A and a secure NL-to-SQL engine for structured database querying - both production-hardened with circuit breakers, PII filtering, and RAGAS-aligned evaluation.",
    problem:
      "Enterprise users needed to query both unstructured documents and structured databases using plain English. LLM-generated SQL is unreliable and dangerous without validation. Single-vector retrieval misses keyword matches. And any LLM dependency is a reliability risk without fallback.",
    solution: [
      "Indexed 100K+ chunks in Aurora PostgreSQL with pgvector (1024-dim Titan embeddings) for semantic search.",
      "Hybrid retrieval fuses pgvector semantic search with BM25 keyword search via Reciprocal Rank Fusion (RRF) — eliminates blind spots of single-mode retrieval.",
      "LLM-based reranking pushes relevance to 85%+; RAGAS-aligned evaluation (MRR, correctness, groundedness, completeness) with golden test datasets validates quality continuously.",
      "NL-to-SQL engine with circuit breaker and Sonnet-to-Haiku failover for 99.9% uptime.",
      "Every generated SQL query parsed by sqlglot into an AST — structurally validated to prevent injection before execution.",
      "PII detection and column-level access controls applied at the query layer; S3 audit logging on every query for compliance.",
    ],
    architecture: [
      "pgvector (1024-dim Titan embeddings) + BM25 hybrid retrieval via RRF",
      "LLM-based reranking for 85%+ relevance on golden test datasets",
      "RAGAS evaluation: MRR, correctness, groundedness, completeness",
      "S3 audit logging on every query for compliance tracking",
      "Circuit breaker with Sonnet-to-Haiku failover for 99.9% uptime",
      "sqlglot AST validation - SQL injection prevention on every query",
      "PII detection + column-level access controls at query layer",
    ],
    impact: [
      "85%+ retrieval relevance across 100K+ indexed document chunks",
      "500+ NL-to-SQL queries processed daily at 99.9% uptime",
      "Zero SQL injection incidents in production via sqlglot AST-level validation",
      "S3 audit logging on every query for compliance",
    ],
    techStack: [
      "pgvector", "BM25", "RRF", "AWS Bedrock", "Claude", "Titan",
      "sqlglot", "RAGAS", "PostgreSQL", "Aurora", "SQL Server", "Python",
    ],
    span: "large",
  },
  {
    slug: "budget-forecasting",
    title: "Deep Learning Budget Forecasting",
    subtitle:
      "TensorFlow DNN predicting infrastructure budgets at 94% R² across 5000+ projects - deployed serverless on AWS Lambda",
    heroMetric: { value: "94%", label: "R² Score" },
    description:
      "Deep neural network forecasting infrastructure project budgets across 5000+ historical records. Replaced a rules-based estimator with a TensorFlow/Keras model achieving 94% R² - deployed on AWS Lambda at sub-500ms latency with S3 model storage, SSM Parameter Store versioning, and weekly automated retraining.",
    problem:
      "Infrastructure project managers were estimating budgets manually, leading to frequent overruns. A rules-based estimator couldn't capture the non-linear interactions between project scale, region, material costs, and timeline. And 35% of historical records had incomplete data.",
    solution: [
      "Processed 30K+ historical records from S3 CSVs — Pandas merge on ProjectId, outlier detection, and missing-value imputation on 35% incomplete records.",
      "Designed a TensorFlow/Keras DNN with multi-hot encoding and custom preprocessing layers for cost normalization.",
      "Achieved 94% R² on holdout with 90/10 train-test-validation split.",
      "Deployed as a containerized AWS Lambda API (ECR) with sub-500ms latency and JWT authorizer (JWE decryption).",
      "S3 model storage with SSM Parameter Store versioning and weekly automated retraining via Airflow DAG on K8s with rollback safeguards.",
      "60% infrastructure cost reduction vs server-based deployment.",
    ],
    architecture: [
      "TensorFlow/Keras DNN with multi-hot encoding and custom preprocessing layers",
      "30K+ records from S3 CSVs - Pandas merge, outlier detection + imputation on 35% incomplete data",
      "90/10 train-test-validation split",
      "Containerized AWS Lambda API (ECR) - sub-500ms latency, JWT authorizer",
      "S3 model storage with SSM Parameter Store versioning + automated retraining",
      "Weekly automated retraining via Airflow DAG on K8s with rollback safeguards",
    ],
    impact: [
      "94% R² on holdout set across 5000+ projects",
      "40% reduction in infrastructure estimation errors",
      "Sub-500ms inference latency on Lambda - 1000+ monthly predictions",
      "60% infrastructure cost reduction vs server-based deployment",
    ],
    techStack: [
      "Python", "TensorFlow", "Keras", "scikit-learn",
      "AWS Lambda", "S3", "SSM", "ECR", "EKS", "Docker", "JWT", "PostgreSQL",
    ],
    span: "medium",
  },
  {
    slug: "airflow-etl",
    title: "Multi-Tenant Data Warehouse ETL",
    subtitle:
      "MWAA Airflow pipeline moving 40+ tables across 10+ tenants into Aurora PostgreSQL - 85% failure reduction, 99% data accuracy",
    heroMetric: { value: "85%", label: "Failure Reduction" },
    description:
      "Production ETL system on AWS MWAA orchestrating 40+ tables from S3 CSV files and Pendo analytics API into a centralized Aurora PostgreSQL data warehouse. AWK-based chunking for 100MB+ CSVs, 30 concurrent batch operations, and config-driven per-tenant transformations.",
    problem:
      "Data from 10+ enterprise tenants was siloed across S3 CSV exports and Pendo analytics with inconsistent schemas. Cross-tenant analytics was impossible. Large CSVs (100MB+) caused memory failures. Pipeline failures had no isolation - one bad table took down the whole run.",
    solution: [
      "Built Apache Airflow DAGs on AWS MWAA with config-driven transformations parameterized per tenant.",
      "Sub-DAG triggers via TriggerDagRunOperator chain dependent workflows across tables and tenants.",
      "AWK splits 100MB+ CSVs into ~80MB chunks for parallel streams — 30 concurrent batch operations with Pandas ETL.",
      "Per-table failure isolation ensures one bad table never takes down the entire pipeline; retry logic with dead-letter handling eliminates cascading failures.",
      "Row validation with S3-based audit logging and email alerts on failure ensure 99% data accuracy.",
      "Containerized Airflow workers on K8s for elastic scaling during peak ETL windows; Aurora PostgreSQL with staging and reporting schemas as the target warehouse.",
    ],
    architecture: [
      "Apache Airflow DAGs on AWS MWAA - config-driven per-tenant parameterization",
      "Sub-DAG triggers via TriggerDagRunOperator for dependent workflow chaining",
      "AWK chunking for 100MB+ CSVs (~80MB chunks) - 30 concurrent parallel batch operations",
      "Pandas ETL with per-table failure isolation, retry logic, and dead-letter handling",
      "Row validation with S3-based audit logging and email alerts on failure",
      "Containerized workers on K8s for elastic peak scaling",
      "Aurora PostgreSQL with staging + reporting schemas",
    ],
    impact: [
      "40+ production tables across 10+ tenants processed daily",
      "85% pipeline failure reduction via chunking and per-table isolation",
      "99% data accuracy across all customer instances in production",
      "Cross-tenant analytics unlocked for the first time",
    ],
    techStack: [
      "Python", "Apache Airflow", "AWS MWAA",
      "Aurora PostgreSQL", "S3", "Pendo", "Docker", "Kubernetes", "Pandas",
    ],
    span: "medium",
  },
  {
    slug: "async-doc-ingestion",
    title: "Async Document Ingestion Pipeline",
    subtitle:
      "SQS-based ETL ingesting 1000+ docs/day via Docling OCR with PyMuPDF fallback - 99.5% success rate with adaptive memory scaling",
    heroMetric: { value: "1000+", label: "Docs/Day" },
    description:
      "High-throughput async document ingestion pipeline that feeds the RAG knowledge base. Processes 1000+ documents daily from S3 via SQS, through Docling OCR with circuit breaker fallback to PyMuPDF, chunks and embeds via AWS Bedrock Titan, and indexes into Aurora pgvector with halfvec(1024) FP16 storage - 99.5% success rate with ThreadPoolExecutor parallelism and adaptive memory scaling.",
    problem:
      "The RAG chatbot needed a reliable way to ingest large volumes of enterprise documents (PDFs, scanned files, contracts) daily without blocking real-time queries, dropping documents under memory pressure, or creating stale chunks when documents were updated.",
    solution: [
      "Built an SQS-based async pipeline where S3 document events are queued and processed independently from query serving.",
      "Docling OCR handles scanned documents and images with a circuit breaker that falls back to PyMuPDF on failure.",
      "ThreadPoolExecutor with 12 parallel workers maximizes throughput; adaptive memory scaling monitors heap usage and throttles batch sizes dynamically to prevent OOM.",
      "AWS Bedrock Titan generates 1024-dim embeddings stored as halfvec(1024) FP16 for efficient storage.",
      "Chunks upserted into Aurora pgvector with tenant isolation via JWT+DynamoDB for per-tenant access control and freshness tracking.",
      "Dead-letter queues capture failed documents for inspection and replay.",
    ],
    architecture: [
      "SQS-based async queue - S3 events decoupled from real-time query serving",
      "Docling OCR with circuit breaker fallback to PyMuPDF for native PDFs",
      "ThreadPoolExecutor with 12 parallel workers for throughput",
      "Adaptive memory scaling - dynamic batch throttling under load",
      "AWS Bedrock Titan 1024-dim embeddings → halfvec(1024) FP16 storage in Aurora pgvector",
      "Tenant isolation via JWT+DynamoDB for per-tenant access control",
      "Dead-letter queues for failed document inspection and replay",
    ],
    impact: [
      "1000+ documents ingested daily at 99.5% success rate",
      "Zero impact on real-time query latency due to async architecture",
      "Adaptive memory scaling prevents OOM under document load spikes",
      "Full tenant isolation and freshness tracking on all chunks",
    ],
    techStack: [
      "Python", "AWS SQS", "PyMuPDF", "Docling OCR",
      "AWS Bedrock", "Titan Embeddings", "pgvector", "Aurora", "PostgreSQL", "DynamoDB",
    ],
    span: "medium",
  },
];
