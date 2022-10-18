/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'running': "url('assets/running-blurred.jpg')",
        'flex': "url('assets/flex-burred.jpg')",
      },
  }
  },
  plugins: [],
}
