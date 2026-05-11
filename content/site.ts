// Shared site nav, utility bar, footer config — used across every page.

export const site = {
  utility: {
    left: "Columbus, Ohio · Built by an operator",
    right: "AI training for real businesses",
  },
  nav: {
    brand: "AI Survival School",
    links: [
      { label: "Workshops", href: "/workshops" },
      { label: "Cohorts", href: "/cohorts" },
      { label: "Course", href: "/course" },
      { label: "About", href: "/about" },
      { label: "Resources", href: "/resources" },
    ],
    cta: { label: "Contact", href: "/contact" },
  },
  footer: {
    brand:
      "AI Survival School teaches small business owners, operators, and tradespeople how to use AI before AI uses them. Built by Christopher D. Peer — operator, founder, author of #UNCOMFORTABLE.",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "In-person workshops", href: "/workshops" },
          { label: "Online cohorts", href: "/cohorts" },
          { label: "Self-paced course", href: "/course" },
          { label: "Free resources", href: "/resources" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          {
            label: "TowCommand Pro",
            href: "https://towcommand.ai",
            external: true,
          },
          {
            label: "#UNCOMFORTABLE (the book)",
            href: "https://uncomfortable.manus.space/",
            external: true,
          },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Newsletter", href: "/resources#newsletter" },
          { label: "Email Chris", href: "/contact" },
        ],
      },
    ],
    bottom: "© 2026 AI Survival School · A Blue Collar AI brand",
    italicBottom: "Learn AI before AI replaces you.",
  },
} as const;
