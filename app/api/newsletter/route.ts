import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas";
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

  const parsed = newsletterSchema.safeParse(body);
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

  const fields: Field[] = [{ label: "Email", value: data.email }];
  const meta: Field[] = [
    { label: "Source", value: data.source ?? "newsletter" },
    { label: "Submitted", value: submittedAt },
  ];

  try {
    await sendEmailViaResend({
      to: defaultRecipient(),
      from: defaultFromAddress(),
      subject: `AI Survival newsletter signup · ${data.email}`,
      text: renderTextBody("New newsletter signup on survivalschool.ai.", fields, meta),
      html: renderHtmlBody("New newsletter signup on survivalschool.ai.", fields, meta),
      replyTo: data.email,
    });
  } catch (err) {
    console.error("[newsletter] email forward failed", err);
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("[newsletter] received (no Resend configured)", { ...data, submittedAt });
  }

  return NextResponse.json({ success: true });
}
