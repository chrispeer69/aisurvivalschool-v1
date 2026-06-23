import { Reveal } from "./Reveal";
import { curriculum } from "@/content/curriculum";

type Props = {
  eyebrow?: string;
  headline?: string;
  subhead?: string;
  tone?: "light" | "dark";
};

export function CurriculumGrid({
  eyebrow = "The curriculum",
  headline = "Twelve modules. Every one practical.",
  subhead = "Same curriculum across cohorts and the self-paced course. Workshops pull from these modules and tune to your industry.",
  tone = "light",
}: Props) {
  const isDark = tone === "dark";
  return (
    <section
      className={`relative ${
        isDark ? "bg-steel text-paper" : "bg-paper text-ink"
      }`}
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <p
            className={`eyebrow ${isDark ? "text-orange" : "text-orange-deep"}`}
          >
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-md mt-5 text-[2rem] sm:text-[2.6rem] max-w-3xl">
            {headline}
          </h2>
        </Reveal>
        {subhead ? (
          <Reveal delay={140}>
            <p
              className={`mt-5 text-lg max-w-prose leading-relaxed ${
                isDark ? "text-paper/75" : "text-ink-mid"
              }`}
            >
              {subhead}
            </p>
          </Reveal>
        ) : null}

        {curriculum.map((group) => (
          <div key={group.tier} className="mt-12">
            <Reveal>
              <div className="flex items-baseline justify-between border-b border-ink/15 pb-3">
                <h3
                  className={`serif text-[1.5rem] sm:text-[1.8rem] ${
                    isDark ? "text-paper" : "text-ink"
                  }`}
                >
                  {group.tier}
                </h3>
                <span
                  className={`text-sm uppercase tracking-wide ${
                    isDark ? "text-paper/55" : "text-ink-mid"
                  }`}
                >
                  {group.weeks}
                </span>
              </div>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
              {group.modules.map((m, i) => (
                <Reveal key={m.numeral} delay={i * 50}>
                  <article
                    className={`h-full p-7 ${
                      isDark ? "bg-steel-2" : "bg-paper"
                    }`}
                  >
                    <div className="module-numeral">{m.numeral}</div>
                    <h4 className="serif mt-3 text-[1.3rem] leading-tight">
                      {m.title}
                    </h4>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isDark ? "text-paper/70" : "text-ink-mid"
                      }`}
                    >
                      {m.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
