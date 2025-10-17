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
        'primary-blue': '#4A90E2',
        'sidebar-dark': '#212529',
        'sidebar-active': '#343A40',
        'border-gray': '#DCDFE4',
        'border-light': '#EAECEF',
        'bg-light': '#F8F9FA',
      },
    },
  },
  plugins: [],
}
export default config
