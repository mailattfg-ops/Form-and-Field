import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eff8fc",
          100: "#d6eff9",
          200: "#b1e1f4",
          300: "#7ccbea",
          400: "#44b0dd",
          500: "#2596be",
          600: "#1a789c",
          700: "#17607e",
          800: "#185068",
          900: "#184356",
          950: "#0f2b3a"
        },
        accent: {
          50: "#fff8ed",
          100: "#ffefd3",
          200: "#ffdea8",
          300: "#ffc672",
          400: "#ffa63d",
          500: "#ff8613",
          600: "#f06606",
          700: "#c74b06",
          800: "#9e3b0b",
          900: "#7f320f",
          950: "#451705"
        }
      },
      boxShadow: {
        soft: "0 12px 40px -14px rgba(37, 150, 190, 0.3)",
        glow: "0 0 20px rgba(37, 150, 190, 0.5)"
      }
    }
  },
  plugins: []
};

export default config;
