/**
 * Placeholder wordmark until EPAB supplies a logo file. Built to sit on the
 * brand bar: white mark, orange rule, so it reads at small sizes on mobile.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 210 56"
      role="img"
      aria-label="EPAB Maskintjänst"
    >
      <rect x="0" y="0" width="56" height="56" fill="var(--color-accent)" />
      <text
        x="28"
        y="41"
        textAnchor="middle"
        fill="var(--color-text)"
        style={{ font: "700 30px var(--font-display)", letterSpacing: "-0.02em" }}
      >
        EP
      </text>
      <text
        x="68"
        y="27"
        fill="currentColor"
        style={{ font: "700 25px var(--font-display)", letterSpacing: "0.01em" }}
      >
        EPAB
      </text>
      <text
        x="69"
        y="46"
        fill="currentColor"
        style={{ font: "600 14.5px var(--font-display)", letterSpacing: "0.115em" }}
      >
        MASKINTJÄNST
      </text>
    </svg>
  );
}
