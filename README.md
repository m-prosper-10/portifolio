# Mugisha Prosper — Portfolio

A "Cold & Simple" personal portfolio built with Next.js, Tailwind CSS v4, and TypeScript. Focused on high-contrast typography and extreme minimalism.

## Stack

- **Next.js 16** — App Router (Static Export)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** — Subtle animations
- **TypeScript**
- **SN Pro** — Custom high-end typeface

## Features

- **Monochrome Design** — Pure black/white/gray high-contrast aesthetic.
- **Minimalist Layout** — Brutalist single-page experience.
- **SN Pro Typography** — Custom font integration with tight tracking.
- **Theme Support** — System-aware dark and light modes.
- **Optimized** — Static export ready, Google Analytics integrated.

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Cold design system tokens & scrollbar
│   ├── layout.tsx          # Root layout with ThemeProvider + Analytics
│   └── page.tsx            # Home page assembly
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Bio and social links
│   │   ├── Projects.tsx    # Source redirection (GitHub)
│   │   └── Footer.tsx      # Discrete metadata and links
│   └── ThemeToggle.tsx     # Theme switcher
├── contexts/
│   └── theme-context.tsx   # Theme management
└── lib/
    └── data.ts             # Contact configuration
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

- **Content**: Update `src/lib/data.ts` for contact links.
- **Design Tokens**: Modify `src/app/globals.css` theme variables.
- **Layout**: Adjust components in `src/components/sections/`.

## Deployment

Configured for **GitHub Pages** (Static Export) and **Vercel**.

## License

[MIT](LICENSE)
