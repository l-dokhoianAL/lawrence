import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      gradientPurple:
        "linear-gradient(94.26deg, #34194C -20.93%, #FF1EB7 94.27%), linear-gradient(0deg, #000000, #FF0000)",
      gradientTextPurple:
        "linear-gradient(98deg, #FF1EB7 49.02%, #381E65 91.95%)",
      gradientGreen:
        "linear-gradient(269.49deg, #1B0D34 -8.62%, #52FF00 80.66%)",
      gradientGray:
        "linear-gradient(87deg, #FFF 33.03%, rgba(255, 255, 255, 0.00) 91.72%)",
      gradinetTextGray:
        "linear-gradient(135deg, #FFF 21.57%, rgba(255, 255, 255, 0.00) 98.89%)",
      gradientPurpleBlue:
        "linear-gradient(357deg, #1B0D34 -7.25%, rgba(0, 247, 247, 0.23) 57.89%, rgba(0, 247, 247, 0.00) 86.94%);",
    },
    colors: {
      blue: "#00FFFF",
      "dark-blue": "#150235",
      white: "#FFFFFF",
      red: "#FF0761",
      green: "#52FF00",
      orange: "#FFA500",
      pink: "#FF1EB7",
      yellow: "#FBFF20",
      grey: "#C0C0C0",
      purple: "#1B0D34",
      "purple-light": "#1B0D3480",
      jacarta: "#453562",
      transparent: "transparent",
      "chlorophyll-green": "#52ff00",
      "philippine-silver": "#b8b8b8",
      "charleston-green": "#2B2B2B",
      "charleston-green-light": "#2B2B2B33",
      "light-silver-opacity": "#D9D9D94D",
      "light-silver": "#D9D9D9",
      "quick-silver": "#a0a0a0",
      "silver-chalice": "#ACACAC",
      "midnight-blue": "#1B0D3470",
      gainsboro: "#dcdcdc99",
      "purple-15": "#1B0D3426",
      "grey-100": "#EDEDED",
      "grey-200": "#ACACAC99",
      "grey-300": "#838383",
      "grey-400": "#DADADA",
      "white-light":"#FFFFFFB0"
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1268px",
      },
    },
    boxShadow: {
      none: "none",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
