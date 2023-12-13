/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        redapp: 'hsl(0, 97%, 63%)',
        bluedark: 'hsl(223, 30%, 9%)',
        bluesemi: 'hsl(223, 36%, 14%)',
        bluelight: 'hsl(223, 23%, 46%)',
      },
      fontSize: {
        h1: ['32px'],
        h2: ['24px'],
        h3: ['18px'],
        body: ['15px'],
        bodysm: ['13px'],
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
    plugins: [],
  }
}
