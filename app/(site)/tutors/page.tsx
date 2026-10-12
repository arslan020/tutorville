import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TutorAvatar from "@/components/TutorAvatar";
import { TUTORS } from "@/lib/content";

export const metadata: Metadata = { title: "Tutors" };

const AVATARS = ["bg-navy", "bg-[#7E6BB5]", "bg-accent"];

export default function TutorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tutors"
        title="Experienced tutors, matched to your child"
        lead="Meet a few of the team. Specialists cover a wide range of ages, subjects and learning needs. Enquire and we will match your child with the right tutor."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:px-6">
          {TUTORS.map((tutor, i) => (
            <Reveal key={tutor.name} delayMs={i * 50}>
              <article className="grid gap-5 rounded-3xl border border-line bg-mist p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-start">
                <TutorAvatar
                  name={tutor.name}
                  photo={tutor.photo}
                  focus={tutor.photoFocus}
                  sizeClass="h-20 w-20 sm:h-24 sm:w-24"
                  textClass="text-2xl"
                  colorClass={AVATARS[i]}
                />
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">{tutor.name}</h2>
                  <p className="mt-1 text-base text-ink/75">{tutor.role}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {tutor.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal>
            <Link
              href="/book"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
            >
              Enquire and get matched
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
