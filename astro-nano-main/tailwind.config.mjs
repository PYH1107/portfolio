import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter", 
          "Noto Sans TC", 
          "PingFang SC", 
          "Hiragino Sans GB", 
          "Microsoft YaHei",
          "sans-serif",
          ...defaultTheme.fontFamily.sans
        ],
        serif: [
          "Lora", 
          "Noto Serif TC", 
          "PingFang TC", 
          "Hiragino Mincho ProN",
          "Microsoft YaHei",
          "serif",
          ...defaultTheme.fontFamily.serif
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
