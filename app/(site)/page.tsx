import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LEVELS, SITE, TUTORS, WHY } from "@/lib/content";

const SUBJECTS = ["Maths", "English", "Sciences", "11+", "Interview prep"];
const AVATARS = ["bg-navy", "bg-[#128A7E]", "bg-accent"];

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-b from-sky to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <Reveal>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-navy shadow-sm ring-1 ring-line">
              Free introductory lesson
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-deep-navy sm:text-5xl lg:text-6xl">
              {SITE.tagline}
            </h1>
            <p className="mt-4 text-lg font-semibold text-navy">{SITE.range}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              Unlock your child&apos;s full potential with a free tailored tutoring experience. We match them with the right tutor
              for their age, subject and learning style.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#d85a1d]"
              >
                Book your free lesson
              </Link>
              <Link
                href="/prices"
                className="inline-flex rounded-full border border-line bg-white px-6 py-3 text-sm font-bold text-deep-navy transition hover:border-navy"
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
            <div className="rounded-3xl border border-line bg-white p-6 shadow-lg shadow-navy/5">
              <p className="text-sm font-bold text-deep-navy">Subjects we cover</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SUBJECTS.map((subject) => (
                  <span key={subject} className="rounded-full bg-sky px-3 py-1.5 text-sm font-semibold text-navy">
                    {subject}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Format", value: "1 to 1" },
                  { label: "Where", value: "Online or home" },
                  { label: "Groups", value: "Max 5" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-mist px-3 py-4">
                    <p className="text-xs font-semibold text-ink/50">{item.label}</p>
                    <p className="mt-1 text-sm font-bold text-deep-navy">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-deep-navy p-5 text-white">
                <p className="text-sm font-semibold text-white/70">Next step</p>
                <p className="mt-1 text-lg font-bold">Tell us the year group. We match the tutor.</p>
                <Link href="/book" className="mt-4 inline-flex text-sm font-bold text-accent-soft">
                  Claim the free lesson →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-4 sm:px-6">
          {LEVELS.map((level) => (
            <span key={level} className="rounded-full bg-mist px-3 py-1.5 text-sm font-semibold text-deep-navy">
              {level}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">Why parents choose TutorVille</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/75">
              Expert Maths and English tutoring from Reception to A level. Lessons follow each child&apos;s learning style and the
              school curriculum for England, Scotland and Wales.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 70}>
                <article className="h-full rounded-3xl border border-line bg-mist p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-extrabold text-navy">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-deep-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">Meet the tutors</h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75">
                A few of the team. Enquire and we will match your child with the right specialist.
              </p>
            </Reveal>
            <Link href="/tutors" className="text-sm font-bold text-navy">
              View all tutors →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {TUTORS.map((tutor, i) => (
              <Reveal key={tutor.name} delayMs={i * 70}>
                <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-extrabold text-white ${AVATARS[i]}`}>
                    {tutor.name.slice(0, 1)}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-deep-navy">{tutor.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{tutor.role}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink/80">
                    {tutor.highlights.slice(0, 3).map((item) => (
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

      <section id="reviews" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">Reviews</h2>
            <p className="mt-3 max-w-xl text-base text-ink/70">Written screenshots and video reviews will go here once they are shared.</p>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article id="written-reviews" className="rounded-3xl border border-line bg-mist p-6">
              <h3 className="text-xl font-bold text-deep-navy">Written Reviews</h3>
              <p className="mt-2 text-sm text-ink/70">Parent screenshots will be placed in these frames.</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="flex min-h-32 items-center justify-center rounded-2xl border border-dashed border-navy/30 bg-white px-3 text-center text-xs font-semibold text-navy">
                  Screenshot coming soon
                </div>
                <div className="flex min-h-32 items-center justify-center rounded-2xl border border-dashed border-navy/30 bg-white px-3 text-center text-xs font-semibold text-navy">
                  Screenshot coming soon
                </div>
              </div>
            </article>
            <article id="video-reviews" className="rounded-3xl border border-line bg-mist p-6">
              <h3 className="text-xl font-bold text-deep-navy">Video Reviews</h3>
              <p className="mt-2 text-sm text-ink/70">Family clips will be embedded in this space.</p>
              <div className="mt-5 flex min-h-32 items-center justify-center rounded-2xl border border-dashed border-navy/30 bg-white px-4 text-center text-sm font-semibold text-navy">
                Video coming soon
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-sky">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 sm:px-6 lg:grid-cols-2">
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
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-ink/55">In person</p>
              <p className="mt-2 text-4xl font-extrabold tracking-tight text-deep-navy">From £25</p>
              <p className="mt-2 text-sm text-ink/65">Reception, up to £50 for A Level</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-ink/55">Online</p>
              <p className="mt-2 text-4xl font-extrabold tracking-tight text-deep-navy">From £25</p>
              <p className="mt-2 text-sm text-ink/65">Reception, up to £45 for A Level</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Ready for a free lesson?</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
              Share your child&apos;s year group and subject. We will confirm a time with you.
            </p>
          </div>
          <Link href="/book" className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-[#d85a1d]">
            Book your free lesson
          </Link>
        </div>
      </section>
    </main>
  );
}
