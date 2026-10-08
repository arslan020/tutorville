import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { BOOKING_CALENDAR_URL, SITE } from "@/lib/content";

export const metadata: Metadata = { title: "Book a free lesson" };

export default function BookPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free lesson"
        title="Book your free lesson"
        lead="Tell us a time that suits you. TutorVille will confirm the introductory session."
      />
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">Pick a time, then we confirm</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/75">
              Share the year group, subject and a preferred time. {SITE.contactName} receives the enquiry at {SITE.email} and
              will confirm the free lesson.
            </p>
            <ol className="mt-6 space-y-3">
              {["Tell us about your child", "Choose a preferred time", "We match a tutor and confirm"].map((step, i) => (
                <li key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-deep-navy">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky text-xs font-extrabold text-navy">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            {BOOKING_CALENDAR_URL ? (
              <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white">
                <iframe title="Book a TutorVille lesson" src={BOOKING_CALENDAR_URL} className="h-[640px] w-full bg-white" />
              </div>
            ) : (
              <div className="mt-8 rounded-3xl border border-dashed border-navy/30 bg-white p-6">
                <p className="text-sm font-bold text-deep-navy">Google Calendar</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  The live calendar will appear here once the Google Calendar link is connected. Until then, use the form and we
                  will arrange the time with you.
                </p>
              </div>
            )}
            <div className="mt-6 space-y-2 text-sm">
              <p>
                Call{" "}
                <a href={`tel:${SITE.phoneTel}`} className="font-bold text-navy">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                Email{" "}
                <a href={`mailto:${SITE.email}`} className="font-bold text-navy">
                  {SITE.email}
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <EnquiryForm intent="book" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
