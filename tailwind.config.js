/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
