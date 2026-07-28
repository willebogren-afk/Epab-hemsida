import Image from "next/image";

/**
 * A photo under the brand wash. Every image on the site goes through this so
 * seven photos shot on seven different days read as one set.
 */
export function TintedPhoto({
  src,
  alt,
  className = "",
  soft = false,
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  soft?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`photo-tint ${soft ? "photo-tint-soft" : ""} absolute inset-0 overflow-hidden ${className}`}
    >
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
