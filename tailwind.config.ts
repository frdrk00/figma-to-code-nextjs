import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      vietnam: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        textCyan: '#04CEDB',
      },
    },
  },
  plugins: [],
}
export default config
