import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About · How a tow truck operator became an AI teacher",
  description:
    "The story behind AI Survival School. From a 16-truck towing company in Columbus, Ohio to building TowCommand Pro alongside Claude, to teaching other operators.",
};

const sections = [
  {
    eyebrow: "The setup",
    title: "16 trucks. Columbus, Ohio. $650 a month for software that wasn't shipping.",
    body: [
      "I run Roadside Towing & Recovery in Columbus. Sixteen trucks, real customers, real payroll. The kind of business where the day starts before the sun and ends after the bars close.",
      "For years I paid $650 a month for towing dispatch software. By 2025 it had been close to two years since they'd shipped a real new feature. I was paying for nothing — and I wasn't the only operator stuck in that same spot.",
    ],
  },
  {
    eyebrow: "The discovery",
    title: "I started using Claude. It wasn't a toy.",
    body: [
      "Spring of 2026 I started using Claude every day — not for content, not for novelty, for actual operating decisions. Drafting customer responses. Spreadsheet work. Hiring docs. SOPs. The boring stuff that eats your day.",
      "Within a few weeks I realized something: this wasn't a chatbot. This was a tool that could do real work, if you knew how to talk to it.",
    ],
  },
  {
    eyebrow: "The build",
    title: "I built TowCommand Pro alongside Claude as my co-founder.",
    body: [
      "I'm not a software engineer. I'm an operator who got dangerous in a terminal. With Claude as my co-founder I shipped ten sessions of TowCommand Pro in days, not months — a full AI-native operations platform for towing, native mobile, multi-tenant, motor-club fluent.",
      "Then I cancelled the $650 a month I was paying for software that hadn't shipped a feature in years.",
    ],
  },
  {
    eyebrow: "The realization",
    title: "If a tow company owner can do this, every operator can.",
    body: [
      "What I realized building TowCommand Pro is that AI just changed the math for small business. The cost of building the tools you need just dropped to near zero — if you know how to use AI as a co-worker.",
      "Most small business owners I know are getting bombarded with AI hype but have no idea what to actually do. They don't need a consultant in a hoodie. They need a teacher who speaks their language, doesn't talk down to them, and is using this stuff in a real business every day.",
    ],
  },
  {
    eyebrow: "The mission",
    title: "Teach the operators before AI teaches them the hard way.",
    body: [
      "AI Survival School is for the small business owners, blue-collar operators, and Main Street entrepreneurs who know they're falling behind and want a teacher who runs a real business.",
      "Workshops if you want a team trained at once. Cohorts if you want a small live group. A self-paced course if you want it on your time.",
      "Either way — you'll leave able to use AI for your actual job. Not in theory. In practice.",
    ],
  },
  {
    eyebrow: "The other ventures",
    title: "What else I'm doing.",
    body: [
      "Roadside Towing & Recovery — the 16-truck operation in Columbus.",
      "TowCommand Pro — the AI-native ops platform I built. towcommand.ai.",
      "Blue Collar AI — parent brand for everything I'm doing in AI for trade businesses.",
      "US Tow Alliance — operator-driven advocacy and standards work for the towing industry.",
      "#UNCOMFORTABLE — my book on doing hard things on purpose. Free to read.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="The story"
        headlineParts={[
          { text: "How a tow truck operator ", italic: false },
          { text: "became an AI teacher.", italic: true },
        ]}
        subhead="Christopher D. Peer · Operator, founder, author. Columbus, Ohio."
      />

      <article className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto">
            {sections.map((section, i) => (
              <Reveal key={section.eyebrow} delay={i * 40}>
                <section className="mb-16 last:mb-0">
                  <p className="eyebrow text-orange-deep">{section.eyebrow}</p>
                  <h2 className="display-md mt-4 text-[1.8rem] sm:text-[2.3rem] leading-tight">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-lg text-ink-mid leading-relaxed">
                    {section.body.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-steel text-paper relative overflow-hidden">
        <div className="atmosphere-orange" aria-hidden />
        <div className="relative mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-orange">The book that started it all</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem]">
                  Want the philosophy behind the work? <br />
                  <em className="accent-italic">Read #UNCOMFORTABLE — free.</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-paper/75 leading-relaxed max-w-prose">
                  My book on doing hard things on purpose — the operator&rsquo;s playbook for staying in the fight when easier paths are everywhere. Reads in an evening.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <a
                  href="https://uncomfortable.manus.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Read #UNCOMFORTABLE ↗
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-16 text-center">
          <Reveal>
            <p className="serif italic text-2xl text-ink mb-6">
              Ready to stop falling behind?
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/workshops" className="btn-primary">Book a workshop</Link>
              <Link href="/cohorts" className="btn-ghost text-ink">Join the cohort waitlist</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
