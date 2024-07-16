/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",
      green: { 200: "rgb(9, 125, 76)", 100: "#0a8954" },
      blue: "rgb(0, 78, 173)",
      yellow: "rgb(239, 189, 64)",
      background: "rgb(241, 234, 209)",
    },
    extend: {},
  },
  plugins: [],
};
