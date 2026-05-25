/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Manrope', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        brand: {
          purple:  '#8B5CF6', purple2: '#7C3AED', purple3: '#6D28D9',
          teal:    '#10B981', teal2:   '#059669',
          blue:    '#3B82F6', blue2:   '#2563EB',
        },
        dark:  { DEFAULT: '#0A0A0F', 2: '#111118', 3: '#16161F' },
        light: { DEFAULT: '#F8F8FC', 2: '#F2F2F8', 3: '#E4E4EF' },
        ink:   { DEFAULT: '#09090E', mid: '#3A3A55', soft: '#6B6B8A', muted: '#9898B0' },
        surface: { DEFAULT: '#F5F5FA', 2: '#EFEFF7' },
      },
      spacing: { 18: '4.5rem' },
      borderRadius: { xl2: '22px', xl3: '28px' },
      transitionDuration: { 250: '250ms', 350: '350ms' },
      backgroundImage: {
        'grad-purple': 'linear-gradient(135deg,#8B5CF6,#7C3AED)',
        'grad-teal':   'linear-gradient(135deg,#10B981,#059669)',
        'grad-mix':    'linear-gradient(135deg,#8B5CF6 0%,#3B82F6 50%,#10B981 100%)',
      },
    },
  },
  plugins: [],
}
