/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenBg: '#067A7B',
        grayBg: '#CCCCCC',
        darkGray: '#737373'
      },
      boxShadow: {
        'menuBtn': '1px 1px 2px 1px #737373, inset 1px 1px 1px 1px #fff',
        'toolbarIconHover': '1px 1px 2px 1px #737373',
        'menuBtnHover': '1px 1px 2px 1px #000, inset 1px 1px 1px 1px #fff'
      }

    },
    fontFamily: {
      display: ['VT323', "monospace"]
    },
  },
  plugins: [],
};

