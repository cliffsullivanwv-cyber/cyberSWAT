/* ============================================================
   CyberSWAT — render engine
   Reads assets/data.js and builds the header, footer, and the
   content for whichever page is currently open. You should not
   need to edit this file — edit assets/data.js instead.
   ============================================================ */

(function () {
  const bandById = Object.fromEntries(SITE.bands.map(b => [b.id, b]));

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* ---------------- header ---------------- */
  function renderHeader(activePage) {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    const gradeLinks = SITE.grades.map(g =>
      `<a href="grade-${g.number}.html" class="${activePage === 'grade-' + g.number ? 'current' : ''}">Grade ${g.number}</a>`
    ).join("");

    mount.innerHTML = `
      <div class="wrap">
        <a class="brand" href="index.html">
          <span class="mark">CS</span>
          <span>${SITE.brand}<small>Grades 3–12</small></span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="primaryNav">Menu ▾</button>
        <nav class="primary" id="primaryNav">
          <a href="index.html" class="${activePage === 'home' ? 'current' : ''}">Home</a>
          ${gradeLinks}
          <a href="resources.html" class="resources-link ${activePage === 'resources' ? 'current' : ''}">Resources</a>
        </nav>
      </div>`;

    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("primaryNav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------------- footer ---------------- */
  function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount) return;

    const gradeLinks = SITE.grades.map(g =>
      `<a href="grade-${g.number}.html">Grade ${g.number}</a>`
    ).join("");

    mount.innerHTML = `
      <div class="wrap">
        <a class="brand" href="index.html">
          <span class="mark">CS</span>
          <span>${SITE.brand}<small>Grades 3–12</small></span>
        </a>
        <p>${SITE.standardsLine}</p>
        <div class="cols">
          <div>
            <h5>Explore</h5>
            <nav>${gradeLinks}<a href="resources.html">Resources &amp; downloads</a></nav>
          </div>
          <div>
            <h5>Built for teachers</h5>
            <p>No cybersecurity expertise required. Every lesson is scripted, timed, and paired with ready-to-print resources.</p>
          </div>
        </div>
        <p class="fine">Fictional scenarios only · Keeps students' real experiences private · Report concerns to a trusted adult.</p>
      </div>`;
  }

  /* ---------------- home ---------------- */
  function renderHome() {
    const mount = document.getElementById("page-content");
    if (!mount) return;

    const stats = SITE.stats.map(s => `
      <div><span class="stat-num">${s.value}</span><span class="stat-label">${s.label}</span></div>
    `).join("");

    const legend = SITE.bands.map(b => `
      <span><i style="background:${b.color}"></i>${b.label} · ${b.name}</span>
    `).join("");

    const rungs = SITE.grades.map(g => {
      const band = bandById[g.band];
      return `
      <a class="rung" style="--band-color:${band.color}" href="grade-${g.number}.html">
        <span class="num">${g.number}</span>
        <div class="grade-title">${g.title}</div>
        <div class="grade-summary">${g.summary}</div>
      </a>`;
    }).join("");
const swat = SITE.swatProgram;
    const swatCards = swat ? swat.sections.map(s => `
      <div class="swat-card">
        <h4>${s.heading}</h4>
        <ul class="check-list">
          ${s.items.map(i => `<li>${i}</li>`).join("")}
        </ul>
      </div>`).join("") : "";
    const swatBlock = swat ? `
      <section class="swat-section">
        <div class="wrap">
          <div class="swat-head">
            <span class="eyebrow eyebrow-dark">${swat.citation}</span>
            <h2>${swat.title}</h2>
            <p>${swat.subtitle}</p>
          </div>
          <div class="swat-grid">${swatCards}</div>
        </div>
      </section>` : "";
    mount.innerHTML = `
      <section class="hero">
        <div class="wrap">
          <span class="eyebrow">Grades 3–12 · Digital Citizenship &amp; Online Safety</span>
          <h1>Teach online safety students actually use.</h1>
          <p class="lede">A complete, walk-in-and-teach ${SITE.brand} unit for every grade from 3rd through 12th — scripted lessons, projector decks, no-prep substitute plans, and ready-to-print resources.</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#grades">Browse by grade</a>
            <a class="btn btn-ghost" href="resources.html">Resources &amp; downloads</a>
          </div>
          <div class="stat-row">${stats}</div>
        </div>
      </section>

      <section class="ladder-section" id="grades">
        <div class="wrap">
          <div class="ladder-head">
            <h2>Pick a grade and start</h2>
            <p>Every grade builds on the one before it — kindness and privacy basics in elementary, reputation and leadership in middle school, real-world footprint, information integrity, financial safety, and independence across high school.</p>
          </div>
          <div class="band-legend">${legend}</div>
          <div class="ladder">${rungs}</div>
        </div>
      </section>

      <section class="tight">
        <div class="wrap panel" style="display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;">
          <div style="max-width:60ch;">
            <h3 style="margin-bottom:6px;">Everything in one place</h3>
            <p style="margin:0;">Teacher guides, slide decks, substitute plans, and a full categorized resource library.</p>
          </div>
          <a class="btn btn-outline" href="resources.html">Go to Resources →</a>
        </div>
      </section>
    `;
  }

  /* ---------------- grade page ---------------- */
  function renderGrade(gradeNumber) {
    const mount = document.getElementById("page-content");
    if (!mount) return;
    const g = SITE.grades.find(x => x.number === gradeNumber);
    if (!g) { mount.innerHTML = `<div class="wrap" style="padding:80px 0;"><p>Grade not found.</p></div>`; return; }
    const band = bandById[g.band];

    const chips = g.frameworks.map(f => `<span class="chip">${f}</span>`).join("");

    const downloads = g.downloads.map(d => {
      if (d.href) {
        return `
        <a class="dl-card" href="${d.href}" download>
          <span class="filetype">${d.type}</span>
          <h4>${d.label}</h4>
          <p>${d.desc}</p>
          <div class="go">Download ↓</div>
        </a>`;
      }
      return `
        <div class="dl-card empty">
          <span class="filetype">${d.type}</span>
          <h4>${d.label}</h4>
          <p>${d.desc}</p>
          <p class="hint">Not uploaded yet — add a file link in assets/data.js</p>
        </div>`;
    }).join("");

    const lessons = g.lessons.map((l, i) => `
      <details class="lesson">
        <summary>
          <span class="lt"><span class="lnum">L${i + 1}</span> ${l.title}</span>
          <span style="display:flex;align-items:center;gap:14px;">
            <span class="dur">${l.duration}</span>
            <span class="chev">▾</span>
          </span>
        </summary>
        <div class="body">
          <div class="model-label">Model response</div>
          <blockquote>&ldquo;${l.model}&rdquo;</blockquote>
        </div>
      </details>
    `).join("");

    const tabletops = g.tabletops.map(t => `
      <div class="tt-card">
        <h4>${t.title}</h4>
        <p>${t.tags}</p>
      </div>
    `).join("");
const partner = SITE.gradePagePartner;
    const partnerBlock = partner ? `
      <section class="tight">
        <div class="wrap">
          <a class="resource-callout" style="--partner-color:${partner.color || 'var(--teal)'}" href="${partner.url}" target="_blank" rel="noopener">
            ${partner.logo ? `<img class="rc-logo" src="${partner.logo}" alt="${partner.title} logo">` : `<span class="dot"></span>`}
            <span class="rc-text">
              <h5>${partner.title}</h5>
              <p>${partner.note}</p>
            </span>
            <span class="rc-go">Visit site →</span>
          </a>
        </div>
      </section>` : "";
    mount.innerHTML = `
      <section class="grade-hero" style="background:linear-gradient(135deg, ${band.color}, var(--ink) 75%);">
        <div class="wrap">
          <span class="badge">Grade ${g.number} · ${band.label}</span>
          <h1>${g.title}</h1>
          <p class="eq">${g.essentialQuestion}</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#downloads">Get the files</a>
            <a class="btn btn-ghost" href="#lessons">See the lessons</a>
          </div>
        </div>
     </section>
      ${partnerBlock}

      <section id="downloads">
        <div class="wrap">
          <div class="section-head">
            <h2>Download this grade</h2>
            <p>Teacher guide, slide deck, and one-page substitute plan.</p>
          </div>
          <div class="download-grid">${downloads}</div>
        </div>
      </section>

      <hr class="divider">

      <section class="tight">
        <div class="wrap" style="display:grid;grid-template-columns:1.3fr 1fr;gap:40px;">
          <div>
            <h3>Before you teach</h3>
            <ul class="check-list" style="--band-color:${band.color}">
              <li>Print the resource appendix once; store card sets in labeled folders.</li>
              <li>Post the anchor charts you'll build with students.</li>
              <li>Write your school's reporting pathway on the board.</li>
              <li>Group students in 3–4 for peer modeling.</li>
            </ul>
          </div>
          <div>
            <h3>Signature frameworks</h3>
            <div class="chip-row">${chips}</div>
          </div>
        </div>
      </section>

      <hr class="divider">

      <section id="lessons">
        <div class="wrap">
          <div class="section-head">
            <h2>The lessons</h2>
            <p>Tap a lesson to see its duration and the response you model.</p>
          </div>
          ${lessons}
        </div>
      </section>

      <section>
        <div class="wrap">
          <div class="section-head">
            <h2>Tabletop exercises</h2>
            <p>Short, high-engagement rehearsals — run them after a lesson, in advisory, or as review stations.</p>
          </div>
          <div class="tabletop-grid">${tabletops}</div>
        </div>
      </section>

      <section class="tight">
        <div class="wrap panel">
          <strong>One step before you teach:</strong> add your school's reporting pathway — counselor, front office, and reporting tool — so every lesson ends with students knowing exactly where help lives.
        </div>
      </section>
    `;
  }

  /* ---------------- resources page ---------------- */
  function renderResources() {
    const mount = document.getElementById("page-content");
    if (!mount) return;

    const categories = SITE.resources.categories.map(cat => {
      const links = cat.links.length
        ? `<div class="link-grid">${cat.links.map(l => `
            <a class="link-card" href="${l.url}" target="_blank" rel="noopener">
              <span class="dot"></span>
              <span>
                <h5>${l.title}</h5>
                <p>${l.note || ""}</p>
                <span class="url">${l.url}</span>
              </span>
            </a>`).join("")}</div>`
        : `<div class="empty-cat">No links added yet — add some in assets/data.js under "${cat.name}".</div>`;

      return `
        <div class="category">
          <div class="category-head">
            <h3>${cat.name}</h3>
            <span class="count">${cat.links.length} link${cat.links.length === 1 ? "" : "s"}</span>
          </div>
          ${links}
        </div>`;
    }).join("");

    const rows = SITE.grades.map(g => g.downloads.map(d => `
      <tr>
        <td class="grade-cell">Grade ${g.number}</td>
        <td>${d.type}</td>
        <td>${d.label}</td>
        <td>${d.href ? `<a href="${d.href}" download>Download ↓</a>` : `<span class="missing">Not uploaded</span>`}</td>
      </tr>
    `).join("")).join("");

    mount.innerHTML = `
      <section class="hero" style="padding:56px 0 40px;">
        <div class="wrap">
          <span class="eyebrow">For teachers &amp; administrators</span>
          <h1>Resources &amp; Downloads</h1>
          <p class="lede">Every file, every grade, plus a categorized library of outside links — organized by topic so it stays easy to browse as it grows.</p>
        </div>
      </section>

      <section>
        <div class="wrap">
          <div class="section-head">
            <h2>Link library</h2>
            <p>Curated links for classroom use, organized by category. Add as many as you need in <code>assets/data.js</code>.</p>
          </div>
          ${categories}
        </div>
      </section>

      <hr class="divider">

      <section>
        <div class="wrap">
          <div class="section-head">
            <h2>All grade files</h2>
            <p>Word teacher guides, PowerPoint decks, and one-page substitute plans for every grade.</p>
          </div>
          <div class="panel" style="overflow-x:auto;">
            <table class="download-table">
              <thead><tr><th>Grade</th><th>Type</th><th>File</th><th></th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  /* ---------------- boot ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.getAttribute("data-page");
    renderHeader(page);
    renderFooter();
    if (page === "home") renderHome();
    else if (page === "resources") renderResources();
    else if (page && page.startsWith("grade-")) renderGrade(Number(page.replace("grade-", "")));
  });
})();
