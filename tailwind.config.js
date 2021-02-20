const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gray: colors.coolGray,
        primary: colors.amber,
        secondary: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
