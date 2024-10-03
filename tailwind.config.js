/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        layer2gray: '#090b0bb3', /* This is the layer 2 color with the opacity of 70% */
        cardPgray: '#72777A', /* This is the card paragraph color */
        btnColor: '#6B4EFF', /* This is the button & button background color */
        btnColor2: '#8871fc', /* This is the button & button background color on hover */
      },
    },
  },
  plugins: [],
}

