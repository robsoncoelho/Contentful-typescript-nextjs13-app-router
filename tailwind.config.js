/* eslint-disable import/extensions */
/** @type {import('tailwindcss').Config} */
const colors = require("./config/tailwind/colors.js");
const breakpoints = require("./config/breakpoints.js");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  // important: true,
  theme: {
    extend: {
      screens: breakpoints, // breakpoints are shared between tailwind and chakra
      borderRadius: {
        pill: "80px",
      },
      fontFamily: {
        jetBrains: "JetBrains Mono",
        inter: "Inter",
        "PP-Mori": "PP Mori",
        "PP-Mori-Bold": "PP Mori Bold",
        "PP-Mori-Book": "PP Mori Book",
        "PP-Mori-SemiBold": "PP Mori SemiBold",
        "PP-Mori-Italic": "PP Mori Italic",
        "Roboto-Mono": "Roboto Mono",
      },
      width: {
        588: "588px",
        288: "288px",
        213: "213px",
      },
      height: {
        228: "228px",
      },
      colors: {
        "timescale-blue": "#1472EC",
        "timescale-gold": "#FDB515",
        "timescale-green": "#19AB4F",
        "timescale-red": "#f54545",
        blue100: "#F8FAFE",
        blue200: "#F4F8FE",
        blue300: "#EEF5FE",
        blue400: "#E2EEFD",
        blue500: "#C5DDFC",
        navy: "#141E35",
        navy100: "#F7F8F8",
        navy300: "#EDEEF0",
        navy600: "#898E9A",
        navy500: "#C0C4CC",
        navy700: "#5B6272",
        navy800: "#434B5D",
        bodyGray: "#333333",
        gray500: "#999999",
        gray300: "#B3B3B3",
        gray200: "#E6E6E6",
        gold600: "#FEDA8A",
        ...colors,
      },
      fontSize: {
        heading1: ["40px", "48px"],
        heading2: ["32px", "40px"],
        heading3: ["24px", "28px"],
        heading4: ["20px", "24px"],
        heading26: ["26px", "28px"],
        subTitle1: ["18px", "28px"],
        subTitle2: ["16px", "26px"],
        body1: ["18px", "28px"],
        bodySmall: ["14px", "24px"],
        subHead: ["24px", "40px"],
        bodyLink: ["16px", "28px"],
        captionBold: ["12px", "16px"],
        caption: ["12px", "20px"],
      },
      maxWidth: {
        1300: "1300px",
        1200: "1200px",
        800: "800px",
        700: "700px",
        600: "600px",
        588: "588px",
        500: "500px",
        450: "450px",
        400: "400px",
        384: "384px",
        350: "350px",
        344: "344px",
        470: "470px",
        420: "420px",
      },
      letterSpacing: {
        veryTight: "-0.01rem",
      },
      backgroundImage: {
        "news-headline": "url('./src/images/case-studies/jane.png')",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("tw-elements/dist/plugin"),
  ],
};
