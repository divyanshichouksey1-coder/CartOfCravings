/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-amber': '#FFB800',
        'electric-orange': '#FF6B35',
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'cursive'],
        'elegant': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

