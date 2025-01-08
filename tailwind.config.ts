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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandColor: '#ED2590',
        dark10: '#4B4B4B',
        dark20: '#B4AEAE',
        dark30: '#D9E6F7',
        dark40: '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
