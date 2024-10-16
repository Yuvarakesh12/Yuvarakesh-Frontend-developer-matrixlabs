/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['YourFont1', 'ui-sans-serif', 'system-ui'],  // Replace 'YourFont1' with the desired font
        serif: ['YourFont2', 'ui-serif', 'Georgia'],        // Replace 'YourFont2' if needed
        mono: ['YourFont3', 'ui-monospace', 'SFMono-Regular'], // Replace 'YourFont3' if needed
      },
    },
  },
  plugins: [],
}
