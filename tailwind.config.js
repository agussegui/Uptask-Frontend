/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('flowbite/plugin')
  ],
  variants: {},
}








