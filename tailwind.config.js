/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: "Poppins_400Regular",
        poppinsLight: "Poppins_300Light",
        poppinsMedium: "Poppins_500Medium",
        poppinsSemiBold: "Poppins_600SemiBold",
        poppinsBold: "Poppins_700Bold",
        poppinsExtraBold: "Poppins_800ExtraBold",
      },
      colors: {
        primaryColor: "#55b535",
        lightBlue: "#f6fafd",
        lightGreen: "#f4faf1",
      },
      fontSize: {
        normal: "16px",
      },
      borderColor: {
        warning: "#f68524",
      },
      backgroundColor: {
        warning: "#fab67c1a",
        formInput: "#E1E1E14D",
      },
    },
  },
  plugins: [],
};
