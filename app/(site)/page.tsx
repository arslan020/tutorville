import Link from "next/link";
import Reveal from "@/components/Reveal";
import TutorAvatar from "@/components/TutorAvatar";
import { LEVELS, SITE, TUTORS, WHY, WHY_HEADING, WHY_INTRO } from "@/lib/content";

const SUBJECTS = ["Maths", "English", "Sciences", "11+", "Interview prep"];
const AVATARS = ["bg-navy", "bg-[#7E6BB5]", "bg-accent"];

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-b from-sky via-white to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
          <Reveal>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-navy ring-1 ring-line">
              Free introductory lesson
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-deep-navy sm:text-5xl">
              {SITE.tagline}
            </h1>
            <p className="mt-4 text-lg font-semibold text-navy">{SITE.range}</p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/75">
              Unlock your child&apos;s full potential with a free tailored tutoring experience. We match them with the right tutor
              for their age, subject and learning style.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
              >
                Book your free lesson
              </Link>
              <Link
                href="/prices"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-deep-navy ring-1 ring-line transition hover:ring-navy"
              >
                See prices
              </Link>
            </div>
            <p className="mt-5 text-sm text-ink/70">
              Or call {SITE.contactName} on{" "}
              <a href={`tel:${SITE.phoneTel}`} className="font-bold text-navy">
                {SITE.phoneDisplay}
              </a>
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div aria-hidden="true" className="absolute -right-4 -top-6 h-40 w-40 rounded-full bg-accent-soft blur-2xl sm:h-56 sm:w-56" />
              <div aria-hidden="true" className="absolute -bottom-8 -left-4 h-40 w-40 rounded-full bg-[#DAD7F2] blur-2xl sm:h-56 sm:w-56" />

              <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(52,49,95,0.14)] ring-1 ring-line">
                <div className="relative bg-gradient-to-br from-navy to-deep-navy px-5 pb-6 pt-5 text-white sm:px-7 sm:pb-7 sm:pt-6">
                  <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
                  <div aria-hidden="true" className="absolute -bottom-12 right-16 h-28 w-28 rounded-full bg-accent/30" />
                  <div className="relative flex items-center justify-between gap-3">
                    <p className="text-sm font-bold">Subjects we cover</p>
                  </div>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {SUBJECTS.map((subject) => (
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
                    {LEVELS.map((level) => (
                      <span
                        key={level}
                        className="flex items-center justify-center gap-2 rounded-xl bg-mist px-2 py-3 text-center text-sm font-bold text-deep-navy ring-1 ring-line"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {level}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 min-[420px]:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-2xl bg-sky px-4 py-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-navy">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-xs font-semibold text-ink/55">Location</span>
                        <span className="block text-sm font-bold text-deep-navy">Online or In Person</span>
                      </span>
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
                        <span className="block text-xs font-semibold text-ink/55">Groups</span>
                        <span className="flex items-center gap-2 text-sm font-bold text-deep-navy">
                          Max 5
                          <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-extrabold text-accent">1 to 1</span>
                        </span>
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/book"
                    className="group mt-4 flex items-center justify-between gap-4 rounded-2xl bg-accent px-5 py-4 text-white transition hover:bg-[#8E3D6A]"
                  >
                    <span>
                      <span className="block text-xs font-semibold text-white/75">Next step</span>
                      <span className="mt-0.5 block text-sm font-bold leading-snug">Tell us the year group. We match the tutor.</span>
                    </span>
                    <span className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-bold text-accent">
                      Book
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
              <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">{WHY_HEADING}</h2>
              <p className="mt-3 text-balance text-base leading-relaxed text-ink/75">{WHY_INTRO}</p>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 70}>
                <article className="flex h-full flex-col rounded-3xl bg-mist p-6 ring-1 ring-line">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-navy ring-1 ring-line">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-deep-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.text}</p>
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
              <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">Meet the tutors</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75 md:whitespace-nowrap">
                A few of the team. Enquire and we will match your child with the right specialist.
              </p>
            </Reveal>
            <Link href="/tutors" className="text-sm font-bold text-navy">
              Learn more
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {TUTORS.map((tutor, i) => (
              <Reveal key={tutor.name} delayMs={i * 70}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-line">
                  <div className="flex items-center gap-3 lg:min-h-[3.75rem]">
                    <TutorAvatar
                      name={tutor.name}
                      photo={tutor.photo}
                      focus={tutor.photoFocus}
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
            <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">Simple lesson prices</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/75">
              One-to-one lessons, online or in person. In-person rates depend on travel. Group sessions have a maximum of five
              students.
            </p>
            <Link
              href="/prices"
              className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-deep-navy"
            >
              See the full price list
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-sky p-6 ring-1 ring-line">
              <p className="text-sm font-bold text-navy">In person</p>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-deep-navy">From £25</p>
              <p className="mt-2 text-sm text-ink/70">Reception, up to £50 for A level</p>
            </div>
            <div className="rounded-3xl bg-accent-soft p-6 ring-1 ring-line">
              <p className="text-sm font-bold text-accent">Online</p>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-deep-navy">From £25</p>
              <p className="mt-2 text-sm text-ink/70">Reception, up to £45 for A level</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Link
            href="/reviews"
            aria-label="Read TutorVille reviews"
            className="group flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-sky to-accent-soft px-6 py-8 ring-1 ring-line transition hover:ring-navy sm:flex-row sm:items-center sm:px-10 sm:py-10"
          >
            <div>
              <p className="text-sm font-bold text-accent">Reviews</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-deep-navy sm:text-3xl md:whitespace-nowrap">
                See what parents say about TutorVille
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 md:whitespace-nowrap">
                Watch video reviews and read written reviews from parents.
              </p>
            </div>
            <span className="inline-flex flex-shrink-0 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white transition group-hover:bg-deep-navy">
              Read reviews
            </span>
          </Link>
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
            <Link href="/book" className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-bold text-white hover:bg-[#8E3D6A]">
              Book your free lesson
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
