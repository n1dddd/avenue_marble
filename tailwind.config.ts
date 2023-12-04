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
        primary: "#fffff9",
        secondary: "#fdfffc",
        almostblack: "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
export default config;
