/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-pink-500": "#6E274C",
        "my-pink-400": "#AD3E78",
        "my-pink-300": "#D64E95",
        "my-pink-200": "#ED55A4",
        "my-pink-100": "#FA5AAD",
      }
    },
  },
  plugins: [],
}
