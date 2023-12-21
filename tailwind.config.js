/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: colors.gray,
      red: '#EA1B25',
      white: '#fff',
      blue: '#1E90FF',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
};
