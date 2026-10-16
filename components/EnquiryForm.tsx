"use client";

import { useState } from "react";
import type { SiteInfo } from "@/lib/content";

const fieldClass =
  "mt-1 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-sky";

type EnquiryFormProps = {
  intent: "book" | "contact";
  site: SiteInfo;
  subjects: string[];
  yearGroups: string[];
  enquiryNote: string;
};

export default function EnquiryForm({ intent, site, subjects, yearGroups, enquiryNote }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("honey")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");

    const payload: Record<string, string> = {
      intent,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      honey: String(data.get("honey") || ""),
    };

    if (intent === "book") {
      payload.year = String(data.get("year") || "");
      payload.subject = String(data.get("subject") || "");
      payload.format = String(data.get("format") || "");
      payload.date = String(data.get("date") || "");
      payload.time = String(data.get("time") || "");
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setError(result.error || "Could not send the message. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError("Could not send the message. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
        <p className="text-lg font-extrabold tracking-tight text-deep-navy">Thank you</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">
          TutorVille has received your message and will be in touch shortly.
        </p>
      </div>
    );
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
                {yearGroups.map((year) => (
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
                {subjects.map((subject) => (
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
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8E3D6A] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending"
          ? "Sending…"
          : intent === "book"
            ? "Request your free lesson"
            : "Send message"}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-ink/60 sm:whitespace-nowrap">
        {enquiryNote}{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-navy underline underline-offset-2">
          {site.email}
        </a>
      </p>
      {status === "error" && (
        <p className="mt-3 text-sm text-accent">
          {error} You can also email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
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
