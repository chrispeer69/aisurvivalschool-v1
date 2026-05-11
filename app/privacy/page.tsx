import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AI Survival School privacy policy.",
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-editorial px-5 sm:px-8 py-24 sm:py-32 max-w-3xl">
        <p className="eyebrow text-orange-deep">Legal</p>
        <h1 className="display mt-5 text-[2.4rem] sm:text-[3.2rem]">Privacy Policy</h1>
        <p className="serif italic mt-4 text-ink-mid">Effective date: 2026-05-10</p>
        <hr className="hairline text-ink my-10" />

        <div className="space-y-6 text-lg text-ink leading-relaxed">
          <p>
            AI Survival School ("we," "us") is operated by Christopher D. Peer / Blue Collar AI in Columbus, Ohio. This page explains what we collect, how we use it, and your rights.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">What we collect</h2>
          <p>
            When you submit a form on this site we collect the information you give us — name, email, business name, phone, industry, message, and similar fields. We do not buy data, scrape data, or collect biometric data. We use a small amount of standard server logging (IP, user-agent, timestamp) for security and abuse prevention.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">How we use it</h2>
          <p>
            We use what you submit to respond to you, to deliver workshops or programs you signed up for, to send the newsletter you opted into, and to keep records of business activity. We do not sell your information to third parties. We do not share it except with the service providers (Resend for email delivery, Vercel for hosting) needed to operate the site.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">Your rights</h2>
          <p>
            Email <a className="text-orange-deep underline" href="mailto:inquiries@bluecollarai.online">inquiries@bluecollarai.online</a> any time to access, correct, or delete the information you&rsquo;ve given us. Newsletter unsubscribe links are in every email.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">Updates</h2>
          <p>
            We&rsquo;ll update this page when our practices change and update the effective date above. This is a placeholder while AI Survival School is pre-launch and will be replaced by a full policy at general release.
          </p>
        </div>

        <p className="mt-12 text-ink-mid">
          Questions? <a className="text-orange-deep underline" href="mailto:inquiries@bluecollarai.online">inquiries@bluecollarai.online</a>
        </p>
      </article>
    </SiteShell>
  );
}
