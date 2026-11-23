# React Portfolio

A personal developer portfolio built with React, TypeScript, Vite and React Router. It includes a homepage with featured work, a filterable projects page, a skills page and a contact form. The theme follows the device preference on the first visit and saves later changes in the browser.

## Run locally

Use Node.js 22.12 or newer and npm.

```bash
cd frontend
npm ci
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

To check the production build, run these commands from `frontend/`.

```bash
npm run build
npm run preview
```

## Edit the portfolio

The editable content lives in `frontend/src/config/`.

| File | What to change |
| --- | --- |
| `profile.ts` | Name, role, intro, about copy, email recipient and GitHub profile |
| `projects.ts` | Project titles, descriptions, categories, tech stacks, screenshots, links and featured status |
| `skills.ts` | Skill groups, descriptions and tools |
| `navigation.ts` | Navigation labels and their page paths |

Place new screenshots in `frontend/public/projects/` and reference them with paths such as `/projects/my-project.webp`. Project filters are generated from the categories in the configuration. Set `featured: true` to show a project on the homepage. If you change a URL path, update `frontend/src/router/routes.tsx` as well.

The contact form opens a draft in the visitor's email app after validating their name, email and message. Replace `hello@example.com` in `profile.ts` with your inbox before accepting messages. The visitor sends the draft from their email app.

## Project structure

```text
frontend/
  public/projects/     Project screenshots
  src/
    components/        Reusable sections, cards and page layout
    config/            Editable portfolio data
    hooks/             Theme preference
    router/            Page routes
    styles/            Section stylesheets
    types/             Shared TypeScript types
netlify.toml           Netlify build and route settings
```

## Deploy to Netlify

Import the repository from GitHub in Netlify. The included `netlify.toml` sets `frontend` as the base directory, runs `npm run build`, publishes `dist` and rewrites page URLs to the React app for direct visits and refreshes.
