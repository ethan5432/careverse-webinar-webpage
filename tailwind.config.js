/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A1A',
        body: '#1A1A1A',
        muted: '#5C5C5C',
        cream: '#F3F1EC',
        soft: '#ECEAE3',
        white: '#FFFFFF',
        line: '#E6E1D8',
        red: {
          DEFAULT: '#C8102E',
          deep: '#A00D24',
        },
        night: {
          DEFAULT: '#1A1A1A',
          text: '#9CA3AF',
        },
        good: '#0B9B6B',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Helvetica Neue"',
          'Arial',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        display: [
          '"Poppins"',
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      letterSpacing: {
        eyebrow: '0.16em',
      },
      fontSize: {
        h1: ['clamp(48px, 6vw, 80px)', { lineHeight: '0.98', letterSpacing: '-0.04em', fontWeight: '700' }],
        h2: ['clamp(32px, 4vw, 48px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        h3: ['clamp(24px, 3vw, 30px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      borderRadius: {
        card: '20px',
      },
      transitionDuration: {
        '220': '220ms',
      },
    },
  },
  plugins: [],
};
