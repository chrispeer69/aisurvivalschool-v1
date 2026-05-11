import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CurriculumGrid } from "@/components/CurriculumGrid";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export const metadata: Metadata = {
  title: "Course · Self-paced AI training",
  description:
    "Self-paced AI Survival course. Same curriculum as the cohort, recorded and ready when you are. Lifetime access. Monthly community Q&A calls.",
};

const included = [
  "8 modules · ~40 video lessons",
  "Downloadable prompts library you actually use",
  "Monthly community Q&A calls (live)",
  "Private community access",
  "All updates as new modules ship",
  "Lifetime access on the one-time tier",
];

export default function CoursePage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Self-paced course"
        headlineParts={[
          { text: "Learn AI ", italic: false },
          { text: "on your own time.", italic: true },
        ]}
        subhead="Same curriculum as the cohort, recorded and ready when you are. Lifetime access. Monthly community Q&A calls. Built for operators who can't carve out a fixed weekly slot."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-orange-deep">What&rsquo;s included</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
                  Everything from the cohort, on demand.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <ul className="mt-8 space-y-4 text-ink-mid leading-relaxed text-lg">
                  {included.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="text-orange flex-shrink-0 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="bg-steel text-paper p-7 sm:p-8 border border-steel-line">
                  <span className="chip chip-phase w-fit">Pre-launch</span>
                  <h3 className="serif mt-5 text-[1.6rem] leading-tight text-paper">
                    The course isn&rsquo;t live yet.
                  </h3>
                  <p className="mt-4 text-paper/75 text-sm leading-relaxed">
                    I&rsquo;m recording it module by module while running the first wave of cohorts. Waitlist members get launch pricing — likely under half what it&rsquo;ll be at general release — and access to the modules as they drop.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CurriculumGrid
        eyebrow="The course curriculum"
        headline="Eight modules. ~40 lessons. Lifetime access."
        subhead="Same curriculum the cohort runs through, recorded for you to pace yourself. Watch on your phone in the truck or at the desk after hours."
        tone="light"
      />

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">Pricing at launch</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              Two ways in.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <Reveal delay={80}>
              <article className="bg-steel text-paper p-8 border border-orange flex flex-col h-full">
                <span className="chip chip-next w-fit">Best value</span>
                <h3 className="serif mt-5 text-[1.6rem]">Lifetime access</h3>
                <p className="display-md mt-4 text-[3rem] text-orange">$297</p>
                <p className="text-paper/60 text-xs mt-1">one-time</p>
                <ul className="mt-6 space-y-2 text-sm text-paper/80 flex-1">
                  <li className="flex gap-2"><span className="text-orange">✓</span> All modules + every future update</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Monthly community Q&A calls</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Prompts library</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Private community access</li>
                </ul>
              </article>
            </Reveal>

            <Reveal delay={140}>
              <article className="bg-paper p-8 border border-ink/10 flex flex-col h-full">
                <span className="eyebrow text-ink-soft">Lower commitment</span>
                <h3 className="serif mt-5 text-[1.6rem]">Monthly membership</h3>
                <p className="display-md mt-4 text-[3rem] text-ink">$29</p>
                <p className="text-ink-soft text-xs mt-1">/month · cancel anytime</p>
                <ul className="mt-6 space-y-2 text-sm text-ink-mid flex-1">
                  <li className="flex gap-2"><span className="text-orange">✓</span> All modules while subscribed</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Monthly Q&A calls included</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Prompts library</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Private community access</li>
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-orange-deep">Pre-launch waitlist</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem]">
                  Get launch pricing and <em className="accent-italic">first access.</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-ink-mid leading-relaxed max-w-prose">
                  Drop your email and I&rsquo;ll send the first module the day it&rsquo;s live, with a launch-week price you won&rsquo;t see at general release.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <WaitlistForm
                  source="course"
                  submitLabel="Join the course waitlist"
                  successHeadline="You're on the list."
                  successBody="You'll get the launch announcement and pricing first. The first module drops as soon as it's recorded."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
