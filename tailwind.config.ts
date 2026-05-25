import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./messages/**/*.json"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cairo)", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#fffdeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#FFCC00",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f"
        }
      }
    }
  },
  plugins: []
};

export default config;
