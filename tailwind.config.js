/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Vazirmatn", "sans-serif"],
    },
    colors: {
      dark: {
        primary: "#181818",
        secondary: "#313131",
        heading: "#ffffff",
        content: "#AAAAAA",
        error: "#9474b8",
        hover: "#d7b932",
      },
      light: {
        primary: "#bdbdbd",
        secondary: "#e0e0e0",
        heading: "#3d3d3d",
        content: "#555555",
        error: "#9474b8",
        hover: "#937820",
      },
    },
    extend: {},
  },
  plugins: [],
}
