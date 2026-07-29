import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { TintedPhoto } from "@/components/tinted-photo";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Mark och schakt, väghållning, snöröjning, sopning, skogsarbete, krossning och transport av massor i Kalmar län.",
};

export default function TjansterPage() {
  return (
    <>
      <PageHeader
        title="Tjänster"
        lead="Vi tar både enstaka uppdrag och löpande avtal. Vet du inte vad ditt jobb kräver? Ring och beskriv det — vi säger vad som behövs."
        image={services[0].image}
        imageAlt={services[0].imageAlt}
      />

      <div className="bg-[var(--color-paper-2)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <ul className="space-y-16 sm:space-y-20">
            {services.map((s, i) => (
              <li key={s.slug} id={s.slug} className="scroll-mt-28">
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <TintedPhoto
                      src={s.image}
                      alt={s.imageAlt}
                      soft
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>

                  <div>
                    <p className="display text-sm tracking-[0.18em] text-[var(--color-accent-text)]">
                      {s.season}
                    </p>
                    <h2 className="display mt-2 text-[clamp(1.7rem,4vw,2.6rem)]">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-[var(--color-text)]">
                      {s.summary}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-5 shrink-0 bg-[var(--color-accent)]"
                          />
                          <span className="text-[var(--color-text-muted)]">
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="bg-[var(--color-brand)]">
        <div className="mx-auto max-w-7xl px-5 py-16 text-[var(--color-on-brand)] sm:px-8 sm:py-20">
          <h2 className="display max-w-2xl text-[clamp(1.8rem,4.5vw,2.8rem)]">
            Osäker på vilken tjänst du behöver?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-on-brand-muted)]">
            Beskriv jobbet — vi föreslår maskin, upplägg och tidplan. För
            vägsamfälligheter och fastighetsägare tar vi fram säsongsavtal som
            täcker både barmark och vinter.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="display flex min-h-[54px] cursor-pointer items-center rounded-full bg-[var(--color-brand-deep)] px-9 text-xl tracking-[0.04em] text-[var(--color-on-photo)] transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-text)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
            >
              Begär offert
            </Link>
            <a
              href={site.phoneHref}
              className="display flex min-h-[54px] cursor-pointer items-center rounded-full border-2 border-[var(--color-on-brand)] px-9 text-xl tracking-[0.04em] transition-colors duration-200 hover:bg-[var(--color-on-brand)] hover:text-[var(--color-brand)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
