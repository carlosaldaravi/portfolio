/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      xxs: "0.125em",
      xs: "0.25em",
      sm: "0.5em",
      lg: "0.75em",
      xl: "1em",
      tightest: "-2.075em",
      tighter: "-1.05em",
      tight: "-.0725em",
      normal: "0",
      wide: ".725em",
      wider: "1.4em",
      widest: "2.1em",
      widest: "3.25em",
    },
    minWidth: {
      xs: "1rem",
      sm: "10rem",
      md: "20rem",
      lg: "30rem",
      xl: "50rem",
      custom: "500px",
      "1/2": "50%",
      "1/3": "33%",
      screen: "100vw",
    },
    extend: {
      blur: {
        xxs: "1px",
        xs: "2px",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "appear-1": "appear 1s",
        "appear-2": "appear 2s",
        "appear-3": "appear 3s",
      },
      colors: {
        "dark-primary": "#111827",
        "dark-secondary": "#282f3c",
        "dark-text": "#000",
        "light-primary": "#eee",
        "light-secondary": "#d6d6d6",
        "light-text": "#fff",
      },
      transitionProperty: {
        card: "blur, opacity",
      },
      rotate: {
        15: "15deg",
        20: "20deg",
        25: "25deg",
        30: "30deg",
        35: "35deg",
        40: "40deg",
        50: "50deg",
        55: "55deg",
        60: "60deg",
        65: "65deg",
        70: "70deg",
        75: "75deg",
        80: "80deg",
        85: "85deg",
      },
      gridTemplateColumns: {
        ranking: "30px 1fr 50px"
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
