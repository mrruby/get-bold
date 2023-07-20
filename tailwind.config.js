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
        },
      },
      borderRadius: {
        "btn": "40px",
        "div": "70px",
        "item": "45px",
        "small-item": "17px",
      },
      boxShadow: {
        "div": "0px 4px 4px 0px #00000059",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        getBoldBase: "1.125rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
