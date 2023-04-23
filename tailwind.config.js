module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        greybg: "#3a4151",
        bar: "#13161d",
        orange: "#f8cf64",
        pink: "#f69bc0",
        cyan: "#5ef3e5",
        yellowgreen: "#eefea2",
        greenblue: "#5ef3e8",
        seablue: "#3a54e4",
        lgorangepink:
          "linear-gradient(135deg, rgba(251,207,100,1) 0%, rgba(253,155,192,1) 100%)",
        lggreenyellow:
          "linear-gradient(135deg, rgba(69,244,230,1) 0%, rgba(239,255,163,1) 100%)",
        lggreenblue:
          "linear-gradient(135deg, rgba(62,243,232,1) 0%, rgba(58,84,228,1) 100%)",
      },
    },
  },
  plugins: [],
};
