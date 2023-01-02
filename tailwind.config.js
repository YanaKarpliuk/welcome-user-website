/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenBg: '#067A7B',
        grayBg: '#CCCCCC'
      }
    },
    fontFamily: {
      display: ['VT323', "monospace"]
    },
  },
  plugins: [],
};
