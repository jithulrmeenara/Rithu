import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Light Color Palette
        primary: {
          50: "#FDFBF7",   // bg-primary: Champagne/Cream
          100: "#F9F5EE",
          200: "#F4F1EA",  // bg-secondary: Warm Beige
          300: "#E8E0D5",
          400: "#D4C5B3",
          500: "#C0AA91",
          600: "#A8906F",
          700: "#8A7555",
          800: "#6B5A42",
          900: "#4A3E2E",
        },
        text: {
          primary: "#1A1A1A",    // Soft Charcoal - Headings
          secondary: "#595959",  // Slate Grey - Body text
        },
        accent: {
          DEFAULT: "#D4AF37",    // Metallic Gold
          light: "#E6C35C",
          dark: "#B8941F",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        // Headings: Elegant Serif
        heading: ["var(--font-cinzel)", "Playfair Display", "Georgia", "serif"],
        // Body: Modern Sans-serif
        sans: ["var(--font-geist-sans)", "Lato", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Luxury Typography Scale
        "hero": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],      // 72px
        "display": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 60px
        "h1": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],         // 48px
        "h2": ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],      // 36px
        "h3": ["1.875rem", { lineHeight: "1.4" }],                               // 30px
        "h4": ["1.5rem", { lineHeight: "1.5" }],                                 // 24px
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],                         // 18px
        "body": ["1rem", { lineHeight: "1.75" }],                                // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],                          // 14px
      },
      spacing: {
        "section": "5rem",    // 80px - Minimum section spacing
        "container": "1.5rem", // Horizontal container padding
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backdropBlur: {
        "glass": "12px",
      },
      boxShadow: {
        "luxury": "0 4px 24px rgba(26, 26, 26, 0.08)",
        "luxury-lg": "0 12px 48px rgba(26, 26, 26, 0.12)",
        "inner-luxury": "inset 0 2px 4px rgba(212, 175, 55, 0.1)",
      },
      animation: {
        "magnetic-hover": "magneticHover 0.3s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "zoom-in": "zoomIn 0.3s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        magneticHover: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1.05)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      transitionDuration: {
        "luxury": "400ms",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
