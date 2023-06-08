/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        sanchez: ["Sanchez", "serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      colors: {
        black: "#343434",
        pureWhite: "#fff",
        grey: "#D9D9D9",
        primaryColor: "#F5787E",
        secondaryColor: "rgba(245, 120, 126, 0.58)",
        dirtyWhite: "rgba(251, 251, 241, 0.74)",
        pureBlack: "#000000",
        primaryColorDark: "#C08587",
        primaryColorLight: "#E8B7B9",
      },
    },
  },
  plugins: [],
};
