import { Reveal } from "./Reveal";

type Part = { text: string; italic: boolean };

type Props = {
  eyebrow: string;
  headlineParts: readonly Part[];
  subhead?: string;
  tone?: "light" | "dark";
};

export function PageHeader({ eyebrow, headlineParts, subhead, tone = "dark" }: Props) {
  const isDark = tone === "dark";
  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? "bg-steel text-paper" : "bg-paper text-ink"
      }`}
    >
      {isDark ? (
        <>
          <div className="grid-backdrop" aria-hidden />
          <div className="atmosphere-orange" aria-hidden />
        </>
      ) : null}
      <div className="relative mx-auto max-w-editorial px-5 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <Reveal>
          <p className={`eyebrow ${isDark ? "text-orange" : "text-orange-deep"}`}>
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 text-[2.2rem] sm:text-[3.2rem] lg:text-[3.8rem] max-w-5xl">
            {headlineParts.map((part, i) =>
              part.italic ? (
                <em key={i} className="accent-italic">
                  {part.text}
                </em>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </h1>
        </Reveal>
        {subhead ? (
          <Reveal delay={160}>
            <p
              className={`mt-7 text-lg max-w-prose leading-relaxed ${
                isDark ? "text-paper/75" : "text-ink-mid"
              }`}
            >
              {subhead}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
