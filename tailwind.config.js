/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Comfortaa'],
        display: ['Montserrat'],
        // body: ['Source Serif Pro'],
        // body: ['Red Hat Text'],
        body: ['Jost'],
        sans: ['Arial']
      }
    },
  },
  plugins: [],
}
