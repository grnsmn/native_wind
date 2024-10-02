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
