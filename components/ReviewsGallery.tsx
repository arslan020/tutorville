import ReviewsCarousel from "@/components/ReviewsCarousel";
import VideoCard from "@/components/VideoCard";
import type { WrittenReview } from "@/lib/content";

export default function ReviewsGallery({
  writtenReviews,
  videoReviews,
  videoEyebrow,
  videoTitle,
  videoText,
  writtenEyebrow,
  writtenTitle,
  writtenText,
}: {
  writtenReviews: WrittenReview[];
  videoReviews: string[];
  videoEyebrow: string;
  videoTitle: string;
  videoText: string;
  writtenEyebrow: string;
  writtenTitle: string;
  writtenText: string;
}) {
  return (
    <div className="space-y-20">
      <section id="video-reviews" className="scroll-mt-28">
        <SectionHeading eyebrow={videoEyebrow} title={videoTitle} text={videoText} />
        <div className="mt-8 grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {videoReviews.map((src, i) => (
            <VideoCard key={src} src={src} label={`Video review ${i + 1}`} />
          ))}
        </div>
      </section>

      <section id="written-reviews" className="scroll-mt-28">
        <SectionHeading eyebrow={writtenEyebrow} title={writtenTitle} text={writtenText} />
        <div className="mt-8">
          <ReviewsCarousel reviews={writtenReviews} />
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="border-b border-line pb-6">
      <p className="text-sm font-bold text-accent">{eyebrow}</p>
      <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-ink/70 md:whitespace-nowrap">{text}</p>
    </div>
  );
}
