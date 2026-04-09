/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          50:  '#f1f8e9',
          100: '#dcedc8',
          500: '#4caf50',
          600: '#43a047',
          700: '#2E7D32',
          800: '#1b5e20',
          900: '#145a1e',
        },
        tierra: {
          100: '#efebe9',
          300: '#bcaaa4',
          500: '#795548',
          700: '#4e342e',
        },
        azul: {
          50:  '#e1f5fe',
          100: '#b3e5fc',
          400: '#29b6f6',
          500: '#0288d1',
          600: '#0277BD',
          700: '#01579b',
          800: '#014878',
          900: '#01243e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
