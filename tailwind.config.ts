import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darker: "#121217",
        dark: "#17171d",
        darkless: "#252429",
        black: "#1f2d3d",
        steel: "#273444",
        slate: "#3c4858",
        muted: "#8492a6",
        smoke: "#e0e6ed",
        snow: "#f9fafc",
        white: "#ffffff",
        red: "#ec3750",
        orange: "#ff8c37",
        yellow: "#f1c40f",
        green: "#33d6a6",
        cyan: "#5bc0de",
        blue: "#338eda",
        purple: "#a633d6",
        twitter: "#1da1f2",
        facebook: "#3b5998",
        instagram: "#e1306c",
        text: "#1f2d3d",
        background: "#ffffff",
        elevated: "#ffffff",
        sheet: "#f9fafc",
        sunken: "#e0e6ed",
        border: "#e0e6ed",
        placeholder: "#8492a6",
        secondary: "#3c4858",
        primary: "#ec3750",
        accent: "#338eda",
      },
      fontFamily: {
        sans: ["Phantom Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
