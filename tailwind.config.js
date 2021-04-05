const color = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'salmon' : '#FA8072',
        'cyan' : color.cyan
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
