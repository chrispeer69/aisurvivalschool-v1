"use client";

import { useState } from "react";
import { contactReasons, contactSchema } from "@/lib/schemas";
import { FormField, FormSelect, FormTextarea } from "./Field";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      reason: String(fd.get("reason") ?? ""),
      message: String(fd.get("message") ?? ""),
      source: "contact",
    };

    const parsed = contactSchema.safeParse(payload);
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
      const res = await fetch("/api/contact", {
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
          Got it. I&rsquo;ll get back to you.
        </p>
        <p className="mt-3 text-ink-mid leading-relaxed">
          You&rsquo;ll hear from Chris personally within two business days.
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
        <FormField label="Name" name="fullName" required autoComplete="name" error={errors.fullName} idPrefix="ct" />
        <FormField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} idPrefix="ct" />
        <div className="sm:col-span-2">
          <FormSelect
            label="Reason for reaching out"
            name="reason"
            required
            options={contactReasons}
            error={errors.reason}
            idPrefix="ct"
            placeholder="What's this about?"
          />
        </div>
        <FormTextarea label="Message" name="message" rows={5} idPrefix="ct" optional placeholder="Tell me what you're working on, what's stuck, or what you want to learn." />

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
            {status.state === "submitting" ? "Sending…" : "Send message"}
          </button>
          <span className="text-xs text-ink-soft">Replies within two business days.</span>
        </div>
      </div>
    </form>
  );
}
