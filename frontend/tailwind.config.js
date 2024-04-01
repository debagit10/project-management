/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px", // Small screens, default: 640px
        md: "768px", // Medium screens, default: 768px
        lg: "1024px", // Large screens, default: 1024px
        xl: "1280px", // Extra large screens, default: 1280px
        "2xl": "1536px", // 2X large screens, default: 1536px
        // Add more custom breakpoints as needed
      },
      colors: {
        green: {
          900: "#09421C",
        },
      },
      outline: {
        green: ["1px solid #09421C"],
      },

      backgroundImage: {
        bg: "url(/src/assets/bg1.png)",
      },
    },
  },
  plugins: [],
});
