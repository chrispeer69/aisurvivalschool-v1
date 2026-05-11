import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ThreeWays } from "@/components/ThreeWays";
import { FounderCallout } from "@/components/FounderCallout";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";
import { NewsletterBanner } from "@/components/NewsletterBanner";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <HowItWorks />
      <ThreeWays />
      <FounderCallout />
      <TestimonialPlaceholder />
      <NewsletterBanner source="home" />
    </SiteShell>
  );
}
