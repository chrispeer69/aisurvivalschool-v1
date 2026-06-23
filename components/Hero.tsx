import Link from "next/link";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative bg-steel text-paper overflow-hidden">
      <div className="grid-backdrop" aria-hidden />
      <div className="atmosphere-orange" aria-hidden />
      <div className="relative mx-auto max-w-editorial px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-orange">
                AI Training for small business owners
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[2.6rem] sm:text-[3.6rem] lg:text-[4.4rem]">
                Learn AI and <em className="accent-italic not-italic"><span className="italic">stay ahead of the competition.</span></em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-lg text-paper/75 max-w-prose leading-relaxed">
                AI is changing every industry. AI Survival School teaches small business owners, operators, and tradespeople how to use it — and keeps them ahead. Come for the skills, stay for the community.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="#how-it-works" className="btn-primary">
                  Get started →
                </Link>
                <Link href="/workshops" className="btn-ghost">
                  Book a workshop
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <hr className="hairline text-paper mt-14" />
              <p className="serif italic mt-8 text-paper/80 text-lg max-w-prose leading-snug">
                I taught myself AI over thousands of hours. Now I share it with you.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} className="lg:mt-12">
              <div className="bg-steel-2 border border-steel-line p-7 sm:p-8 relative">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-paper/60">Field report</span>
                  <span className="flex items-center gap-2 text-xs text-green-ok">
                    <span className="dot dot-green" /> One operator
                  </span>
                </div>
                <hr className="hairline text-paper my-5" />
                <h2 className="serif text-[1.55rem] leading-tight">
                  A towing business with 16 trucks and <em className="text-orange">$2,500 a month</em> in software rental.
                </h2>
                <p className="mt-5 text-sm text-paper/70 leading-relaxed">
                  I&rsquo;m Chris. I run towing companies in Columbus, Ohio — 16 trucks strong. I got tired of paying $2,500 a month for software that couldn&rsquo;t keep up, so I taught myself AI and built my own. Thousands of hours later, I help other small business owners do the same, in a community built on learning together.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3 text-[0.7rem] text-paper/55">
                  <div className="border border-steel-line p-3">
                    <div className="text-paper text-sm">16 trucks</div>
                    <div className="mt-1">Towing in Columbus, OH</div>
                  </div>
                  <div className="border border-steel-line p-3">
                    <div className="text-paper text-sm">$2,500/mo</div>
                    <div className="mt-1">Old software rental</div>
                  </div>
                  <div className="border border-steel-line p-3">
                    <div className="text-paper text-sm">1,000s hrs</div>
                    <div className="mt-1">Self-taught, now teaching</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
