/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BCBCBC",
        secondary: "#10BF62",
        lightGray: "#7F8493",
        darkGray: "#5C5C5E",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
