import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#F78A3A",
        "brand-red": "#EE3D2C",
        "brand-court": "#2A2A2A",
        "brand-border": "#E6E6E6",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #F78A3A 0%, #EE3D2C 100%)",
      },
      boxShadow: {
        glow: "0 10px 30px rgba(238, 61, 44, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
