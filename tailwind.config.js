/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('assets.background.jpg')",
        
      },
      fontFamily:{
        Poppins : ['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

