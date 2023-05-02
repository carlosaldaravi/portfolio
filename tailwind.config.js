/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tightest: '-2.075em',
      tighter: '-1.05em',
      tight: '-.0725em',
      normal: '0',
      wide: '.725em',
      wider: '1.4em',
      widest: '2.1em',
      widest: '3.25em',
    },
    minWidth: {
      "xs": "1rem",
      "sm": "10rem",
      "md": "20rem",
      "lg": "30rem",
      "xl": "50rem",
      "custom": "500px",
      "1/2": "50%",
      "1/3": "33%",
      "screen": "100vw"
    },
    extend: {
      blur: {
        xxs: "1px",
        xs: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
