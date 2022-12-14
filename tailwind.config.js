/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
    },
    container: {
      center: true,
    },
    colors: {
      black: "#000",
      white: {
        0: "#FFF",
        50: "#FDFDFD",
        100: "#FBFBFB",
      },
      gray: {
        50: "#F6F6F6",
        100: "#EDF2F7",
        300: "#E2E8F0",
        800: "#2A3644",
        900: "#171923",
      },
      teal: {
        100: "#B2F5EA",
        200: "#81E6D9",
        300: "#4FD1C5",
        400: "#38B2AC",
        500: "#179BA5",
        600: "#117279",
        900: "#1D4044",
      },
      blue: {
        700: "#2A3644",
        800: "#031617",
        900: "#1F2934",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      med: "1rem",
      lg: "1.125rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3.125rem",
    },
    textColor: {
      black: "#2A3644",
      teal: "#169AA4",
      gray: {
        200: "#D9D9D9",
        700: "#7F868F",
        800: "#4A5568",
      },
      white: "#FFF",
      blue: "#A0DDE6",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      maxWidth: {
        max: "1080px",
        "linked-buttons": "75%",
        hero: "40%",
        "header-text": "80%",
        "repeatable-config-img": "655px",
        "contact-form": "444px",
        rolodex: "465px",
      },
      maxHeight: {
        "repeatable-config-img": "655px",
      },
      minHeight: {
        hero: "775px",
        "hero-text": "200px",
        "contact-us-arrow": "12px",
      },
      minWidth: {
        "repeatable-config-text-narrow": "290px",
      },
      height: {
        hero: "775px",
        "hero-button": "35px",
        "lets-chat": "150px",
        "lets-chat-small": "60px",
      },
      width: {
        hero: "775px",
        "hero-button": "35px",
        "header-text": "50%",
      },
      margin: {
        "hero-button-arrow": "11px",
        "hero-button": "430px",
      },
      padding: {
        "lets-chat-graphic": "150px",
      },
      lineHeight: {
        display: "64px",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-64px)" },
          "20%": { transform: "translateY(-128px)" },
          "30%": { transform: "translateY(-192px)" },
          "40%": { transform: "translateY(-256px)" },
          "50%": { transform: "translateY(-320px)" },
          "60%": { transform: "translateY(-384px)" },
          "70%": { transform: "translateY(-448px)" },
          "80%": { transform: "translateY(-512px)" },
          "90%": { transform: "translateY(-576px)" },
          "100%": { transform: "translateY(-640px)" },
        },
      },
      animation: {
        rolodex: "roll 30s cubic-bezier(.75,0,.25,1) infinite",
      },
    },
  },
  plugins: [],
};
