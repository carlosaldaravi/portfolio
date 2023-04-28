/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      blur: {
        xxs: '1px',
        xs: '2px',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
