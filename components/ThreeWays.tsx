import Link from "next/link";
import { Reveal } from "./Reveal";

const ways = [
  {
    chip: "On-site",
    title: "In-Person Workshops",
    body: "Half-day or full-day, delivered at your business. 10-25 people, custom curriculum tuned to your industry.",
    href: "/workshops",
    cta: "See workshops",
  },
  {
    chip: "Live · 4 weeks",
    title: "Online Cohorts",
    body: "Small group, two live sessions per week, real homework. Go from AI-curious to AI-capable in 30 days.",
    href: "/cohorts",
    cta: "See cohort details",
  },
  {
    chip: "On-demand",
    title: "Self-Paced Course",
    body: "Same curriculum as the cohort, on your schedule. Lifetime access. Monthly community Q&A calls.",
    href: "/course",
    cta: "See the course",
  },
] as const;

export function ThreeWays() {
  return (
    <section className="bg-steel text-paper relative overflow-hidden">
      <div className="atmosphere-orange" aria-hidden />
      <div className="relative mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow text-orange">Three ways to learn</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-md mt-5 text-[2rem] sm:text-[2.8rem] max-w-3xl">
            Pick the format that fits how your business actually works.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <article className="h-full bg-steel-2 border border-steel-line p-8 flex flex-col">
                <span className="chip chip-next w-fit">{w.chip}</span>
                <h3 className="serif mt-5 text-[1.6rem] leading-tight text-paper">
                  {w.title}
                </h3>
                <p className="mt-4 text-paper/70 leading-relaxed flex-1">
                  {w.body}
                </p>
                <Link
                  href={w.href}
                  className="mt-6 inline-flex items-center gap-2 text-orange hover:text-paper transition-colors text-sm font-semibold"
                >
                  {w.cta} →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
