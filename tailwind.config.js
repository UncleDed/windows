/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {  
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
