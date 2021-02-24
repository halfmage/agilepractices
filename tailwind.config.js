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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            a: { color: theme("colors.primary.400") },
            strong: { color: theme("colors.gray.100") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.200"),
              borderLeftColor: theme("colors.primary.800"),
            },
          },
        },
      }),
      theme: {
        extend: {},
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
