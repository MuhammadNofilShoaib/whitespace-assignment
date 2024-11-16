import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        largest: "1920px",
        larger: "1770px",
        large: "1300px",
        customMd: "985px",
        mobile: "569px",
        tablet: "1030px",
        smallest: "1px",
      },
      fontFamily: {
        custom: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
