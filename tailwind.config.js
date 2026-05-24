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
        border: { DEFAULT: 'var(--border)' },
        tx: {
          DEFAULT: 'var(--tx)',
          muted: 'var(--tx-muted)',
          faint: 'var(--tx-faint)',
        },
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'Fira Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}
