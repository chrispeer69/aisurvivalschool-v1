import { Reveal } from "./Reveal";
import { NewsletterForm } from "./forms/NewsletterForm";

type Props = {
  source?: string;
  id?: string;
};

export function NewsletterBanner({ source = "newsletter-banner", id = "newsletter" }: Props) {
  return (
    <section id={id} className="bg-steel text-paper relative overflow-hidden">
      <div className="atmosphere-orange" aria-hidden />
      <div className="relative mx-auto max-w-editorial px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-orange">The AI Survival Newsletter</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-5 text-[1.8rem] sm:text-[2.4rem] max-w-2xl">
                One email a week. Plain English. <em className="accent-italic">No fluff.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-paper/75 max-w-prose leading-relaxed">
                What I&rsquo;m using, what I just shipped with AI, and what every operator should pay attention to this week.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <NewsletterForm source={source} tone="dark" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
