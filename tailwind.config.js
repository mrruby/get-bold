module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        getbold: {
          blue: "#212954",
          pink: "#F4BCC4",
          "pink-ref": "rgba(209, 101, 115, 0.60)",
          "pink-input": "rgba(255, 255, 255, 0.40)",
          "dark-pink": "#DE6B7A",
          white: "#FFFFFF",
          bg: "#FFFFFF",
          "btn-light-pink": "#F5D3D7",
          "btn-pink": "#DE6B7A",
          "btn-blue": "#212954",
          "btn-light-blue": "#414F74",
          border: "rgb(112, 112, 112)",
        },
      },
      borderRadius: {
        "btn": "40px",
        "div": "70px",
        "input": "28px",
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
        getBoldSubtitle: "1.5625rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
