/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Crimson Pro', 'Garamond', 'serif']
    },
    extend: {
      colors: {
        'dark-turquoise': '#113946',
        'light-beige': '#EAD7BB',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}