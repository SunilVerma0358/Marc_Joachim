const { Inter } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "12px",
        },
        center: true,
      },
      fontSize: {
        "custom-4xl": ["40px"],
        "custom-5xl": ["52px"],
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      gap: {
        "custom-4xl": ["40px"],
      },
      colors: {
        orangeYellow: "#F77B0B",
        blue: "#003E92",
      },
      backgroundSize: {
        size: ["100% 100%"],
      },
      backgroundImage: {
        LinearBlue: [
          "linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)",
        ],
        LinearBlue2: [
          "linear-gradient(107.9deg, #8703C5 1.25%, #0C5FD1 93.71%)",
        ],
      },
      animation: {
        backtoTop: "backtoTop 2s linear infinite",
        Phone: "Phone 2s linear infinite",
      },
      keyframes: {
        backtoTop: {
          "0%": {
            transform: "translatey(0) scale(.998)",
          },

          "50%": {
            transform: " translatey(-7px) scale(1.1023)",
          },
          "100%": {
            transform: "translatey(0) scale(.998)",
          },
        },
        Phone: {
          "0%": {
            transform: "translatey(0) scale(.998) rotate(-5deg)",
          },

          "50%": {
            transform: " translatey(-7px) scale(1.1023) rotate(10deg)",
          },
          "100%": {
            transform: "translatey(0) scale(.998) rotate(-5deg)",
          },
        },
      },
    },
    plugins: [],
  },
};
