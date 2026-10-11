import { VIDEO_REVIEWS, WRITTEN_REVIEWS } from "@/lib/content";

export default function ReviewsGallery() {
  return (
    <div className="space-y-20">
      <section id="written-reviews" className="scroll-mt-28">
        <SectionHeading
          eyebrow="Written reviews"
          title="Messages from parents"
          text="Screenshots of feedback shared by TutorVille parents. Tap one to view it full size."
          count={WRITTEN_REVIEWS.length}
        />
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {WRITTEN_REVIEWS.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group mb-5 block break-inside-avoid overflow-hidden rounded-3xl bg-white p-2 shadow-sm ring-1 ring-line transition hover:shadow-lg hover:ring-navy/40"
            >
              <img
                src={src}
                alt={`Written review ${i + 1} from a TutorVille parent`}
                loading="lazy"
                className="h-auto w-full rounded-2xl"
              />
            </a>
          ))}
        </div>
      </section>

      <section id="video-reviews" className="scroll-mt-28">
        <SectionHeading
          eyebrow="Video reviews"
          title="Parents in their own words"
          text="Short clips from parents and students about their experience with TutorVille."
          count={VIDEO_REVIEWS.length}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEO_REVIEWS.map((src, i) => (
            <figure key={src} className="overflow-hidden rounded-3xl bg-white p-2 shadow-sm ring-1 ring-line">
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                aria-label={`Video review ${i + 1}`}
                className="aspect-video w-full rounded-2xl bg-deep-navy object-contain"
              />
              <figcaption className="px-3 pb-2 pt-3 text-sm font-bold text-deep-navy">Video review {i + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  count,
}: {
  eyebrow: string;
  title: string;
  text: string;
  count: number;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
      <div className="max-w-2xl">
        <p className="text-sm font-bold text-accent">{eyebrow}</p>
        <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">{title}</h2>
        <p className="mt-3 text-base leading-relaxed text-ink/70">{text}</p>
      </div>
      <span className="rounded-full bg-sky px-4 py-2 text-sm font-bold text-navy">{count} in total</span>
    </div>
  );
}
