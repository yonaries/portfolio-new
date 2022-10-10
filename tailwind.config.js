/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(21, 21, 21)",
        secondary: "rgb(148, 148, 149)",
        dusk: "rgb(32, 32, 34)",
      },
      fontSize: {
        "2xs": "0.6rem",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
