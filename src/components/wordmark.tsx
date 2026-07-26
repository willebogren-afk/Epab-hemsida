export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 48"
      role="img"
      aria-label="EPAB Maskintjänst"
    >
      <rect x="0" y="0" width="8" height="48" fill="var(--color-accent)" />
      <text
        x="20"
        y="30"
        fill="var(--color-text)"
        style={{
          font: "400 34px var(--font-display)",
          letterSpacing: "0.02em",
        }}
      >
        EPAB
      </text>
      <text
        x="21"
        y="44"
        fill="var(--color-text-muted)"
        style={{
          font: "600 10.5px var(--font-body)",
          letterSpacing: "0.28em",
        }}
      >
        MASKINTJÄNST
      </text>
    </svg>
  );
}
