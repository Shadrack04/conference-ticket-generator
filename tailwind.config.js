/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile": "url('/src/assets/images/background-mobile.png')",
        "bg-desktop": "url('/src/assets/images/background-desktop.png')",
        "bg-tablet": "url('/src/assets/images/background-tablet.png')",
        ticket: "url('/src/assets/images/pattern-ticket.svg')",
      },
      fontFamily: {
        Inconsolata: ["Inconsolata", "sans-serif"], // Fallback to sans-serif
      },
    },
  },
  plugins: [],
};
