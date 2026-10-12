type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export default function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-sky">
      <div className="mx-auto max-w-6xl px-5 py-12 text-center sm:px-6 sm:py-16">
        {eyebrow && <p className="text-sm font-semibold text-navy">{eyebrow}</p>}
        <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-deep-navy sm:text-5xl">{title}</h1>
        {lead && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">{lead}</p>}
      </div>
    </section>
  );
}
