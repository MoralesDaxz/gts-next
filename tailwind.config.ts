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
        // Define un tamaño base para el título
        'title-base': ['1.2rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        // Define un tamaño de título pequeño (para pantallas pequeñas)
        'title-sm': ['1.5rem', { lineHeight: '2rem', fontWeight: '500' }],
        // Define un tamaño de título mediano (para pantallas medianas)
        'title-md': ['1.9rem', { lineHeight: '2.2rem', fontWeight: '500' }],
        // Define un tamaño de título grande (para pantallas grandes)
        'title-lg': ['2.5rem', { lineHeight: '3rem', fontWeight: '500' }],
        // Define un tamaño de título extra grande (para pantallas muy grandes)
        'title-xl': ['3rem', { lineHeight: '3.5rem', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};

export default config;
