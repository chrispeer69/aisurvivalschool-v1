import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { WorkshopForm } from "@/components/forms/WorkshopForm";

export const metadata: Metadata = {
  title: "Workshops · Bring AI training to your team",
  description:
    "Half-day or full-day on-site AI workshops for small businesses, trade associations, and workforce development. 10-25 people. Custom curriculum.",
};

const audience = [
  "Small business owners and operators",
  "Trade associations bringing real value to members",
  "Chambers of commerce running member education",
  "Workforce development and Main Street programs",
  "Industry conferences looking for a non-fluffy AI track",
];

const industriesServed = [
  "Towing & Recovery",
  "HVAC",
  "Plumbing",
  "Electrical & Contractors",
  "Auto Repair & Body",
  "Landscaping",
  "Retail",
  "Professional Services",
];

const tiers = [
  {
    name: "Half-day workshop",
    price: "$2,500",
    duration: "3 hours",
    body: "Foundations track. AI explained without jargon. Daily-life uses. Two business uses tuned to your industry. Hands-on prompting.",
    bullets: [
      "10-25 people",
      "Delivered at your business or venue",
      "Custom prompts library handed off to attendees",
    ],
  },
  {
    name: "Full-day workshop",
    price: "$4,500",
    duration: "6 hours",
    body: "Full survival track. Foundations + business uses + agents + a hands-on build session. Every attendee leaves with a working AI tool tied to your business.",
    bullets: [
      "10-25 people",
      "Custom curriculum tuned to your industry",
      "Working tool built live with attendees",
      "Follow-up Q&A call within 30 days",
    ],
    featured: true,
  },
  {
    name: "Multi-session program",
    price: "Quote",
    duration: "Custom",
    body: "Multi-week or chapter-by-chapter rollout for larger orgs, associations, or workforce programs. Cohort + workshop hybrid available.",
    bullets: [
      "Curriculum scoped to your goals",
      "Train-the-trainer add-on available",
      "Industry-specific case studies built in",
    ],
  },
] as const;

export default function WorkshopsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="In-person workshops"
        headlineParts={[
          { text: "Bring AI Survival School ", italic: false },
          { text: "to your team.", italic: true },
        ]}
        subhead="Half-day or full-day workshops delivered at your business. 10-25 people per session. Custom curriculum based on your industry. Every attendee leaves able to use AI for their actual job."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-orange-deep">What you get</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[1.8rem] sm:text-[2.4rem]">
                  A team that can actually use AI by the time we leave.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <ul className="mt-8 space-y-4 text-ink-mid leading-relaxed text-lg">
                  <li className="flex gap-4">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    Foundations: what AI actually is, what models to use, how to set up access for your whole team.
                  </li>
                  <li className="flex gap-4">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    Business uses tuned to your industry — customer service replies, marketing, SOPs, hiring docs, spreadsheet work.
                  </li>
                  <li className="flex gap-4">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    Hands-on prompting practice. Everyone gets reps. No passive watching.
                  </li>
                  <li className="flex gap-4">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    A custom prompts library specific to your business handed off at the end.
                  </li>
                  <li className="flex gap-4">
                    <span className="dot dot-orange mt-2 flex-shrink-0" />
                    On full-day formats: a working AI tool built live with the team.
                  </li>
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="bg-steel text-paper p-7 border border-steel-line">
                  <p className="eyebrow text-orange">Who it&rsquo;s for</p>
                  <ul className="mt-5 space-y-3 text-paper/80 text-sm leading-relaxed">
                    {audience.map((a) => (
                      <li key={a} className="flex gap-3">
                        <span className="dot dot-orange mt-2 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">Pricing</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
              Three formats. One operator-to-operator delivery.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-ink-mid max-w-prose leading-relaxed">
              Travel and venue costs billed at cost. Volume discounts for trade associations and workforce programs.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => {
              const featured = "featured" in tier && tier.featured;
              return (
                <Reveal key={tier.name} delay={i * 80}>
                  <article
                    className={`h-full p-7 sm:p-8 flex flex-col border ${
                      featured
                        ? "bg-steel text-paper border-orange"
                        : "bg-paper border-ink/10"
                    }`}
                  >
                    {featured ? (
                      <span className="chip chip-next w-fit">Most requested</span>
                    ) : (
                      <span className="eyebrow text-ink-soft">{tier.duration}</span>
                    )}
                    <h3 className="serif mt-5 text-[1.5rem] leading-tight">
                      {tier.name}
                    </h3>
                    <p
                      className={`display-md mt-4 text-[2.2rem] ${
                        featured ? "text-orange" : "text-ink"
                      }`}
                    >
                      {tier.price}
                    </p>
                    <p
                      className={`mt-5 text-sm leading-relaxed ${
                        featured ? "text-paper/75" : "text-ink-mid"
                      }`}
                    >
                      {tier.body}
                    </p>
                    <ul
                      className={`mt-6 space-y-2 text-sm flex-1 ${
                        featured ? "text-paper/80" : "text-ink-mid"
                      }`}
                    >
                      {tier.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-orange flex-shrink-0">✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-orange-deep">Industries served</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-md mt-5 text-[1.8rem] sm:text-[2.4rem] max-w-3xl">
              Built for blue-collar and Main Street businesses.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex flex-wrap gap-3">
              {industriesServed.map((ind) => (
                <span
                  key={ind}
                  className="border border-ink/15 px-3 py-1.5 text-sm text-ink-mid"
                >
                  {ind}
                </span>
              ))}
              <span className="border border-ink/15 px-3 py-1.5 text-sm text-ink-soft italic">
                + your industry
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="inquire" className="bg-paper-dim">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-orange-deep">Request a workshop</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem]">
                  Tell me about <em className="accent-italic">your team.</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-ink-mid leading-relaxed max-w-prose">
                  I read every inquiry myself. You&rsquo;ll hear back within two business days with a custom proposal and timeline.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <WorkshopForm source="workshops" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
