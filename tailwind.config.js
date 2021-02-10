module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 201, 224)",
        secondary: "rgb(65, 234, 212)",
        background: "#011627",
      },
      fontFamily: {
        larsseit: "'Larsseit'",
        "noe-display": "'Noe Display'",
      },
      fontSize: {
        36: "3.25rem",
        120: "7.5rem",
      },
      inset: {
        "1/10": "10%",
      },
      minWidth: {
        0: "0%",
        25: "25%",
        50: "50%",
        75: "75%",
        full: "100%",
      },
      spacing: {
        50: "3.125rem",
      },
      zIndex: {
        n1: "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
