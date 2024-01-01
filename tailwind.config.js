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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'max-width': '100%',
            '*': {
              color: theme('colors.light-beige'),
            },
            'img': {
              'max-width': '65ch',
            }
          }
        }
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography')
  ],
}