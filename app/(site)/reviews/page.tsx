import type { Metadata } from "next";
import Link from "next/link";
import ReviewsGallery from "@/components/ReviewsGallery";
import { getContent } from "@/lib/store";

export const metadata: Metadata = { title: "Reviews" };
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ReviewsPage() {
  const { reviewsPage, writtenReviews, videoReviews } = await getContent();

  return (
    <main>
      <section className="bg-gradient-to-b from-sky via-white to-white">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 text-center sm:px-6 sm:pt-16">
          <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-navy ring-1 ring-line">
            {reviewsPage.eyebrow}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-deep-navy sm:text-5xl">
            {reviewsPage.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg md:whitespace-nowrap">{reviewsPage.lead}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
          <ReviewsGallery
            writtenReviews={writtenReviews}
            videoReviews={videoReviews}
            videoEyebrow={reviewsPage.videoEyebrow}
            videoTitle={reviewsPage.videoTitle}
            videoText={reviewsPage.videoText}
            writtenEyebrow={reviewsPage.writtenEyebrow}
            writtenTitle={reviewsPage.writtenTitle}
            writtenText={reviewsPage.writtenText}
          />
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-deep-navy px-6 py-8 sm:flex-row sm:items-center sm:px-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{reviewsPage.closingHeading}</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">{reviewsPage.closingLead}</p>
            </div>
            <Link
              href="/book"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
            >
              {reviewsPage.closingCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
