/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },
    colors: {
      white: '#ffffff',
      primary: {
        100: '#FFCAEA',
        200: '#EE43A1',
        300: '#E5007D',
        400: '#A9015D',
        500: '#6C013E',
      },
      grayscale: {
        100: '#FFFFFF',
        200: '#F6F6F6',
        300: '#CDCDCD',
        400: '#707070',
        500: '#4E4E4E',
        600: '#1E1E1E',
        700: '#080808',
      },
      critical:{
        100: '#FFD0D0',
        200: '#FC5E5E',
        300: '#DC0000',
        400: '#8E0000',
        500: '#6B0505',
      }
    },
    extend: {
      spacing: {
        sm: '14px',
        base: '16px',
    },
    },
  },
  plugins: [],
};
