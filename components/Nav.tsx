import Link from "next/link";

type NavLink = { label: string; href: string };

type Props = {
  brand: string;
  links: readonly NavLink[];
  cta: NavLink;
  tone?: "light" | "dark";
};

export function Nav({ brand, links, cta, tone = "dark" }: Props) {
  const isDark = tone === "dark";
  const wrap = isDark
    ? "bg-steel/90 text-paper border-b border-steel-line backdrop-blur"
    : "bg-paper/85 text-ink border-b border-ink/10 backdrop-blur";

  return (
    <header className={`${wrap} sticky top-0 z-40`}>
      <div className="mx-auto max-w-editorial px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-2 group" aria-label="AI Survival School home">
          <span className="display-md text-[1.35rem] sm:text-[1.5rem] tracking-tight">
            AI Survival
          </span>
          <span className="text-orange text-sm font-semibold tracking-wider">
            SCHOOL
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <span className="sr-only">{brand}</span>
          <Link
            href={cta.href}
            className="text-sm border border-current px-4 py-2 hover:bg-orange hover:text-paper hover:border-orange transition-colors"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
