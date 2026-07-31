import Image from "next/image";

/**
 * Foto som fyller sin behållare. Helt orört — ingen toning, ingen mörkning.
 *
 * Text som ska ligga över bilden placeras i stället på en solid platta
 * (.photo-panel). Utan den går vit text mot ljus himmel ned till 2:1, vilket
 * inte går att läsa.
 */
export function CoverPhoto({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
