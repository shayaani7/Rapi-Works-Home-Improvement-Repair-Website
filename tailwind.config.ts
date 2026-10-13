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
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9ddfe",
          300: "#7cc2fd",
          400: "#36a2fa",
          500: "#0c87eb",
          600: "#026ac9",
          700: "#0354a2",
          800: "#074786",
          900: "#0c3c6f",
          950: "#082649",
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        whatsapp: {
          500: "#25D366",
          600: "#128C7E",
          700: "#075E54",
        },
      },
    },
  },
  plugins: [],
};
export default config;
