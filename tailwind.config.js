/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%, 75%": { transform: "translateX(3px)" },
          "50%": { transform: "translateX(-3px)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
