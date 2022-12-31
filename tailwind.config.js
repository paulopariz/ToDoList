/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'righteous': ['"Righteous"', 'cursive']
      }
    },

   
  },
  plugins: [
  ],
}
