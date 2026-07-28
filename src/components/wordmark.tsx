/**
 * EPAB:s logotyp, tolkad efter fotot av grävmaskinens bom: tre raka streck som
 * lutar åt höger, en solid kil, ordet EPAB i fet kursiv och en linje under.
 *
 * Detta är en avritning från ett foto, inte originalfilen. Vinklar och exakt
 * rödton är uppskattade — fotot är taget i motljus mot en orange bom, så
 * färgerna mäter mörkare än de är i verkligheten. Byt ut mot riktig vektorfil
 * (SVG eller EPS) när den finns.
 *
 * `mono` ritar hela märket i currentColor, för mörka bakgrunder där svart text
 * och vinröda streck skulle försvinna.
 */
export function Wordmark({
  className,
  mono = false,
}: {
  className?: string;
  mono?: boolean;
}) {
  const red = mono ? "currentColor" : "var(--color-logo-red)";
  const ink = mono ? "currentColor" : "var(--color-logo-ink)";

  return (
    <svg
      className={className}
      viewBox="0 0 300 88"
      role="img"
      aria-label="EPAB"
    >
      <g fill={red}>
        {/* tre streck, lutande åt höger upptill */}
        <polygon points="21,14 32,14 17,70 6,70" />
        <polygon points="39,14 50,14 35,70 24,70" />
        <polygon points="57,14 68,14 53,70 42,70" />
        {/* kilen som strecken löper in i */}
        <polygon points="74,14 99,14 69,70" />
        {/* linjen under ordet, börjar under kilen som på originalet */}
        <polygon points="103,75 292,75 289,83 100,83" />
      </g>

      <text
        x="99"
        y="66"
        fill={ink}
        transform="skewX(-13)"
        style={{
          font: "700 62px var(--font-body)",
          letterSpacing: "-0.02em",
        }}
      >
        EPAB
      </text>
    </svg>
  );
}
