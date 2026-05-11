import { Reveal } from "./Reveal";

const items = [
  {
    eyebrow: "I",
    title: "What AI Actually Is",
    body: "LLMs explained without the jargon. The honest version. What it can do, what it can't, and how to think about it as a tool.",
  },
  {
    eyebrow: "II",
    title: "How to Use It Daily",
    body: "Email, research, planning, document work, voice mode. The everyday lifts that compound into hours back per week.",
  },
  {
    eyebrow: "III",
    title: "How to Run Your Business With It",
    body: "Customer service. Marketing. SOPs. Hiring docs. Spreadsheets. Light automation. Real ops, not demos.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper">
      <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow text-orange-deep">What you&rsquo;ll learn</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-md mt-5 text-[2rem] sm:text-[2.8rem] max-w-3xl">
            Three things every operator needs to know about AI.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="h-full bg-paper p-8">
                <div className="module-numeral">{item.eyebrow}</div>
                <h3 className="serif mt-3 text-[1.5rem] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-ink-mid leading-relaxed">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
