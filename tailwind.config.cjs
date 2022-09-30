/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      content: {
        sms: 'url("/img/sms.svg")',
        wsp: 'url("/img/wsp.svg")',
        email: 'url("/img/email.svg")',
        download: 'url("/img/download.svg")',
      },
    },
  },
  plugins: [],
}
