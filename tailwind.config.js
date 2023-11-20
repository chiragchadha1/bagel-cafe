/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bagel-primary": "#EFB366",
        "bagel-secondary": "#24223F",
        "bagel-grey": "#555555",
        "bagel-grey-blue": "#343942"
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}

