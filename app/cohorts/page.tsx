import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CurriculumGrid } from "@/components/CurriculumGrid";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export const metadata: Metadata = {
  title: "Cohorts · 4-week live AI training",
  description:
    "Live four-week AI Survival cohort. Two sessions per week, real curriculum, real homework. Small group of operators going from AI-curious to AI-capable.",
};

const formatItems = [
  { eyebrow: "4 weeks", body: "Tight, focused, no filler. Most operators finish in real time." },
  { eyebrow: "2 live sessions / week", body: "Tuesday teach. Thursday hands-on. 90 minutes each." },
  { eyebrow: "Recordings", body: "Every session recorded. Miss one, catch up that night." },
  { eyebrow: "Small group", body: "Capped intentionally so you actually get airtime." },
  { eyebrow: "Real homework", body: "Five tools you build during the cohort, tied to your business." },
  { eyebrow: "Private community", body: "Operator-only chat. The cohort runs hot for the full month." },
] as const;

export default function CohortsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Online cohort · live"
        headlineParts={[
          { text: "4-week AI Survival cohort. ", italic: false },
          { text: "Live every Tuesday.", italic: true },
        ]}
        subhead="Small group, live instruction, real curriculum, real homework. The fastest way to go from AI-curious to AI-capable without leaving your business."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">Format</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              Built for operators who don&rsquo;t have time for a 12-week course.
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

      <CurriculumGrid
        eyebrow="The cohort curriculum"
        headline="Eight modules across four weeks."
        subhead="Tuesday sessions cover one or two modules. Thursday sessions are hands-on builds. By Friday you've shipped something real."
        tone="light"
      />

      <section className="bg-steel text-paper relative overflow-hidden">
        <div className="atmosphere-orange" aria-hidden />
        <div className="relative mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-orange">Pricing</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2.2rem] sm:text-[3rem]">
                  Cohort tuition
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-orange p-6">
                    <span className="chip chip-next w-fit">Early bird</span>
                    <p className="display-md mt-4 text-[2.6rem] text-orange">$497</p>
                    <p className="mt-2 text-paper/70 text-sm">First 15 seats per cohort.</p>
                  </div>
                  <div className="border border-steel-line p-6">
                    <span className="eyebrow text-paper/60">Regular</span>
                    <p className="display-md mt-4 text-[2.6rem] text-paper">$797</p>
                    <p className="mt-2 text-paper/70 text-sm">Remaining seats once early bird sells.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 text-paper/70 text-sm leading-relaxed max-w-prose">
                  Includes all live sessions, recordings, the prompts library, the private community for the full cohort, and a 30-day post-cohort Q&A access window.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="bg-steel-2 border border-steel-line p-7 sm:p-8">
                  <span className="chip chip-phase w-fit">Next cohort</span>
                  <h3 className="serif mt-5 text-[1.8rem] leading-tight text-paper">
                    Dates: <em className="text-orange">TBD</em> — join the waitlist for first dibs.
                  </h3>
                  <p className="mt-4 text-paper/70 text-sm leading-relaxed">
                    Cohorts run when there&rsquo;s a full small group. Waitlist members get the next dates 48 hours before public announcement, plus the early-bird price locked in.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-orange-deep">Waitlist</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem]">
                  Get the next <em className="accent-italic">cohort dates first.</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-ink-mid leading-relaxed max-w-prose">
                  No spam. One email when seats open, with the early-bird price locked in for waitlist members.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <WaitlistForm
                  source="cohort"
                  submitLabel="Join the cohort waitlist"
                  successHeadline="You're on the list."
                  successBody="You'll get the next-cohort dates and the early-bird price 48 hours before public announcement."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
