/**
 * Sidhuvud: rubriken står på en egen yta, inte ovanpå ett foto. Samma princip
 * som på maskinparkssidan — bilderna får vara bilder, texten står för sig.
 */
export function PageHeader({
  title,
  lead,
}: {
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-[var(--color-brand)] text-[var(--color-on-brand)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="display max-w-3xl text-[clamp(2.1rem,6vw,4rem)]">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-on-brand-muted)]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
