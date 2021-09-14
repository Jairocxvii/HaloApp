// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      'ligth-blue-background-neumor-out': '29px 29px 25px #c7d3e8,-29px -29px 25px #dbe9ff;',
      'ligth-blue-background-neumor-in': 'inset 29px 29px 25px #c7d3e8,inset -29px -29px 25px #dbe9ff;',
      'golden-spartan-neumor': '11px 11px 20px #ac8229, - 11px - 11px 20px #ffe649'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      'green-spartan': '#48412f',
      'golden-spartan': '#efb439',
      'ligth-blue-background': '#d1def4',
      'ligth-blue':'#d3e1f7',
      'ligth-blue-hover':'#ffffff',
      'ligth-blue-button':'#e4eefc',
      'ligth-blue-text':'#8593a8'
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
