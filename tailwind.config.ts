import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dimLight: '#6f6f6f',
        dimDark: '#a0a0a0'
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: "var(--text-colour)",
            'h1, h2, h3, h4, h5, h6': {
              color: "var(--text-colour)",
              marginBottom: '28px',
              marginTop: '56px',
            },
            a: {
              color: "var(--text-colour)",
              transition: '100ms',
              textDecorationColor: '#505050',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2.5px',
              '&:hover': {
                textDecorationColor: '#6f6f6f',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
