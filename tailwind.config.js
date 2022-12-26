/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        // dark: {
        //   primary: "#bfff8c",
        //   secondary: "#dda32e",
        //   accent: "#2150af",
        //   neutral: "#24252E",
        //   "base-100": "#2D3039",
        // },
        light: {
          primary: "#FEFCF3",
          secondary: "#222222",
          accent: "#47B5FF",
          neutral: "#FF9551",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
