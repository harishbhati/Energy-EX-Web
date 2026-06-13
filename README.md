# Energy-EX-Web

A Next.js website built with TypeScript and Tailwind CSS v4. The homepage has been refactored into a layered component architecture with static content stored in a single constants file and runtime validation powered by Zod.

## Project structure

- `app/` — Next.js app route and global styles
- `components/common/` — reusable UI primitives
- `components/home/` — page-specific sections for the homepage
- `constants/` — static content definitions and site metadata
- `lib/` — Zod schemas and shared types

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` after starting the dev server.
