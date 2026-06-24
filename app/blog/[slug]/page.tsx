import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { BlogContent } from "@/components/BlogContent";
import { getPost, posts, formatBlogDate } from "@/content/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Field Report · AI Survival School" };
  return {
    title: `${post.title} · AI Survival School`,
    description: post.subtitle,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <PageHeader
        eyebrow={post.eyebrow}
        headlineParts={[{ text: post.title, italic: false }]}
        subhead={post.subtitle}
      />

      <article className="bg-paper">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 py-16 sm:py-24">
          <div className="max-w-2xl mx-auto mb-10 pb-6 border-b border-ink/10">
            <p className="text-xs text-ink-soft font-mono">
              {post.byline} · {formatBlogDate(post.date)} · {post.readTime}
            </p>
          </div>

          <BlogContent blocks={post.blocks} />

          {/* CTA */}
          <div className="max-w-2xl mx-auto mt-16 pt-10 border-t-2 border-ink/80">
            <Reveal>
              <h2 className="serif text-[1.6rem] sm:text-[2rem] leading-tight">
                {post.cta.heading}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-ink-mid leading-relaxed">{post.cta.body}</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link href="/cohorts#waitlist" className="btn-primary">
                  Get on the list →
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-orange-deep hover:text-orange transition-colors"
                >
                  ← All field reports
                </Link>
              </div>
            </Reveal>
            <p className="mt-8 text-sm text-ink-soft font-mono">
              — Chris
              <br />
              Roadside Towing &amp; Recovery · Blue Collar AI
            </p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
