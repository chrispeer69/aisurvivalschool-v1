import Link from "next/link";
import { Reveal } from "./Reveal";

export function FounderCallout() {
  return (
    <section className="bg-paper border-t border-ink/10">
      <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div
                aria-hidden
                className="aspect-[4/5] bg-steel relative overflow-hidden border border-ink/10"
              >
                <div className="grid-backdrop" />
                <div className="atmosphere-orange" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <div className="eyebrow text-orange">Christopher D. Peer</div>
                    <p className="serif italic text-paper text-[1.3rem] mt-2 leading-tight">
                      Operator. Founder. <br /> Author of #UNCOMFORTABLE.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-orange-deep">Who&rsquo;s teaching</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-5 text-[2.2rem] sm:text-[3rem] max-w-3xl">
                I&rsquo;m not a professor. <em className="accent-italic">I&rsquo;m an operator.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 text-lg text-ink-mid leading-relaxed max-w-prose">
                I run a 16-truck towing company in Columbus, Ohio. I was paying $650 a month for software that hadn&rsquo;t shipped a real new feature in years. So I learned AI, built my own platform, and cancelled the bill.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-lg text-ink-mid leading-relaxed max-w-prose">
                If a tow company owner can do this, every small business owner can. You just need a teacher who speaks your language.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/about" className="btn-primary">
                  Read my story →
                </Link>
                <a
                  href="https://uncomfortable.manus.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-ink"
                >
                  Read #UNCOMFORTABLE (free) ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
