import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-editorial px-5 sm:px-8 py-32 text-center">
        <p className="eyebrow text-orange-deep">404</p>
        <h1 className="display mt-5 text-[3rem]">
          Page <em className="accent-italic">not found</em>.
        </h1>
        <p className="mt-6 text-ink-mid">
          The page you&rsquo;re looking for has moved or doesn&rsquo;t exist.
        </p>
        <Link href="/" className="btn-primary mt-10">
          Return home →
        </Link>
      </section>
    </SiteShell>
  );
}
