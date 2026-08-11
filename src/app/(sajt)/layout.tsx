import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/**
 * Skalet kring själva webbplatsen. Lösenordsgrinden ligger utanför den här
 * gruppen och får därför varken sidhuvud eller sidfot — annars hade adress,
 * telefonnummer och tjänstelista synts innan lösenordet var inskrivet.
 */
export default function SajtLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-brand)] focus:px-4 focus:py-3 focus:font-bold focus:text-[var(--color-on-brand)] focus:outline-4 focus:outline-[var(--color-accent)]"
      >
        Hoppa till innehåll
      </a>
      <SiteHeader />
      <main id="innehall" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
