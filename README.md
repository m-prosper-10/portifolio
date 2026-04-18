# Mugisha Prosper — Portfolio

A minimal personal portfolio built with Next.js, Tailwind CSS v4, and TypeScript. Clean, fast, and dark-mode ready.

## Stack

- **Next.js 16** — App Router
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **SN Pro** — Custom woff2 font
- **Nodemailer** — Contact form email delivery

## Features

- Dark / light mode with system preference detection
- Custom SN Pro font (Regular + Bold)
- Minimal single-page layout — Hero, Projects, Footer
- Contact form backed by a Next.js API route
- Google Analytics integration
- Fully responsive

## Project Structure

```
src/
├── app/
│   ├── api/send-email/     # Email API route (Nodemailer)
│   ├── globals.css         # Global styles, CSS variables, @font-face
│   ├── layout.tsx          # Root layout with ThemeProvider + Analytics
│   └── page.tsx            # Home page
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Name, bio, and social links
│   │   ├── Projects.tsx    # Projects section
│   │   └── Footer.tsx      # Copyright and social links
│   └── ThemeToggle.tsx     # Dark/light mode switcher
├── contexts/
│   └── theme-context.tsx   # Theme context provider
└── lib/
    └── data.ts             # Projects and contact info
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

**Content** — Edit `src/lib/data.ts` to update projects and contact links.

**Colors** — CSS custom properties live in `src/app/globals.css` under `:root` and `.dark`.

**Font** — SN Pro woff2 files are in `public/fonts/`. Swap them out to change the typeface.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger a deploy.

## License

[MIT](LICENSE)
