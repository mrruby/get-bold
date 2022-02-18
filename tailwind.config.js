module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        getbold: {
          blue: "#233176",
          pink: "#FF7288",
          bg: "#FFFFFF",
          "btn-pink": "#EF6278",
          "btn-blue": "#3B5AA0",
          border: "rgb(112, 112, 112)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        bebas: ["'Bebas Neue'", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
