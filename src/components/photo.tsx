import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type PhotoProps = {
  /** Sökväg under /public, t.ex. "/maskinpark/sopning.jpg" */
  src: string | null;
  alt: string;
  /** Tailwind-format, t.ex. "aspect-[4/3]" */
  ratio?: string;
  /**
   * Vilken del av bilden som ska överleva beskärningen, som CSS
   * object-position. Stående mobilfoton i en liggande ruta tappar annars
   * motivet — sätt t.ex. "50% 25%" för att hålla maskinen i bild.
   */
  focus?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /**
   * Vad som händer när src är null, alltså när tjänsten saknar foto.
   * "hide" tar bort rutan helt — bra när texten kan breda ut sig i stället.
   * "space" lämnar en lugn, tom yta i samma format, så att ett rutnät med
   * bilder bredvid inte hoppar ur linje.
   */
  whenEmpty?: "hide" | "space";
};

/**
 * Fotot i naturlig färg — ingen toning, ingen avmättning, ingenting ovanpå.
 * Bilden beskärs till formatet så rutnätet blir jämnt.
 *
 * Serverkomponent: kontrollerar på disk om filen finns, så en saknad bild ger
 * en märkt platshållare i stället för en trasig ruta.
 */
export function Photo({
  src,
  alt,
  ratio = "aspect-[4/3]",
  focus = "50% 50%",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  whenEmpty = "hide",
}: PhotoProps) {
  /* Inget foto utpekat. Ingen bild alls är ärligare än en bild som
     föreställer fel sak — frågan är bara om ytan ska bort eller stå kvar
     tom för layoutens skull. */
  if (!src) {
    if (whenEmpty === "hide") return null;
    return (
      <div
        aria-hidden="true"
        className={`${ratio} bg-[var(--color-paper-3)] ${className}`}
      />
    );
  }

  if (existsInPublic(src)) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: focus }}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${ratio} flex-col justify-between overflow-hidden border-2 border-dashed border-[var(--color-border)] bg-[var(--color-paper)] p-5 ${className}`}
    >
      <span className="display text-sm tracking-[0.16em] text-[var(--color-text-muted)]">
        Bild saknas
      </span>
      <span className="flex flex-col gap-1 text-sm leading-snug text-[var(--color-text-muted)]">
        <span>{alt}</span>
        <code className="text-xs opacity-70">public{src}</code>
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
