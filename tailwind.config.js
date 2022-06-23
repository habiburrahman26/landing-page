/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        hotpink: '#ff7594',
        orange: '#ff7c65',
        lightDark: '#2e1619',
        petch: '#fddad6',
        light: '#F9F9F9',
        lightText: '#E0E0E0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
