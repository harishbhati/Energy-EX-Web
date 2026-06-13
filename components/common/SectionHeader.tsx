type SectionHeaderProps = {
  eyebrow: string;
  titleLines: string[];
  highlightLine?: string;
  lead?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  titleLines,
  highlightLine,
  lead,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--orange)]">
        <span className="h-1.5 w-8 rounded-full bg-[color:var(--orange)]"></span>
        {eyebrow}
      </div>
      <div className="space-y-3">
        {titleLines.map((line) => (
          <h2
            key={line}
            className="font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl lg:text-6xl"
          >
            {line === highlightLine ? <em className="text-[color:var(--orange)] not-italic">{line}</em> : line}
          </h2>
        ))}
      </div>
      {lead ? <p className="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">{lead}</p> : null}
    </div>
  );
}
