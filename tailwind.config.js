/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        electric: {
          400: "#38bdf8",
          500: "#0ea5e9",
        },
        emerald: {
          350: "#4ade80",
        },
      },
    },
  },
  plugins: [],
};
