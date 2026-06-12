import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Spotlight } from "@/components/ui/Spotlight";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { SkipToContent } from "@/components/layout/SkipToContent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prakhar Kumar Singh - GenAI & ML Engineer",
    template: "%s | Prakhar Kumar Singh",
  },
  description:
    "2.5+ yrs building production LLM systems, RAG pipelines, and agentic AI at scale. Multi-tenant AI chatbot serving 50+ enterprises on AWS Bedrock & Claude. Python, FastAPI, LangChain, LangGraph, MCP, pgvector, NL-to-SQL, TensorFlow.",
  openGraph: {
    title: "Prakhar Kumar Singh - GenAI & ML Engineer",
    description: "Building production AI systems at scale.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakhar Kumar Singh - GenAI & ML Engineer",
    description: "Building production AI systems at scale.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <SkipToContent />
        <Spotlight />
        <ScrollProgress />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}
