import type { SiteInfo } from "@/lib/content";

export type EnquiryEmailInput = {
  heading: string;
  rows: [string, string][];
  replyName: string;
  site: SiteInfo;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildEnquiryEmail({ heading, rows, replyName, site }: EnquiryEmailInput) {
  const detailRows = rows
    .map(([label, value], index) => {
      const bg = index % 2 === 0 ? "#FBF8FC" : "#FFFFFF";
      return `
        <tr>
          <td width="36%" valign="top" bgcolor="${bg}" style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#5A589E;background-color:${bg};border-bottom:1px solid #E6E0F0;">
            ${escapeHtml(label)}
          </td>
          <td valign="top" bgcolor="${bg}" style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2C2844;background-color:${bg};border-bottom:1px solid #E6E0F0;white-space:pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>`;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background-color:#EEEDF8;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#EEEDF8" style="background-color:#EEEDF8;margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td align="center" bgcolor="#FFFFFF" style="background-color:#FFFFFF;padding:28px 24px 20px;border:1px solid #E6E0F0;border-bottom:0;">
              <img src="cid:tutorville-logo" alt="TutorVille" width="180" style="display:block;width:180px;max-width:180px;height:auto;border:0;" />
              <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.04em;color:#5A589E;">
                ${escapeHtml(site.tagline)}
              </p>
            </td>
          </tr>
          <tr>
            <td height="6" bgcolor="#A84D80" style="background-color:#A84D80;font-size:0;line-height:6px;">&nbsp;</td>
          </tr>
          <tr>
            <td bgcolor="#FFFFFF" style="background-color:#FFFFFF;padding:28px 24px 8px;border-left:1px solid #E6E0F0;border-right:1px solid #E6E0F0;">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:#A84D80;">
                New website enquiry
              </p>
              <h1 style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.3;color:#34315F;">
                ${escapeHtml(heading)}
              </h1>
              <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#2C2844;">
                A parent submitted this from the TutorVille website. Reply to this email to contact ${escapeHtml(replyName)}.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #E6E0F0;border-radius:12px;overflow:hidden;">
                ${detailRows}
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#FFFFFF" style="background-color:#FFFFFF;padding:20px 24px 28px;border:1px solid #E6E0F0;border-top:0;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#5A589E;">
                ${escapeHtml(site.brandStatement)}
              </p>
            </td>
          </tr>
          <tr>
            <td bgcolor="#34315F" style="background-color:#34315F;padding:22px 24px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;color:#FFFFFF;">
                ${escapeHtml(site.name)}
              </p>
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#F6E4EE;">
                <a href="tel:${site.phoneTel}" style="color:#F6E4EE;text-decoration:none;">${escapeHtml(site.phoneDisplay)}</a>
                &nbsp;&middot;&nbsp;
                <a href="mailto:${site.email}" style="color:#F6E4EE;text-decoration:none;">${escapeHtml(site.email)}</a>
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;">
                <a href="${site.url}" style="color:#FFFFFF;text-decoration:underline;">${escapeHtml(site.url.replace(/^https?:\/\//, ""))}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    site.name,
    heading,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    `Reply to this email to contact ${replyName}.`,
    site.brandStatement,
    `${site.phoneDisplay} · ${site.email}`,
    site.url,
  ].join("\n");

  return { html, text };
}
