# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000) with hot reload
npm run build     # Build for production (output in .output/)
npm run generate  # Generate static site
npm run preview   # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

**Nuxt 4 + Nuxt Content** application that renders markdown files as pages via SQLite.

**Content flow:** Markdown files in `content/` → compiled into `.data/content/contents.sqlite` at build time → queried at runtime by the catch-all route `app/pages/[...slug].vue` using `queryCollection('content').path(route.path).first()`.

**Dynamic routing:** A single catch-all page (`[...slug].vue`) handles all routes. It queries the content collection by path and renders the result with `<ContentRenderer>`. Returns 404 if no content found.

**Component embedding in markdown:** Vue components in `app/components/` can be used inline in `.md` files using MDC block syntax:
```
::alert{color="green"}
Message text
::

::counter
::
```

**Key config:**
- `nuxt.config.ts` — enables `@nuxt/content` module with experimental native SQLite connector
- `content.config.ts` — defines a single `content` collection of type `page` sourcing all files (`**`)
