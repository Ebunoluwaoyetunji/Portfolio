# Ebunoluwa's Portfolio

React + Vite + Tailwind v4, built from Figma designs, deployed via GitHub Pages.

## Structure

- `src/pages/Home.jsx` — the landing page (from your Figma "Desktop - 3" frame)
- `src/pages/WorkDetail.jsx` — placeholder for the appointment-scheduling case
  study. Share its Figma link when ready and I'll wire in the real design.
- `src/components/Nav.jsx` — shared nav bar
- `src/index.css` — design tokens (colors, fonts, radii) pulled from your
  Figma styles

## Before you deploy

1. **Images**: the images on the home page currently point to temporary
   Figma export URLs — they expire ~7 days after Aug 14, 2026. Export the
   real images from Figma into `src/assets/images` and swap the `img*`
   constants at the top of `Home.jsx` before this goes live.
2. **`vite.config.js`**: `base` is set to `/portfolio/`. If your GitHub repo
   is named something else, update it to match — it needs to equal
   `/<repo-name>/`. If you're using a `username.github.io` repo or a custom
   domain, set it to `/`.

## Running locally

\`\`\`
npm install
npm run dev
\`\`\`

## Deploying to GitHub Pages

A GitHub Actions workflow is already set up at
`.github/workflows/deploy.yml`. Once you push this to a GitHub repo:

1. Go to the repo's **Settings → Pages**
2. Under "Build and deployment", set **Source** to "GitHub Actions"
3. Push to `main` — the workflow builds and deploys automatically

## Adding more work pages later

For each new case study:

1. Design it in Figma and share the link
2. I'll pull the design context and turn it into a new page under
   `src/pages/`
3. Add a `<Route>` for it in `src/App.jsx`
4. Link to it from the "Selected work" section on the home page
