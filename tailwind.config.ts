import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-dim": "var(--paper-dim)",
        steel: "var(--steel)",
        "steel-2": "var(--steel-2)",
        "steel-3": "var(--steel-3)",
        "steel-line": "var(--steel-line)",
        orange: "var(--orange)",
        "orange-deep": "var(--orange-deep)",
        ink: "var(--ink)",
        "ink-mid": "var(--ink-mid)",
        "ink-soft": "var(--ink-soft)",
        gold: "var(--gold)",
        "green-ok": "var(--green-ok)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
        editorial: "1240px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
