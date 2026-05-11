import Link from "next/link";
import { site } from "@/content/site";

type Props = { footer?: typeof site.footer };

export function Footer({ footer = site.footer }: Props) {
  return (
    <footer className="bg-steel text-paper-dim mt-20">
      <div className="mx-auto max-w-editorial px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="display-md text-[1.75rem] mb-4 text-paper">
              AI Survival <span className="text-orange">School</span>
            </div>
            <p className="text-paper-dim text-sm max-w-prose leading-relaxed">{footer.brand}</p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <div className="eyebrow text-orange mb-3">{col.title}</div>
                <ul className="space-y-2 text-sm">
                  {col.links.map((link) => {
                    const external = "external" in link && link.external;
                    return (
                      <li key={link.label}>
                        {external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-paper-dim hover:text-orange transition-colors"
                          >
                            {link.label} ↗
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-paper-dim hover:text-orange transition-colors"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="hairline text-paper my-12" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-sm text-[#9CA3AF]">
          <p>{footer.bottom}</p>
          <p className="serif italic">{footer.italicBottom}</p>
        </div>

        <div className="mt-8 flex gap-6 text-xs text-paper-dim">
          <Link href="/privacy" className="hover:text-orange transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-orange transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
