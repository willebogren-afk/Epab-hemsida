import Image from "next/image";

type PhotoProps = {
  src: string | null;
  alt: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/3]" */
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders the photo when the file exists, otherwise a labelled slot that names
 * the exact shot needed — so a half-finished gallery still reads as intentional
 * and nobody has to guess which image belongs where.
 */
export function Photo({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: PhotoProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex ${ratio} flex-col justify-between overflow-hidden border-2 border-dashed border-[var(--color-border)] bg-[var(--color-paper-2)] p-5 ${className}`}
    >
      <span className="font-display text-sm tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
        Bild saknas
      </span>
      <span className="text-sm leading-snug text-[var(--color-text-muted)]">
        {alt}
      </span>
    </div>
  );
}
