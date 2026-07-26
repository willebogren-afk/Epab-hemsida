export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b-2 border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-text-on-ink)]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p className="flex items-center gap-3 font-display text-sm tracking-[0.22em] text-[var(--color-accent-bright)] uppercase">
          <span className="h-4 w-1.5 bg-[var(--color-accent)]" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.01em] uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-ink-muted)]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
