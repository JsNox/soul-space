/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        accent: {
          100: "#f5f3ff",
          200: "#ede9fe",
          300: "#ddd6fe",
          400: "#c4b5fd",
          500: "#a78bfa",
          600: "#8b5cf6",
          700: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(123, 58, 237, 0.15)",
      },
    },
  },
  plugins: [],
};
