import type { Metadata } from "next";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";

/* Egen metadata, annars ärver grinden sajtens beskrivning med hela
   tjänstelistan. Den syns i länkförhandsvisningar när adressen klistras in i
   en chatt, alltså innan någon skrivit lösenordet. */
const INTET = "Lösenordsskyddad förhandsvisning.";

export const metadata: Metadata = {
  title: "Förhandsvisning",
  description: INTET,
  openGraph: { title: "Förhandsvisning", description: INTET },
  twitter: { title: "Förhandsvisning", description: INTET },
  robots: { index: false, follow: false },
};

export default async function LasenordPage({
  searchParams,
}: {
  searchParams: Promise<{ fel?: string; vidare?: string }>;
}) {
  const { fel, vidare } = await searchParams;

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[var(--color-brand)] px-5 py-16">
      <div className="w-full max-w-md">
        <Wordmark mono className="h-10 w-auto text-[var(--color-on-brand)]" />

        <h1 className="display mt-10 text-[clamp(2rem,6vw,2.8rem)] text-[var(--color-on-brand)]">
          Förhandsvisning
        </h1>
        <p className="mt-4 leading-relaxed text-[var(--color-on-brand-muted)]">
          Den här sidan är en förhandsvisning av {site.name}:s nya webbplats
          och är inte publicerad än. Ange lösenordet du fått för att se den.
        </p>

        <form
          action="/api/lasenord"
          method="post"
          className="mt-9"
          noValidate
        >
          <input type="hidden" name="vidare" value={vidare ?? "/"} />

          <label
            htmlFor="losenord"
            className="display block text-sm tracking-[0.16em] text-[var(--color-on-brand)]"
          >
            Lösenord
          </label>
          <input
            id="losenord"
            name="losenord"
            type="password"
            autoComplete="current-password"
            autoFocus
            required
            aria-describedby={fel ? "losenord-fel" : undefined}
            aria-invalid={fel ? true : undefined}
            className="mt-2 block min-h-[54px] w-full rounded-full border-2 border-[var(--color-border-on-brand)] bg-[var(--color-brand-deep)] px-6 text-lg text-[var(--color-on-brand)] outline-none focus-visible:border-[var(--color-on-brand)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-on-brand)]"
          />

          {fel && (
            <p
              id="losenord-fel"
              role="alert"
              className="mt-3 font-semibold text-[var(--color-on-brand)]"
            >
              Fel lösenord. Försök igen.
            </p>
          )}

          <button
            type="submit"
            className="display mt-6 flex min-h-[54px] w-full cursor-pointer items-center justify-center rounded-full bg-[var(--color-on-brand)] px-9 text-xl tracking-[0.04em] text-[var(--color-brand)] transition-colors duration-200 hover:bg-[var(--color-on-brand-muted)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-on-brand)]"
          >
            Visa webbplatsen
          </button>
        </form>
      </div>
    </div>
  );
}
