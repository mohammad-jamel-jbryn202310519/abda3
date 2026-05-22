import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./messages/**/*.json"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#dbeafd",
          200: "#b7d8fb",
          300: "#83bbf6",
          400: "#4d93ee",
          500: "#2769db",
          600: "#1f51b4",
          700: "#1a4496",
          800: "#183a7a",
          900: "#162f64"
        }
      }
    }
  },
  plugins: []
};

export default config;
