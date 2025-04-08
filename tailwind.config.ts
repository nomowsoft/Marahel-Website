import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#463192",
        secondary: "#F6EBFF",
        info: "#D2CDFF",
        success: "#F5FCFC",
        warning: "#F9FAFB",
      },
    },
    backgroundImage: {
      hero: "url('/hero/hero_back.svg')",
      service: "url('/service/New Project (7).svg')",
      works: "url('/works/Ellipse 5.png')",
      footer: "url('/footer/Rectangle 237.svg')",
      murshed_hero: "url('/murshed/bg-hero.png')",
      why_murshed: "url('/murshed/bg_why_murshed.png')",
      why_murshed2: "url('/murshed/bg_why_murshed2.png')",
    },
  },
  plugins: [],
} satisfies Config;
