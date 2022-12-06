import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
