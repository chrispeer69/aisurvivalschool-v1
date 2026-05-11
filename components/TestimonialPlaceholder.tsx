import { Reveal } from "./Reveal";

const slots = [
  { role: "Owner · HVAC", note: "Testimonial slot — real quote drops in post-launch." },
  { role: "Operator · Towing", note: "Testimonial slot — real quote drops in post-launch." },
  { role: "Owner · Retail", note: "Testimonial slot — real quote drops in post-launch." },
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
        <Reveal delay={120}>
          <p className="mt-4 text-sm text-ink-soft italic max-w-prose">
            Real testimonials replace these blocks after the first wave of workshops and cohorts.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {slots.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="h-full bg-paper border border-ink/10 p-7 flex flex-col">
                <div
                  aria-hidden
                  className="serif italic text-[2.2rem] text-orange-deep leading-none"
                >
                  &ldquo;
                </div>
                <blockquote className="serif italic text-ink-soft text-[1.05rem] leading-snug mt-2 flex-1">
                  {s.note}
                </blockquote>
                <figcaption className="mt-5 eyebrow text-ink-soft">{s.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
