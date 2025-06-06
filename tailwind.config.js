/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          accent: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          dark: {
            100: '#d1d5db',
            200: '#9ca3af',
            300: '#6b7280',
            400: '#4b5563',
            500: '#374151',
            600: '#1f2937',
            700: '#111827',
            800: '#0f172a',
            900: '#030712',
          },
        },
        animation: {
          'fade-in': 'fade-in 0.5s ease-in-out',
          'slide-up': 'slide-up 0.5s ease-out',
          'pulse-slow': 'pulse 3s ease-in-out infinite',
        },
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'slide-up': {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
      },
    },
    plugins: [],
  };