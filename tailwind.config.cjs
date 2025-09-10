/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "#e36c58",     // accent
        deep: "#0f1213",      // main dark bg
        tealish: "#16353b",   // section bg
        card: "#f8fafb"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
