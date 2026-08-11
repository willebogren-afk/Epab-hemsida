import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  weight: ["400", "600", "700"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "EPAB Maskintjänst AB i Fliseryd utför ledningsarbeten, rivningar, skogsentreprenad, krossning och vägunderhåll i Oskarshamn, Mönsterås och Kalmar län.",
  metadataBase: new URL("https://www.epab.nu"),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "Ledningsarbeten, rivningar, skogsentreprenad, krossning och vägunderhåll i Kalmar län sedan 2009.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${oswald.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-paper)]">
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
      </body>
    </html>
  );
}
