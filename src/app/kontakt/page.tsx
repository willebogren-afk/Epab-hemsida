import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta EPAB Maskintjänst AB i Fliseryd. Ring oss direkt eller skicka en förfrågan via formuläret.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Välkommen att kontakta oss"
        lead="Har du tankar och funderingar kring våra tjänster? Ring oss direkt, eller använd formuläret. Vi återkommer med svar snarast."
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="space-y-10">
          <section>
            <h2 className="display text-2xl tracking-[0.03em]">Adress</h2>
            <address className="mt-4 space-y-1 leading-relaxed not-italic">
              <p className="font-semibold">{site.name}</p>
              <p className="text-[var(--color-text-muted)]">
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </p>
              <p className="pt-2">
                <a
                  href={site.phoneHref}
                  className="inline-block cursor-pointer py-1.5 font-semibold tabular-nums transition-colors duration-200 hover:text-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                >
                  tel. {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-block cursor-pointer py-1.5 text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="display text-2xl tracking-[0.03em]">
              Ring oss direkt
            </h2>
            <ul className="mt-4 space-y-3">
              {site.directPhones.map((c) => (
                <li
                  key={c.phoneHref}
                  className="border-l-4 border-[var(--color-accent)] pl-5"
                >
                  <a
                    href={c.phoneHref}
                    className="display inline-block cursor-pointer py-2 text-xl tabular-nums transition-colors duration-200 hover:text-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[var(--color-brand)] p-7 text-[var(--color-on-brand)]">
            <h2 className="display text-xl tracking-[0.03em]">Vinterjour</h2>
            <p className="mt-3 leading-relaxed text-[var(--color-on-brand-muted)]">
              Under vintersäsongen når du oss dygnet runt på{" "}
              <a
                href={site.phoneHref}
                className="cursor-pointer font-semibold text-[var(--color-on-brand)] tabular-nums underline decoration-[var(--color-on-brand)] decoration-2 underline-offset-4 transition-colors duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
              >
                {site.phone}
              </a>
              .
            </p>
          </section>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
