/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        hotpink:'#ff7594',
        orange:'#ff7c65',
        text:'#2e1619',
        gradient:'linear-gradient(180deg, #ff7c65 0%, #ff7594 100%)',
        petch:'#fddad6'
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
