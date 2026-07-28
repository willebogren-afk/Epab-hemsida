import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { machines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "EPAB Maskintjänst AB grundades 2009 av Erik Gustafsson och Per Ringberg och utför mark- och anläggningsarbeten i Kalmar län.",
};

export default function OmOssPage() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss"
        title="Två förare som blev ett åkeri"
        lead="EPAB Maskintjänst startades 2009 av Erik Gustafsson och Per Ringberg. Sedan dess har vi vuxit till ett lag med egna maskiner och fasta uppdrag i hela Kalmar län."
        image={machines[3].image}
        imageAlt={machines[3].imageAlt}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
            <p>
              Vi utgår från Fliseryd och arbetar främst i Oskarshamn, Mönsterås
              och kringliggande kommuner. Uppdragen kommer från privatpersoner,
              vägsamfälligheter, fastighetsbolag, kommuner och industri.
            </p>
            <p>
              Det som gör oss användbara är bredden över året. Under barmark
              schaktar vi grunder, hyvlar grusvägar och bereder mark inför
              plantering. När snön kommer plogar och sandar samma maskiner —
              med jour dygnet runt genom hela vintersäsongen.
            </p>
            <p>
              Vi tror på att den som kör maskinen också ska kunna svara på
              frågor om jobbet. Därför pratar du med Erik eller Per direkt, inte
              med en växel.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px self-start bg-[var(--color-border)]">
            {[
              { k: "Grundat", v: "2009" },
              { k: "Anställda", v: "6" },
              { k: "Bas", v: "Fliseryd" },
              { k: "Org.nr", v: site.orgNr },
            ].map((f) => (
              <div key={f.k} className="bg-[var(--color-paper)] p-6">
                <dt className="font-display text-xs tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
                  {f.k}
                </dt>
                <dd className="mt-2 font-display text-3xl uppercase tabular-nums">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="mt-20">
          <h2 className="font-display text-3xl leading-tight uppercase sm:text-4xl">
            Prata med oss direkt
          </h2>
          <ul className="mt-8 grid gap-px bg-[var(--color-border)] sm:grid-cols-2">
            {site.contacts.map((c) => (
              <li key={c.email} className="bg-[var(--color-paper)] p-7">
                <p className="font-display text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">
                  {c.role}
                </p>
                <h3 className="mt-2 font-display text-2xl uppercase">
                  {c.name}
                </h3>
                <p className="mt-4">
                  <a
                    href={c.phoneHref}
                    className="cursor-pointer font-semibold tabular-nums transition-colors duration-200 hover:text-[var(--color-accent-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                  >
                    {c.phone}
                  </a>
                </p>
                <p className="mt-1">
                  <a
                    href={`mailto:${c.email}`}
                    className="cursor-pointer break-all text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-accent-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                  >
                    {c.email}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="flex min-h-[52px] cursor-pointer items-center bg-[var(--color-accent)] px-7 font-display text-xl tracking-[0.06em] text-[var(--color-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent-deep)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-ink)]"
          >
            Skicka en förfrågan
          </Link>
          <Link
            href="/maskinpark"
            className="flex min-h-[52px] cursor-pointer items-center border-2 border-[var(--color-ink)] px-7 font-display text-xl tracking-[0.06em] uppercase transition-colors duration-200 hover:bg-[var(--color-ink)] hover:text-[var(--color-text-on-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
          >
            Se maskinparken
          </Link>
        </div>
      </div>
    </>
  );
}
