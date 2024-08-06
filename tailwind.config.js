/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Sora':['Sora'],
      },
      colors:{
        'Vermillion':'#F0544F',
        'AshGray':'#C6D8D3',
        'Honeydew':'#ECFFF8',
      },
    },
  },
  plugins: [],
}
