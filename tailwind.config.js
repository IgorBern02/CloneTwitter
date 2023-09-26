/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", "index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00acee",
        hoverBlue: "#048abf",
        bgCloseSide: "rgba(0,0,0,.5)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
