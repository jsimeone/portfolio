/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'background': '#bce7fd',
      'primary': '#ef6351',
      'primary-hover': '#af4a3c',
      'secondary': '#296eb4',
      'tertiary': '#F7A399',
      'quaternary': '#ffecea',
      'white': '#ffffff',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    extend: {
      animation: {
        fade: 'fadeIn 1s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

