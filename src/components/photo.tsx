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
      className={`relative flex ${ratio} flex-col justify-between overflow-hidden border-2 border-dashed border-[var(--color-border)] bg-[var(--color-paper)] p-5 ${className}`}
    >
      <span className="display text-sm tracking-[0.16em] text-[var(--color-text-muted)]">
        Bild saknas
      </span>
      <span className="flex flex-col gap-1 text-sm leading-snug text-[var(--color-text-muted)]">
        <span>{alt}</span>
        {src && <code className="text-xs opacity-70">public{src}</code>}
      </span>
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
