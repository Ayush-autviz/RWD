/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '1px 0px 14px 0px #cccccc6b',
        'custom-1': '0px 2px 14px 0px #cccccc6b',
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '50%' },
          '100%': { opac1ty: '100%' },
        },
      },
    },
  },
  plugins: [],
}
