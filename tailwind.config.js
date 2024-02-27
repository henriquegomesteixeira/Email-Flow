import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/index.html",
    "src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: colors.zinc,
        primaryColor: colors.emerald,
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

