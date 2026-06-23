import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact · AI Survival School",
  description:
    "Reach Chris directly. Workshop inquiries, cohort questions, course questions, speaking inquiries — every form goes straight to him.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        headlineParts={[
          { text: "Reach me ", italic: false },
          { text: "directly.", italic: true },
        ]}
        subhead="Every form on this site goes to my inbox. I read every one. Replies in two business days, often same-day."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-orange-deep">Pick a topic</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[1.8rem] sm:text-[2.4rem]">
                  What&rsquo;s on your mind?
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <ul className="mt-8 space-y-4 text-ink-mid leading-relaxed">
                  <li className="flex gap-3">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-ink">Workshop inquiry</strong> — bringing AI training to your business or association.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-ink">Cohort question</strong> — anything about the live 12-week program.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-ink">Course question</strong> — pre-launch waitlist, pricing, launch timeline.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-ink">Speaking inquiry</strong> — keynotes, podcasts, conferences.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-ink">Other</strong> — anything else. Just say what.
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
