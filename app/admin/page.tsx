"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import {
  Area,
  Field,
  ImageUpload,
  RemoveButton,
  Section,
  StringList,
  addButtonClass,
  inputClass,
  labelClass,
} from "@/components/admin/fields";
import { DEFAULT_CONTENT, type SiteContent } from "@/lib/content";

const TABS = [
  { id: "site", label: "Site" },
  { id: "home", label: "Home" },
  { id: "tutors", label: "Tutors" },
  { id: "prices", label: "Prices" },
  { id: "reviews", label: "Reviews" },
  { id: "book", label: "Book" },
  { id: "contact", label: "Contact" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent | null>(null);
  const [storageConfigured, setStorageConfigured] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "error"; message: string } | null>(null);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [tab, setTab] = useState<TabId>("site");
  const contentRef = useRef<SiteContent | null>(null);

  useEffect(() => {
    contentRef.current = content;
  }, [content]);

  useEffect(() => {
    fetch("/api/admin/content")
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/admin/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        setContent(data.content);
        setStorageConfigured(data.storageConfigured);
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function persist(payload: SiteContent, message: string) {
    setSaving(true);
    setStatus(null);
    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    if (res.ok) {
      setStatus({ type: "ok", message });
      return;
    }
    const data = await res.json().catch(() => null);
    setStatus({ type: "error", message: data?.error || "Failed to save changes." });
  }

  async function handleSave() {
    if (!contentRef.current) return;
    await persist(contentRef.current, "Changes saved. The live site is updated.");
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json().catch(() => null);
    if (!res.ok) throw new Error(data?.error || "Upload failed.");
    return data.url as string;
  }

  async function handleUpload(key: string, file: File, update: (prev: SiteContent, url: string) => SiteContent) {
    setUploadingKey(key);
    setStatus(null);
    try {
      const url = await uploadImage(file);
      const prev = contentRef.current;
      if (!prev) return;
      const next = update(prev, url);
      contentRef.current = next;
      setContent(next);
      await persist(next, "Photo uploaded and saved. The live site is updated.");
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Upload failed." });
    } finally {
      setUploadingKey(null);
    }
  }

  if (loading) {
    return <main className="flex min-h-screen items-center justify-center bg-mist text-ink">Loading…</main>;
  }
  if (!content) return null;

  return (
    <main className="min-h-screen bg-mist pb-24">
      <header className="sticky top-0 z-10 border-b border-line bg-mist/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-2 px-4 py-3 sm:px-6">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-ink transition hover:text-navy">
              View site ↗
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full bg-accent px-3 py-2 text-sm font-bold text-white transition hover:bg-[#8E3D6A] sm:px-4"
            >
              Log out
            </button>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3 sm:px-6">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                tab === item.id ? "bg-navy text-white" : "bg-white text-ink/70 hover:text-navy"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-6 px-5 py-8 sm:px-6">
        {!storageConfigured && (
          <p className="rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Storage isn&apos;t connected yet, so changes can&apos;t be saved. Connect a Neon database to this project
            in the Vercel dashboard (Storage tab), then redeploy.
          </p>
        )}

        {tab === "site" && (
          <>
            <Section title="Brand" description="Used in the header, footer and across the site.">
              <Field label="Name" value={content.site.name} onChange={(name) => setContent({ ...content, site: { ...content.site, name } })} />
              <Area label="Tagline" value={content.site.tagline} onChange={(tagline) => setContent({ ...content, site: { ...content.site, tagline } })} rows={2} />
              <Field label="Range" value={content.site.range} onChange={(range) => setContent({ ...content, site: { ...content.site, range } })} />
              <Area label="Brand statement" value={content.site.brandStatement} onChange={(brandStatement) => setContent({ ...content, site: { ...content.site, brandStatement } })} rows={2} />
              <Field label="Website URL" value={content.site.url} onChange={(url) => setContent({ ...content, site: { ...content.site, url } })} />
            </Section>
            <Section title="Contact details">
              <Field label="Contact name" value={content.site.contactName} onChange={(contactName) => setContent({ ...content, site: { ...content.site, contactName } })} />
              <Field label="Email" value={content.site.email} onChange={(email) => setContent({ ...content, site: { ...content.site, email } })} />
              <Field label="Phone display" value={content.site.phoneDisplay} onChange={(phoneDisplay) => setContent({ ...content, site: { ...content.site, phoneDisplay } })} />
              <Field label="Phone tel link" value={content.site.phoneTel} onChange={(phoneTel) => setContent({ ...content, site: { ...content.site, phoneTel } })} />
            </Section>
            <Section title="Navigation">
              {content.nav.map((link, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="grid w-full gap-2 sm:grid-cols-2">
                    <input
                      className={inputClass}
                      placeholder="Label"
                      value={link.label}
                      onChange={(e) => {
                        const nav = [...content.nav];
                        nav[i] = { ...nav[i], label: e.target.value };
                        setContent({ ...content, nav });
                      }}
                    />
                    <input
                      className={inputClass}
                      placeholder="/page"
                      value={link.href}
                      onChange={(e) => {
                        const nav = [...content.nav];
                        nav[i] = { ...nav[i], href: e.target.value };
                        setContent({ ...content, nav });
                      }}
                    />
                  </div>
                  <RemoveButton label="Remove link" onClick={() => setContent({ ...content, nav: content.nav.filter((_, idx) => idx !== i) })} />
                </div>
              ))}
              <button type="button" className={addButtonClass} onClick={() => setContent({ ...content, nav: [...content.nav, { label: "", href: "/" }] })}>
                + Add link
              </button>
            </Section>
          </>
        )}

        {tab === "home" && (
          <>
            <Section title="Hero">
              <Field label="Badge" value={content.home.badge} onChange={(badge) => setContent({ ...content, home: { ...content.home, badge } })} />
              <Area label="Intro" value={content.home.intro} onChange={(intro) => setContent({ ...content, home: { ...content.home, intro } })} />
              <Field label="Book button" value={content.home.bookCta} onChange={(bookCta) => setContent({ ...content, home: { ...content.home, bookCta } })} />
              <Field label="Prices button" value={content.home.pricesCta} onChange={(pricesCta) => setContent({ ...content, home: { ...content.home, pricesCta } })} />
            </Section>
            <Section title="Hero card">
              <Field label="Subjects heading" value={content.home.subjectsHeading} onChange={(subjectsHeading) => setContent({ ...content, home: { ...content.home, subjectsHeading } })} />
              <StringList label="Subjects" values={content.home.subjects} onChange={(subjects) => setContent({ ...content, home: { ...content.home, subjects } })} addLabel="+ Add subject" />
              <StringList label="Levels" values={content.home.levels} onChange={(levels) => setContent({ ...content, home: { ...content.home, levels } })} addLabel="+ Add level" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Location label" value={content.home.locationLabel} onChange={(locationLabel) => setContent({ ...content, home: { ...content.home, locationLabel } })} />
                <Field label="Location value" value={content.home.locationValue} onChange={(locationValue) => setContent({ ...content, home: { ...content.home, locationValue } })} />
                <Field label="1 to 1" value={content.home.oneToOne} onChange={(oneToOne) => setContent({ ...content, home: { ...content.home, oneToOne } })} />
                <Field label="Groups label" value={content.home.groupsLabel} onChange={(groupsLabel) => setContent({ ...content, home: { ...content.home, groupsLabel } })} />
                <Field label="Groups value" value={content.home.groupsValue} onChange={(groupsValue) => setContent({ ...content, home: { ...content.home, groupsValue } })} />
              </div>
              <Field label="Next step label" value={content.home.nextStepLabel} onChange={(nextStepLabel) => setContent({ ...content, home: { ...content.home, nextStepLabel } })} />
              <Field label="Next step text" value={content.home.nextStepText} onChange={(nextStepText) => setContent({ ...content, home: { ...content.home, nextStepText } })} />
              <Field label="Book chip" value={content.home.bookChip} onChange={(bookChip) => setContent({ ...content, home: { ...content.home, bookChip } })} />
            </Section>
            <Section title="Why TutorVille">
              <Field label="Heading" value={content.home.whyHeading} onChange={(whyHeading) => setContent({ ...content, home: { ...content.home, whyHeading } })} />
              <Area label="Intro" value={content.home.whyIntro} onChange={(whyIntro) => setContent({ ...content, home: { ...content.home, whyIntro } })} rows={4} />
              {content.home.why.map((item, i) => (
                <div key={i} className="rounded-2xl bg-mist p-4 ring-1 ring-line">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-bold text-navy">Card {i + 1}</p>
                    <RemoveButton label="Remove card" onClick={() => setContent({ ...content, home: { ...content.home, why: content.home.why.filter((_, idx) => idx !== i) } })} />
                  </div>
                  <div className="space-y-3">
                    <Field
                      label="Number"
                      value={item.number}
                      onChange={(number) => {
                        const why = [...content.home.why];
                        why[i] = { ...why[i], number };
                        setContent({ ...content, home: { ...content.home, why } });
                      }}
                    />
                    <Field
                      label="Title"
                      value={item.title}
                      onChange={(title) => {
                        const why = [...content.home.why];
                        why[i] = { ...why[i], title };
                        setContent({ ...content, home: { ...content.home, why } });
                      }}
                    />
                    <Area
                      label="Text"
                      value={item.text}
                      rows={5}
                      onChange={(text) => {
                        const why = [...content.home.why];
                        why[i] = { ...why[i], text };
                        setContent({ ...content, home: { ...content.home, why } });
                      }}
                    />
                  </div>
                </div>
              ))}
              <button type="button" className={addButtonClass} onClick={() => setContent({ ...content, home: { ...content.home, why: [...content.home.why, { number: String(content.home.why.length + 1), title: "", text: "" }] } })}>
                + Add card
              </button>
            </Section>
            <Section title="Home tutors, prices and reviews">
              <Field label="Tutors heading" value={content.home.tutorsHeading} onChange={(tutorsHeading) => setContent({ ...content, home: { ...content.home, tutorsHeading } })} />
              <Field label="Tutors intro" value={content.home.tutorsIntro} onChange={(tutorsIntro) => setContent({ ...content, home: { ...content.home, tutorsIntro } })} />
              <Field label="Tutors link" value={content.home.tutorsCta} onChange={(tutorsCta) => setContent({ ...content, home: { ...content.home, tutorsCta } })} />
              <Field label="Prices heading" value={content.home.pricesHeading} onChange={(pricesHeading) => setContent({ ...content, home: { ...content.home, pricesHeading } })} />
              <Area label="Prices intro" value={content.home.pricesIntro} onChange={(pricesIntro) => setContent({ ...content, home: { ...content.home, pricesIntro } })} />
              <Field label="Prices link" value={content.home.pricesListCta} onChange={(pricesListCta) => setContent({ ...content, home: { ...content.home, pricesListCta } })} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="In person label" value={content.home.inPersonLabel} onChange={(inPersonLabel) => setContent({ ...content, home: { ...content.home, inPersonLabel } })} />
                <Field label="In person from" value={content.home.inPersonFrom} onChange={(inPersonFrom) => setContent({ ...content, home: { ...content.home, inPersonFrom } })} />
                <Field label="In person note" value={content.home.inPersonNote} onChange={(inPersonNote) => setContent({ ...content, home: { ...content.home, inPersonNote } })} />
                <Field label="Online label" value={content.home.onlineLabel} onChange={(onlineLabel) => setContent({ ...content, home: { ...content.home, onlineLabel } })} />
                <Field label="Online from" value={content.home.onlineFrom} onChange={(onlineFrom) => setContent({ ...content, home: { ...content.home, onlineFrom } })} />
                <Field label="Online note" value={content.home.onlineNote} onChange={(onlineNote) => setContent({ ...content, home: { ...content.home, onlineNote } })} />
              </div>
              <Field label="Reviews eyebrow" value={content.home.reviewsEyebrow} onChange={(reviewsEyebrow) => setContent({ ...content, home: { ...content.home, reviewsEyebrow } })} />
              <Field label="Reviews heading" value={content.home.reviewsHeading} onChange={(reviewsHeading) => setContent({ ...content, home: { ...content.home, reviewsHeading } })} />
              <Field label="Reviews intro" value={content.home.reviewsIntro} onChange={(reviewsIntro) => setContent({ ...content, home: { ...content.home, reviewsIntro } })} />
              <Field label="Reviews button" value={content.home.reviewsCta} onChange={(reviewsCta) => setContent({ ...content, home: { ...content.home, reviewsCta } })} />
              <Field label="Closing heading" value={content.home.closingHeading} onChange={(closingHeading) => setContent({ ...content, home: { ...content.home, closingHeading } })} />
              <Area label="Closing lead" value={content.home.closingLead} onChange={(closingLead) => setContent({ ...content, home: { ...content.home, closingLead } })} rows={2} />
              <Field label="Closing button" value={content.home.closingCta} onChange={(closingCta) => setContent({ ...content, home: { ...content.home, closingCta } })} />
            </Section>
          </>
        )}

        {tab === "tutors" && (
          <>
            <Section title="Tutors page">
              <Field label="Eyebrow" value={content.tutorsPage.eyebrow} onChange={(eyebrow) => setContent({ ...content, tutorsPage: { ...content.tutorsPage, eyebrow } })} />
              <Field label="Title" value={content.tutorsPage.title} onChange={(title) => setContent({ ...content, tutorsPage: { ...content.tutorsPage, title } })} />
              <Area label="Lead" value={content.tutorsPage.lead} onChange={(lead) => setContent({ ...content, tutorsPage: { ...content.tutorsPage, lead } })} />
              <Field label="Button" value={content.tutorsPage.cta} onChange={(cta) => setContent({ ...content, tutorsPage: { ...content.tutorsPage, cta } })} />
            </Section>
            {content.tutors.map((tutor, i) => (
              <Section key={i} title={tutor.name || `Tutor ${i + 1}`}>
                <div className="flex justify-end">
                  <RemoveButton label="Remove tutor" onClick={() => setContent({ ...content, tutors: content.tutors.filter((_, idx) => idx !== i) })} />
                </div>
                <Field
                  label="Name"
                  value={tutor.name}
                  onChange={(name) => {
                    const tutors = [...content.tutors];
                    tutors[i] = { ...tutors[i], name };
                    setContent({ ...content, tutors });
                  }}
                />
                <div>
                  <label className={labelClass}>Photo</label>
                  <div className="mt-1">
                    <ImageUpload
                      imageUrl={tutor.photo || ""}
                      uploading={uploadingKey === `tutor-${i}`}
                      onUpload={(file) =>
                        handleUpload(`tutor-${i}`, file, (prev, url) => {
                          const tutors = [...prev.tutors];
                          tutors[i] = { ...tutors[i], photo: url };
                          return { ...prev, tutors };
                        })
                      }
                      onClear={() => {
                        const tutors = [...content.tutors];
                        tutors[i] = { ...tutors[i], photo: "" };
                        setContent({ ...content, tutors });
                      }}
                    />
                  </div>
                </div>
                <Area
                  label="Role"
                  value={tutor.role}
                  rows={2}
                  onChange={(role) => {
                    const tutors = [...content.tutors];
                    tutors[i] = { ...tutors[i], role };
                    setContent({ ...content, tutors });
                  }}
                />
                <StringList
                  label="Highlights"
                  values={tutor.highlights}
                  addLabel="+ Add highlight"
                  onChange={(highlights) => {
                    const tutors = [...content.tutors];
                    tutors[i] = { ...tutors[i], highlights };
                    setContent({ ...content, tutors });
                  }}
                />
              </Section>
            ))}
            <button
              type="button"
              className={addButtonClass}
              onClick={() => setContent({ ...content, tutors: [...content.tutors, { name: "", photo: "", role: "", highlights: [""] }] })}
            >
              + Add tutor
            </button>
          </>
        )}

        {tab === "prices" && (
          <>
            <Section title="Prices page">
              <Field label="Eyebrow" value={content.pricesPage.eyebrow} onChange={(eyebrow) => setContent({ ...content, pricesPage: { ...content.pricesPage, eyebrow } })} />
              <Field label="Title" value={content.pricesPage.title} onChange={(title) => setContent({ ...content, pricesPage: { ...content.pricesPage, title } })} />
              <Area label="Lead" value={content.pricesPage.lead} onChange={(lead) => setContent({ ...content, pricesPage: { ...content.pricesPage, lead } })} />
              <Field label="Session note" value={content.pricesPage.sessionNote} onChange={(sessionNote) => setContent({ ...content, pricesPage: { ...content.pricesPage, sessionNote } })} />
              <Field label="In person title" value={content.pricesPage.inPersonTitle} onChange={(inPersonTitle) => setContent({ ...content, pricesPage: { ...content.pricesPage, inPersonTitle } })} />
              <Field label="Online title" value={content.pricesPage.onlineTitle} onChange={(onlineTitle) => setContent({ ...content, pricesPage: { ...content.pricesPage, onlineTitle } })} />
              <Field label="Button" value={content.pricesPage.cta} onChange={(cta) => setContent({ ...content, pricesPage: { ...content.pricesPage, cta } })} />
            </Section>
            <PriceRows
              title="In person prices"
              rows={content.inPersonPrices}
              onChange={(inPersonPrices) => setContent({ ...content, inPersonPrices })}
            />
            <PriceRows
              title="Online prices"
              rows={content.onlinePrices}
              onChange={(onlinePrices) => setContent({ ...content, onlinePrices })}
            />
          </>
        )}

        {tab === "reviews" && (
          <>
            <Section title="Reviews page">
              <Field label="Eyebrow" value={content.reviewsPage.eyebrow} onChange={(eyebrow) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, eyebrow } })} />
              <Field label="Title" value={content.reviewsPage.title} onChange={(title) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, title } })} />
              <Area label="Lead" value={content.reviewsPage.lead} onChange={(lead) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, lead } })} rows={2} />
              <Field label="Video eyebrow" value={content.reviewsPage.videoEyebrow} onChange={(videoEyebrow) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, videoEyebrow } })} />
              <Field label="Video title" value={content.reviewsPage.videoTitle} onChange={(videoTitle) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, videoTitle } })} />
              <Field label="Video text" value={content.reviewsPage.videoText} onChange={(videoText) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, videoText } })} />
              <Field label="Written eyebrow" value={content.reviewsPage.writtenEyebrow} onChange={(writtenEyebrow) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, writtenEyebrow } })} />
              <Field label="Written title" value={content.reviewsPage.writtenTitle} onChange={(writtenTitle) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, writtenTitle } })} />
              <Field label="Written text" value={content.reviewsPage.writtenText} onChange={(writtenText) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, writtenText } })} />
              <Field label="Closing heading" value={content.reviewsPage.closingHeading} onChange={(closingHeading) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, closingHeading } })} />
              <Area label="Closing lead" value={content.reviewsPage.closingLead} onChange={(closingLead) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, closingLead } })} rows={2} />
              <Field label="Closing button" value={content.reviewsPage.closingCta} onChange={(closingCta) => setContent({ ...content, reviewsPage: { ...content.reviewsPage, closingCta } })} />
            </Section>
            <Section title="Written reviews">
              {content.writtenReviews.map((review, i) => (
                <div key={i} className="rounded-2xl bg-mist p-4 ring-1 ring-line">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-bold text-navy">Review {i + 1}</p>
                    <RemoveButton label="Remove review" onClick={() => setContent({ ...content, writtenReviews: content.writtenReviews.filter((_, idx) => idx !== i) })} />
                  </div>
                  <div className="space-y-3">
                    <Area
                      label="Text"
                      value={review.text}
                      rows={4}
                      onChange={(text) => {
                        const writtenReviews = [...content.writtenReviews];
                        writtenReviews[i] = { ...writtenReviews[i], text };
                        setContent({ ...content, writtenReviews });
                      }}
                    />
                    <Field
                      label="Author"
                      value={review.author}
                      onChange={(author) => {
                        const writtenReviews = [...content.writtenReviews];
                        writtenReviews[i] = { ...writtenReviews[i], author };
                        setContent({ ...content, writtenReviews });
                      }}
                    />
                    <Field
                      label="Note (optional)"
                      value={review.note || ""}
                      onChange={(note) => {
                        const writtenReviews = [...content.writtenReviews];
                        writtenReviews[i] = { ...writtenReviews[i], note };
                        setContent({ ...content, writtenReviews });
                      }}
                    />
                  </div>
                </div>
              ))}
              <button type="button" className={addButtonClass} onClick={() => setContent({ ...content, writtenReviews: [...content.writtenReviews, { text: "", author: "" }] })}>
                + Add review
              </button>
            </Section>
            <Section title="Video reviews" description="File paths on the site, for example /reviews/videos/01.mp4">
              <StringList label="Video files" values={content.videoReviews} onChange={(videoReviews) => setContent({ ...content, videoReviews })} addLabel="+ Add video" />
            </Section>
          </>
        )}

        {tab === "book" && (
          <Section title="Book a free lesson">
            <Field label="Eyebrow" value={content.bookPage.eyebrow} onChange={(eyebrow) => setContent({ ...content, bookPage: { ...content.bookPage, eyebrow } })} />
            <Field label="Title" value={content.bookPage.title} onChange={(title) => setContent({ ...content, bookPage: { ...content.bookPage, title } })} />
            <Area label="Lead" value={content.bookPage.lead} onChange={(lead) => setContent({ ...content, bookPage: { ...content.bookPage, lead } })} rows={2} />
            <Field label="Heading" value={content.bookPage.heading} onChange={(heading) => setContent({ ...content, bookPage: { ...content.bookPage, heading } })} />
            <Area label="Intro. Use {name} and {email} for contact details." value={content.bookPage.intro} onChange={(intro) => setContent({ ...content, bookPage: { ...content.bookPage, intro } })} />
            <StringList label="Steps" values={content.bookPage.steps} onChange={(steps) => setContent({ ...content, bookPage: { ...content.bookPage, steps } })} addLabel="+ Add step" />
            <Field label="Google Calendar URL (optional)" value={content.bookPage.calendarUrl} onChange={(calendarUrl) => setContent({ ...content, bookPage: { ...content.bookPage, calendarUrl } })} />
            <StringList label="Year groups" values={content.yearGroups} onChange={(yearGroups) => setContent({ ...content, yearGroups })} addLabel="+ Add year group" />
            <StringList label="Form subjects" values={content.subjects} onChange={(subjects) => setContent({ ...content, subjects })} addLabel="+ Add subject" />
          </Section>
        )}

        {tab === "contact" && (
          <Section title="Contact page">
            <Field label="Eyebrow" value={content.contactPage.eyebrow} onChange={(eyebrow) => setContent({ ...content, contactPage: { ...content.contactPage, eyebrow } })} />
            <Field label="Title" value={content.contactPage.title} onChange={(title) => setContent({ ...content, contactPage: { ...content.contactPage, title } })} />
            <Area label="Lead" value={content.contactPage.lead} onChange={(lead) => setContent({ ...content, contactPage: { ...content.contactPage, lead } })} />
            <Area label="Note under contact details" value={content.contactPage.note} onChange={(note) => setContent({ ...content, contactPage: { ...content.contactPage, note } })} />
            <Field label="Form footer note" value={content.enquiryNote} onChange={(enquiryNote) => setContent({ ...content, enquiryNote })} />
          </Section>
        )}

        <button type="button" className={addButtonClass} onClick={() => setContent(DEFAULT_CONTENT)}>
          Reset all fields to defaults
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          {status ? (
            <p className={`text-sm ${status.type === "ok" ? "text-navy" : "text-red-600"}`}>{status.message}</p>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#8E3D6A] disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </main>
  );
}

