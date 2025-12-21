import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F78A3A",
          red: "#EE3D2C",
          court: "#2A2A2A",
          border: "#E6E6E6",
          white: "#FFFFFF",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #F78A3A 0%, #EE3D2C 100%)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(247, 138, 58, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
