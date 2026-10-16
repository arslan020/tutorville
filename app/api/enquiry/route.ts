import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max = 500) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (str(body.honey)) {
    return NextResponse.json({ ok: true });
  }

  const intent = body.intent === "book" ? "book" : "contact";
  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const phone = str(body.phone, 40);
  const message = str(body.message, 4000);

  if (!name || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid name and email." }, { status: 400 });
  }

  if (intent === "book" && !phone) {
    return NextResponse.json({ error: "Please enter a phone number." }, { status: 400 });
  }

  const year = str(body.year, 80);
  const subject = str(body.subject, 80);
  const format = str(body.format, 40);
  const date = str(body.date, 40);
  const time = str(body.time, 40);

  if (intent === "book" && (!year || !subject)) {
    return NextResponse.json({ error: "Please choose a year group and subject." }, { status: 400 });
  }

  const heading = intent === "book" ? "Free lesson enquiry" : "Website enquiry";
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
  ];

  if (intent === "book") {
    rows.push(
      ["Year group", year],
      ["Subject", subject],
      ["Format", format || "—"],
      ["Preferred date", date || "—"],
      ["Preferred time", time || "—"]
    );
  }

  rows.push(["Message", message || "—"]);

  const html = `
    <div style="font-family:Arial,sans-serif;color:#2C2844;line-height:1.5">
      <h2 style="margin:0 0 16px">${heading}</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 16px 6px 0;font-weight:bold;vertical-align:top">${label}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(
                value
              )}</td></tr>`
          )
          .join("")}
      </table>
    </div>
  `;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "TutorVille Website <onboarding@resend.dev>",
      to: SITE.email.toLowerCase(),
      replyTo: email,
      subject: `${heading} — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Could not send the message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Could not send the message. Please try again." },
      { status: 502 }
    );
  }
}
