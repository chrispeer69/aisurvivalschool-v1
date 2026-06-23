import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Uncomfortable } from "@/components/Uncomfortable";

export const metadata: Metadata = {
  title: "About · How a tow truck operator became an AI teacher",
  description:
    "The story behind AI Survival School. From a 16-truck towing company in Columbus, Ohio to building the US Tow Alliance and a suite of SaaS solutions alongside Claude, to teaching other operators.",
};

const sections = [
  {
    eyebrow: "The setup",
    title: "16 trucks. Columbus, Ohio. $650 a month for software that stopped shipping.",
    body: [
      "I run Roadside Towing & Recovery in Columbus. Sixteen trucks, real customers, real payroll — the kind of business that starts before sunrise and ends after the bars close.",
      "For years I paid $650 a month for dispatch software. By 2025 it had been almost two years since they'd shipped a real feature. I was paying for nothing. And I wasn't the only operator stuck there.",
    ],
  },
  {
    eyebrow: "The discovery",
    title: "I started using Claude. It wasn't a toy.",
    body: [
      "Spring 2026 I started using Claude every day — not for content, for operating decisions. Customer responses. Spreadsheets. Hiring docs. SOPs. The boring stuff that eats your day.",
      "Within weeks it clicked: this isn't a chatbot. It's a tool that does real work — if you know how to talk to it.",
    ],
  },
  {
    eyebrow: "The build",
    title: "I built the US Tow Alliance and a suite of SaaS solutions with Claude as my co-founder.",
    body: [
      "I'm not a software engineer. I'm an operator who got dangerous in a terminal. With Claude as my co-founder I built the US Tow Alliance and a suite of AI-native SaaS solutions for towing — in days, not months. Native mobile, multi-tenant, motor-club fluent.",
      "Then I cancelled the $650 a month for software that hadn't shipped in years.",
    ],
  },
  {
    eyebrow: "The realization",
    title: "If a tow company owner can do this, every operator can.",
    body: [
      "Building it showed me AI just changed the math for small business. The cost of building the tools you need dropped to near zero — if you can use AI as a co-worker.",
      "Most owners I know are drowning in AI hype with no idea what to actually do. They don't need a consultant in a hoodie. They need a teacher who speaks their language, doesn't talk down to them, and runs a real business every day.",
    ],
  },
  {
    eyebrow: "The mission",
    title: "Teach the operators before AI teaches them the hard way.",
    body: [
      "AI Survival School is for small business owners, blue-collar operators, and Main Street entrepreneurs who know they're falling behind and want a teacher who runs a real business.",
      "Workshops train a team at once. Cohorts are a small live group. The self-paced course is on your time.",
      "Either way, you leave able to use AI for your actual job. Not in theory. In practice.",
    ],
  },
] as const;

const ventures = [
  {
    name: "Roadside Towing & Recovery",
    desc: "The 16-truck operation in Columbus.",
  },
  {
    name: "US Tow Alliance",
    desc: "Operator-driven advocacy, standards, and a suite of SaaS solutions for the towing industry.",
  },
  {
    name: "Blue Collar AI",
    desc: "Parent brand for everything I'm doing in AI for the trades.",
  },
  {
    name: "Layers",
    desc: "Marriage coaching. Tools to survive a struggling marriage.",
  },
  {
    name: "#UNCOMFORTABLE",
    wordmark: true,
    desc: "My book on doing hard things on purpose. Free to read.",
  },
  {
    name: "Hook, Haul & Hustle",
    desc: "My book on the towing life — the grind, the grit, and the business behind the wrecker.",
  },
  {
    name: "Peerfield Press",
    href: "https://peerfieldpress.com",
    desc: "My independent press — the imprint behind the books.",
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

      {/* The story — numbered long-read with quiet dividers */}
      <article className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-16 sm:py-24">
          <div className="max-w-2xl mx-auto">
            {sections.map((section, i) => (
              <Reveal key={section.eyebrow} delay={i * 40}>
                <section className="border-t border-ink/10 py-10 sm:py-12 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="module-numeral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow text-orange-deep">
                      {section.eyebrow}
                    </span>
                  </div>
                  <h2 className="serif mt-4 text-[1.5rem] sm:text-[1.95rem] leading-tight">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-[1.05rem] text-ink-mid leading-relaxed">
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

      {/* The other ventures — tidy two-column directory */}
      <section className="bg-paper-dim border-t border-ink/10">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="eyebrow text-orange-deep">The other ventures</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-4 text-[1.8rem] sm:text-[2.3rem]">
                What else I&rsquo;m doing.
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
              {ventures.map((v, i) => (
                <Reveal key={v.name} delay={i * 50}>
                  <div className="border-t border-ink/15 pt-4">
                    <h3 className="serif text-[1.2rem] leading-tight">
                      {"wordmark" in v && v.wordmark ? (
                        <Uncomfortable />
                      ) : "href" in v && v.href ? (
                        <a
                          href={v.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange transition-colors"
                        >
                          {v.name} ↗
                        </a>
                      ) : (
                        v.name
                      )}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-mid leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                  Read <Uncomfortable /> — free.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-paper/75 leading-relaxed max-w-prose">
                  My book on doing hard things on purpose — the operator&rsquo;s playbook for staying in the fight when easier paths are everywhere. Reads in an evening.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Reveal delay={120}>
                <a
                  href="https://uncomfortable.manus.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-armstrong"
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
