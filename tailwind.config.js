/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#EC6410',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
        'brand-gray': '#F5F5F5',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  // Add the typography plugin here
  plugins: [
    require('@tailwindcss/typography'),
  ],
}