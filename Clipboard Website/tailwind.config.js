/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        diffYellow:'#f6c453',
        diffYellow1: '#fefbe9', 
        diffOrange:'#f0a04b',
        diffGreen: '#183a1d',
        diffGreen1: '#e1eedd'
      },
      fontFamily:{
        sans:['Poppins','sans-serif'],
        'mono':['IBM Plex Mono','mine'],
        myFont:['Bai Jamjuree','pop'],
      }
    },
  },
  plugins: [],
}

