import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BFF033',
          light: '#CAFF47',
          dark: '#A9D61D',
        },
        secondary: {
          DEFAULT: '#0AAF60',
          light: '#0BC56C',
          dark: '#099954',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
      },
      
    },
  },
  plugins: [],
};

export default config;