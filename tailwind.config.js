/* eslint-disable import/extensions */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    // eslint-disable-next-line global-require
    require("tw-elements/dist/plugin"),
  ],
};
