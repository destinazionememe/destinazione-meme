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
        ink: "#070707",
        coal: "#121212",
        graphite: "#1f1f1f",
        ash: "#a6a6a6",
        paper: "#f7f7f2",
        blood: "#8f1118",
        ember: "#c5222a",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(143, 17, 24, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
