# Yawer Nazir — Academic Portfolio

A responsive academic portfolio built with React, TypeScript, and Vite. The design uses an ivory and forest-green palette, editorial typography, and a consistent content grid.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
```

The production site is generated in `dist/`. The existing `npm run deploy` script publishes to GitHub Pages; deployment is a separate action.

## Editing the portfolio

- `src/App.tsx`: introduction, research, projects, and contact sections.
- `src/data/portfolio.ts`: contact details, publications, projects, education, technical skills, and leadership entries.
- `src/components/academic/`: navigation, project filtering, and separate education, skills, and leadership sections.
- `src/styles/academic.css`: active design system, responsive layouts, and print styles.
- `public/images/yawer-nazir-portrait.jpg`: cleaned professional portrait used on the homepage. The original photograph is retained as `Photo.jpeg`.
- `public/cv.pdf`: downloadable CV. Replace this file when updating the CV.
- `index.html`: page title, description, and social metadata.

The older components in `src/components/`, and older stylesheets, are retained but are not imported by the redesigned application. New components live in `academic/` to avoid the previous ambiguous `.js` / `.jsx` / `.tsx` module resolution.

## Features

- Research manuscripts with distinct accepted and submitted statuses.
- Project category filters with accessible pressed states.
- Responsive navigation with Escape-to-close support.
- Direct email and social links, email copying, and CV download.
- Keyboard focus indicators, skip navigation, reduced-motion support, and print styles.

Project-specific repository links are used only where supplied. Other project links are explicitly labeled as links to the GitHub profile.
