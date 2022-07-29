/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', "sans-serif"],
      },
      backgroundImage: {
        'ufo': "url('https://drive.google.com/uc?export=view&id=1zDMJ167lJj_IzwHVK37I_kuMng0oh9Qw')",
      }
    },
    plugins: [],
  }
}
