/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Old colors (kept for backward compat)
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#112240",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        // Vintage palette
        espresso: "#622B14",
        cognac: "#995F2F",
        sage: "#978F66",
        parchment: "#E4D6A9",
        ink: "#2A1A0E",
        ivory: "#F5F0E1",
      },
      fontFamily: {
        // Old fonts
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        // Vintage fonts
        serif: ["Playfair Display", "Georgia", "serif"],
        body: ["Source Sans 3", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "draw-line": "drawLine 1.5s ease-out forwards",
        grain: "grain 8s steps(10) infinite",
        float: "float 6s ease-in-out infinite",
        "typewriter-cursor": "blink 1s step-end infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        drawLine: {
          "0%": { "stroke-dashoffset": "1000" },
          "100%": { "stroke-dashoffset": "0" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
