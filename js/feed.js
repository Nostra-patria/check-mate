// ── Article Feed ───────────────────────────────────────────────
// Fetches content/index.json and renders article cards.

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

function renderTags(tags) {
  if (!Array.isArray(tags) || tags.length === 0) return '';
  return `<div class="article-card-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
}

  function renderCard(article) {
  const date = formatDate(article.date);
  const tags = renderTags(article.tags);
  const summary = article.subtitle || article.summary || '';
  return `
    <li class="article-card">
      <h2 class="article-card-title"><a href="article.html#slug=${article.slug}">${article.title}</a></h2>
      <div class="article-card-meta">${date} <span class="sep">·</span> ${article.author}${tags ? ' <span class="sep">·</span> ' + tags : ''}</div>
      <p class="article-card-summary">${summary}</p>
    </li>
  `;
}

async function loadFeed() {
  const listEl = document.getElementById('article-list');
  if (!listEl) return;

  try {
    console.log('[feed] Fetching content/index.json...');
    const res = await fetch('content/index.json');
    console.log('[feed] Response status:', res.status);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const articles = await res.json();
    console.log('[feed] Articles loaded:', articles.length);

    // Sort by date descending
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Filter published only (default to published if no status set)
    const published = articles.filter(a => !a.status || a.status === 'published');

    if (published.length === 0) {
      listEl.innerHTML = '<li class="article-card"><p>No articles yet.</p></li>';
      return;
    }

    listEl.innerHTML = published.map(renderCard).join('');
  } catch (err) {
    console.error('[feed] Error:', err);
    listEl.innerHTML = `<li class="article-card"><p>Failed to load articles: ${err.message}</p></li>`;
  }
}

document.addEventListener('DOMContentLoaded', loadFeed);
