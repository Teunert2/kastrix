/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'redhat-bold': ['var(--font-redhat-bold)'],
        'redhat-medium': ['var(--font-redhat-medium)'],
        'redhat-regular': ['var(--font-redhat-regular)'],
      },
    },
  },
  plugins: [],
}; 