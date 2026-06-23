import { Reveal } from "./Reveal";

const slots = [
  {
    role: "Owner · Law Firm",
    real: true,
    note: "I started using AI in my law firm, and spending time with Chris has really advanced how I see it helping my business. He's grown my knowledge 10x faster than I ever could on my own.",
  },
  {
    role: "Owner · Blue Collar AI client",
    real: true,
    note: "The SaaS solutions Chris builds through Blue Collar AI are amazing — forward-thinking and creative. AI-powered SaaS really gives a company a leading edge in the market.",
  },
  {
    role: "Sales · Blue Collar AI client",
    real: true,
    note: "Blue Collar AI built a one-of-a-kind outbound sales logic system that really impresses me. Using it to manage my everyday sales outreach has had a real, positive impact on my CRM.",
  },
] as const;

export function TestimonialPlaceholder() {
  return (
    <section className="bg-paper-dim">
      <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow text-orange-deep">Field reports</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
            What operators say after the work.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {slots.map((s, i) => {
            const real = "real" in s && s.real;
            return (
              <Reveal key={i} delay={i * 80}>
                <figure
                  className={`h-full bg-paper p-7 flex flex-col ${
                    real ? "border border-orange/40" : "border border-ink/10"
                  }`}
                >
                  <div
                    aria-hidden
                    className="serif italic text-[2.2rem] text-orange-deep leading-none"
                  >
                    &ldquo;
                  </div>
                  <blockquote
                    className={`serif italic text-[1.05rem] leading-snug mt-2 flex-1 ${
                      real ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {s.note}
                  </blockquote>
                  <figcaption
                    className={`mt-5 eyebrow ${real ? "text-orange-deep" : "text-ink-soft"}`}
                  >
                    {s.role}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
