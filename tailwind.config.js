/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          card: 'var(--bg-card)',
          subtle: 'var(--bg-subtle)',
        },
        border: {
          DEFAULT: 'var(--border)',
        },
        tx: {
          DEFAULT: 'var(--tx)',
          muted: 'var(--tx-muted)',
          faint: 'var(--tx-faint)',
        },
        accent: {
          DEFAULT: '#7c3aed',
          hover: '#6d28d9',
          soft: 'rgba(124,58,237,0.1)',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'Fira Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
      },
    },
  },
  plugins: [],
}
