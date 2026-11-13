# Raviteja — Portfolio & Blog

Built with [Astro](https://astro.build), hosted free on Cloudflare Pages.

## Run locally
```bash
nvm use          # uses Node version from .nvmrc
npm install
npm run dev      # http://localhost:4321
```

## Where to edit
| What | File |
|---|---|
| Name, role, social links | `src/consts.ts` |
| Projects | `src/data/projects.ts` |
| Home page | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |
| Blog posts | `src/content/blog/*.md` |
| Colors / fonts | `src/styles/global.css` |

## Write a new post
Create `src/content/blog/my-post.md`:
```markdown
---
title: 'My post title'
description: 'One-line summary'
pubDate: '2026-11-12'
---
Content in Markdown...
```
Then `git add . && git commit -m "New post" && git push`. Cloudflare deploys automatically.

## Cloudflare Pages settings
- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION` = `24`
