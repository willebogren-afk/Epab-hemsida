import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Bildoptimeraren släpper bara igenom kvalitetsnivåer som står här. Utan
   * 90 i listan tystnar quality={90} på bildspelet — adressen skrivs ändå
   * med q=75 och bilderna blir mjukare än avsett.
   */
  images: { qualities: [75, 90] },

  /**
   * Spärr mot sökmotorer så länge sajten bara ligger på förhandsvisnings-
   * adressen. Den innehåller EPAB:s skarpa uppgifter och ska inte kunna
   * dyka upp i Google och förväxlas med deras riktiga sida.
   *
   * Rubriken skickas med varje svar och gäller även bilder och filer, som
   * en meta-tagg i sidhuvudet inte når.
   *
   * TA BORT HELA headers-blocket när sajten kopplas till epab.nu — annars
   * går den aldrig att hitta i sökmotorer.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },
};

export default nextConfig;
