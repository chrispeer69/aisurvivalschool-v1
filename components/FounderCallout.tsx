import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { Uncomfortable } from "./Uncomfortable";

export function FounderCallout() {
  return (
    <section className="bg-paper border-t border-ink/10">
      <div className="mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="aspect-[4/5] bg-steel relative overflow-hidden border border-ink/10">
                <Image
                  src="/chris-peer.png"
                  alt="Christopher D. Peer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <div className="eyebrow text-orange">Christopher D. Peer</div>
                    <p className="serif italic text-paper text-[1.3rem] mt-2 leading-tight">
                      Operator. Founder. <br /> Author of{" "}
                      <Uncomfortable className="not-italic" /> &amp; Layers.
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
                I&rsquo;m not a professor. <em className="accent-italic">I&rsquo;m a small business owner finding the next leverage point to compete and win.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 text-lg text-ink-mid leading-relaxed max-w-prose">
                I own and run a 16-truck towing company in Columbus, OH. I was renting software for thousands a month, so I learned AI and built my own — software to run my business, and others as well.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-lg text-ink-mid leading-relaxed max-w-prose">
                With over 20 SaaS systems built to date, I&rsquo;ve mastered using AI to power my business. Now I want to use that knowledge to power yours too.
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
                  className="btn-armstrong"
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
