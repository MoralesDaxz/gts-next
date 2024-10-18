import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        header: ["1.6rem", { lineHeight: "1.6rem", fontWeight: "400" }],
        "header-sm": ["1.7rem", { lineHeight: "1.7rem", fontWeight: "500" }],
        "header-md": ["2rem", { lineHeight: "2rem", fontWeight: "500" }],
        "header-lg": ["2.5rem", { lineHeight: "2.5rem", fontWeight: "500" }],
        title: ["1.5rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "title-sm": ["1.6rem", { lineHeight: "1.6rem", fontWeight: "500" }],
        "title-md": ["1.9rem", { lineHeight: "2rem", fontWeight: "500" }],
        "title-lg": ["2.4rem", { lineHeight: "2.4rem", fontWeight: "500" }],
        subtitle: ["1.3rem", { lineHeight: "1.3rem", fontWeight: "400" }],
        "subtitle-sm": ["1.35rem", { lineHeight: "1.35rem", fontWeight: "500" }],
        "subtitle-md": ["1.45rem", { lineHeight: "1.45rem", fontWeight: "500" }],
        "subtitle-lg": ["1.9rem", { lineHeight: "1.9rem", fontWeight: "500" }],
        parag: ["1rem", { lineHeight: "1.1rem", fontWeight: "300" }],
        "parag-sm": ["1.1rem", { lineHeight: "1.1rem", fontWeight: "300" }],
        "parag-md": ["1.2rem", { lineHeight: "1.25rem", fontWeight: "300" }],
        "parag-lg": ["1.3rem", { lineHeight: "1.4rem", fontWeight: "400" }],


      }
    },
  },
  plugins: [],
};

export default config;
