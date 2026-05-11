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
  headline = "Eight modules. Every one practical.",
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
          {curriculum.map((m, i) => (
            <Reveal key={m.numeral} delay={i * 50}>
              <article
                className={`h-full p-7 ${
                  isDark ? "bg-steel-2" : "bg-paper"
                }`}
              >
                <div className="module-numeral">{m.numeral}</div>
                <h3 className="serif mt-3 text-[1.3rem] leading-tight">
                  {m.title}
                </h3>
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
    </section>
  );
}
