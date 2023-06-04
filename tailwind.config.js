/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        photoItem:
          "linear-gradient(180deg,#00000057 0,rgba(0, 0, 0, 0.338) 3.5%,rgba(0, 0, 0, 0.324) 7%,rgba(0, 0, 0, 0.306) 10.35%,rgba(0, 0, 0, 0.285) 13.85%,rgba(0, 0, 0, 0.262) 17.35%,rgba(0, 0, 0, 0.237) 20.85%,rgba(0, 0, 0, 0.213) 24.35%,rgba(0, 0, 0, 0.188) 27.85%,rgba(0, 0, 0, 0.165) 31.35%,rgba(0, 0, 0, 0.144) 34.85%,rgba(0, 0, 0, 0.126) 38.35%,rgba(0, 0, 0, 0.112) 41.85%,rgba(0, 0, 0, 0.103) 45.35%,#0000001a 48.85%,rgba(0, 0, 0, 0.103) 52.35%,rgba(0, 0, 0, 0.112) 55.85%,rgba(0, 0, 0, 0.126) 59.35%,rgba(0, 0, 0, 0.144) 62.85%,rgba(0, 0, 0, 0.165) 66.35%,rgba(0, 0, 0, 0.188) 69.85%,rgba(0, 0, 0, 0.213) 73.35%,rgba(0, 0, 0, 0.237) 76.85%,rgba(0, 0, 0, 0.262) 80.35%,rgba(0, 0, 0, 0.285) 83.85%,rgba(0, 0, 0, 0.306) 87.35%,rgba(0, 0, 0, 0.324) 90.85%,rgba(0, 0, 0, 0.338) 94.35%,rgba(0, 0, 0, 0.347) 97.85%,#00000059)",
        heroImage:
          "url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
}
