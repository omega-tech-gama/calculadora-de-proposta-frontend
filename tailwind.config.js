module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'blue-omega': '#3980FF',
        'gray-background': '#F3F3F5',
        'gray-placeholder': '#9AA4B6',
        'color-letter': '#26395F'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
