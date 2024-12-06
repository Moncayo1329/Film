/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [

"./src/renderPics.js",
"./public/index.html",
"./src/App.js",
"./src/filmpictures.js",


  ],
  theme: {
    extend: {
   colors:{
  grape:"rgba(var(--grape) / <alpha-value>)"

   }
    },
  },
  plugins: [],
}

