/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: colors.gray,
      red: '#EA1B25',
    },
    extend: {},
  },
  plugins: [],
};
