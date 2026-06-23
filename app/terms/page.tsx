import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "AI Survival School terms of service.",
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-editorial px-5 sm:px-8 py-24 sm:py-32 max-w-3xl">
        <p className="eyebrow text-orange-deep">Legal</p>
        <h1 className="display mt-5 text-[2.4rem] sm:text-[3.2rem]">Terms of Service</h1>
        <p className="serif italic mt-4 text-ink-mid">Effective date: 2026-05-10</p>
        <hr className="hairline text-ink my-10" />

        <div className="space-y-6 text-lg text-ink leading-relaxed">
          <p>
            By using aisurvivalschool.online, by submitting an inquiry, by attending a workshop, or by enrolling in a cohort or course you agree to these terms. AI Survival School is operated by Christopher D. Peer / Blue Collar AI.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">The site</h2>
          <p>
            This site is provided as-is. We do our best to keep it accurate and online, but we don&rsquo;t guarantee uninterrupted availability or that everything is current. Pricing and dates are subject to change before you formally enroll.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">Workshops, cohorts, and courses</h2>
          <p>
            When you enroll in a paid program you&rsquo;ll get a separate written agreement covering payment, delivery, and refunds. Until then nothing on this site constitutes a binding contract — it&rsquo;s information about what we offer.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">Educational only</h2>
          <p>
            Everything we teach is for educational purposes. We are not your lawyer, accountant, or compliance advisor. AI tools and outputs change fast. You&rsquo;re responsible for the decisions you make using what you learn.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">Intellectual property</h2>
          <p>
            Curriculum, prompts libraries, written content, and recordings produced by AI Survival School are our property. You can use them inside your own business; you can&rsquo;t resell or republish them.
          </p>

          <h2 className="display-md text-[1.6rem] mt-10">Updates</h2>
          <p>
            We may update these terms; the effective date above will reflect the change. Continued use of the site after a change means you accept the updated terms. This is a placeholder while AI Survival School is pre-launch and will be replaced by a full agreement at general release.
          </p>
        </div>

        <p className="mt-12 text-ink-mid">
          Questions? <a className="text-orange-deep underline" href="mailto:inquiries@bluecollarai.online">inquiries@bluecollarai.online</a>
        </p>
      </article>
    </SiteShell>
  );
}
