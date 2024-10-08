import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors:{
        background: {
          dark: {
            500: "#1a202c",
            600: "#151a23",
            700: "#10131a",
          }, 
        },
        primary: {
          500: "#e2e8f0",
          600: "#cbd5e0",
          700: "#a0aec0",
        },
        secondary: {
          500: "#63b3ed",
          600: "#4299e1",
          700: "#3182ce",
        },
        tertiary: {
          500: "#f6ad55",
          600: "#ed8936",
          700: "#dd6b20",
        },
        success: {
          dark: {
            500: "#68d391",
            600: "#48bb78",
            700: "#38a169",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
