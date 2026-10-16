import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { getContent } from "@/lib/store";

export const metadata: Metadata = { title: "Contact us" };
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ContactPage() {
  const { site, contactPage, subjects, yearGroups, enquiryNote } = await getContent();

  return (
    <main>
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} lead={contactPage.lead} />
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-7">
              <p className="text-sm font-semibold text-navy">Direct contact</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-deep-navy">{site.contactName}</h2>
              <div className="mt-5 space-y-2">
                <a href={`tel:${site.phoneTel}`} className="block text-lg font-bold text-navy">
                  {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="block font-semibold text-deep-navy">
                  {site.email}
                </a>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink/70">{contactPage.note}</p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <EnquiryForm intent="contact" site={site} subjects={subjects} yearGroups={yearGroups} enquiryNote={enquiryNote} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
