import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsletterBanner } from "@/components/NewsletterBanner";

export const metadata: Metadata = {
  title: "Resources · Free AI training for operators",
  description:
    "Free AI Survival School resources — newsletter, YouTube channel, prompts library, and the AI Survival blog.",
};

const downloads = [
  {
    title: "AI Survival cheat sheet",
    body: "One-page reference. The five prompts every operator should have. Drops at launch.",
    status: "Coming soon",
  },
  {
    title: "Operator prompts library",
    body: "The same prompts I use to run my towing company. Customer service, marketing, hiring, ops.",
    status: "Coming soon",
  },
  {
    title: "Pick your model",
    body: "Claude vs ChatGPT vs Gemini vs Grok vs Perplexity. Plain-English breakdown.",
    status: "Coming soon",
  },
] as const;

export default function ResourcesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Resources"
        headlineParts={[
          { text: "Free stuff. ", italic: false },
          { text: "Top of the funnel.", italic: true },
        ]}
        subhead="Newsletter, YouTube, prompts library, and the blog. The fastest no-cost way to start using AI like an operator."
      />

      <NewsletterBanner source="resources-top" id="newsletter" />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">YouTube</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              Watch me actually use AI in a real business.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-ink-mid leading-relaxed max-w-prose">
              Short videos: real prompts, real screen-share, real outcomes from running a towing company with AI as a co-worker.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 aspect-video bg-steel border border-steel-line relative overflow-hidden">
              <div className="grid-backdrop" aria-hidden />
              <div className="atmosphere-orange" aria-hidden />
              <div className="absolute inset-0 flex items-center justify-center text-paper text-center px-6">
                <div>
                  <p className="eyebrow text-orange">Channel coming soon</p>
                  <p className="serif italic mt-3 text-2xl">
                    YouTube embed lands the day Chris ships the first video.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">Free downloads</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              The prompts library and cheat sheets.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <article className="h-full bg-paper border border-ink/10 p-7 flex flex-col">
                  <span className="chip chip-phase w-fit">{d.status}</span>
                  <h3 className="serif mt-5 text-[1.4rem] leading-tight">{d.title}</h3>
                  <p className="mt-3 text-ink-mid text-sm leading-relaxed flex-1">{d.body}</p>
                  <Link
                    href="#newsletter"
                    className="mt-6 inline-flex items-center gap-2 text-orange-deep hover:text-orange transition-colors text-sm font-semibold"
                  >
                    Get notified →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">The blog</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              Field reports from the operator&rsquo;s seat.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-ink-mid leading-relaxed max-w-prose">
              First posts drop alongside the first cohort. Subscribe to the newsletter and you&rsquo;ll get them as they ship — no need to check back.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
