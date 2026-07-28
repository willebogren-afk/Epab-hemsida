import { TintedPhoto } from "./tinted-photo";

export function PageHeader({
  title,
  lead,
  image,
  imageAlt,
}: {
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <TintedPhoto src={image} alt={imageAlt} priority sizes="100vw" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 text-[var(--color-on-brand)] sm:px-8 sm:py-24">
        <h1 className="display max-w-3xl text-[clamp(2.1rem,6vw,4rem)]">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed font-semibold">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
