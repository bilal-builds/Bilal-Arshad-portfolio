/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          bg: '#e8e4df',
          'bg-light': '#f0ede8',
          primary: '#1a1a1a',
          secondary: '#666666',
          muted: '#999999',
          border: '#d4d0cb',
        }
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'shine': 'shine 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}