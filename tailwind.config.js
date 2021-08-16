module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        title: ["Shadows Into Light", "cursive"],
        nav: ["Kalam", "cursive"],
        body: ["Rancho", "cursive"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}