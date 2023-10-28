/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(140deg, hsl(246deg 68% 28%) 0%, hsl(261deg 68% 28%) 20%, hsl(272deg 68% 28%) 35%, hsl(281deg 66% 28%) 47%, hsl(290deg 63% 28%) 57%, hsl(298deg 60% 28%) 66%, hsl(306deg 57% 31%) 74%, hsl(313deg 55% 33%) 82%, hsl(319deg 53% 36%) 90%, hsl(324deg 50% 39%) 100%)",
      },
      colors: {
        primary: "#7C2D70",
        secondary: "#0000003d",
        gradient: "#201778",
      },
    },
  },
  plugins: [],
};
