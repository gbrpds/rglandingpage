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
        "rg-black": "#050706",
        "rg-deep": "#0C231F",
        "rg-surface": "#0f2a24",
        "rg-accent": "#00E676",
        "rg-glow": "#7CFF4D",
        "rg-white": "#FFFFFF",
        "rg-gray": "#B7C2BD",
        "rg-gray-dim": "#6B7D78",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
