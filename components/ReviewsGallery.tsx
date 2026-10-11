import VideoCard from "@/components/VideoCard";
import { VIDEO_REVIEWS, WRITTEN_REVIEWS, type WrittenReview } from "@/lib/content";

export default function ReviewsGallery() {
  return (
    <div className="space-y-20">
      <section id="written-reviews" className="scroll-mt-28">
        <SectionHeading
          eyebrow="Written reviews"
          title="Messages from parents"
          text="Feedback shared by TutorVille parents about their children's lessons."
          count={WRITTEN_REVIEWS.length}
        />
        <div className="mt-8">
          <div className="grid gap-4 sm:hidden">
            {WRITTEN_REVIEWS.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
          <ReviewColumns count={2} className="hidden sm:grid lg:hidden" />
          <ReviewColumns count={3} className="hidden lg:grid" />
        </div>
      </section>

      <section id="video-reviews" className="scroll-mt-28">
        <SectionHeading
          eyebrow="Video reviews"
          title="Parents in their own words"
          text="Short clips from parents and students about their experience with TutorVille."
          count={VIDEO_REVIEWS.length}
        />
        <div className="mt-8 grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {VIDEO_REVIEWS.map((src, i) => (
            <VideoCard key={src} src={src} label={`Video review ${i + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
}

// Splits reviews into columns of roughly equal height (by text length), and the cards in each
// column stretch so every column ends on the same line.
function ReviewColumns({ count, className }: { count: number; className: string }) {
  const columns: WrittenReview[][] = Array.from({ length: count }, () => []);
  const heights = Array(count).fill(0);
  const FOOTER_WEIGHT = 260; // author row + padding, expressed in characters of text

  for (const review of WRITTEN_REVIEWS) {
    const target = heights.indexOf(Math.min(...heights));
    columns[target].push(review);
    heights[target] += review.text.length + FOOTER_WEIGHT;
  }

  return (
    <div className={`${className} items-stretch gap-5`} style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}>
      {columns.map((column, c) => (
        <div key={c} className="flex flex-col gap-5">
          {column.map((review, i) => (
            <ReviewCard key={i} review={review} stretch />
          ))}
        </div>
      ))}
    </div>
  );
}

function ReviewCard({ review, stretch = false }: { review: WrittenReview; stretch?: boolean }) {
  return (
    <figure
      className={`flex flex-col rounded-3xl bg-white p-5 shadow-sm ring-1 ring-line sm:p-6 ${stretch ? "flex-1" : ""}`}
    >
      <blockquote className="text-[15px] leading-relaxed text-ink/85">&ldquo;{review.text}&rdquo;</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-4">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-sky text-sm font-extrabold text-navy">
          {review.author.slice(0, 1)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-bold text-deep-navy">{review.author}</span>
          {review.note ? <span className="block text-xs text-ink/60">{review.note}</span> : null}
        </span>
      </figcaption>
    </figure>
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
