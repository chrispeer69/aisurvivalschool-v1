// Shared site nav, utility bar, footer config — used across every page.

export const site = {
  utility: {
    left: "Columbus, Ohio · Built by an operator",
    right: "AI training for real businesses",
  },
  nav: {
    brand: "AI Survival School",
    links: [
      { label: "In-Person", href: "/in-person" },
      { label: "Workshops", href: "/workshops" },
      { label: "Cohorts", href: "/cohorts" },
      { label: "Course", href: "/course" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
    ],
    cta: { label: "Contact", href: "/contact" },
  },
  footer: {
    brand:
      "AI Survival School teaches small business owners, operators and trades people what AI is and how to use it to stay ahead. Come to learn, stay for the community.",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "In-person learning", href: "/in-person" },
          { label: "In-person workshops", href: "/workshops" },
          { label: "Online cohorts", href: "/cohorts" },
          { label: "Self-paced course", href: "/course" },
          { label: "Free resources", href: "/resources" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            label: "#UNCOMFORTABLE (the book)",
            href: "https://uncomfortable.manus.space/",
            external: true,
            wordmark: true,
          },
          {
            label: "Layers (the book)",
            href: "https://layers-production-db71.up.railway.app/",
            external: true,
          },
          { label: "Hook, Haul & Hustle (the book)", href: "#" },
          {
            label: "Peerfield Press",
            href: "https://peerfieldpress.com",
            external: true,
          },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Newsletter", href: "/resources#newsletter" },
          { label: "Email Chris", href: "/contact" },
          { label: "Call or text: 614-633-7935", href: "tel:+16146337935" },
          {
            label: "Central Ohio Networkers",
            href: "https://centralohionetworkers.com/event-calendar",
            external: true,
          },
        ],
      },
    ],
    bottom: "© 2026 AI Survival School · A Blue Collar AI brand",
    italicBottom: "Learn AI before AI replaces you.",
  },
} as const;
