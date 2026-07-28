import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Photo } from "@/components/photo";
import { machines, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Mark och schakt, väghållning, snöröjning, sopning, skogsarbete och transport av massor i Kalmar län.",
};

export default function TjansterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tjänster"
        title="Så här kan vi hjälpa dig"
        lead="Vi tar både enstaka uppdrag och löpande avtal. Vet du inte vad ditt jobb kräver? Ring och beskriv det — vi säger vad som behövs."
        image={machines[5].image}
        imageAlt={machines[5].imageAlt}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <ul className="space-y-16 sm:space-y-20">
          {services.map((s, i) => (
            <li key={s.slug} id={s.slug} className="scroll-mt-32">
              {/* Bilden byter sida varannan tjänst så listan får en rytm
                  istället för att bli sju likadana rader. */}
              <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                <Photo
                  src={s.image}
                  alt={s.imageAlt}
                  ratio="aspect-[4/3]"
                  className={`border-2 border-[var(--color-ink)] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />

                <div>
                  <p className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="font-display text-4xl leading-none text-[var(--color-paper-3)] tabular-nums"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">
                      {s.season}
                    </span>
                  </p>

                  <h2 className="mt-3 font-display text-3xl leading-tight uppercase sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                    {s.summary}
                  </p>

                  <ul className="mt-6 space-y-2 border-t-2 border-[var(--color-border)] pt-6">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-4 shrink-0 bg-[var(--color-accent)]"
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 border-2 border-[var(--color-ink)] bg-[var(--color-paper-2)] p-8 sm:p-10">
          <h2 className="font-display text-3xl leading-tight uppercase sm:text-4xl">
            Osäker på vilken tjänst du behöver?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-text-muted)]">
            Beskriv jobbet — vi föreslår maskin, upplägg och tidplan. För
            vägsamfälligheter och fastighetsägare tar vi fram säsongsavtal som
            täcker både barmark och vinter.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="flex min-h-[52px] cursor-pointer items-center bg-[var(--color-accent)] px-7 font-display text-xl tracking-[0.06em] text-[var(--color-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent-deep)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-ink)]"
            >
              Begär offert
            </Link>
            <a
              href={site.phoneHref}
              className="flex min-h-[52px] cursor-pointer items-center border-2 border-[var(--color-ink)] px-7 font-display text-xl tracking-[0.06em] uppercase transition-colors duration-200 hover:bg-[var(--color-ink)] hover:text-[var(--color-text-on-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
            >
              Ring {site.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
