/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#806a6a",
        secondary: "#b9abab",
        light: "#efeaea",
      },
    },
  },
  plugins: [],
  safelist: [...[...Array(360).keys()].flatMap((i) => `rotate-[${i}deg]`)], // all rotate degrees
};
