module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
