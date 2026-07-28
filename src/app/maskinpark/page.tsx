import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Photo } from "@/components/photo";
import { machines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Maskinpark",
  description:
    "EPAB:s maskinpark: hjullastare med sop- och plogaggregat, väghyvel, bandgrävare med stubbgrip, långgrävare och kompaktgrävare.",
};

export default function MaskinparkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Maskinpark"
        title="Maskinerna vi kör"
        lead="Alla maskiner är våra egna och körs av våra egna förare. Aggregaten byts efter säsong, så samma hjullastare sopar på våren och plogar på vintern."
        image={machines[2].image}
        imageAlt={machines[2].imageAlt}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((m) => (
            <li key={m.name} className="flex flex-col">
              <Photo
                src={m.image}
                alt={m.imageAlt}
                ratio="aspect-[4/3]"
                className="border-2 border-[var(--color-ink)]"
              />
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-xs tracking-[0.2em] text-[var(--color-accent-deep)] uppercase">
                    {m.category}
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-text-muted)] tabular-nums">
                    {m.weight}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-2xl leading-tight uppercase">
                  {m.name}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-[var(--color-text-muted)]">
                  {m.note}
                </p>
                <dl className="mt-5 border-t-2 border-[var(--color-border)] pt-4">
                  <dt className="font-display text-xs tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
                    Redskap
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {m.attachments.map((a) => (
                      <span
                        key={a}
                        className="border border-[var(--color-border)] bg-[var(--color-paper-2)] px-2.5 py-1 text-sm"
                      >
                        {a}
                      </span>
                    ))}
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-l-4 border-[var(--color-accent)] bg-[var(--color-paper-2)] p-8">
          <h2 className="font-display text-2xl leading-tight uppercase sm:text-3xl">
            Behöver du en maskin vi inte har?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-text-muted)]">
            Vi samarbetar med andra entreprenörer i regionen och löser
            bemanning, transport och extra maskiner vid större uppdrag.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex min-h-[52px] cursor-pointer items-center bg-[var(--color-ink)] px-7 font-display text-xl tracking-[0.06em] text-[var(--color-text-on-ink)] uppercase transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
          >
            Hör av dig — {site.phone}
          </Link>
        </div>
      </div>
    </>
  );
}
