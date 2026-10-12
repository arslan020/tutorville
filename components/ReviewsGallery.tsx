import ReviewsCarousel from "@/components/ReviewsCarousel";
import VideoCard from "@/components/VideoCard";
import { VIDEO_REVIEWS, WRITTEN_REVIEWS } from "@/lib/content";

export default function ReviewsGallery() {
  return (
    <div className="space-y-20">
      <section id="video-reviews" className="scroll-mt-28">
        <SectionHeading
          eyebrow="Video reviews"
          title="Parents in their own words"
          text="Short clips from parents and students about their experience with TutorVille."
        />
        <div className="mt-8 grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {VIDEO_REVIEWS.map((src, i) => (
            <VideoCard key={src} src={src} label={`Video review ${i + 1}`} />
          ))}
        </div>
      </section>

      <section id="written-reviews" className="scroll-mt-28">
        <SectionHeading
          eyebrow="Written reviews"
          title="Messages from parents"
          text="Feedback shared by TutorVille parents about their children's lessons."
        />
        <div className="mt-8">
          <ReviewsCarousel reviews={WRITTEN_REVIEWS} />
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
