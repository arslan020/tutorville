import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { getContent } from "@/lib/store";

export const metadata: Metadata = { title: "Book a free lesson" };
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BookPage() {
  const { site, bookPage, subjects, yearGroups, enquiryNote } = await getContent();
  const intro = bookPage.intro.replace("{name}", site.contactName).replace("{email}", site.email);

  return (
    <main>
      <PageHero eyebrow={bookPage.eyebrow} title={bookPage.title} lead={bookPage.lead} />
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">{bookPage.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/75">{intro}</p>
            <ol className="mt-6 space-y-3">
              {bookPage.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-deep-navy">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky text-xs font-extrabold text-navy">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            {bookPage.calendarUrl ? (
              <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white">
                <iframe title="Book a TutorVille lesson" src={bookPage.calendarUrl} className="h-[640px] w-full bg-white" />
              </div>
            ) : null}
            <div className="mt-6 space-y-2 text-sm">
              <p>
                Call{" "}
                <a href={`tel:${site.phoneTel}`} className="font-bold text-navy">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                Email{" "}
                <a href={`mailto:${site.email}`} className="font-bold text-navy">
                  {site.email}
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <EnquiryForm intent="book" site={site} subjects={subjects} yearGroups={yearGroups} enquiryNote={enquiryNote} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
