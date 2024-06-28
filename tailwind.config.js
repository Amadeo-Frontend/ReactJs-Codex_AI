/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        'recent-list': '400px', // Defina a altura máxima desejada
      },
    },
  },
  plugins: [],
}

