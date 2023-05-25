const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './node_modules/@mfeao/uikit/**/*.{js,jsx,ts,tsx}',
    './node_modules/@mfeao/dashboard/**/*.{js,jsx,ts,tsx}',
    './node_modules/@mfeao/feed/**/*.{js,jsx,ts,tsx}',
    './node_modules/@mfeao/planning/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#ebfef5',
          100: '#cffce4',
          200: '#a4f6cf',
          300: '#69ecb6',
          400: '#2dda98',
          500: '#08af75',
          DEFAULT: '#08af75',
          600: '#009c69',
          700: '#007d57',
          800: '#026346',
          900: '#03513b',
          950: '#002e22',
        },
      },
    },
  },
  plugins: [],
};
