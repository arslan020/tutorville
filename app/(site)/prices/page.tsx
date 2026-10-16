import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import type { PriceRow } from "@/lib/content";
import { getContent } from "@/lib/store";

export const metadata: Metadata = { title: "Prices" };
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PricesPage() {
  const { pricesPage, inPersonPrices, onlinePrices } = await getContent();

  return (
    <main>
      <PageHero eyebrow={pricesPage.eyebrow} title={pricesPage.title} lead={pricesPage.lead} />
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-6 lg:grid-cols-2">
          <PriceCard title={pricesPage.inPersonTitle} note={pricesPage.sessionNote} rows={inPersonPrices} />
          <PriceCard title={pricesPage.onlineTitle} note={pricesPage.sessionNote} rows={onlinePrices} delayMs={80} />
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-6">
          <Link
            href="/book"
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
          >
            {pricesPage.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}

function PriceCard({
  title,
  note,
  rows,
  delayMs = 0,
}: {
  title: string;
  note: string;
  rows: PriceRow[];
  delayMs?: number;
}) {
  return (
    <Reveal delayMs={delayMs}>
      <article className="h-full overflow-hidden rounded-3xl border border-line bg-white">
        <div className="border-b border-line bg-sky px-6 py-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">{title}</h2>
          <p className="mt-1 text-sm text-ink/60">{note}</p>
        </div>
        <ul>
          {rows.map((row) => (
            <li key={row.level} className="flex items-start justify-between gap-4 border-b border-line px-6 py-4 last:border-b-0">
              <p className="text-lg font-bold text-deep-navy">{row.level}</p>
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
