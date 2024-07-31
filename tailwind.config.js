/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Roboto Mono"'],
    },
    extend: {
      colors: {
        background: "#ECE6C2",
        primary: "#73BDA8",
        secondary: "#D2A24C",
        coklatMuda: "#CC6B49",
        coklatTua: "#6F5643",
        softPrimary: "#99beb7",
      },
    },
  },
  plugins: [],
};
