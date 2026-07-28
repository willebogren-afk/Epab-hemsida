import Link from "next/link";
import { PhotoBackdrop } from "./photo";

/**
 * Stort foto med en centrerad etikett i en pillerram, och bildtexten under.
 * Det är sajtens sätt att lista tjänster: bilden bär igenkänningen, etiketten
 * namnger jobbet och texten under förklarar det.
 */
export function PhotoTile({
  href,
  label,
  caption,
  src,
  alt,
  eyebrow,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  href: string;
  label: string;
  caption: string;
  src: string | null;
  alt: string;
  eyebrow?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Link
      href={href}
      className="group block cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
    >
      <PhotoBackdrop
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className="aspect-[4/5] border-2 border-[var(--color-ink)] sm:aspect-[16/9]"
        overlayClassName="bg-[var(--color-ink)]/60 group-hover:bg-[var(--color-ink)]/40"
        contentClassName="flex flex-col items-center justify-center gap-4 p-6 text-center"
      >
        {eyebrow && (
          <span className="font-display text-sm tracking-[0.22em] text-[var(--color-accent-bright)] uppercase">
            {eyebrow}
          </span>
        )}
        <span className="rounded-full border-2 border-[var(--color-text-on-ink)] px-8 py-3.5 font-display text-xl tracking-[0.06em] uppercase transition-colors duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-ink)] sm:text-2xl">
          {label}
        </span>
      </PhotoBackdrop>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
        {caption}
      </p>
    </Link>
  );
}
