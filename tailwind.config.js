/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "black",
        primaryLight: "#03254c",
        secondary: "#454545",
        secondaryLight: "#ccc8c8",
        secondaryDark: "#000000",
        textColor: "#ffffff",
        outFocus: "#212120b5",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        red: "#FF0000",
        lightWhite: "#e9e0e0",
   
      
        "gray-light": "#d3dce6",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://c4.wallpaperflare.com/wallpaper/617/1002/574/asus-republic-of-gamers-computer-motherboards-wallpaper-preview.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      keyframes: {
        blur: {
          "0%": { filter: "blur(0px)" },
          "100%": { filter: "blur(15px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
