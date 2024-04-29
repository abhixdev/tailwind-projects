/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
          sm:'480px',
          md:'768px',
          lg:'976px',
          xl:'1440px',
    },
    extend:{
      colors:{
        strongBlue: '#121481',
        lightOrange:'#FFEAE3',
        mediumOrange:'#FFCBCB',
        strongOrange:'#FFB1B1',
      },
      fontFamily:{
        sans:["Kanit", "sans-serif"]
      }
    }
  },
  plugins: [],
}

