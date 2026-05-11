import { site } from "@/content/site";
import { UtilityBar } from "./UtilityBar";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export function SiteShell({ children }: Props) {
  return (
    <>
      <UtilityBar left={site.utility.left} right={site.utility.right} tone="dark" />
      <Nav
        brand={site.nav.brand}
        links={site.nav.links}
        cta={site.nav.cta}
        tone="dark"
      />
      <main id="main" className="flex-1 bg-paper">
        {children}
      </main>
      <Footer />
    </>
  );
}
