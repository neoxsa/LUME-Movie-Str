# Lume - Movie Platform — React + Vite

A small movie browsing web application built with React and Vite. The app consumes The Movie Database (TMDB) API to show popular movies, search results, and movie details.

**Features:**
- Search movies and view details (movies & TV)
- Browse trending, popular and discover lists with pagination
- Movie / TV detail pages with trailers, cast and credits
- Person detail pages (actor/crew) and "known for" listings
- Client-side routing and scroll-to-top behaviour
- Data fetching with caching and background updates (RTK Query)
- Responsive UI styled with Tailwind CSS

## Tech stack

- **Framework:** React
- **Bundler / Dev server:** Vite
- **Routing:** `react-router-dom` (client-side routes)
- **Data fetching & caching:** `@reduxjs/toolkit` + RTK Query
- **Styling:** Tailwind CSS
- **API:** The Movie Database (TMDB) API

## Quick start

Prerequisites: Node.js 18+ and a package manager (`npm`, `yarn`, or `pnpm`).

Install dependencies:

```bash
npm install
```

Run development server (with HMR):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Environment

This project expects a TMDB token exposed to the Vite app. Create a `.env` file in the project root with the following variable:

```
VITE_TMDB_API_TOKEN=your_tmdb_bearer_token_here
```

The app reads this token at runtime (see `src/api/tmdbApi.js`), and sends it as a Bearer token in request headers. Keep this value private and do not commit `.env` to version control. You can create an example file as `.env.example` with the placeholder above.

## Project structure (important files)

- `src/` — application source
	- `src/App.jsx` — app root and routes
	- `src/main.jsx` — entry file
	- `src/api/tmdbApi.js` — TMDB fetch helpers
	- `src/components/` — UI components
	- `src/pages/` — route pages (home, movie details, 404)
	- `src/app/` — app-level store and utilities

## Linting & formatting

This repo includes ESLint configuration. To run linting (if defined in `package.json`):

```bash
npm run lint
```

## Contributing

Contributions and bug reports are welcome. Create issues or pull requests describing the change.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---
