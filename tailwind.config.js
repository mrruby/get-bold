module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        getbold: {
          blue: "#212954",
          pink: "#F4BCC4",
          "dark-pink": "#DE6B7A",
          white: "#FFFFFF",
          bg: "#FFFFFF",
          "btn-light-pink": "#F5D3D7",
          "btn-pink": "#DE6B7A",
          "btn-blue": "#212954",
          border: "rgb(112, 112, 112)",
          boxShadow: "0px 4px 4px 0px #00000059",
          "btn-border-radius": "40px",
          "div-border-radius": "70px",
          "item-border-radius": "45px",
          "small-item-border-radius": "17px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
