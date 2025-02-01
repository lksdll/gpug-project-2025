/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {

      },
      height: {

      },
      backgroundImage: {
        'netflix-homepage': "url('/src/assets/background-images/background-netflix.png')"
      },
      colors: {
        'netflix-red:': '#db0000',
        'netflix-dark-red': '#831010',
        'netflix-black': '#000000',
        'netflix-white': '#ffffff',
        'netflix-gray': '#564d4d',
        'netflix-light-gray': '#bbbbbb',
        'netflix-dark-gray': '#181818',
        'netflix-mid-gray': '#2f2f2f',
      },
    },
    plugins: [],
  }
};