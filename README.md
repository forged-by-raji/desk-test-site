# Test Gym Kickboxing

A made-up gym, used to test how Forged by Raji builds a client site from nothing and how the Client Desk keeps it up to date. Nothing here is a real business, and every photo is AI generated.

## What is here
- `brief.md`, `direction-sheet.md`, `copy.md`: the approved brief, direction and words.
- `src/features/gym/domain/facts.ts`: every fact the site shows (times, prices, coaches). Change a fact here and every page follows.
- `src/features/home/`: the home page. `application/` shapes the facts for the page, `ui/` shows them.
- `src/shared/`: the layout, styles, photos and links.

## Run it
```bash
pnpm install
pnpm dev
```
Checks: `pnpm build`, `pnpm check`, `pnpm test`. Needs Node 22.22 or newer.
