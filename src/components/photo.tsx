import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type PhotoProps = {
  /** Sökväg under /public, t.ex. "/maskinpark/sopning.jpg" */
  src: string | null;
  alt: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/3]" */
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders the photo when the file is actually present in /public, otherwise a
 * labelled slot naming the exact shot needed. Checking the filesystem here means
 * dropping a correctly named file into /public is the only step required — no
 * code edit, and never a broken image if a file is missing.
 *
 * Server component only: it reads from disk at build/prerender time.
 */
export function Photo({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: PhotoProps) {
  const available = src !== null && existsInPublic(src);

  if (available) {
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
      <span className="flex flex-col gap-1 text-sm leading-snug text-[var(--color-text-muted)]">
        <span>{alt}</span>
        {src && (
          <code className="text-xs opacity-70">public{src}</code>
        )}
      </span>
    </div>
  );
}

type BackdropProps = {
  /** Sökväg under /public. Saknas filen faller ytan tillbaka på massiv ink. */
  src: string | null;
  alt: string;
  className?: string;
  /** Extra klasser på mörkfiltret, t.ex. för att ljusa upp vid hover. */
  overlayClassName?: string;
  /** Layoutklasser på innehållslagret. h-full är redan satt. */
  contentClassName?: string;
  priority?: boolean;
  sizes?: string;
  children: React.ReactNode;
};

/**
 * Foto som bakgrund med mörkfilter över, och innehållet ovanpå. Det är
 * grundmotivet på sajten: hero, sidhuvuden och tjänstebrickorna är alla samma
 * yta i olika storlek.
 *
 * Filtret ligger på för att texten ska klara kontrastkravet oavsett hur ljust
 * fotot är — det är därför det inte går att stänga av, bara ljusa upp något.
 *
 * Server component only: den läser från disk vid build/prerender.
 */
export function PhotoBackdrop({
  src,
  alt,
  className = "",
  overlayClassName = "",
  contentClassName = "",
  priority = false,
  sizes = "100vw",
  children,
}: BackdropProps) {
  const available = src !== null && existsInPublic(src);

  return (
    <div
      className={`relative isolate overflow-hidden bg-[var(--color-ink)] text-[var(--color-text-on-ink)] ${className}`}
    >
      {available && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[var(--color-ink)]/70 transition-colors duration-300 ${overlayClassName}`}
      />
      <div className={`relative h-full ${contentClassName}`}>{children}</div>
    </div>
  );
}

function existsInPublic(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}
