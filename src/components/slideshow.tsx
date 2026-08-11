"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { Slide } from "@/lib/site";

const INTERVALL = 5000;

/**
 * Bildspel av maskinfotona. Alla bilder ligger i DOM:en och tonas över
 * varandra — då hoppar inte layouten och nästa bild är redan hämtad.
 *
 * Tre saker som ett bildspel måste klara för att inte stänga ute besökare:
 * det ska gå att pausa (WCAG 2.2.2 — rörelse som varar mer än fem sekunder),
 * det ska stå still för den som valt reducerad rörelse i systemet, och det
 * ska gå att stega med tangentbordet. Alla tre finns här.
 */
export function Slideshow({
  slides,
  ratio = "aspect-[16/9]",
}: {
  slides: Slide[];
  ratio?: string;
}) {
  const [index, setIndex] = useState(0);
  const paus = useRef(false);

  /* Systemets inställning avgör om bildspelet startar av sig självt. Trycker
     besökaren på knappen vinner det valet — annars gick det inte att starta
     bildspelet alls på en dator med reducerad rörelse påslagen. */
  const stilla = useStillaRorelse();
  const [eget, setEget] = useState<boolean | null>(null);
  const spelar = eget ?? !stilla;

  /* Hover och fokus pausar rullningen. Men knappen behåller fokus efter ett
     klick, så ett tryck på Starta skulle annars inte få något att hända —
     ett uttryckligt tryck får därför häva pausen. */
  function vaxlaSpelar() {
    if (!spelar) paus.current = false;
    setEget(!spelar);
  }

  const till = useCallback(
    (n: number) => setIndex((n + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (!spelar || slides.length < 2) return;
    const id = window.setInterval(() => {
      if (!paus.current) setIndex((i) => (i + 1) % slides.length);
    }, INTERVALL);
    return () => window.clearInterval(id);
  }, [spelar, slides.length]);

  return (
    <section
      aria-roledescription="bildspel"
      aria-label="Maskinerna i arbete"
      className="relative"
      onMouseEnter={() => (paus.current = true)}
      onMouseLeave={() => (paus.current = false)}
      onFocusCapture={() => (paus.current = true)}
      onBlurCapture={() => (paus.current = false)}
    >
      <div className={`relative overflow-hidden bg-[var(--color-brand)] ${ratio}`}>
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
              priority={i === 0}
              className="object-cover"
              style={{ objectPosition: s.focus ?? "50% 50%" }}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-4 sm:p-6">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--color-brand-deep)_88%,transparent)] px-2 py-2 backdrop-blur-sm">
          <Knapp etikett="Föregående bild" onClick={() => till(index - 1)}>
            <Pil className="h-5 w-5 rotate-180" />
          </Knapp>

          <Knapp
            etikett={spelar ? "Pausa bildspelet" : "Starta bildspelet"}
            onClick={vaxlaSpelar}
          >
            {spelar ? <Paus className="h-5 w-5" /> : <Spela className="h-5 w-5" />}
          </Knapp>

          <ul className="mx-1 flex items-center gap-1.5">
            {slides.map((s, i) => (
              <li key={s.image}>
                <button
                  type="button"
                  onClick={() => till(i)}
                  aria-current={i === index ? "true" : undefined}
                  className={`block h-2.5 w-2.5 cursor-pointer rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-on-brand)] ${
                    i === index
                      ? "bg-[var(--color-on-brand)]"
                      : "bg-[var(--color-border-on-brand)] hover:bg-[var(--color-on-brand-muted)]"
                  }`}
                >
                  <span className="sr-only">Bild {i + 1}</span>
                </button>
              </li>
            ))}
          </ul>

          <Knapp etikett="Nästa bild" onClick={() => till(index + 1)}>
            <Pil className="h-5 w-5" />
          </Knapp>
        </div>
      </div>
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

function Knapp({
  etikett,
  onClick,
  children,
}: {
  etikett: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[var(--color-on-brand)] transition-colors duration-200 hover:bg-[var(--color-border-on-brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-on-brand)]"
    >
      <span className="sr-only">{etikett}</span>
      {children}
    </button>
  );
}

function Pil({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function Paus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function Spela({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}
