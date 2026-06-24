import { Reveal } from "./Reveal";

// The community membership — included during the 12-week program, then $29/mo.
// Shared across cohorts, in-person, and the self-paced course.
export function MembershipNote() {
  return (
    <section className="bg-steel text-paper relative overflow-hidden">
      <div className="atmosphere-orange" aria-hidden />
      <div className="relative mx-auto max-w-editorial px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow text-orange">The community membership</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-4 text-[1.8rem] sm:text-[2.4rem]">
                Come for the skills.{" "}
                <em className="accent-italic">Stay for the community.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-paper/75 leading-relaxed max-w-prose">
                Your membership is included while you&rsquo;re in the school — the full
                12 weeks. After that it&rsquo;s just $29/month for full access to
                everything: the resource library, events, networking, meetups, weekly
                updates, and alerts. Everything AI, everything in our community — all in
                one place.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Reveal delay={160}>
              <div className="border border-steel-line bg-steel-2 p-6 text-center w-full">
                <p className="eyebrow text-paper/60">After your 12 weeks</p>
                <p className="display-md mt-2 text-[3rem] text-orange leading-none">$29</p>
                <p className="text-paper/60 text-xs mt-1">/month · cancel anytime</p>
                <p className="mt-3 text-paper/70 text-sm">Included while you&rsquo;re enrolled.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
