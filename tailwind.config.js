/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#3A4562",
        accentColor: "#878D9D",
        arrowColor: "#7D859C",
        vDividerColor: "#DEE3EF",
        paginatorPagesColor: "#70778B",
        paginatorPagesColorH: "#5876C5",
        cardMobileColor: "#EFF0F5",
        buttonMainColor: "#384564",
        jobPostsPageBg: "#E6E9F2",
        jobDetailsBg: "#FFFFFF",
        buttonAccentBlue: "rgba(161, 177, 219, 0.317343)",
        buttonAccentYellow: "rgba(255, 207, 0, 0.15)",
      },
    },
    fontFamily: {
      mainText: ["Roboto", "normal"],
      baseText: ["proxima-nova", "sans-serif"],
    },
    screens: {
      ss: "400px",
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
