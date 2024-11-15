import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          primary: 'var(--primary-background-color)',
          highlight: 'var( --highlight-background-color)',
          inverted: 'var(--inverted-background-color)',
        }
      },

      textColor: {
        skin: {
          primary: 'var(--primary-text-color)',
          hover: 'var(--hover-text-color)',
        }
      },

      borderColor: {
        skin: {
          base: 'var(--inverted-background-color)',
          inverted: 'var(--hover-text-color)',
        }
      },

      boxShadowColor: {
        skin: {
          primary: 'var(--primary-shadow-color)',
          inverted: 'var(--background-shadow-color)',
        }
      },

    },
  },
  plugins: [],
}
export default config
