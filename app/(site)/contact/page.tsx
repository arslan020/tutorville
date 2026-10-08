import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to TutorVille"
        lead="Ask about tutoring, levels, or a free introductory lesson. We will match your child with the right tutor."
      />
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-7">
              <p className="text-sm font-semibold text-navy">Direct contact</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-deep-navy">{SITE.contactName}</h2>
              <div className="mt-5 space-y-2">
                <a href={`tel:${SITE.phoneTel}`} className="block text-lg font-bold text-navy">
                  {SITE.phoneDisplay}
                </a>
                <a href={`mailto:${SITE.email}`} className="block font-semibold text-deep-navy">
                  {SITE.email}
                </a>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink/70">
                From Reception through to A level, in person or online. Lessons follow the school curriculum for England,
                Scotland and Wales.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <EnquiryForm intent="contact" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
