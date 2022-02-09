module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridAutoRows: {'2fr': 'minmax(0, 2fr)'},
      fontFamily: {
        Cinzel: ["Cinzel Decorative", "cursive"],
        Rakkas: ["Rakkas", "cursive"],
        Amatic: ["Amatic SC", "cursive"], 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
