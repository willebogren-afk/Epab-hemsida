import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const anton = Anton({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-source-sans",
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "EPAB Maskintjänst AB i Fliseryd utför mark och schakt, väghållning, snöröjning, sopning och skogsarbete i Oskarshamn, Mönsterås och Kalmar län.",
  metadataBase: new URL("https://www.epab.nu"),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "Mark och schakt, väghållning, snöröjning och skogsarbete i Kalmar län sedan 2009.",
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
      className={`${anton.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-paper)]">
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-ink)] focus:px-4 focus:py-3 focus:font-bold focus:text-[var(--color-text-on-ink)] focus:outline-4 focus:outline-[var(--color-accent)]"
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
