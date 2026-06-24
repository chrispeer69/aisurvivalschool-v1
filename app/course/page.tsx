import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CurriculumGrid } from "@/components/CurriculumGrid";
import { MembershipNote } from "@/components/MembershipNote";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export const metadata: Metadata = {
  title: "Course · Self-paced AI training",
  description:
    "Self-paced AI Survival course. Same curriculum as the cohort, recorded and ready when you are. Lifetime access. Monthly community Q&A calls.",
};

const included = [
  "12 modules · self-paced video lessons",
  "Downloadable prompts library you actually use",
  "Monthly community Q&A calls (live)",
  "Private community access",
  "All updates as new modules ship",
  "Lifetime access — yours to keep",
  "Community membership included while you work through it",
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
                <div className="bg-steel text-paper p-7 sm:p-8 border border-orange">
                  <span className="chip chip-next w-fit">Reserve your seat</span>
                  <h3 className="serif mt-5 text-[1.6rem] leading-tight text-paper">
                    Join the community.
                  </h3>
                  <p className="mt-4 text-paper/75 text-sm leading-relaxed">
                    Reserve your seat and you&rsquo;re in — all 12 modules at your own pace, plus the community membership: library, events, networking, meetups, weekly updates, and alerts. Everything AI, all in one place.
                  </p>
                  <a href="#waitlist" className="btn-primary mt-6">
                    Reserve your seat →
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CurriculumGrid
        eyebrow="The course curriculum"
        headline="Twelve modules. Self-paced. Lifetime access."
        subhead="Same curriculum the cohort runs through, recorded for you to pace yourself. Watch on your phone in the truck or at the desk after hours."
        tone="light"
      />

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">Pricing</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              One price. Twelve modules. Yours to keep.
            </h2>
          </Reveal>

          <div className="mt-12 max-w-md">
            <Reveal delay={80}>
              <article className="bg-steel text-paper p-8 border border-orange flex flex-col h-full">
                <span className="chip chip-next w-fit">Self-paced course</span>
                <p className="display-md mt-5 text-[3.4rem] text-orange leading-none">$899</p>
                <p className="text-paper/60 text-xs mt-2">one-time · lifetime access</p>
                <ul className="mt-6 space-y-2 text-sm text-paper/80">
                  <li className="flex gap-2"><span className="text-orange">✓</span> All 12 modules, online at your own pace</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Lifetime access + every future update</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Downloadable prompts library</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span> Community membership included while you work through it</li>
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <MembershipNote />

      <section id="waitlist" className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-orange-deep">Join now</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem]">
                  Get started <em className="accent-italic">today.</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-ink-mid leading-relaxed max-w-prose">
                  Sign up and we&rsquo;ll get you set up — all 12 modules at your own pace, the prompts library, and the full community. No waiting on a launch date.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <WaitlistForm
                  source="course"
                  submitLabel="Join now"
                  successHeadline="You're in."
                  successBody="Check your inbox — we'll send the next steps to get you started right away."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
