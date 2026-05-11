"use client";

import { useState } from "react";
import { newsletterSchema } from "@/lib/schemas";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

type Props = {
  source?: string;
  tone?: "light" | "dark";
};

export function NewsletterForm({ source = "newsletter", tone = "dark" }: Props) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [error, setError] = useState<string | undefined>();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(undefined);
    const fd = new FormData(e.currentTarget);
    const payload = {
      email: String(fd.get("email") ?? ""),
      source,
    };
    const parsed = newsletterSchema.safeParse(payload);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        setStatus({ state: "error", message: "Couldn't sign you up. Try again." });
        return;
      }
      setStatus({ state: "success" });
    } catch {
      setStatus({ state: "error", message: "Network error. Try again." });
    }
  }

  const isDark = tone === "dark";

  if (status.state === "success") {
    return (
      <p className={`serif italic text-lg ${isDark ? "text-paper" : "text-ink"}`}>
        You&rsquo;re in. Watch your inbox Tuesday.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-xl">
      <input
        name="email"
        type="email"
        required
        placeholder="you@yourbusiness.com"
        autoComplete="email"
        className="field flex-1"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="btn-primary justify-center"
        disabled={status.state === "submitting"}
      >
        {status.state === "submitting" ? "…" : "Subscribe"}
      </button>
      {error ? (
        <p className={`sm:basis-full text-xs ${isDark ? "text-orange" : "text-orange-deep"}`}>
          {error}
        </p>
      ) : null}
      {status.state === "error" ? (
        <p className={`sm:basis-full text-xs ${isDark ? "text-orange" : "text-orange-deep"}`}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
