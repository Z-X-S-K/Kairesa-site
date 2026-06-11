import { siteConfig } from "./config.js";
import { services, metrics, processSteps, packages, modules, lensRows, useCases, values, proofPoints, insights, faqs } from "./data.js";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currentPageName() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path === "" ? "index.html" : path;
}

function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => el.classList.remove("show"), 2800);
}

function encodeMailto({ to = siteConfig.email, subject = "", body = "" }) {
  const address = to ? encodeURIComponent(to) : "";
  return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function copyText(text, successMessage = "Copied") {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      toast(successMessage);
      return;
    }
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "");
    temp.style.position = "fixed";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    toast(successMessage);
  } catch (error) {
    toast("Copy failed. Please copy manually.");
  }
}

function buildHeader() {
  const header = $("#site-header");
  if (!header) return;

  const page = currentPageName();
  const links = siteConfig.navigation.map(item => {
    const active = page === item.href ? "active" : "";
    return `<a class="${active}" href="${item.href}">${escapeHtml(item.label)}</a>`;
  }).join("");

  header.innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="${escapeHtml(siteConfig.name)} home">
          <img src="assets/img/logo.svg" alt="" />
          <span>${escapeHtml(siteConfig.name)}</span>
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${links}
        </nav>
        <div class="nav-actions">
          <button class="icon-button" data-theme-toggle aria-label="Toggle theme">◐</button>
          <a class="button small" href="contact.html">Contact</a>
          <button class="menu-button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu">Menu</button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <nav aria-label="Mobile navigation">${links}<a href="contact.html">Contact</a></nav>
      </div>
    </header>`;
}

function buildFooter() {
  const footer = $("#site-footer");
  if (!footer) return;
  const year = new Date().getFullYear();
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" href="index.html">
            <img src="assets/img/logo.svg" alt="" />
            <span>${escapeHtml(siteConfig.name)}</span>
          </a>
          <p>${escapeHtml(siteConfig.description)}</p>
        </div>
        <div>
          <h3>Navigate</h3>
          <a href="services.html">Services</a>
          <a href="insights.html">Insights</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:${escapeHtml(siteConfig.email)}">${escapeHtml(siteConfig.email)}</a>
          <button class="text-button" data-copy-email>Copy email</button>
          <button class="text-button" data-forward-email>Forward intro</button>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© ${year} ${escapeHtml(siteConfig.name)}. All rights reserved.</span>
        <span>Strategy, operational, research, and compliance support. No legal representation.</span>
      </div>
    </footer>`;
}

function setupMenu() {
  const btn = $("[data-menu-toggle]");
  const menu = $("#mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("open", !open);
  });
}

function setupTheme() {
  const saved = localStorage.getItem("kairesa-theme");
  if (saved) document.documentElement.dataset.theme = saved;
  const btn = $("[data-theme-toggle]");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("kairesa-theme", next);
    toast(`${next === "dark" ? "Dark" : "Light"} mode enabled`);
  });
}

function setupReveal() {
  const items = $$(".reveal:not(.visible)");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}

