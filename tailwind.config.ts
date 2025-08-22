import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f3',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1a8',
          400: '#5bb37c',
          500: '#379759',
          600: '#2a7b45',
          700: '#226238',
          800: '#1e4f2f',
          900: '#1a4128',
          950: '#0e2316',
        },
        secondary: {
          50: '#f0f8ff',
          100: '#e0f0fe',
          200: '#bae3fd',
          300: '#7ccefb',
          400: '#36b6f6',
          500: '#0c9fe7',
          600: '#0080c7',
          700: '#0166a1',
          800: '#065785',
          900: '#0b4a6f',
          950: '#072f4a',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        warm: {
          50: '#fefcfb',
          100: '#fef8f6',
          200: '#fdf2ee',
          300: '#fbe8e1',
          400: '#f8d4c7',
          500: '#f3b6a1',
          600: '#ed9474',
          700: '#e5734d',
          800: '#dc5a2f',
          900: '#b8481f',
          950: '#642510',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
