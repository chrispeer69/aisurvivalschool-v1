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
                AI training for real businesses
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[2.6rem] sm:text-[3.6rem] lg:text-[4.4rem]">
                Learn AI <em className="accent-italic not-italic"><span className="italic">before</span></em> AI replaces you.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-lg text-paper/75 max-w-prose leading-relaxed">
                AI Survival School teaches the operators, owners, and tradespeople running real businesses how to use AI to save time, save money, and stay in business.
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
                From the operator who learned to survive — and now teaches you how.
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
                  16 trucks. <em className="text-orange">$650/mo cancelled.</em> One platform built alongside Claude.
                </h2>
                <p className="mt-5 text-sm text-paper/70 leading-relaxed">
                  I&rsquo;m Chris. I run Roadside Towing &amp; Recovery in Columbus, Ohio. I was paying $650 a month for software that hadn&rsquo;t shipped a real new feature in years. So I learned AI, built TowCommand Pro, and cancelled the bill.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3 text-[0.7rem] text-paper/55">
                  <div className="border border-steel-line p-3">
                    <div className="text-paper text-sm">10 sessions</div>
                    <div className="mt-1">Shipped in days, not months</div>
                  </div>
                  <div className="border border-steel-line p-3">
                    <div className="text-paper text-sm">$650/mo</div>
                    <div className="mt-1">Bloated software cancelled</div>
                  </div>
                  <div className="border border-steel-line p-3">
                    <div className="text-paper text-sm">1 founder</div>
                    <div className="mt-1">Operator + Claude as co-founder</div>
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
