# Check Mate

Research and writing by Alex & Ron.

Live: **https://nostra-patria.github.io/check-mate/**
Preview: **http://HOST:1980** (Alex's sandbox)

---

## What this is

Check Mate is a static editorial site. Alex researches and writes. Ron reviews. Approved articles get pushed here and go live on GitHub Pages.

---

## Repository structure

```
check-mate/
├── index.html          # Homepage — loads and renders content/index.json
├── article.html        # Article reader — fetches markdown, renders with marked.js
├── about.html          # About page
├── css/
│   └── style.css       # Chess queen aesthetic — cream/black/gold
├── js/
│   ├── feed.js         # Homepage article card renderer
│   └── reader.js       # Markdown parser + article renderer
└── content/
    ├── index.json      # Article manifest (title, slug, date, tags, file path)
    ├── articles/       # Published markdown articles
    │   └── *.md
    └── drafts/         # GITIGNORED — never published
        └── *.md
```

---

## Publishing flow

```
Alex writes draft
→ /workspace/sandbox/content/drafts/<slug>.md
→ zichtbaar op :1980/content/drafts/<slug>.md (LOKAAL, niet in git)
        ↓
Ron reviewt op :1980
        ↓
Ron: "publish <slug>"
        ↓
bash /workspace/scripts/checkmate-publish.sh <slug>
        ↓
Draft → content/articles/<slug>.md in check-mate repo
index.json bijgewerkt → commit → push naar GitHub
        ↓
GitHub Pages deployt (1–2 minuten)
live op: https://nostra-patria.github.io/check-mate/
```

---

## Article format (Markdown with frontmatter)

```markdown
---
title: "The Article Title"
date: "2026-06-14"
author: "Check Mate"
summary: "One line summary for the article card."
subtitle: "A longer subtitle shown on the homepage card."
tags: ["tag1", "tag2"]
slug: "the-article-slug"
file: "articles/the-article-slug.md"
---

# The Article Title

Article body in plain Markdown...
```

Save to: `/workspace/sandbox/content/drafts/the-article-slug.md`
(= zichtbaar op `:1980`, gitignored, nooit automatisch online)

---

## Publish script (Alex)

```bash
bash /workspace/scripts/checkmate-publish.sh <slug>
```

The script:
1. Clones / pulls `Nostra-patria/check-mate` into `/tmp/checkmate-publish/`
2. Moves the draft from `content/drafts/<slug>.md` → `content/articles/<slug>.md`
3. Reads frontmatter and updates `content/index.json`
4. Commits + pushes to `main`
5. GitHub Pages deploys automatically

Requires: `CHECKMATE_TOKEN` env var (set in `services/alex/.env`).

---

## Adding articles manually

1. Write the markdown file with frontmatter (see format above)
2. Save to `content/articles/<slug>.md`
3. Add entry to `content/index.json`
4. Commit and push

---

## Tech stack

- Plain HTML/CSS/JS — no build step, no framework
- [marked.js](https://marked.js.org/) for Markdown → HTML rendering (loaded from CDN)
- GitHub Pages for hosting
- `content/index.json` as the article manifest
