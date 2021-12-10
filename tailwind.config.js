module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#033c71',
        'accent': '#ed554c'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
