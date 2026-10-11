import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IN_PERSON_PRICES, ONLINE_PRICES, type PriceRow } from "@/lib/content";

export const metadata: Metadata = { title: "Prices" };

export default function PricesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Prices"
        title="Clear one-to-one lesson rates"
        lead="All lessons are mapped to the school curriculum for England, Scotland and Wales. In-person prices depend on travel. Group sessions have a maximum of five students."
      />
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-6 lg:grid-cols-2">
          <PriceCard title="In person" rows={IN_PERSON_PRICES} />
          <PriceCard title="Online" rows={ONLINE_PRICES} delayMs={80} />
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-6">
          <Link
            href="/book"
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
          >
            Book your free lesson
          </Link>
        </div>
      </section>
    </main>
  );
}

function PriceCard({ title, rows, delayMs = 0 }: { title: string; rows: PriceRow[]; delayMs?: number }) {
  return (
    <Reveal delayMs={delayMs}>
      <article className="h-full overflow-hidden rounded-3xl border border-line bg-white">
        <div className="border-b border-line bg-sky px-6 py-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">{title}</h2>
          <p className="mt-1 text-sm text-ink/60">1 to 1 sessions</p>
        </div>
        <ul>
          {rows.map((row) => (
            <li key={row.level} className="flex items-start justify-between gap-4 border-b border-line px-6 py-4 last:border-b-0">
              <div>
                <p className="font-bold text-deep-navy">{row.level}</p>
                <p className="text-sm text-ink/60">{row.subject}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-extrabold text-navy">{row.price}</p>
                <p className="text-xs text-ink/55">{row.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
