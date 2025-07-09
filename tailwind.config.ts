import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jf: ["'CustomFontName'", "sans-serif"],
        js: ["'Somar'", "sans-serif"],
      },
      colors: {
        primary: "#463192",
        secondary: "#F6EBFF",
        info: "#F288B7",
        success: "#F5FCFC",
        warning: "#F9FAFB",
      },
    },
    backgroundImage: {
      agree1: "url('/agree/Group 1321314096.svg')",
      agree: "url('/agree/Group 1321314097.svg')",
      hero: "url('/hero/hero_back.svg')",
      service: "url('/service/section (2) (2).svg')",
      works: "url('/works/Ellipse 5.png')",
      footer: "url('/footer/Rectangle 237.svg')",
      murshed_hero: "url('/murshed/bg-hero.png')",
      why_murshed: "url('/murshed/bg_why_murshed.png')",
      why_murshed2: "url('/murshed/bg_why_murshed2.png')",
    },
  },
  plugins: [],
} satisfies Config;
