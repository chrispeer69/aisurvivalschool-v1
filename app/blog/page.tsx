import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { sortedPosts, formatBlogDate } from "@/content/blog";

export const metadata: Metadata = {
  title: "Field Reports · The AI Survival School blog",
  description:
    "Field reports from the operator's seat — how a tow company owner actually uses AI to run a real business. Plain English, no theory.",
};

export default function BlogPage() {
  const all = sortedPosts();

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Field Reports"
        headlineParts={[
          { text: "Notes from the ", italic: false },
          { text: "operator's seat.", italic: true },
        ]}
        subhead="How a tow company owner actually uses AI to run a real business. No frameworks, no hype — just what works when the trucks have to roll."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto divide-y divide-ink/10">
            {all.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <article className="py-8 first:pt-0">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <p className="eyebrow text-orange-deep">{post.eyebrow}</p>
                    <h2 className="serif text-[1.6rem] sm:text-[2rem] leading-tight mt-3 group-hover:text-orange-deep transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-ink-mid leading-relaxed">{post.subtitle}</p>
                    <p className="mt-4 text-xs text-ink-soft font-mono">
                      {formatBlogDate(post.date)} · {post.readTime}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-orange-deep group-hover:text-orange transition-colors text-sm font-semibold">
                      Read it →
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
