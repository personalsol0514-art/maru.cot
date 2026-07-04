import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAF7F3",
        surface: "#FFFFFF",
        ink: "#26211C",
        "ink-soft": "#5C554D",
        muted: "#8A8078",
        accent: "#B5764A",
        "accent-dark": "#96603B",
        "accent-soft": "#F1E3D6",
        line: "#E6DED4",
        footer: "#26211C",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      maxWidth: {
        container: "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
