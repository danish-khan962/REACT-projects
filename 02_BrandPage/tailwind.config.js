/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {

      'max-425': {'raw': '(max-width: 424px)'},
      'max-700': {'raw': '(max-width: 699px)'},
      'max-995': {'raw': '(max-width: 995px)'},
      'max-1181': {'raw': '(max-width: 1181px)'},
      'max-1100': {'raw': '(max-width: 1099px)'},
    },
  },
  plugins: [],
}
