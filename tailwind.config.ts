import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1554C0",
        "deep-navy": "#0E2F5C",
        accent: "#F26B2A",
        "accent-soft": "#FFF1E8",
        sky: "#E7F1FF",
        mist: "#F5F8FC",
        line: "#D9E4F2",
        ink: "#1B2A41",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
      },
    },
  },
  plugins: [],
};

export default config;
