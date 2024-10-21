/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'primary' : '#2563eb'
      },
      fontFamily:{
        'ramaraja' : ["ramaraja",'sans-serif'],
        'public sans' : ['public Sans','sans-serif'],
        'Playfair' : ['Playfair' , 'sans-serif'],
        'Cut' : ['Nova Cut' , 'sans-serif'],
        'Lato' : ['Lato' , 'sans-serif'],
        'EB Garamond' : ['EB Garamond' , 'sans-serif'],
        'Bodoni' : ['Bodoni Moda SC','sans-serif']
      }
    },
  },
  plugins: [],
}

