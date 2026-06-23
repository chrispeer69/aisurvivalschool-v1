type EmailPayload = {
  to: string | readonly string[];
  from: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function parseRecipients(to: string | readonly string[]): string[] {
  const raw = Array.isArray(to) ? to : (to as string).split(",");
  return raw.map((s) => s.trim()).filter((s) => s.length > 0);
}

export async function sendEmailViaResend(payload: EmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const recipients = parseRecipients(payload.to);
  if (recipients.length === 0) {
    throw new Error("Resend: no recipient addresses after parsing `to` field");
  }

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: payload.from,
      to: recipients,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
      reply_to: payload.replyTo,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail}`);
  }
}

export function defaultFromAddress(): string {
  return (
    process.env.EMAIL_FROM ??
    "AI Survival School <inquiries@bluecollarai.online>"
  );
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return c;
    }
  });
}

export type Field = { label: string; value: string };

export function renderTextBody(intro: string, fields: Field[], meta: Field[]): string {
  const pad = Math.max(...fields.map((f) => f.label.length)) + 1;
  const fieldLines = fields
    .map((f) => `${f.label.padEnd(pad)}: ${f.value}`)
    .join("\n");
  const metaLines = meta.map((m) => `${m.label}: ${m.value}`).join("\n");
  return `${intro}\n\n${fieldLines}\n\n${metaLines}\n`;
}

export function renderHtmlBody(intro: string, fields: Field[], meta: Field[]): string {
  const rows = fields
    .map(
      (f) => `
        <tr>
          <td style="padding:8px 14px 8px 0;color:#7A8593;font:600 12px/1.4 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;vertical-align:top;">${escapeHtml(f.label)}</td>
          <td style="padding:8px 0;color:#14181E;font:400 15px/1.5 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;white-space:pre-wrap;">${escapeHtml(f.value)}</td>
        </tr>`,
    )
    .join("");

  const metaHtml = meta
    .map(
      (m) =>
        `<div style="color:#7A8593;font:400 12px/1.6 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;">${escapeHtml(m.label)}: ${escapeHtml(m.value)}</div>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="margin:0;background:#FBFAF7;padding:24px;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#FBFAF7;">
    <tr><td>
      <p style="color:#14181E;font:400 15px/1.6 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;margin:0 0 16px;">${escapeHtml(intro)}</p>
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid rgba(20,24,30,0.12);margin-top:8px;">
        ${rows}
      </table>
      <div style="border-top:1px solid rgba(20,24,30,0.12);margin-top:20px;padding-top:14px;">${metaHtml}</div>
    </td></tr>
  </table>
</body></html>`;
}

export function defaultRecipient(): string {
  return process.env.INQUIRY_TO_EMAIL ?? "chris@bluecollarai.online";
}
