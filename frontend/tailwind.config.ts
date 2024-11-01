import { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        green: {
          100: "#D8E9E4",
          300: "#2B5F44",
          500: "#243831",
        },
        golden: "#C5A365",
        black: "#000000",
        white: "#FFFFFF",
        text: "#191919",
        grey: {
          100: "#BBC2C0",
          300: "#939494",
        },
        success: "#49A569",
      },
    },
  },
  plugins: [daisyui],
};

export default config;
