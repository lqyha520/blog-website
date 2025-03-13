import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
            },
            'h1': { fontSize: '2.25rem', lineHeight: '2.5rem', marginBottom: '1.5rem', color: theme('colors.primary.DEFAULT') },
            'h2': { fontSize: '1.875rem', lineHeight: '2.25rem', marginTop: '2rem', marginBottom: '1rem', color: theme('colors.primary.DEFAULT') },
            'h3': { fontSize: '1.5rem', lineHeight: '2rem', marginTop: '1.5rem', marginBottom: '0.75rem' },
            'p': { marginTop: '1.25em', marginBottom: '1.25em', lineHeight: '1.8' },
            'a': { color: theme('colors.primary.DEFAULT'), '&:hover': { color: theme('colors.primary.600') } },
            'blockquote': { borderLeftColor: theme('colors.secondary.200'), fontStyle: 'italic', color: theme('colors.neutral.700') },
            'strong': { fontWeight: '600', color: theme('colors.neutral.900') },
            'img': { borderRadius: theme('borderRadius.md'), boxShadow: theme('boxShadow.md') },
          },
        },
      }),
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(265, 89%, 50%)", // 主紫色
          50: "hsl(265, 89%, 97%)",
          100: "hsl(265, 89%, 94%)",
          200: "hsl(265, 89%, 88%)",
          300: "hsl(265, 89%, 80%)",
          400: "hsl(265, 89%, 65%)",
          500: "hsl(265, 89%, 50%)", // 同 DEFAULT
          600: "hsl(265, 89%, 45%)",
          700: "hsl(265, 89%, 40%)",
          800: "hsl(265, 89%, 35%)",
          900: "hsl(265, 89%, 30%)",
          950: "hsl(265, 89%, 20%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(280, 75%, 60%)", // 亮紫色
          50: "hsl(280, 75%, 97%)",
          100: "hsl(280, 75%, 94%)",
          200: "hsl(280, 75%, 88%)",
          300: "hsl(280, 75%, 80%)",
          400: "hsl(280, 75%, 70%)",
          500: "hsl(280, 75%, 60%)", // 同 DEFAULT
          600: "hsl(280, 75%, 50%)",
          700: "hsl(280, 75%, 40%)",
          800: "hsl(280, 75%, 30%)",
          900: "hsl(280, 75%, 25%)",
          950: "hsl(280, 75%, 20%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(320, 70%, 60%)", // 粉紫色
          50: "hsl(320, 70%, 97%)",
          100: "hsl(320, 70%, 94%)",
          200: "hsl(320, 70%, 88%)",
          300: "hsl(320, 70%, 80%)",
          400: "hsl(320, 70%, 70%)",
          500: "hsl(320, 70%, 60%)", // 同 DEFAULT
          600: "hsl(320, 70%, 50%)",
          700: "hsl(320, 70%, 40%)",
          800: "hsl(320, 70%, 30%)",
          900: "hsl(320, 70%, 25%)",
          950: "hsl(320, 70%, 20%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        accent: {
          DEFAULT: "hsl(190, 90%, 50%)", // 蓝绿色
          50: "hsl(190, 90%, 97%)",
          100: "hsl(190, 90%, 94%)",
          200: "hsl(190, 90%, 88%)",
          300: "hsl(190, 90%, 75%)",
          400: "hsl(190, 90%, 60%)",
          500: "hsl(190, 90%, 50%)", // 同 DEFAULT
          600: "hsl(190, 90%, 40%)",
          700: "hsl(190, 90%, 35%)",
          800: "hsl(190, 90%, 30%)",
          900: "hsl(190, 90%, 25%)",
          950: "hsl(190, 90%, 20%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          50: "hsl(240, 5%, 98%)",
          100: "hsl(240, 5%, 96%)",
          200: "hsl(240, 5%, 90%)",
          300: "hsl(240, 5%, 80%)",
          400: "hsl(240, 5%, 65%)",
          500: "hsl(240, 5%, 50%)",
          600: "hsl(240, 5%, 40%)",
          700: "hsl(240, 5%, 30%)",
          800: "hsl(240, 5%, 20%)",
          900: "hsl(240, 5%, 10%)",
          950: "hsl(240, 5%, 5%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 100%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(240, 5%, 96%)",
          foreground: "hsl(240, 4%, 46%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(240, 10%, 4%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(240, 10%, 4%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config

