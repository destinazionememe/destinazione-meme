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
        ink: "#030303",
        coal: "#0a0a0a",
        graphite: "#171717",
        ash: "#9faaa2",
        paper: "#f4f1ea",
        blood: "#a61f2b",
        ember: "#d9414e",
        violet: "#8b5cf6",
        cyan: "#06b6d4",
        neon: "#22d3ee",
        emerald: "#10b981",
        sage: "#b7c6c2",
        mist: "#d5f4f9",
        dust: "#9f8d8b",
        charcoal: "#111111",
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
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 38px -18px rgba(139, 92, 246, 0.78)",
        cyan: "0 0 38px -18px rgba(6, 182, 212, 0.78)",
      },
    },
  },
  plugins: [],
};

export default config;
