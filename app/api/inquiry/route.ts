import { NextResponse } from "next/server";
import { workshopInquirySchema } from "@/lib/schemas";
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

  const parsed = workshopInquirySchema.safeParse(body);
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

  const fields: Field[] = [
    { label: "Name", value: data.fullName },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone || "—" },
    { label: "Business", value: data.company },
    { label: "Industry", value: data.industry },
    { label: "Group size", value: data.groupSize },
    { label: "Preferred date range", value: data.dateRange },
  ];
  if (data.message) {
    fields.push({ label: "Message", value: data.message });
  }

  const meta: Field[] = [
    { label: "Source", value: data.source ?? "workshops" },
    { label: "Submitted", value: submittedAt },
  ];

  const subject = `New AI Survival School workshop inquiry · ${data.fullName} · ${data.company}`;
  const intro =
    "A new workshop inquiry was submitted on aisurvivalschool.online. Reply directly to reach the requester.";

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
    console.error("[workshop-inquiry] email forward failed", err);
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("[workshop-inquiry] received (no Resend configured)", { ...data, submittedAt });
  }

  return NextResponse.json({ success: true });
}
