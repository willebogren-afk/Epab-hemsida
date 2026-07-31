import { CoverPhoto } from "./cover-photo";

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
      <CoverPhoto src={image} alt={imageAlt} priority sizes="100vw" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="photo-panel max-w-3xl p-8 sm:p-12">
          <h1 className="display text-[clamp(2.1rem,6vw,4rem)]">{title}</h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-semibold">
              {lead}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
