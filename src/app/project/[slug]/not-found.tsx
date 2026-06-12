import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="font-mono text-6xl font-bold text-muted">404</h1>
      <p className="mt-4 text-muted">Project not found.</p>
      <Link
        href="/"
        className="mt-8 font-mono text-sm text-accent hover:text-foreground-bright transition-colors"
      >
        &larr; Back to home
      </Link>
    </main>
  );
}
