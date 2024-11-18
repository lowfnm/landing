/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#DAC0A3",
        secondary: "#D8DBBD",
        accent: "#102C57",
        cream: "#FAF1E5",
        brown: "#252220",
        "cream-300": "#EADBC8",
      },
      fontFamily: { roboto: '"Roboto Mono", monospace' },
    },
  },
  plugins: [],
};

