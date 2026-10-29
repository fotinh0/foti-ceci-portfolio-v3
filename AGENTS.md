# Portfolio architecture

- Keep this repository on its existing Next.js App Router and Tailwind v3 stack; the redesign is adapted from the Lovable preview rather than replacing the hosting framework.
- The active home page reads data/portfolio.ts; legacy data/index.ts remains only for compatibility with retained older components.
- Define semantic colors and animation styles in app/globals.css and map colors in tailwind.config.ts; this preserves the redesigned theme without Tailwind v4 syntax.
- Use the existing react-icons dependency for portfolio icons to avoid adding runtime dependencies for the redesign.
