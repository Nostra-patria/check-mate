// ── Article Reader ─────────────────────────────────────────────
// Reads ?slug= from URL, fetches markdown from content/, parses
// frontmatter + body, renders with marked.js.

function getSlug() {
  const hash = window.location.hash.replace(/^#/, '');
  const params = new URLSearchParams(hash.replace(/\?/g, '&'));
  return params.get('slug');
}

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: text };

  const raw = match[1].trim();
  const body = match[2].trim();
  const meta = {};

  // Simple YAML parser for flat key: value pairs
  for (const line of raw.split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    let value = line.slice(colon + 1).trim();
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    // Parse arrays: ["a", "b"]
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        value = JSON.parse(value.replace(/'/g, '"'));
      } catch {
        // leave as string
      }
    }
    meta[key] = value;
  }
  return { meta, body };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

function renderTags(tags) {
  if (!Array.isArray(tags) || tags.length === 0) return '';
  return tags.map(t => `<span class="tag">${t}</span>`).join('');
}

async function loadArticle() {
  const slug = getSlug();
  const titleEl = document.getElementById('article-title');
  const metaEl = document.getElementById('article-meta');
  const bodyEl = document.getElementById('article-body');

  if (!slug) {
    titleEl.textContent = 'Article not found';
    bodyEl.innerHTML = '<p>No article slug provided in URL.</p>';
    return;
  }

  try {
    // 1. Fetch index.json to locate the article file path
    const indexRes = await fetch('content/index.json');
    if (!indexRes.ok) throw new Error(`Index unavailable (HTTP ${indexRes.status})`);
    const articles = await indexRes.json();
    const article = articles.find(a => a.slug === slug);

    if (!article) {
      throw new Error(`Article "${slug}" not found in index.`);
    }

    const filePath = article.file
      ? (article.file.startsWith('content/') ? article.file : `content/${article.file}`)
      : `content/${slug}.md`;

    // 2. Fetch the markdown file
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();

    const { meta, body } = parseFrontmatter(text);

    document.title = `${meta.title || 'Untitled'} — Check Mate`;
    titleEl.textContent = meta.title || 'Untitled';

    const date = formatDate(meta.date);
    const author = meta.author || '';
    const tags = renderTags(meta.tags);
    metaEl.innerHTML = [
      date,
      author ? `by ${author}` : '',
      tags
    ].filter(Boolean).join(' <span class="sep">·</span> ');

    // Render markdown body using marked.js
    if (window.marked) {
      bodyEl.innerHTML = window.marked.parse(body);
    } else {
      bodyEl.innerHTML = `<pre style="white-space:pre-wrap">${body}</pre>`;
    }
  } catch (err) {
    titleEl.textContent = 'Error loading article';
    bodyEl.innerHTML = `<p>Could not load article "${slug}". ${err.message}</p>`;
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', loadArticle);
