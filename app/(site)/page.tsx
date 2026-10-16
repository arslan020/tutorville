import Link from "next/link";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import TutorAvatar from "@/components/TutorAvatar";
import { getContent } from "@/lib/store";

const AVATARS = ["bg-navy", "bg-[#7E6BB5]", "bg-accent"];

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  const { site, home, tutors, writtenReviews } = await getContent();
  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-b from-sky via-white to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
          <Reveal>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-navy ring-1 ring-line">
              {home.badge}
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-deep-navy sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-4 text-lg font-semibold text-navy">{site.range}</p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/75">{home.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
              >
                {home.bookCta}
              </Link>
              <Link
                href="/prices"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-deep-navy ring-1 ring-line transition hover:ring-navy"
              >
                {home.pricesCta}
              </Link>
            </div>
            <p className="mt-5 text-sm text-ink/70">
              Or call {site.contactName} on{" "}
              <a href={`tel:${site.phoneTel}`} className="font-bold text-navy">
                {site.phoneDisplay}
              </a>
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(52,49,95,0.14)] ring-1 ring-line">
                <div className="relative bg-gradient-to-br from-navy to-deep-navy px-5 pb-6 pt-5 text-white sm:px-7 sm:pb-7 sm:pt-6">
                  <div className="relative flex items-center justify-between gap-3">
                    <p className="text-sm font-bold">{home.subjectsHeading}</p>
                  </div>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {home.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="grid grid-cols-2 gap-2.5 min-[420px]:grid-cols-3">
                    {home.levels.map((level) => (
                      <span
                        key={level}
                        className="flex items-center justify-center gap-2 rounded-xl bg-mist px-2 py-3 text-center text-sm font-bold text-deep-navy ring-1 ring-line"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {level}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-sky px-4 py-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-navy">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-xs font-semibold text-ink/55">{home.locationLabel}</span>
                        <span className="block text-sm font-bold text-deep-navy">{home.locationValue}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-sky px-4 py-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-navy">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="3.2" />
                          <path d="M5.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" />
                        </svg>
                      </span>
                      <span className="text-sm font-bold text-deep-navy">{home.oneToOne}</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-accent-soft px-4 py-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-accent">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="8" r="3" />
                          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                          <path d="M16 11a3 3 0 100-6M18 14.5c1.8.7 3 2.4 3 4.5" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-xs font-semibold text-ink/55">{home.groupsLabel}</span>
                        <span className="block text-sm font-bold text-deep-navy">{home.groupsValue}</span>
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/book"
                    className="group mt-4 flex items-center justify-between gap-4 rounded-2xl bg-accent px-5 py-4 text-white transition hover:bg-[#8E3D6A]"
                  >
                    <span>
                      <span className="block text-xs font-semibold text-white/75">{home.nextStepLabel}</span>
                      <span className="mt-0.5 block text-sm font-bold leading-snug">{home.nextStepText}</span>
                    </span>
                    <span className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-bold text-accent">
                      {home.bookChip}
                      <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">{home.whyHeading}</h2>
              <p className="mt-3 text-balance text-base leading-relaxed text-ink/75">{home.whyIntro}</p>
            </Reveal>
          </div>
          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
            {home.why.map((item, i) => (
              <Reveal key={item.title} className="h-full" delayMs={i * 70}>
                <article className="flex h-full flex-col rounded-3xl bg-mist p-6 ring-1 ring-line">
                  <h3 className="flex items-center gap-3 text-lg font-bold text-deep-navy">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-extrabold text-navy ring-1 ring-line">
                      {item.number}
                    </span>
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">{home.tutorsHeading}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75 md:whitespace-nowrap">{home.tutorsIntro}</p>
            </Reveal>
            <Link href="/tutors" className="text-sm font-bold text-navy">
              {home.tutorsCta}
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {tutors.map((tutor, i) => (
              <Reveal key={tutor.name} delayMs={i * 70}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-line">
                  <div className="flex items-center gap-3 lg:min-h-[3.75rem]">
                    <TutorAvatar
                      name={tutor.name}
                      photo={tutor.photo}
                      sizeClass="h-12 w-12"
                      textClass="text-lg"
                      colorClass={AVATARS[i]}
                    />
                    <div>
                      <h3 className="text-lg font-bold text-deep-navy">{tutor.name}</h3>
                      <p className="text-xs font-semibold text-navy">{tutor.highlights[0]}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/75 lg:min-h-[3rem]">{tutor.role}</p>
                  <ul className="mt-4 space-y-2.5 border-t border-line pt-4 text-sm leading-relaxed text-ink/80">
                    {tutor.highlights.slice(1, 4).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">{home.pricesHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/75">{home.pricesIntro}</p>
            <Link
              href="/prices"
              className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-deep-navy"
            >
              {home.pricesListCta}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-sky p-6 ring-1 ring-line">
              <p className="text-sm font-bold text-navy">{home.inPersonLabel}</p>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-deep-navy">{home.inPersonFrom}</p>
              <p className="mt-2 text-sm text-ink/70">{home.inPersonNote}</p>
            </div>
            <div className="rounded-3xl bg-accent-soft p-6 ring-1 ring-line">
              <p className="text-sm font-bold text-accent">{home.onlineLabel}</p>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-deep-navy">{home.onlineFrom}</p>
              <p className="mt-2 text-sm text-ink/70">{home.onlineNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-sky to-accent-soft px-6 py-8 ring-1 ring-line sm:px-10 sm:py-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-bold text-accent">{home.reviewsEyebrow}</p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-deep-navy sm:text-3xl md:whitespace-nowrap">
                  {home.reviewsHeading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 md:whitespace-nowrap">{home.reviewsIntro}</p>
              </div>
              <Link
                href="/reviews"
                className="inline-flex flex-shrink-0 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-deep-navy"
              >
                {home.reviewsCta}
              </Link>
            </div>
            <div className="mt-6">
              <ReviewsCarousel reviews={writtenReviews} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-deep-navy px-6 py-8 sm:flex-row sm:items-center sm:px-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{home.closingHeading}</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">{home.closingLead}</p>
            </div>
            <Link href="/book" className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-bold text-white hover:bg-[#8E3D6A]">
              {home.closingCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
