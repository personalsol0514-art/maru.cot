import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-warm": "#FBF5EE",
        surface: "#FFFFFF",
        ink: "#2C2620",
        "ink-soft": "#6D6156",
        muted: "#A09385",
        accent: "#ED9455",
        "accent-dark": "#CE6D1D",
        "accent-soft": "#FBF0E4",
        cta: "#E4762B",
        "cta-dark": "#C95F17",
        line: "#F0E5D8",
        footer: "#2B2118",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      maxWidth: {
        container: "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
