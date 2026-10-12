# EngineeriT — Coming Soon

A modern, minimalist "Under Construction" landing page built with React, TypeScript, and Vite.

## Features

- Dark-mode design with responsive layout
- Live countdown timer
- Email notification signup form
- E2E tests with Playwright
- Automated deployment to GitHub Pages via GitHub Actions

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — dev server and production bundler
- **Playwright** — end-to-end testing
- **GitHub Actions** — CI/CD pipeline

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npx playwright test` | Run E2E tests (headless) |
| `npx playwright test --headed` | Run E2E tests with browser visible |

## Project Structure

```
├── public/
│   └── CNAME              # Custom domain for GitHub Pages
├── src/
│   ├── App.tsx             # Landing page component
│   ├── index.css           # Browser reset styles
│   └── main.tsx            # React entry point
├── tests/
│   └── landing-page.spec.ts  # Playwright E2E tests
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD — build and deploy to gh-pages
├── index.html
├── vite.config.ts
└── playwright.config.ts
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow which builds the app and deploys to the `gh-pages` branch.

To enable: go to **Settings → Pages → Source** on your GitHub repo and select **Deploy from a branch** with branch `gh-pages` and folder `/ (root)`.

## License

All rights reserved.
