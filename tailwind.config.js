module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    boxShadow: {
      lg:
        "0 0 15px -3px rgba(124, 45, 18, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "2xl": "0 0 50px -12px rgba(124, 45, 18, 0.75)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
