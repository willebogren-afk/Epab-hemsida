"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { Slide } from "@/lib/site";

const INTERVALL = 5000;

/**
 * Bildspel av maskinfotona. Alla bilder ligger i DOM:en och tonas över
 * varandra — då hoppar inte layouten och nästa bild är redan hämtad.
 *
 * Bildspelet rullar av sig självt utan kontroller. Enda undantaget är den
 * som valt reducerad rörelse i systemet: då står det still på första bilden.
 * Det kräver ingen knapp och syns inte för någon annan, men gör att sidan
 * fungerar för den som inte tål rörelse.
 */
export function Slideshow({
  slides,
  ratio = "aspect-[16/9]",
}: {
  slides: Slide[];
  ratio?: string;
}) {
  const [index, setIndex] = useState(0);
  const stilla = useStillaRorelse();

  useEffect(() => {
    if (stilla || slides.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVALL,
    );
    return () => window.clearInterval(id);
  }, [stilla, slides.length]);

  return (
    <section
      aria-roledescription="bildspel"
      aria-label="Maskinerna i arbete"
      className={`relative overflow-hidden bg-[var(--color-brand)] ${ratio}`}
    >
      {slides.map((s, i) => (
        <div
          key={s.image}
          data-bild={i}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            sizes="100vw"
            /* Bildspelet går över hela bredden, så en bild som komprimeras
               hårt syns direkt. 75 är standard och räckte inte. */
            quality={90}
            priority={i === 0}
            className="object-cover"
            style={{ objectPosition: s.focus ?? "50% 50%" }}
          />
        </div>
      ))}
    </section>
  );
}

/** Läser prefers-reduced-motion utan att spegla den i state. */
function useStillaRorelse() {
  return useSyncExternalStore(
    (uppdatera) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", uppdatera);
      return () => mq.removeEventListener("change", uppdatera);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}
