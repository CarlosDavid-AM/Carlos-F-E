/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js",
  ],
  theme: {
    container: {
      padding: "1.16rem"
    },
    extend: {
      fontFamily:{
        // "sans": "Manrope', sans-serif",
        "rota": "Roboto', sans-serif",
      },
      colors: {
        "do-orange-mediun": "#E0B125",
        "neutral-text": "#73838C",
      }
    },
  },
  plugins: [],
}

