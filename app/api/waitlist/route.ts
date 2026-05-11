import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/schemas";
import {
  defaultFromAddress,
  defaultRecipient,
  renderHtmlBody,
  renderTextBody,
  sendEmailViaResend,
  type Field,
} from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed",
        issues: parsed.error.issues.map((i) => ({
          path: i.path,
          message: i.message,
        })),
      },
      { status: 422 },
    );
  }

  const data = parsed.data;
  const submittedAt = new Date().toISOString();
  const sourceLabel = data.source ?? "waitlist";

  const fields: Field[] = [
    { label: "Name", value: data.fullName },
    { label: "Email", value: data.email },
    { label: "Role", value: data.businessType },
  ];
  if (data.industry) {
    fields.push({ label: "Industry", value: data.industry });
  }

  const meta: Field[] = [
    { label: "Source", value: sourceLabel },
    { label: "Submitted", value: submittedAt },
  ];

  const subject = `New AI Survival ${sourceLabel} signup · ${data.fullName}`;
  const intro = `A new ${sourceLabel} signup was submitted on survivalschool.ai. Reply directly to reach them.`;

  try {
    await sendEmailViaResend({
      to: defaultRecipient(),
      from: defaultFromAddress(),
      subject,
      text: renderTextBody(intro, fields, meta),
      html: renderHtmlBody(intro, fields, meta),
      replyTo: data.email,
    });
  } catch (err) {
    console.error("[waitlist] email forward failed", err);
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("[waitlist] received (no Resend configured)", { ...data, submittedAt });
  }

  return NextResponse.json({ success: true });
}
