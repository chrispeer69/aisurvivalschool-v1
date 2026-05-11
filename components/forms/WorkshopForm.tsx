"use client";

import { useState } from "react";
import {
  dateRanges,
  groupSizes,
  industries,
  workshopInquirySchema,
} from "@/lib/schemas";
import { FormField, FormSelect, FormTextarea } from "./Field";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

type Props = { source?: string };

export function WorkshopForm({ source = "workshops" }: Props) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      industry: String(fd.get("industry") ?? ""),
      groupSize: String(fd.get("groupSize") ?? ""),
      dateRange: String(fd.get("dateRange") ?? ""),
      message: String(fd.get("message") ?? ""),
      source,
    };

    const parsed = workshopInquirySchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus({
          state: "error",
          message: body.error ?? "Something went wrong. Please try again.",
        });
        return;
      }
      setStatus({ state: "success" });
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please try again or email inquiries@bluecollarai.online.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div className="border border-green-ok/50 bg-green-ok/5 p-7 sm:p-8">
        <p className="serif italic text-[1.5rem] text-ink leading-tight">
          Inquiry received. Talk soon.
        </p>
        <p className="mt-3 text-ink-mid leading-relaxed">
          Chris will reach out personally within two business days with a custom proposal
          for your group.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-paper border border-ink/10 p-6 sm:p-8 shadow-[0_20px_60px_-40px_rgba(11,14,18,0.4)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Full name" name="fullName" required autoComplete="name" error={errors.fullName} idPrefix="ws" />
        <FormField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} idPrefix="ws" />
        <FormField label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} idPrefix="ws" />
        <FormField label="Business / organization" name="company" required autoComplete="organization" error={errors.company} idPrefix="ws" />
        <FormSelect label="Industry" name="industry" required options={industries} error={errors.industry} idPrefix="ws" placeholder="Select industry" />
        <FormSelect label="Group size" name="groupSize" required options={groupSizes} error={errors.groupSize} idPrefix="ws" placeholder="Approx. headcount" />
        <FormSelect label="Preferred date range" name="dateRange" required options={dateRanges} error={errors.dateRange} idPrefix="ws" placeholder="When are you thinking?" />
        <FormTextarea label="Anything else we should know" name="message" optional rows={4} idPrefix="ws" placeholder="Industry pain points, specific outcomes, location, etc." />

        {status.state === "error" ? (
          <p className="sm:col-span-2 text-sm text-orange-deep">{status.message}</p>
        ) : null}

        <div className="sm:col-span-2 flex flex-wrap items-center gap-4 mt-2">
          <button
            type="submit"
            className="btn-primary"
            disabled={status.state === "submitting"}
            aria-busy={status.state === "submitting"}
          >
            {status.state === "submitting" ? "Sending…" : "Request a workshop"}
          </button>
          <span className="text-xs text-ink-soft">
            Replies within two business days. No spam.
          </span>
        </div>
      </div>
    </form>
  );
}