function PriceRows({
  title,
  rows,
  onChange,
}: {
  title: string;
  rows: SiteContent["inPersonPrices"];
  onChange: (rows: SiteContent["inPersonPrices"]) => void;
}) {
  return (
    <Section title={title}>
      {rows.map((row, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="grid w-full gap-2 sm:grid-cols-3">
            <input
              className={inputClass}
              placeholder="Level"
              value={row.level}
              onChange={(e) => {
                const next = [...rows];
                next[i] = { ...next[i], level: e.target.value };
                onChange(next);
              }}
            />
            <input
              className={inputClass}
              placeholder="Price"
              value={row.price}
              onChange={(e) => {
                const next = [...rows];
                next[i] = { ...next[i], price: e.target.value };
                onChange(next);
              }}
            />
            <input
              className={inputClass}
              placeholder="Note"
              value={row.note || ""}
              onChange={(e) => {
                const next = [...rows];
                next[i] = { ...next[i], note: e.target.value };
                onChange(next);
              }}
            />
          </div>
          <RemoveButton label="Remove row" onClick={() => onChange(rows.filter((_, idx) => idx !== i))} />
        </div>
      ))}
      <button type="button" className={addButtonClass} onClick={() => onChange([...rows, { level: "", price: "", note: "" }])}>
        + Add row
      </button>
    </Section>
  );
}
