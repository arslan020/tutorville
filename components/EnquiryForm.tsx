"use client";

import { useState } from "react";
import { SITE, SUBJECTS, YEAR_GROUPS } from "@/lib/content";

const fieldClass =
  "mt-1 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-sky";

type EnquiryFormProps = {
  intent: "book" | "contact";
};

export default function EnquiryForm({ intent }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("honey")) return;

    const lines = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
    ];

    if (intent === "book") {
      lines.push(
        `Year group: ${data.get("year") || ""}`,
        `Subject: ${data.get("subject") || ""}`,
        `Format: ${data.get("format") || ""}`,
        `Preferred date: ${data.get("date") || ""}`,
        `Preferred time: ${data.get("time") || ""}`
      );
    }

    lines.push("", String(data.get("message") || ""));

    const subject = intent === "book" ? "Free lesson enquiry — TutorVille" : "Website enquiry — TutorVille";
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
      <input type="text" name="honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="space-y-4">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required={intent === "book"} />

        {intent === "book" && (
          <>
            <div>
              <label htmlFor="year" className="text-sm font-medium text-ink">
                Child&apos;s year group *
              </label>
              <select id="year" name="year" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a level
                </option>
                {YEAR_GROUPS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium text-ink">
                Subject *
              </label>
              <select id="subject" name="subject" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a subject
                </option>
                {SUBJECTS.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="format" className="text-sm font-medium text-ink">
                Lesson format
              </label>
              <select id="format" name="format" className={fieldClass} defaultValue="Either">
                <option>In person</option>
                <option>Online</option>
                <option>Either</option>
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Preferred date" name="date" type="date" />
              <Field label="Preferred time" name="time" type="time" />
            </div>
          </>
        )}

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea id="message" name="message" rows={5} className={fieldClass} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
      >
        {intent === "book" ? "Request your free lesson" : "Send message"}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-ink/60">
        This opens your email app addressed to {SITE.email}, so the enquiry reaches TutorVille directly.
      </p>
      {status === "sent" && (
        <p className="mt-3 text-sm text-navy">If your email app opened, send the message to finish the enquiry.</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {required ? " *" : ""}
      </label>
      <input id={name} name={name} type={type} required={required} className={fieldClass} />
    </div>
  );
}
