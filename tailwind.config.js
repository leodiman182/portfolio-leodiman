/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // THEME COLORS
        'my-pink-500': '#6E274C',
        'my-pink-400': '#AD3E78',
        'my-pink-300': '#D64E95',
        'my-pink-200': '#ED55A4',
        'my-pink-100': '#FA5AAD',
        /* PROJECT COLORS */
        project1: '#000228',
        project2: '#f4623a',
        project3: '#fcc293',
        /* STACK COLORS */
        react: '#61DAFB',
        tailwind: '#06B6D4',
        axios: '#5A29E4',
        materialui: '#007FFF',
        node: '#339933',
        next: '#fff',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
