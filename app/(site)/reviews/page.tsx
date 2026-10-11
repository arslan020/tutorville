import type { Metadata } from "next";
import Link from "next/link";
import ReviewsGallery from "@/components/ReviewsGallery";
import { SITE, VIDEO_REVIEWS, WRITTEN_REVIEWS } from "@/lib/content";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-sky via-white to-white">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-6 sm:pt-16">
          <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-navy ring-1 ring-line">
            Reviews
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-deep-navy sm:text-5xl">
            What parents say about {SITE.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Written and video reviews, shared by parents whose children learn with our tutors.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#written-reviews"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 ring-1 ring-line transition hover:ring-navy"
            >
              <span className="text-3xl font-extrabold text-deep-navy">{WRITTEN_REVIEWS.length}</span>
              <span className="text-sm font-bold text-navy">Written reviews</span>
            </a>
            <a
              href="#video-reviews"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 ring-1 ring-line transition hover:ring-navy"
            >
              <span className="text-3xl font-extrabold text-deep-navy">{VIDEO_REVIEWS.length}</span>
              <span className="text-sm font-bold text-navy">Video reviews</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
          <ReviewsGallery />
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-deep-navy px-6 py-8 sm:flex-row sm:items-center sm:px-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Ready for a free lesson?</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
                Share your child&apos;s year group and subject. We will confirm a time with you.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
            >
              Book your free lesson
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