function serviceCard(service, compact = false) {
  const keywords = `${service.title} ${service.tag} ${service.summary} ${service.details} ${service.deliverables.join(" ")} ${(service.examples || []).join(" ")}`.toLowerCase();
  return `
    <article class="service-card reveal" data-service-card data-keywords="${escapeHtml(keywords)}">
      <div class="card-top">
        <span class="pill">${escapeHtml(service.tag)}</span>
        <span class="card-index">${escapeHtml(service.id.split('-').slice(0, 2).join(' '))}</span>
      </div>
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.summary)}</p>
      ${compact ? `<a class="text-link" href="services.html#${escapeHtml(service.id)}">Explore service →</a>` : `
        <button class="text-button" data-expand-card>View deliverables</button>
        <div class="service-extra">
          <p>${escapeHtml(service.details)}</p>
          <strong>Common outputs</strong>
          <ul>${service.deliverables.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          ${(service.examples || []).length ? `<strong>Examples</strong><ul>${service.examples.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
        </div>`}
    </article>`;
}

function renderFeaturedServices() {
  const el = $("#featured-services");
  if (!el) return;
  el.innerHTML = services.slice(0, 4).map(s => serviceCard(s, true)).join("");
}

function renderMetrics() {
  const el = $("#metric-strip");
  if (!el) return;
  el.innerHTML = metrics.map(item => `
    <article class="metric-card reveal">
      <strong>${escapeHtml(item.value)}</strong>
      <span>${escapeHtml(item.label)}</span>
    </article>`).join("");
}

function renderServicesList() {
  const el = $("#services-list");
  if (!el) return;
  el.innerHTML = services.map(s => `<div id="${escapeHtml(s.id)}">${serviceCard(s)}</div>`).join("");
  $$('[data-expand-card]', el).forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('[data-service-card]');
      card.classList.toggle('expanded');
      btn.textContent = card.classList.contains('expanded') ? 'Hide deliverables' : 'View deliverables';
    });
  });
  const search = $("#service-search");
  if (search) {
    search.addEventListener("input", () => filterCards(search.value, "#services-list [data-service-card]"));
  }
}

function filterCards(query, selector) {
  const q = query.trim().toLowerCase();
  $$(selector).forEach(card => {
    const match = !q || card.dataset.keywords.includes(q);
    card.closest("#services-list > div")?.classList.toggle("hidden", !match);
    card.classList.toggle("hidden", !match);
  });
}

function renderProcess() {
  const el = $("#process-timeline");
  if (!el) return;
  el.innerHTML = processSteps.map((step, i) => `
    <button class="timeline-item reveal" aria-expanded="${i === 0 ? 'true' : 'false'}">
      <span>${String(i + 1).padStart(2, '0')}</span>
      <strong>${escapeHtml(step.title)}</strong>
      <p>${escapeHtml(step.text)}</p>
    </button>`).join("");
  $$(".timeline-item", el).forEach(item => {
    item.addEventListener("click", () => {
      const open = item.getAttribute("aria-expanded") === "true";
      item.setAttribute("aria-expanded", String(!open));
    });
  });
}

function renderPackages() {
  const el = $("#package-grid");
  if (!el) return;
  el.innerHTML = packages.map(item => `
    <article class="package-card reveal ${item.featured ? 'featured' : ''}">
      <div class="card-top">
        <span class="pill">${escapeHtml(item.note)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <ul>${item.items.map(line => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
    </article>`).join("");
}

function renderModules() {
  const el = $("#module-grid");
  if (!el) return;
  el.innerHTML = modules.map(item => `
    <article class="module-card reveal">
      <span class="module-icon">${escapeHtml(item.icon)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>`).join("");
}

function renderLens() {
  const el = $("#lens-list");
  if (!el) return;
  el.innerHTML = lensRows.map((item, index) => `
    <div class="lens-row reveal">
      <span>${index + 1}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.text)}</p>
      </div>
    </div>`).join("");
}

function renderScopeBuilder() {
  const el = $("#scope-builder");
  if (!el) return;
  el.innerHTML = `
    <div class="scope-options">
      ${services.slice(0, 6).map(s => `
        <label class="scope-option">
          <input type="checkbox" value="${escapeHtml(s.title)}" />
          <span>${escapeHtml(s.title)}</span>
        </label>`).join("")}
    </div>
    <label class="scope-note-label">Project note
      <textarea id="scope-note" rows="4" placeholder="Example: We need to reduce shipping cost, map compliance risk, and create a better workflow before launch."></textarea>
    </label>
    <div class="scope-actions">
      <button class="button primary" id="scope-email">Email brief</button>
      <button class="button ghost" id="scope-copy">Copy brief</button>
    </div>`;

  const getBrief = () => {
    const selected = $$("input[type='checkbox']:checked", el).map(input => input.value);
    const note = $("#scope-note", el).value.trim();
    return [
      "Hello Kairesa,",
      "",
      "I would like to discuss a possible project.",
      "",
      `Areas selected: ${selected.length ? selected.join(", ") : "Not sure yet"}`,
      note ? `Project note: ${note}` : "Project note: ",
      "",
      "Please let me know the best next step.",
    ].join("\n");
  };

  $("#scope-email", el).addEventListener("click", () => {
    window.location.href = encodeMailto({
      subject: "Project inquiry for Kairesa",
      body: getBrief()
    });
  });
  $("#scope-copy", el).addEventListener("click", () => copyText(getBrief(), "Project brief copied"));
}

function renderUseCases() {
  const el = $("#use-cases");
  if (!el) return;
  el.innerHTML = useCases.map(item => `
    <article class="simple-card reveal">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>`).join("");
}

function renderValues() {
  const el = $("#values-grid");
  if (!el) return;
  el.innerHTML = values.map(item => `
    <article class="value-card reveal">
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.text)}</p>
    </article>`).join("");
}

function renderProofPoints() {
  const el = $("#proof-grid");
  if (!el) return;
  el.innerHTML = proofPoints.map(item => `
    <article class="proof-card reveal">
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.text)}</p>
    </article>`).join("");
}

function renderInsights() {
  const el = $("#insight-grid");
  if (!el) return;
  const render = (list) => {
    el.innerHTML = list.map(item => `
      <article class="insight-card reveal" data-keywords="${escapeHtml(`${item.title} ${item.category} ${item.excerpt}`.toLowerCase())}">
        <span class="pill">${escapeHtml(item.category)}</span>
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.excerpt)}</p>
        <small>${escapeHtml(item.date)}</small>
        <div class="insight-actions">
          <button class="text-button" data-copy-insight="${escapeHtml(item.title)}">Copy title</button>
          <button class="text-button" data-email-insight="${escapeHtml(item.title)}">Email this note</button>
        </div>
      </article>`).join("");

    $$('[data-copy-insight]', el).forEach(btn => {
      btn.addEventListener('click', () => copyText(btn.dataset.copyInsight, "Insight title copied"));
    });
    $$('[data-email-insight]', el).forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = encodeMailto({
          to: "",
          subject: btn.dataset.emailInsight,
          body: `${btn.dataset.emailInsight}\n\n${siteConfig.domain}/insights.html`
        });
      });
    });
    setupReveal();
  };
  render(insights);
  const search = $("#insight-search");
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      render(insights.filter(item => !q || `${item.title} ${item.category} ${item.excerpt}`.toLowerCase().includes(q)));
    });
  }
}

function renderFaq() {
  const el = $("#faq-list");
  if (!el) return;
  el.innerHTML = `<div class="section-heading reveal"><p class="eyebrow">FAQ</p><h2>Before you send a message.</h2></div>` + faqs.map((item, index) => `
    <details class="faq-item reveal" ${index === 0 ? 'open' : ''}>
      <summary>${escapeHtml(item.q)}</summary>
      <p>${escapeHtml(item.a)}</p>
    </details>`).join("");
}

function setupContactForm() {
  const form = $("#contact-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const body = [
      "Hello Kairesa,",
      "",
      "I would like to discuss a project.",
      "",
      `Name: ${data.name || ""}`,
      `Email: ${data.email || ""}`,
      `Company / project: ${data.company || ""}`,
      `Topic: ${data.topic || ""}`,
      `Preferred next step: ${data.nextStep || ""}`,
      "",
      "Message:",
      data.message || "",
      ""
    ].join("\n");

    if (siteConfig.formEndpoint) {
      try {
        const response = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        if (response.ok) {
          form.reset();
          toast("Message sent");
          return;
        }
        throw new Error("Form endpoint returned an error");
      } catch (error) {
        toast("Form endpoint failed. Opening email instead.");
      }
    }

    window.location.href = encodeMailto({
      subject: `Kairesa inquiry — ${data.topic || "Project"}`,
      body
    });
  });
}

function setupShareButtons() {
  $$('[data-share-page]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const shareData = {
        title: `${siteConfig.name} — ${siteConfig.tagline}`,
        text: siteConfig.description,
        url: siteConfig.domain || window.location.href
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await copyText(shareData.url, "Website link copied");
        }
      } catch (error) {
        // User may cancel native share; no action needed.
      }
    });
  });

  $$('[data-forward-email]').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = [
        "I thought you might find Kairesa useful.",
        "",
        `${siteConfig.name}: ${siteConfig.tagline}`,
        siteConfig.description,
        "",
        siteConfig.domain || window.location.href,
        "",
        `Contact: ${siteConfig.email}`
      ].join("\n");
      window.location.href = encodeMailto({ to: "", subject: "Forwarding Kairesa", body });
    });
  });

  $$('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', () => copyText(siteConfig.email, "Email copied"));
  });
}

function init() {
  buildHeader();
  buildFooter();
  setupMenu();
  setupTheme();
  renderMetrics();
  renderFeaturedServices();
  renderServicesList();
  renderProcess();
  renderPackages();
  renderModules();
  renderLens();
  renderScopeBuilder();
  renderUseCases();
  renderValues();
  renderProofPoints();
  renderInsights();
  renderFaq();
  setupContactForm();
  setupShareButtons();
  setupReveal();
}

init();
