import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aisurvivalschool.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogEntries = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.6,
  }));
  return [
    { url: `${base}/`, lastModified: now, priority: 1 },
    { url: `${base}/in-person`, lastModified: now, priority: 0.9 },
    { url: `${base}/workshops`, lastModified: now, priority: 0.9 },
    { url: `${base}/cohorts`, lastModified: now, priority: 0.9 },
    { url: `${base}/course`, lastModified: now, priority: 0.85 },
    { url: `${base}/about`, lastModified: now, priority: 0.8 },
    { url: `${base}/resources`, lastModified: now, priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, priority: 0.7 },
    ...blogEntries,
    { url: `${base}/pick-your-model`, lastModified: now, priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, priority: 0.2 },
  ];
}
