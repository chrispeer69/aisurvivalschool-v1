import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsletterBanner } from "@/components/NewsletterBanner";

export const metadata: Metadata = {
  title: "Pick Your Model · Claude vs ChatGPT vs Gemini vs Grok vs Perplexity",
  description:
    "Plain-English guide to the five major AI tools, current as of mid-2026. What they all do the same, what each one is, what each does better, and which to pick.",
};

const models = [
  {
    numeral: "I",
    name: "Claude",
    tagline: "The writer / builder.",
    is: "Best reasoning, coding, and long documents. Most likely to say \"I don't know\" instead of bluffing.",
    better:
      "Coding (tops SWE-bench), long-form writing, complex reasoning, and the lowest \"confident wrong answer\" rate. This is the one I built my SaaS with.",
  },
  {
    numeral: "II",
    name: "ChatGPT",
    tagline: "The all-rounder.",
    is: "Most features in one place: image generation, voice, memory, custom GPTs. The safe default if you only pick one.",
    better:
      "Versatility and ecosystem. Most third-party integrations, the best message volume for $20, and the most polished consumer features.",
  },
  {
    numeral: "III",
    name: "Gemini",
    tagline: "The Google one.",
    is: "Lives inside Gmail, Docs, and Sheets. Huge memory (reads massive files). Native audio and video input.",
    better:
      "Biggest context window (reads 1M tokens — roughly a whole book at once), deepest Google Workspace integration, true audio/video understanding, and the cheapest API.",
  },
  {
    numeral: "IV",
    name: "Grok",
    tagline: "The real-time one.",
    is: "Wired into X / Twitter. Best for \"what's happening right now\" and unfiltered, contrarian takes.",
    better:
      "Live social and news data, speed on simple questions, and a willingness to take a side. Weakness: the highest citation-error rate of the group — verify its claims.",
  },
  {
    numeral: "V",
    name: "Perplexity",
    tagline: "The research one.",
    is: "Acts like a search engine that answers in full sentences with sources cited. Built to show its work.",
    better:
      "Sourced answers and the lowest citation-hallucination rate. If you need facts you can trace back to a link, this one wins.",
  },
] as const;

const takeaways = [
  { pick: "ChatGPT", when: "One tool, all-around." },
  { pick: "Claude", when: "Build, write, think hard." },
  { pick: "Gemini", when: "Live in Google + huge files." },
  { pick: "Grok", when: "Breaking news / the X pulse." },
  { pick: "Perplexity", when: "Research with receipts." },
] as const;

export default function PickYourModelPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Pick your model · Current as of mid-2026"
        headlineParts={[
          { text: "Five AI tools. ", italic: false },
          { text: "Plain English.", italic: true },
        ]}
        subhead="Claude, ChatGPT, Gemini, Grok, Perplexity. What they all do the same, what each one actually is, what each does better — and which one to reach for."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <div className="max-w-prose">
            <Reveal>
              <p className="eyebrow text-orange-deep">What they all do (the same)</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem]">
                For 80% of everyday tasks, any of them works fine.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-ink-mid leading-relaxed">
                All five are chat-based AI you talk to in plain language. Every one
                can answer questions, write and edit text, summarize documents, help
                with code, brainstorm, and — with the right mode on — search the web.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">What each one is</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              The core difference, one at a time.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px bg-ink/10">
            {models.map((m, i) => (
              <Reveal key={m.name} delay={i * 50}>
                <article className="bg-paper p-7 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                    <div className="lg:col-span-3">
                      <div className="module-numeral">{m.numeral}</div>
                      <h3 className="serif mt-3 text-[1.6rem] leading-tight">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-orange-deep text-sm font-semibold">
                        {m.tagline}
                      </p>
                    </div>
                    <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <p className="eyebrow text-ink-soft">What it is</p>
                        <p className="mt-2 text-ink-mid text-sm leading-relaxed">
                          {m.is}
                        </p>
                      </div>
                      <div>
                        <p className="eyebrow text-ink-soft">What it does better</p>
                        <p className="mt-2 text-ink-mid text-sm leading-relaxed">
                          {m.better}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel text-paper relative overflow-hidden">
        <div className="atmosphere-orange" aria-hidden />
        <div className="relative mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow text-orange">The business owner&rsquo;s takeaway</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              Reach for the right one.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-steel-line">
            {takeaways.map((t, i) => (
              <Reveal key={t.pick} delay={i * 50}>
                <div className="h-full bg-steel-2 p-6">
                  <p className="text-paper/60 text-sm leading-relaxed">{t.when}</p>
                  <p className="serif mt-3 text-[1.5rem] text-orange leading-tight">
                    {t.pick}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-10 text-paper/75 leading-relaxed max-w-prose">
              Pros increasingly run two: a builder (Claude) plus a fact-checker
              (Perplexity). Each runs about $20/mo; Grok runs about $30.
            </p>
          </Reveal>
        </div>
      </section>

      <NewsletterBanner source="pick-your-model" id="newsletter" />
    </SiteShell>
  );
}
