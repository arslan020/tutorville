import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#5A589E",
        "deep-navy": "#34315F",
        accent: "#A84D80",
        "accent-soft": "#F6E4EE",
        sky: "#EEEDF8",
        mist: "#FBF8FC",
        line: "#E6E0F0",
        ink: "#2C2844",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
      },
    },
  },
  plugins: [],
};

export default config;
