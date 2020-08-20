const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["CafeFrancoise", ...fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
