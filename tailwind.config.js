/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: [
          "Graphik Web",
          "Halvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        offwhite: "#f2f2f2",
        redish: "#E44232",
        creamColor: "#FFF9F3",
        lightRed: "#FBE3E0"
      },
    },
  },
  plugins: [],
};
