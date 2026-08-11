/**
 * EPAB:s logotyp, avritad efter dekoren på grävmaskinens bom.
 *
 * Geometrin är uppmätt ur fotot, inte uppskattad. Två vinklar bär märket och
 * de lutar åt olika håll: strecken bakåt (+17,6° från lodrätt) och bokstäverna
 * framåt som kursiv (−15,4°). Det är den motsatta lutningen som ger märket
 * dess spänning — lutar strecken åt samma håll som texten blir det fel.
 *
 * Bokstäverna är satta i sajtens brödtypsnitt med tvingad bredd, alltså inte
 * EPAB:s exakta bokstavsformer. Byt ut mot riktig vektorfil när den finns.
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
      viewBox="0 0 310 140"
      role="img"
      aria-label="EPAB"
    >
      <g fill={red}>
        {/* Tre streck som lutar bakåt: överkanten ligger 17 enheter till
            vänster om underkanten över märkets 54 enheter höjd. Delningen
            är uppmätt till 0,23 × versalhöjden med tunna mellanrum. */}
        <polygon points="8,70 23,70 40,124 25,124" />
        <polygon points="27,70 42,70 59,124 44,124" />
        <polygon points="46,70 61,70 78,124 63,124" />
        {/* Kilen: dryga tredjedelen av märkets bredd, spetsen nedåt */}
        <polygon points="66,70 103,70 85,124" />
        {/* Linjen under ordet, tunnar av åt höger */}
        <polygon points="92,100 300,100 300,109 88,112" />
      </g>

      <text
        x="112"
        y="96"
        fill={ink}
        textLength="186"
        lengthAdjust="spacingAndGlyphs"
        transform="skewX(-15)"
        style={{ font: "700 106px var(--font-body)" }}
      >
        EPAB
      </text>
    </svg>
  );
}
