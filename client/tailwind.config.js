/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
require("tailwind-scrollbar");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        200: "250px",
      },
    },
  },
  plugins: [],
};
