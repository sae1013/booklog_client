import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "Pretendard", "sans-serif"],
      },

      fontWeight: Object.fromEntries(
        Array.from({ length: 9 }, (_, i) => [
          (i + 1) * 100 + "",
          (i + 1) * 100 + "",
        ])
      ),
      boxShadow: {
        horizontal:
          "20px 0 8px -3px rgba(0, 0, 0, 0.15), -5px 0 5px -3px rgba(0, 0, 0, 0.1), 0px 6px 5px -3px rgba(0,0,0,0.3)",
        "100": "0px 4px 5px rgba(0,0,0,0.3)",
        "200": "0 20px 20px rgba(0,0,0,0.15)",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        beige: {
          400: "#F5F0E8",
          500: "#ede1ce",
        },
      },
      width: {
        "280": "70rem",
      },
      maxWidth: {
        "280": "70rem",
      },
    },
  },
  plugins: [],
};
export default config;
