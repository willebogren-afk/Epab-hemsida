import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Photo } from "@/components/photo";
import { machines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Maskinpark",
  description:
    "EPAB:s maskinpark: hjullastare med sop- och plogaggregat, väghyvel, markberedare, hjulgrävare, långgrävare och mobila krossverk.",
};

export default function MaskinparkPage() {
  return (
    <>
      <PageHeader title="Maskinerna vi kör" />

      <div className="bg-[var(--color-paper-2)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {machines.map((m) => (
              <li key={m.name} className="flex flex-col">
                <Photo
                  src={m.image}
                  alt={m.imageAlt}
                  ratio="aspect-[4/3]"
                  focus={m.focus}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="mt-5 flex flex-1 flex-col">
                  <h2 className="display text-2xl">{m.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-text-muted)] tabular-nums">
                    {m.weight}
                  </p>
                  <p className="mt-3 flex-1 leading-relaxed text-[var(--color-text-muted)]">
                    {m.note}
                  </p>
                  <dl className="mt-5 border-t border-[var(--color-border)] pt-4">
                    <dt className="display text-xs tracking-[0.16em] text-[var(--color-text-muted)]">
                      Redskap
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {m.attachments.map((a) => (
                        <span
                          key={a}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-1 text-sm"
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
        </div>
      </div>

      <section className="bg-[var(--color-brand)]">
        <div className="mx-auto max-w-7xl px-5 py-16 text-[var(--color-on-brand)] sm:px-8 sm:py-20">
          <h2 className="display max-w-2xl text-[clamp(1.8rem,4.5vw,2.8rem)]">
            Behöver du en maskin vi inte har?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-on-brand-muted)]">
            Vi samarbetar med andra entreprenörer i regionen och löser
            bemanning och extra maskiner vid större uppdrag.
          </p>
          <Link
            href="/kontakt"
            className="display mt-9 inline-flex min-h-[54px] cursor-pointer items-center rounded-full border-2 border-[var(--color-on-brand)] px-9 text-xl tracking-[0.04em] transition-colors duration-200 hover:bg-[var(--color-on-brand)] hover:text-[var(--color-brand)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
          >
            Hör av dig — {site.phone}
          </Link>
        </div>
      </section>
    </>
  );
}
