// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      'green-spartan': '#48412f',
      'golden-spartan': '#efb439'
    }
  },
  variants: {
    scale: ['hover'],
    rotate: ['responsive'],
    extend: {
      ringWidth: ['hover', 'active','focus'],
    },
  },
  plugins: [],
}
