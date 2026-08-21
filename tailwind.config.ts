import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      nav: "1200px",
    },
    extend: {
      colors: {
        ink: "#152028",
        copper: "#C67B4E",
        sage: "#5A7D6C",
        stone: "#F7F4EF",
        "stone-dark": "#EDE9E2",
        border: "#D4CFC7",
        heading: "#152028",
        body: "#3D4F56",
        "slate-muted": "#4A5F68",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-source)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(21, 32, 40, 0.06), 0 4px 16px rgba(21, 32, 40, 0.04)",
        elevated: "0 8px 32px rgba(21, 32, 40, 0.08)",
      },
      minHeight: {
        touch: "44px",
      },
      minWidth: {
        touch: "44px",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, rgba(198, 123, 78, 0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(198, 123, 78, 0.08) 25%, transparent 25%), linear-gradient(45deg, rgba(198, 123, 78, 0.08) 25%, transparent 25%), linear-gradient(315deg, rgba(198, 123, 78, 0.08) 25%, transparent 25%)",
      },
      backgroundSize: {
        pattern: "24px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
