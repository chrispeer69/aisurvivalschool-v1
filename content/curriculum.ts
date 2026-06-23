// 12 modules, one per week across a 12-week cohort, grouped into three
// four-module tiers: Beginner AI, Next Level AI, Advanced AI.
export const curriculum = [
  {
    tier: "Beginner AI",
    weeks: "Weeks 1–4",
    modules: [
      {
        numeral: "I",
        title: "What AI Actually Is",
        body: "LLMs in plain English. What the training data is. What it can do, what it can't, and the honest version of how it works under the hood.",
      },
      {
        numeral: "II",
        title: "The Major Models",
        body: "Claude, ChatGPT, Gemini, Grok, Perplexity. Where each one shines, where each one falls down, and which one to reach for.",
      },
      {
        numeral: "III",
        title: "Cost, Access, and Setup",
        body: "Free tiers vs paid. Pinning Claude in your browser. Desktop apps, mobile apps, voice mode. Get fully set up in under an hour.",
      },
      {
        numeral: "IV",
        title: "Daily Life Uses",
        body: "Email. Research. Planning. Document work. Voice mode. The boring everyday stuff that compounds into hours back per week.",
      },
    ],
  },
  {
    tier: "Next Level AI",
    weeks: "Weeks 5–8",
    modules: [
      {
        numeral: "V",
        title: "Business Uses",
        body: "Customer service replies. Marketing copy. Spreadsheet work. SOPs. Hiring documents. Real things you do every day, faster.",
      },
      {
        numeral: "VI",
        title: "Prompt Engineering",
        body: "The structure of a strong prompt. Master prompts you reuse. How to iterate when the first answer isn't right.",
      },
      {
        numeral: "VII",
        title: "Custom Projects and Knowledge",
        body: "Custom GPTs and Claude Projects. Feed the model your own docs, SOPs, and voice so it answers like it works for you.",
      },
      {
        numeral: "VIII",
        title: "Documents, Data, and Spreadsheets",
        body: "Go deeper on real work files. Clean and analyze spreadsheets, summarize long documents, and turn messy data into decisions.",
      },
    ],
  },
  {
    tier: "Advanced AI",
    weeks: "Weeks 9–12",
    modules: [
      {
        numeral: "IX",
        title: "Agents and Automation",
        body: "What an agent actually is. Claude Code, computer use, Zapier and Make. The difference between hype and what's shipping right now.",
      },
      {
        numeral: "X",
        title: "Workflows and Integrations",
        body: "Connect the tools you already use. Trigger AI from email, forms, and your CRM so work happens without you in the loop.",
      },
      {
        numeral: "XI",
        title: "Building Your Own Tools",
        body: "Stand up a custom assistant tuned to your business. No-code and low-code builds you can ship and hand to your team.",
      },
      {
        numeral: "XII",
        title: "Capstone Build",
        body: "Build a meeting summarizer, a lead-response auto-drafter, or a research assistant — a working AI tool tied to your business.",
      },
    ],
  },
] as const;
