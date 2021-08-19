module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-omega': '#3980FF',
        'darkblue-omega': '#26395F',
        'bg-light': '#F9FAFB',
        'gray-placeholder': '#9AA4B6',
        'warn': '#FF5C5C',
        'success': '#10B981'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
