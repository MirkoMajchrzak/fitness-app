module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainbg: "#202430",
      greybg: "#3a4151",
      lgorangepink:
        "linear-gradient(135deg, rgba(251,207,100,1) 0%, rgba(253,155,192,1) 100%)",
      lggreenyellow:
        "linear-gradient(135deg, rgba(69,244,230,1) 0%, rgba(239,255,163,1) 100%)",
      lggreenblue:
        "linear-gradient(135deg, rgba(62,243,232,1) 0%, rgba(58,84,228,1) 100%)",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
