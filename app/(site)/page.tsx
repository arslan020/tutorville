import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LEVELS, SITE, TUTORS, VIDEO_REVIEWS, WHY, WRITTEN_REVIEWS } from "@/lib/content";

const SUBJECTS = ["Maths", "English", "Sciences", "11+", "Interview prep"];
const AVATARS = ["bg-navy", "bg-[#7E6BB5]", "bg-accent"];

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-sky via-white to-white">
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
            <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_50px_rgba(52,49,95,0.08)] ring-1 ring-line sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-deep-navy">Subjects we cover</p>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">1 to 1</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {SUBJECTS.map((subject) => (
                  <span key={subject} className="rounded-full bg-sky px-3 py-1.5 text-sm font-semibold text-navy">
                    {subject}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {LEVELS.map((level) => (
                  <span
                    key={level}
                    className="rounded-xl bg-mist px-2 py-2.5 text-center text-xs font-bold text-deep-navy sm:text-sm"
                  >
                    {level}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-mist px-4 py-3">
                  <p className="text-xs font-semibold text-ink/50">Where</p>
                  <p className="mt-1 text-sm font-bold text-deep-navy">Online or home</p>
                </div>
                <div className="rounded-2xl bg-mist px-4 py-3">
                  <p className="text-xs font-semibold text-ink/50">Groups</p>
                  <p className="mt-1 text-sm font-bold text-deep-navy">Max 5</p>
                </div>
              </div>
              <Link
                href="/book"
                className="mt-5 flex items-center justify-between rounded-2xl bg-deep-navy px-4 py-4 text-white"
              >
                <span>
                  <span className="block text-xs font-semibold text-white/70">Next step</span>
                  <span className="mt-0.5 block text-sm font-bold">Tell us the year group. We match the tutor.</span>
                </span>
                <span className="text-sm font-bold text-accent-soft">Book</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">Why parents choose TutorVille</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                Expert Maths and English tutoring from Reception to A level. Lessons follow each child&apos;s learning style and
                the school curriculum for England, Scotland and Wales.
              </p>
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
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75">
                A few of the team. Enquire and we will match your child with the right specialist.
              </p>
            </Reveal>
            <Link href="/tutors" className="text-sm font-bold text-navy">
              View all tutors
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {TUTORS.map((tutor, i) => (
              <Reveal key={tutor.name} delayMs={i * 70}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-line">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-extrabold text-white ${AVATARS[i]}`}>
                      {tutor.name.slice(0, 1)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-deep-navy">{tutor.name}</h3>
                      <p className="text-xs font-semibold text-navy">{tutor.highlights[0]}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/75">{tutor.role}</p>
                  <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-ink/80">
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
            <div className="max-w-xl">
              <p className="text-sm font-bold text-accent">Reviews</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-deep-navy sm:text-3xl">
                See what parents say about TutorVille
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Read written reviews and watch video reviews from parents.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-2xl bg-white px-4 py-3 text-center ring-1 ring-line">
                <span className="block text-2xl font-extrabold text-deep-navy">{WRITTEN_REVIEWS.length}</span>
                <span className="block text-xs font-bold text-navy">Written</span>
              </span>
              <span className="rounded-2xl bg-white px-4 py-3 text-center ring-1 ring-line">
                <span className="block text-2xl font-extrabold text-deep-navy">{VIDEO_REVIEWS.length}</span>
                <span className="block text-xs font-bold text-navy">Video</span>
              </span>
              <span className="inline-flex rounded-full bg-navy px-5 py-3 text-sm font-bold text-white transition group-hover:bg-deep-navy">
                Read reviews
              </span>
            </div>
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
