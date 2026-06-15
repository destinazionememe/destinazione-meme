import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111813",
        coal: "#18211b",
        graphite: "#263029",
        ash: "#9faaa2",
        paper: "#f2efe8",
        blood: "#a61f2b",
        ember: "#d9414e",
        sage: "#b7c6c2",
        mist: "#d5f4f9",
        dust: "#9f8d8b",
        charcoal: "#302b2f",
      },
      fontFamily: {
        sans: [
          "Arial",
          "Helvetica Neue",
          "Helvetica",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Impact",
          "Haettenschweiler",
          "Arial Narrow Bold",
          "Arial Narrow",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 18px 70px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
