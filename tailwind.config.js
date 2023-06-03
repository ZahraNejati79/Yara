/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    colors: {
      primary: "#647dff",
      secondary: "#f3f4f6",
      white: "#ffffff",
      textPrimary: "#282828",
      textSecondary: "#6b7280",
      "text-base": "white",
      borderColor: "#e1e1e1",
      error: "#e70000",
      infoCard: "#e0f4fe",
    },
    extend: {},
  },
  plugins: [],
};
