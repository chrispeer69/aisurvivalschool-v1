import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Oswald } from "next/font/google";
import "@/styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

// "Armstrong" font — the condensed bold the #UNCOMFORTABLE book itself uses
// for its wordmark. Wired through --font-armstrong.
const armstrong = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-armstrong",
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aisurvivalschool.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Survival School · Learn AI before AI replaces you.",
    template: "%s · AI Survival School",
  },
  description:
    "AI Survival School teaches the operators, owners, and tradespeople running real businesses how to use AI to save time, save money, and stay in business.",
  applicationName: "AI Survival School",
  authors: [{ name: "Christopher D. Peer" }],
  keywords: [
    "AI training",
    "AI for small business",
    "AI workshops",
    "AI cohort",
    "Claude training",
    "ChatGPT for business",
    "blue collar AI",
    "operator AI training",
  ],
  openGraph: {
    title: "AI Survival School · Learn AI before AI replaces you.",
    description:
      "From the operator who learned to survive — and now teaches you how. Workshops, cohorts, and self-paced training for small business owners.",
    type: "website",
    url: siteUrl,
    siteName: "AI Survival School",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Survival School · Learn AI before AI replaces you.",
    description:
      "From the operator who learned to survive — and now teaches you how.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0E12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${armstrong.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
