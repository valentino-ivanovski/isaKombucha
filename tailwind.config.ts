// tailwind.config.js
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}", // Add if using a monorepo structure
    "./node_modules/@your-ui-library/**/*.{js,ts,jsx,tsx}", // Add if using UI library
    "*.{js,ts,jsx,tsx,mdx}",
    "./storyComponents/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    safelist: [
      'bg-hero-mobile',
      'bg-hero-desktop',
      // Add dynamic classes that might be used
      'bg-richblack',
      'bg-softwhite',
      'bg-lilac',
      'bg-midnightblue',
      'bg-flavor-beige',
      'bg-flavor-green',
      'bg-flavor-yellow',
      'bg-flavor-purple',
      'bg-flavor-gold',
      'bg-flavor-pink',
      'bg-flavor-mauve',
      'bg-flavor-orange',
      // Add pattern for dynamic colors if needed
      { pattern: /bg-(richblack|softwhite|lilac|midnightblue)/ },
      { pattern: /bg-flavor-(beige|green|yellow|purple|gold|pink|mauve|orange)/ },
      // Ensure animations are included
      'animate-marquee',
      'animate-marquee-vertical'
    ],
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/images/heroPics/1.png')",
        'hero-desktop': "url('/images/heroPics/3.png')",
      },
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
        richblack: "#241f20",
        softwhite: "#fffaf0",
        lilac: "#d9d5eb",
        midnightblue: "#3e4899",
        flavor: {
          beige: "#e8d9cc",
          green: "#cbdcb8",
          yellow: "#f2de4e",
          purple: "#afa6d1",
          gold: "#d9b547",
          pink: "#e48994",
          mauve: "#c78887",
          orange: "#db583b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'general-sans': ['GeneralSans', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 60s linear infinite",
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Optional: Add plugins for better component support
    function({ addVariant }: { addVariant: (name: string, selector: string) => void }) {
      addVariant('child', '& > *')
    }
  ],
} satisfies Config

export default config