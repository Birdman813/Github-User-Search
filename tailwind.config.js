/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#141D2F',
        'light': '#F6F8FF',
      }
    },
  },
  plugins: [],
}