import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { machines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta EPAB Maskintjänst AB i Fliseryd. Ring Erik Gustafsson eller Per Ringberg direkt, eller skicka en förfrågan.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Välkommen att kontakta oss"
        lead="Har du tankar och funderingar kring våra tjänster? Ring Erik eller Per direkt, eller använd formuläret. Vi återkommer med svar snarast."
        image={machines[1].image!}
        imageAlt={machines[1].imageAlt}
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
                  className="cursor-pointer font-semibold tabular-nums transition-colors duration-200 hover:text-[var(--color-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                >
                  tel. {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="cursor-pointer text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="display text-2xl tracking-[0.03em]">
              Personlig kontakt
            </h2>
            <ul className="mt-4 space-y-6">
              {site.contacts.map((c) => (
                <li
                  key={c.email}
                  className="border-l-4 border-[var(--color-accent)] pl-5"
                >
                  <p className="display text-xl">{c.name}</p>
                  <p className="mt-1">
                    <a
                      href={c.phoneHref}
                      className="cursor-pointer font-semibold tabular-nums transition-colors duration-200 hover:text-[var(--color-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                    >
                      {c.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${c.email}`}
                      className="cursor-pointer break-all text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                    >
                      {c.email}
                    </a>
                  </p>
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
                className="cursor-pointer font-semibold text-[var(--color-on-brand)] tabular-nums underline decoration-[var(--color-accent-bright)] decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[var(--color-accent-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-bright)]"
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
