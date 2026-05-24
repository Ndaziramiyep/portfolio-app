/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode
        navy: {
          DEFAULT: '#0f0e17',
          light: '#1a1830',
          lighter: '#2d2b55',
        },
        // Light mode
        light: {
          DEFAULT: '#f8f7ff',
          card: '#ffffff',
          border: '#e2e0f0',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dim: '#7c3aed99',
        },
        slate: {
          light: '#e8e6f0',
          mid: '#c4c0d8',
          muted: '#8b87a8',
        },
        // Light mode text
        ink: {
          DEFAULT: '#0f0e17',
          mid: '#3d3a5c',
          muted: '#6b6888',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'Fira Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #7c3aed44' },
          '100%': { boxShadow: '0 0 20px #7c3aed88, 0 0 40px #7c3aed44' },
        },
      },
    },
  },
  plugins: [],
}
