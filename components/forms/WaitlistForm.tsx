"use client";

import { useState } from "react";
import { businessTypes, waitlistSchema } from "@/lib/schemas";
import { FormField, FormSelect } from "./Field";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

type Props = {
  source: string;
  submitLabel?: string;
  successHeadline?: string;
  successBody?: string;
};

export function WaitlistForm({
  source,
  submitLabel = "Join the waitlist",
  successHeadline = "You're on the list.",
  successBody = "You'll get the next-cohort dates and early-bird pricing as soon as they're locked.",
}: Props) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      businessType: String(fd.get("businessType") ?? ""),
      industry: String(fd.get("industry") ?? ""),
      source,
    };

    const parsed = waitlistSchema.safeParse(payload);
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
      const res = await fetch("/api/waitlist", {
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
          {successHeadline}
        </p>
        <p className="mt-3 text-ink-mid leading-relaxed">{successBody}</p>
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
        <FormField label="Full name" name="fullName" required autoComplete="name" error={errors.fullName} idPrefix={`wl-${source}`} />
        <FormField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} idPrefix={`wl-${source}`} />
        <FormSelect label="Your role" name="businessType" required options={businessTypes} error={errors.businessType} idPrefix={`wl-${source}`} placeholder="Select role" />
        <FormField label="Industry / business type" name="industry" autoComplete="off" error={errors.industry} idPrefix={`wl-${source}`} placeholder="e.g. towing, HVAC, retail" />

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
            {status.state === "submitting" ? "Submitting…" : submitLabel}
          </button>
          <span className="text-xs text-ink-soft">No spam. One email when seats open.</span>
        </div>
      </div>
    </form>
  );
}
