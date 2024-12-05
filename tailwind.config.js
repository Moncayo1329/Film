import { config } from '@testing-library/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
   colors:{
  grape:"var(--grape)",

   }
    },
  },
  plugins: [],
}

export default config;