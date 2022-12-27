/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
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
          primary: "#EAEAEA",
          secondary: "#222222",
          accent: "#4A1942",
          neutral: "#893168",
          info: "#2E1C2B",
          success: "#0000004D",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
