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
        header: ["1.2rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "header-sm": ["1.2rem", { lineHeight: "1.7rem", fontWeight: "500" }],
        "header-md": ["1.7rem", { lineHeight: "2.2rem", fontWeight: "500" }],
        "header-lg": ["2.2rem", { lineHeight: "3rem", fontWeight: "500" }],

        parag: [".8rem", { lineHeight: "1.1rem", fontWeight: "300" }],
        "parag-sm": [".9rem", { lineHeight: "1.1rem", fontWeight: "300" }],
        "parag-md": ["1rem", { lineHeight: "1.2", fontWeight: "300" }],
        "parag-lg": ["1.2", { lineHeight: "1.3", fontWeight: "400" }],

        subtitle: ["1rem", { lineHeight: "1.3rem", fontWeight: "400" }],
        "subtitle-sm": ["1rem", { lineHeight: "1.3rem", fontWeight: "500" }],
        "subtitle-md": ["1.2rem", { lineHeight: "1.6", fontWeight: "500" }],
        "subtitle-lg": ["1.5", { lineHeight: "1.8", fontWeight: "500" }],

        title: ["1.2rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "title-sm": ["1.5rem", { lineHeight: "2rem", fontWeight: "500" }],
        "title-md": ["1.9rem", { lineHeight: "2.2rem", fontWeight: "500" }],
        "title-lg": ["2.5rem", { lineHeight: "3rem", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};

export default config;
