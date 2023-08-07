/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    colors: {
      primary: "#647dff",
      secondary: "#f5f5f5",
      white: "#ffffff",
      textPrimary: "#282828",
      textSecondary: "#6b7280",
      "text-base": "white",
      borderColor: "#e1e1e1",
      borderPrimary: "#3A49CF",
      bgPrimary: "#EFF0FB",
      error: "#e70000",
      infoCard: "#e0f4fe",
      colorIcon: "#666666",
    },
    extend: {
      fontFamily: {
        sans: ["Vazirmatn"],
      },
    },
  },
  plugins: [],
};
