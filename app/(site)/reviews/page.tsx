import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reviews"
        title="What families say about TutorVille"
        lead="Written reviews and video reviews will be added here as soon as they are shared."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:px-6 md:grid-cols-2">
          <article className="flex min-h-64 flex-col justify-between rounded-3xl border border-line bg-mist p-7">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">Written Reviews</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Screenshots of written reviews will sit in this space. The page is ready for them.
              </p>
            </div>
            <p className="mt-8 text-sm font-bold text-navy">Coming soon</p>
          </article>
          <article className="flex min-h-64 flex-col justify-between rounded-3xl border border-line bg-mist p-7">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">Video Reviews</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Video reviews will be embedded here once the clips are ready to publish.
              </p>
            </div>
            <p className="mt-8 text-sm font-bold text-navy">Coming soon</p>
          </article>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-6">
          <Link href="/book" className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-[#d85a1d]">
            Book your free lesson
          </Link>
        </div>
      </section>
    </main>
  );
}
