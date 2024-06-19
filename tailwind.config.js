/** @type {import('tailwindcss').Config} */
export default {
  content: ["./resources/**/*.edge", "./inertia/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "selector",
};
