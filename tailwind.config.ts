import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2D6A4F',
        'accent-green': '#52B788',
        'light-green': '#D8F3DC',
        'off-white': '#F8F6F1',
        'light-gray': '#E8E8E4',
        'dark-text': '#2C2C2C',
        'muted-gray': '#9A9A96',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1' }],
      },
      boxShadow: {
        'card': '0 2px 20px rgba(44, 44, 44, 0.08)',
        'card-hover': '0 8px 40px rgba(44, 44, 44, 0.16)',
        'modal': '0 25px 80px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '100': '100',
      },
    },
  },
  plugins: [],
}

export default config
