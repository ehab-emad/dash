/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
       "blue":"#2a2185",
       "white":"#fff",
      //  "gray":"#777",
       "black1":"#222",
       "black2":"#999"
     
      },
      animation: {
        "spin-fast": "spin 0.5s linear infinite",
      },
    },
  },
  plugins: [],
}