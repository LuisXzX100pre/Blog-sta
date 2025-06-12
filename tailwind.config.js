/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
         transparent: "transparent",
        black: "#1E1E1E",
        gry: {
          20: "#F7F8F9",
          30: "#F4F4F4",
          50: "#EFEFEF",
          70: "#B5B5B5",
          100: "#666666",
        },
        or: {
          20: "#FFEBC1",
          50: "#F9D5BB",
          70: "#F3AC78",
          100: "#EB741E",
          110: "#FF8C3D",
        },
        yw: {
          50: "#FEE8BB",
          70: "#FDD278",
          100: "#FCB41E",
          110: "#FFA726",
        },
        red: {
          20: "#F3DFE0",
          50: "#FABEC1",
          70: "#F47D83",
          100: "#ED2630",
          110: "#960505",
        },
        bl: {
          10: "#F1F6FF",
          20: "#E0E9FF",
          50: "#B9C2E3",
          70: "#7B8CC9",
          100: "#2743A6",
          110: "#1b317d",
        },
        "l-b": {
          50: "#BEE0EE",
          70: "#7EC2DD",
          100: "#2899C7",
        },
        grn: {
          10: "#e0fef0",
          20: "#e0feef",
          30: "#e7f7ef",
          50: "#A6E5C6",
          70: "#66CC9B",
          100: "#10AC61",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "fs-12": "0.75rem",
        "fs-14": "0.875rem",
        "fs-16": "1rem",
        "fs-20": "1.25rem",
        "fs-28": "1.75rem",
        "fs-32": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
