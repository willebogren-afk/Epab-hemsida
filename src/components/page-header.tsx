import { PhotoBackdrop } from "./photo";

/**
 * Sidhuvud som foto med mörkfilter och centrerad text — samma yta som heron på
 * startsidan, bara lägre. Utan bild blir det en massiv mörk platta.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  image = null,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string | null;
  imageAlt?: string;
}) {
  return (
    <PhotoBackdrop
      src={image}
      alt={imageAlt}
      priority
      sizes="100vw"
      className="border-b-2 border-[var(--color-ink)]"
      overlayClassName="bg-[var(--color-ink)]/80"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center sm:py-24">
        <p className="flex items-center gap-3 font-display text-sm tracking-[0.22em] text-[var(--color-accent-bright)] uppercase">
          <span className="h-4 w-1.5 bg-[var(--color-accent)]" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.01em] uppercase text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead && (
          /* Nästan vit istället för den dämpade beigen: brödtexten ligger på
             foto, och den dämpade tonen tappar kontrast över ljusa partier. */
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-ink)]/90">
            {lead}
          </p>
        )}
      </div>
    </PhotoBackdrop>
  );
}
