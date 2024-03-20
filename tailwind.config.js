const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        '500':'500px',
        '450' : '450px',
        '550' : '550px',
        ...defaultTheme.height
      },
      colors:{
        primary: '#3761EE',
        textcolor: '#22314F',
        bordercolor: '#DADFF8',
        ...defaultTheme.colors
      }
    },
    
  },
  plugins: [],
}