interface SectionHeadingProps {
  number: string;
  title: string;
  id?: string;
}

export function SectionHeading({ number, title, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="mb-10 flex items-center gap-2 text-xl font-semibold text-foreground-bright sm:text-2xl"
    >
      <span className="font-mono text-sm text-accent">{number}.</span>
      {title}
      <span className="ml-4 hidden h-px flex-1 bg-gradient-to-r from-border-hover to-transparent sm:block" />
    </h2>
  );
}
