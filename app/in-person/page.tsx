import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export const metadata: Metadata = {
  title: "In-Person Learning · Tuesday AI classes at COhatch Polaris",
  description:
    "1-hour in-person AI classes every Tuesday at COhatch in Polaris. Small business owners go from beginner to mastering AI over 12 weeks. Early-bird $749, regular $899.",
};

const formatItems = [
  { eyebrow: "12 weeks", body: "A full term that takes you from beginner to mastering AI." },
  { eyebrow: "1 hour / week", body: "Tight, focused sessions built for busy small business owners." },
  { eyebrow: "Every Tuesday", body: "Same time, same place. Show up, learn, get back to work." },
  { eyebrow: "COhatch · Polaris", body: "In person at COhatch in Polaris, Columbus, Ohio." },
  { eyebrow: "4 class levels", body: "Beginner through Master — join the class that fits where you are." },
  { eyebrow: "Small business owners", body: "Taught by an operator, for operators. Real uses, no jargon." },
] as const;

const levels = [
  {
    numeral: "I",
    title: "Beginner",
    body: "What AI actually is, the major models, and getting fully set up. Daily-life uses and your first business wins. Start here if you're new.",
  },
  {
    numeral: "II",
    title: "Advanced",
    body: "Prompt engineering, custom projects, and real work with documents, data, and spreadsheets. Put AI to work across your business.",
  },
  {
    numeral: "III",
    title: "Master AI",
    body: "Agents, automation, workflows, and integrations. Make AI do the work in the background without you in the loop.",
  },
  {
    numeral: "IV",
    title: "Master Special Projects AI",
    body: "Build custom tools and tackle special projects — ship real AI solutions tied to the way your business actually runs.",
  },
] as const;

export default function InPersonPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="In-person learning · COhatch Polaris"
        headlineParts={[
          { text: "Learn AI in person. ", italic: false },
          { text: "Every Tuesday in Polaris.", italic: true },
        ]}
        subhead="1-hour classes every Tuesday at COhatch in Polaris, built for small business owners. Join a class and go from beginner to mastering AI over 12 weeks."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">Format</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              One hour a week, in the room, for twelve weeks.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {formatItems.map((item, i) => (
              <Reveal key={item.eyebrow} delay={i * 50}>
                <div className="h-full bg-paper p-6">
                  <div className="eyebrow text-orange-deep">{item.eyebrow}</div>
                  <p className="mt-3 text-ink-mid leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel text-paper relative overflow-hidden">
        <div className="atmosphere-orange" aria-hidden />
        <div className="relative mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow text-orange">Four classes every Tuesday</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              Join the class that fits where you are.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg max-w-prose leading-relaxed text-paper/75">
              Four levels run every Tuesday at COhatch Polaris. Start at the
              beginning or jump in where you are — and keep climbing as you go.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel-line">
            {levels.map((level, i) => (
              <Reveal key={level.numeral} delay={i * 50}>
                <article className="h-full bg-steel-2 p-7">
                  <div className="module-numeral">{level.numeral}</div>
                  <h3 className="serif mt-3 text-[1.3rem] leading-tight text-paper">
                    {level.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">
                    {level.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-16 sm:py-20">
          <div className="border-l-4 border-orange bg-paper-dim p-7 sm:p-9">
            <Reveal>
              <p className="eyebrow text-orange-deep">On-site at COhatch Polaris</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-4 text-[1.6rem] sm:text-[2.1rem] max-w-3xl">
                Legal counsel in the room.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-ink-mid leading-relaxed max-w-prose">
                Legal counsel is available at the COhatch Polaris class sessions. Talk through AI-related legal matters, or ask questions about your personal and business matters while you&rsquo;re there.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-orange-deep">Pricing</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2.2rem] sm:text-[3rem]">
                  Tuition per 12-week class
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-orange p-6 bg-paper">
                    <span className="chip chip-next w-fit">Early bird</span>
                    <p className="display-md mt-4 text-[2.6rem] text-orange-deep">$749</p>
                    <p className="mt-2 text-ink-mid text-sm">First 15 seats in each class.</p>
                  </div>
                  <div className="border border-ink/15 p-6 bg-paper">
                    <span className="eyebrow text-ink-soft">Regular</span>
                    <p className="display-md mt-4 text-[2.6rem] text-ink">$899</p>
                    <p className="mt-2 text-ink-mid text-sm">Remaining seats once early bird sells.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 text-ink-mid text-sm leading-relaxed max-w-prose">
                  Covers the full 12-week class — one hour in person every Tuesday at
                  COhatch Polaris, the prompts library, and the community.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="bg-paper border border-ink/10 p-7 sm:p-8 shadow-[0_20px_60px_-40px_rgba(11,14,18,0.4)]">
                  <span className="chip chip-phase w-fit">Next class</span>
                  <h3 className="serif mt-5 text-[1.8rem] leading-tight text-ink">
                    Seats are limited to keep classes small.
                  </h3>
                  <p className="mt-4 text-ink-mid text-sm leading-relaxed">
                    Each class is capped, and the first 15 lock in the early-bird
                    price. Reserve your seat and we&rsquo;ll be in touch with the
                    next start date and how to join.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="reserve" className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-orange-deep">Reserve your seat</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem]">
                  Grab one of the <em className="accent-italic">first 15 seats.</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-ink-mid leading-relaxed max-w-prose">
                  Tell us which level fits and we&rsquo;ll hold your spot at the
                  early-bird price. No spam — just the start date and how to join.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <WaitlistForm
                  source="in-person"
                  submitLabel="Reserve my seat"
                  successHeadline="Seat reserved."
                  successBody="We'll email you the next start date and how to lock in the early-bird price for your class."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
