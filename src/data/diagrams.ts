import type { ProjectDiagram } from "@/types";

const DIAGRAMS: Record<string, ProjectDiagram> = {
  "genai-chatbot": {
    slug: "genai-chatbot",
    stages: [
      {
        key: "client",
        title: "Client",
        nodes: [
          { label: "WebSocket Stream", accent: "cyan", icon: "Plug" },
          { label: "FastAPI", accent: "cyan", icon: "Server" },
        ],
      },
      {
        key: "auth",
        title: "Auth",
        nodes: [
          { label: "JWT JWE+JWS", accent: "green", icon: "ShieldCheck" },
          { label: "RBAC", accent: "green", icon: "Shield" },
        ],
      },
      {
        key: "llm",
        title: "LLM",
        nodes: [
          { label: "Bedrock Claude", accent: "purple", icon: "Brain" },
          { label: "Step Router", accent: "purple", icon: "Sparkles" },
        ],
      },
      {
        key: "cache",
        title: "Cache",
        nodes: [
          { label: "Valkey L1", accent: "blue", icon: "Database" },
          { label: "Semantic L2", accent: "blue", icon: "Layers" },
        ],
      },
      {
        key: "storage",
        title: "Storage",
        nodes: [
          { label: "PostgreSQL", accent: "blue", icon: "Database" },
          { label: "S3 + DynamoDB", accent: "blue", icon: "HardDrive" },
        ],
      },
      {
        key: "observability",
        title: "Observability",
        nodes: [
          { label: "Structlog JSON", accent: "amber", icon: "FileText" },
          { label: "Token Tracking", accent: "amber", icon: "Activity" },
        ],
      },
    ],
  },

  "hybrid-rag-nl-to-sql": {
    slug: "hybrid-rag-nl-to-sql",
    stages: [
      {
        key: "query",
        title: "Query",
        nodes: [
          { label: "NL Input", accent: "cyan", icon: "MessageSquare" },
          { label: "Intent Classifier", accent: "purple", icon: "GitBranch" },
        ],
      },
      {
        key: "router",
        title: "Router",
        nodes: [
          { label: "Query Analyzer", accent: "green", icon: "Search" },
          { label: "Search Type Router", accent: "green", icon: "GitBranch" },
        ],
      },
      {
        key: "rag",
        title: "RAG Branch",
        nodes: [
          { label: "pgvector Search", accent: "purple", icon: "Search" },
          { label: "BM25 + RRF", accent: "purple", icon: "Layers" },
        ],
      },
      {
        key: "sql",
        title: "SQL Branch",
        nodes: [
          { label: "Schema Mapper", accent: "blue", icon: "FileText" },
          { label: "sqlglot Validator", accent: "blue", icon: "Code" },
        ],
      },
      {
        key: "validation",
        title: "Validation",
        nodes: [
          { label: "AST Validation", accent: "rose", icon: "CheckCircle" },
          { label: "RAGAS Eval", accent: "rose", icon: "Activity" },
        ],
      },
      {
        key: "response",
        title: "Response",
        nodes: [
          { label: "Answer Synth", accent: "amber", icon: "MessageCircle" },
          { label: "Source Grounding", accent: "amber", icon: "Quote" },
        ],
      },
    ],
  },

  "budget-forecasting": {
    slug: "budget-forecasting",
    stages: [
      {
        key: "data",
        title: "Data",
        nodes: [
          { label: "S3 CSVs", accent: "blue", icon: "Database" },
          { label: "Pandas Merge", accent: "blue", icon: "Shuffle" },
        ],
      },
      {
        key: "preprocessing",
        title: "Preprocessing",
        nodes: [
          { label: "Feature Eng", accent: "amber", icon: "Settings" },
          { label: "Normalization", accent: "amber", icon: "Sliders" },
        ],
      },
      {
        key: "model",
        title: "Model",
        nodes: [
          { label: "TF/Keras DNN", accent: "purple", icon: "Network" },
          { label: "Train-Test Split", accent: "purple", icon: "Shuffle" },
        ],
      },
      {
        key: "deployment",
        title: "Deployment",
        nodes: [
          { label: "Lambda + ECR", accent: "green", icon: "Rocket" },
          { label: "JWT Authorizer", accent: "green", icon: "ShieldCheck" },
        ],
      },
      {
        key: "retraining",
        title: "Retraining",
        nodes: [
          { label: "Airflow DAG", accent: "rose", icon: "Workflow" },
          { label: "K8s Pod", accent: "rose", icon: "Boxes" },
        ],
      },
    ],
  },

  "airflow-etl": {
    slug: "airflow-etl",
    stages: [
      {
        key: "sources",
        title: "Sources",
        nodes: [
          { label: "S3 CSVs", accent: "cyan", icon: "Database" },
          { label: "Pendo API", accent: "cyan", icon: "Globe" },
          { label: "Config CSVs", accent: "blue", icon: "FileText" },
        ],
      },
      {
        key: "orchestration",
        title: "Orchestration",
        nodes: [
          { label: "MWAA DAGs", accent: "green", icon: "Workflow" },
          { label: "Sub-DAG Triggers", accent: "green", icon: "CalendarClock" },
        ],
      },
      {
        key: "processing",
        title: "Processing",
        nodes: [
          { label: "AWK Chunking", accent: "amber", icon: "Scissors" },
          { label: "Pandas ETL", accent: "amber", icon: "Shuffle" },
        ],
      },
      {
        key: "quality",
        title: "Quality",
        nodes: [
          { label: "Row Validation", accent: "rose", icon: "CheckCircle" },
          { label: "S3 Audit Logs", accent: "rose", icon: "FileText" },
        ],
      },
      {
        key: "warehouse",
        title: "Warehouse",
        nodes: [
          { label: "Aurora PostgreSQL", accent: "blue", icon: "Database" },
          { label: "K8s Pods", accent: "purple", icon: "Boxes" },
        ],
      },
    ],
  },

  "async-doc-ingestion": {
    slug: "async-doc-ingestion",
    stages: [
      {
        key: "documents",
        title: "Documents",
        nodes: [
          { label: "S3 Download", accent: "cyan", icon: "FolderDown" },
          { label: "Docling OCR", accent: "amber", icon: "ScanLine" },
        ],
      },
      {
        key: "queue",
        title: "Queue",
        nodes: [
          { label: "SQS Queues", accent: "blue", icon: "Mail" },
          { label: "Dead Letter", accent: "rose", icon: "MailWarning" },
        ],
      },
      {
        key: "processing",
        title: "Processing",
        nodes: [
          { label: "Chunk Splitter", accent: "amber", icon: "Scissors" },
          { label: "ThreadPool 12", accent: "amber", icon: "Cpu" },
        ],
      },
      {
        key: "embedding",
        title: "Embedding",
        nodes: [
          { label: "Titan 1024-dim", accent: "purple", icon: "Sparkles" },
          { label: "Batch Embedder", accent: "green", icon: "Boxes" },
        ],
      },
      {
        key: "index",
        title: "Index",
        nodes: [
          { label: "Aurora pgvector", accent: "blue", icon: "Database" },
          { label: "Tenant Isolation", accent: "blue", icon: "ShieldCheck" },
        ],
      },
    ],
  },
};

export function getDiagram(slug: string): ProjectDiagram | undefined {
  return DIAGRAMS[slug];
}
