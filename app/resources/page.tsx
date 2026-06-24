import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsletterBanner } from "@/components/NewsletterBanner";
import { sortedPosts, formatBlogDate } from "@/content/blog";

export const metadata: Metadata = {
  title: "Resources · Free AI training for operators",
  description:
    "Free AI Survival School resources — newsletter, YouTube channel, prompts library, and the AI Survival blog.",
};

const downloads = [
  {
    title: "AI Survival cheat sheet",
    body: "One-page reference. The five prompts every business owner should have — copy, fill in the blanks, paste. Print it for the truck.",
    status: "Read now",
    href: "/ai-survival-cheat-sheet.html",
    external: true,
  },
  {
    title: "Operator prompts library",
    body: "The same prompts I use to run my towing company. Customer service, marketing, hiring, ops.",
    status: "Read now",
    href: "/operator-prompts-library.html",
    external: true,
  },
  {
    title: "Pick your model",
    body: "Claude vs ChatGPT vs Gemini vs Grok vs Perplexity. Plain-English breakdown.",
    status: "Read now",
    href: "/pick-your-model",
  },
] as const;

type NewsItem = {
  title: string;
  href: string;
  source?: string;
  date: string; // YYYY-MM-DD
  note?: string;
  kind: "video" | "article";
};

// Curated AI news — videos and articles worth a business owner's time. Add new
// items here, newest date first. Anything within the last 7 days shows under
// "Latest" (up to 5); after 7 days it moves into the Library automatically
// (recomputed on each deploy).
const news: NewsItem[] = [
  {
    kind: "video",
    title: "How To Use Claude AI to Automate Going Viral on TikTok & Instagram in 2026",
    href: "https://youtu.be/XmQhu38Rmz0",
    source: "YouTube",
    date: "2026-06-24",
    note: "A practical walkthrough of using Claude to spin up short-form content that actually performs.",
  },
  {
    kind: "video",
    title: "Claude Just Dropped ULTRA CODE — everything you need to know in 5 min",
    href: "https://youtu.be/IgIlIWqeT-I",
    source: "YouTube",
    date: "2026-06-24",
    note: "A fast rundown of Claude's new Ultra Code — what it is and why it matters.",
  },
  {
    kind: "video",
    title: "Ray Kurzweil Predicts AI Will Change Humanity Completely by 2030",
    href: "https://youtu.be/fddhXXIjB6w",
    source: "YouTube",
    date: "2026-06-24",
    note: "The big-picture view — where AI is headed and how fast, from one of its most famous forecasters.",
  },
  {
    kind: "video",
    title: "You're not behind (yet): How to learn AI in 18 minutes",
    href: "https://youtu.be/0Tch0N5nsRU",
    source: "YouTube",
    date: "2026-06-24",
    note: "A fast, no-fluff primer on getting started with AI — exactly where to begin if you feel behind.",
  },
  {
    kind: "article",
    title: "Introducing Claude Tag",
    href: "https://www.anthropic.com/news/introducing-claude-tag",
    source: "Anthropic",
    date: "2026-06-23",
    note: "Claude joins your Slack as a teammate — tag @Claude to hand off work it runs in the background.",
  },
  {
    kind: "article",
    title: "Claude Corps",
    href: "https://www.anthropic.com/news/claude-corps",
    source: "Anthropic",
    date: "2026-06-11",
    note: "A $150M fellowship placing 1,000 early-career workers with nonprofits to build real AI skills.",
  },
  {
    kind: "article",
    title: "Claude Opus 4.8",
    href: "https://www.anthropic.com/news/claude-opus-4-8",
    source: "Anthropic",
    date: "2026-05-28",
    note: "Anthropic's upgraded flagship model — sharper judgment, stronger coding, same price.",
  },
];

function fmtNewsDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ResourcesPage() {
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const latestNews = sortedNews.slice(0, 5);
  const libraryNews = sortedNews.slice(5);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Resources"
        headlineParts={[
          { text: "Free stuff. ", italic: false },
          { text: "Top of the funnel.", italic: true },
        ]}
        subhead="Newsletter, AI news, prompts library, and the blog. The fastest no-cost way to start using AI like an operator."
      />

      <NewsletterBanner source="resources-top" id="newsletter" />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">AI News</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              The AI news worth your time — in one place.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-ink-mid leading-relaxed max-w-prose">
              Hand-picked videos and articles I think every business owner should see. New drops sit up top; everything older lives in the library below, so you find what matters without the doomscroll.
            </p>
          </Reveal>

          {/* Latest */}
          <Reveal delay={200}>
            <div className="mt-12 flex items-baseline justify-between border-b border-ink/15 pb-3">
              <h3 className="serif text-[1.5rem] sm:text-[1.8rem]">Latest</h3>
              <span className="eyebrow text-ink-soft">5 most recent</span>
            </div>
          </Reveal>
          {latestNews.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((v, i) => (
                <Reveal key={v.href} delay={i * 50}>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-full bg-paper border border-ink/10 p-5 flex flex-col hover:border-orange transition-colors"
                  >
                    <div className="aspect-video bg-steel border border-steel-line mb-4 flex items-center justify-center">
                      <span className="eyebrow text-orange">
                        {v.kind === "video" ? "▶ Watch" : "Read ↗"}
                      </span>
                    </div>
                    <p className="serif text-[1.15rem] leading-tight group-hover:text-orange-deep transition-colors">
                      {v.title}
                    </p>
                    {v.note ? (
                      <p className="mt-2 text-sm text-ink-mid leading-relaxed flex-1">
                        {v.note}
                      </p>
                    ) : null}
                    <p className="mt-3 text-xs text-ink-soft">
                      {v.source ? `${v.source} · ` : ""}
                      {fmtNewsDate(v.date)}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-ink-mid leading-relaxed">
              New picks drop here soon — check back, or subscribe above and we&rsquo;ll point you to them.
            </p>
          )}

          {/* Library */}
          <Reveal>
            <div className="mt-16 flex items-baseline justify-between border-b border-ink/15 pb-3">
              <h3 className="serif text-[1.5rem] sm:text-[1.8rem]">The library</h3>
              <span className="eyebrow text-ink-soft">The archive</span>
            </div>
          </Reveal>
          {libraryNews.length > 0 ? (
            <ul className="mt-4 divide-y divide-ink/10">
              {libraryNews.map((v) => (
                <li key={v.href} className="py-3">
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4"
                  >
                    <span className="text-ink group-hover:text-orange-deep transition-colors">
                      <span className="text-ink-soft mr-2 text-xs uppercase tracking-wide">
                        {v.kind === "video" ? "Video" : "Article"}
                      </span>
                      {v.title}
                      {v.source ? (
                        <span className="text-ink-soft"> · {v.source}</span>
                      ) : null}
                    </span>
                    <span className="text-xs text-ink-soft whitespace-nowrap">
                      {fmtNewsDate(v.date)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-ink-mid leading-relaxed">
              The library fills in as picks age past a week — your full archive, all in one place.
            </p>
          )}
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
                  {"external" in d && d.external ? (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-orange-deep hover:text-orange transition-colors text-sm font-semibold"
                    >
                      Open it →
                    </a>
                  ) : "href" in d ? (
                    <Link
                      href={d.href}
                      className="mt-6 inline-flex items-center gap-2 text-orange-deep hover:text-orange transition-colors text-sm font-semibold"
                    >
                      Read it →
                    </Link>
                  ) : (
                    <Link
                      href="#newsletter"
                      className="mt-6 inline-flex items-center gap-2 text-orange-deep hover:text-orange transition-colors text-sm font-semibold"
                    >
                      Get notified →
                    </Link>
                  )}
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
              How a tow company owner actually uses AI to run a real business. No frameworks, no hype — just what works when the trucks have to roll.
            </p>
          </Reveal>

          <div className="mt-10 max-w-3xl divide-y divide-ink/10 border-t border-ink/10">
            {sortedPosts().slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={200 + i * 60}>
                <Link href={`/blog/${post.slug}`} className="group block py-6">
                  <p className="eyebrow text-orange-deep">{post.eyebrow}</p>
                  <h3 className="serif text-[1.3rem] sm:text-[1.5rem] leading-tight mt-2 group-hover:text-orange-deep transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-mid leading-relaxed">{post.subtitle}</p>
                  <p className="mt-3 text-xs text-ink-soft font-mono">
                    {formatBlogDate(post.date)} · {post.readTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-orange-deep hover:text-orange transition-colors text-sm font-semibold"
            >
              Read all field reports →
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
