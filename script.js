const capabilities = [
  {
    number: "01",
    title: "Compliance & regulatory intelligence",
    description: "Translate fragmented rules into a source-traceable structure that supports consistent decisions and execution.",
    outputs: ["Jurisdiction and requirement maps", "Source-linked regulatory databases", "Governance and control blueprints"],
    fit: "The team has rules, stakeholders, or documents—but no reliable system connecting them."
  },
  {
    number: "02",
    title: "Operational systems & SOP",
    description: "Turn knowledge that lives in people’s heads into a repeatable operating system with clear roles, timing, checks, and exception rules.",
    outputs: ["Time-based operating workflows", "RACI and responsibility maps", "Training, checklists, and escalation rules"],
    fit: "The business works, but performance depends too heavily on a manager, founder, or a few experienced employees."
  },
  {
    number: "03",
    title: "Cost, supply & fulfillment design",
    description: "Separate cost drivers, compare scenarios, and redesign vendor or logistics structures around real operating constraints.",
    outputs: ["Cost-stack and margin models", "Vendor comparison frameworks", "Fulfillment and inventory scenarios"],
    fit: "The total cost is high or unpredictable, but the team cannot see which assumptions, vendors, or process decisions are causing it."
  },
  {
    number: "04",
    title: "Digital systems & lightweight automation",
    description: "Convert static plans into interactive websites, dashboards, calendars, forms, and modular tools that remain easy to update.",
    outputs: ["Interactive planning platforms", "Workflow dashboards and forms", "Automated calendars and information feeds"],
    fit: "The process exists on paper, but people need a usable interface, live status, or repeatable automation."
  },
  {
    number: "05",
    title: "Documentation & legal operations support",
    description: "Organize contracts, filing workflows, operational documents, and supporting research into a clear production and review process.",
    outputs: ["Contract and document workflows", "Structured forms and filing support", "Review matrices and client-ready packages"],
    fit: "The work involves many documents, versions, stakeholders, or approvals and needs stronger structure and quality control."
  }
];

const cases = [
  {
    id: "governance",
    category: "compliance",
    meta: "Compliance · Governance",
    title: "Dual-entity governance blueprint",
    summary: "A one-page control map connecting stakeholders, entity boundaries, assets, approvals, and documented inter-entity flows.",
    scope: "Governance architecture, conflict controls, data and IP boundaries, approval paths.",
    output: "Editable visual blueprint and phased implementation roadmap.",
    tags: ["Governance", "Risk map", "Control design"],
    image: "assets/case-governance.webp",
    alt: "Blurred preview of a dual-entity governance blueprint"
  },
  {
    id: "regulatory",
    category: "compliance",
    meta: "Compliance · Data architecture",
    title: "Multi-jurisdiction regulatory schema",
    summary: "A relational structure for connecting jurisdictions, programs, authorities, inspection rules, provider eligibility, artifacts, and source documents.",
    scope: "Regulatory research model, source traceability, database field architecture.",
    output: "Schema and research framework ready for structured data entry.",
    tags: ["Regulatory", "Database", "Source trail"],
    image: "assets/case-regulatory.svg",
    alt: "Abstract regulatory database architecture"
  },
  {
    id: "operations",
    category: "operations",
    meta: "Operations · Hospitality",
    title: "Manager-light operating system",
    summary: "A full operating workbook covering opening-to-close workflow, role ownership, production timing, safety checks, staffing, and exception handling.",
    scope: "SOP design, RACI, labor planning, food-safety records, emergency responses.",
    output: "Modular spreadsheet system with formulas, checklists, and daily controls.",
    tags: ["SOP", "RACI", "Control board"],
    image: "assets/case-operations.svg",
    alt: "Abstract operations control board"
  },
  {
    id: "learn",
    category: "digital",
    meta: "Digital product · Planning",
    title: "Interactive long-horizon planning platform",
    summary: "A modular dashboard that converts goals and deadlines into 10-day cycles, daily tasks, progress tracking, and calendar views.",
    scope: "Product structure, responsive UI, local data, progress logic, planning workflows.",
    output: "Interactive web application designed for desktop and mobile use.",
    tags: ["Web app", "Dashboard", "Planning"],
    image: "assets/case-learn.webp",
    alt: "Preview of a personal planning dashboard"
  },
  {
    id: "calendar",
    category: "digital",
    meta: "Automation · Market information",
    title: "Live economic calendar distribution system",
    summary: "An automatically refreshed economic-event calendar with downloadable and subscribable ICS feeds for multiple calendar platforms.",
    scope: "Data transformation, scheduled updates, calendar delivery, GitHub Pages deployment.",
    output: "Public-facing subscription page and automated calendar feed.",
    tags: ["Automation", "ICS", "GitHub Pages"],
    image: "assets/case-calendar.webp",
    alt: "Preview of a live economic calendar website"
  },
  {
    id: "cost",
    category: "cost",
    meta: "Cost · Supply chain",
    title: "Cold-chain cost and vendor model",
    summary: "A decision model separating packaging, fulfillment, storage, dimensional weight, and transit constraints to compare operating scenarios.",
    scope: "Cost decomposition, vendor criteria, shipping scenarios, risk tradeoffs.",
    output: "Cost model and vendor-selection framework for implementation.",
    tags: ["Cost model", "3PL", "Fulfillment"],
    image: "assets/case-cost.svg",
    alt: "Abstract cost-stack and scenario model"
  }
];

const approachSteps = [
  {
    number: "Stage 01",
    heading: "Diagnose before designing.",
    text: "We clarify what is actually failing, what standard the result must meet, and which constraints cannot be ignored.",
    output: "Problem definition and evidence map",
    visualLabel: "Inputs",
    visualValue: "Evidence, constraints, stakeholders"
  },
  {
    number: "Stage 02",
    heading: "Map the working system.",
    text: "We connect rules, decisions, people, data, and handoffs so the team can see where risk or friction enters the process.",
    output: "System map, ownership model, and priority sequence",
    visualLabel: "Structure",
    visualValue: "Rules, ownership, flows, exceptions"
  },
  {
    number: "Stage 03",
    heading: "Build the usable artifact.",
    text: "The result may be a document system, SOP, cost model, dashboard, website, or automation—but it must be usable in the real workflow.",
    output: "Working document, tool, or operating system",
    visualLabel: "Build",
    visualValue: "Documents, interfaces, controls"
  },
  {
    number: "Stage 04",
    heading: "Validate against reality.",
    text: "We test the work against risk, time, cost, comprehension, and maintainability before final handoff.",
    output: "Validated system and next-step roadmap",
    visualLabel: "Measure",
    visualValue: "Risk, time, cost, usability"
  }
];

const html = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const brandPictureSource = document.querySelector('.brand source');

function setTheme(theme) {
  html.dataset.theme = theme;
  localStorage.setItem('kairesa-theme', theme);
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  const color = theme === 'dark' ? '#0b0d10' : '#f5f5f3';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
  if (brandPictureSource) brandPictureSource.media = theme === 'dark' ? 'all' : '(prefers-color-scheme: dark)';
}

const savedTheme = localStorage.getItem('kairesa-theme');
setTheme(savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeToggle?.addEventListener('click', () => setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  mobileNav.hidden = open;
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

// Hero system map
const stageLabels = ['Traceable inputs', 'Clear ownership', 'Usable systems', 'Measurable outcomes'];
const stageNodes = [...document.querySelectorAll('.stage-node')];
const stageCenterLabel = document.getElementById('stageCenterLabel');
stageNodes.forEach((node, index) => {
  node.addEventListener('click', () => {
    stageNodes.forEach(item => item.classList.remove('is-active'));
    node.classList.add('is-active');
    stageCenterLabel.textContent = stageLabels[index];
  });
});

const systemStage = document.getElementById('systemStage');
if (systemStage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  systemStage.addEventListener('pointermove', event => {
    const r = systemStage.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - .5;
    const y = (event.clientY - r.top) / r.height - .5;
    systemStage.style.setProperty('--mx', x.toFixed(3));
    systemStage.style.setProperty('--my', y.toFixed(3));
    stageNodes.forEach((node, i) => {
      const factor = i % 2 ? -7 : 7;
      node.style.translate = `${x * factor}px ${y * factor}px`;
    });
  });
  systemStage.addEventListener('pointerleave', () => stageNodes.forEach(node => node.style.translate = '0 0'));
}

// Capabilities
const capTabs = [...document.querySelectorAll('[data-capability]')];
const capPanel = document.getElementById('capPanel');
function renderCapability(index, focus = false) {
  const item = capabilities[index];
  capTabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });
  capPanel.setAttribute('aria-labelledby', `capTab${index}`);
  document.getElementById('capNumber').textContent = item.number;
  document.getElementById('capTitle').textContent = item.title;
  document.getElementById('capDescription').textContent = item.description;
  document.getElementById('capOutputs').innerHTML = item.outputs.map(output => `<li>${output}</li>`).join('');
  document.getElementById('capFit').textContent = item.fit;
  capPanel.animate?.([{opacity: .35, transform: 'translateY(4px)'}, {opacity: 1, transform: 'none'}], {duration: 220, easing: 'ease-out'});
  if (focus) capTabs[index].focus();
}
capTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => renderCapability(index));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1;
    const next = (index + direction + capTabs.length) % capTabs.length;
    renderCapability(next, true);
  });
});

// Cases and pagination
const caseGrid = document.getElementById('caseGrid');
const pageLabel = document.getElementById('casePageLabel');
const casePrev = document.getElementById('casePrev');
const caseNext = document.getElementById('caseNext');
const casePagination = document.getElementById('casePagination');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
let activeFilter = 'all';
let currentPage = 0;
let cardsPerPage = 3;

function getCardsPerPage() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 1180) return 2;
  return 3;
}
function filteredCases() {
  return activeFilter === 'all' ? cases : cases.filter(item => item.category === activeFilter);
}
function caseCard(item) {
  return `<button class="case-card" type="button" data-case-id="${item.id}" aria-label="View ${item.title}">
    <span class="case-open" aria-hidden="true">↗</span>
    <span class="case-image"><img src="${item.image}" alt="${item.alt}" loading="lazy"></span>
    <span class="case-body">
      <span class="case-meta">${item.meta}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <span class="case-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</span>
    </span>
  </button>`;
}
function renderCases() {
  cardsPerPage = getCardsPerPage();
  const items = filteredCases();
  const pageCount = Math.max(1, Math.ceil(items.length / cardsPerPage));
  currentPage = Math.min(currentPage, pageCount - 1);
  const start = currentPage * cardsPerPage;
  const visible = items.slice(start, start + cardsPerPage);
  caseGrid.innerHTML = visible.length ? visible.map(caseCard).join('') : '<div class="case-empty">No projects in this category yet.</div>';
  pageLabel.textContent = `${currentPage + 1} / ${pageCount}`;
  casePrev.disabled = currentPage === 0;
  caseNext.disabled = currentPage >= pageCount - 1;
  casePagination.innerHTML = Array.from({length: pageCount}, (_, index) => `<button class="${index === currentPage ? 'is-active' : ''}" type="button" data-page="${index}" aria-label="Go to case page ${index + 1}" aria-current="${index === currentPage ? 'page' : 'false'}"></button>`).join('');
  caseGrid.querySelectorAll('[data-case-id]').forEach(card => card.addEventListener('click', () => openCase(card.dataset.caseId)));
  casePagination.querySelectorAll('[data-page]').forEach(button => button.addEventListener('click', () => {
    currentPage = Number(button.dataset.page);
    renderCases();
  }));
}
casePrev?.addEventListener('click', () => { if (currentPage > 0) { currentPage--; renderCases(); } });
caseNext?.addEventListener('click', () => {
  const pageCount = Math.ceil(filteredCases().length / cardsPerPage);
  if (currentPage < pageCount - 1) { currentPage++; renderCases(); }
});
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  currentPage = 0;
  filterButtons.forEach(item => item.classList.toggle('is-active', item === button));
  renderCases();
}));
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const nextSize = getCardsPerPage();
    if (nextSize !== cardsPerPage) { currentPage = 0; renderCases(); }
  }, 140);
});
renderCases();

// Case modal
const modal = document.getElementById('caseModal');
const modalImage = document.getElementById('modalImage');
let lastFocused = null;
function openCase(id) {
  const item = cases.find(caseItem => caseItem.id === id);
  if (!item) return;
  lastFocused = document.activeElement;
  modalImage.src = item.image;
  modalImage.alt = item.alt;
  document.getElementById('modalMeta').textContent = item.meta;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalSummary').textContent = item.summary;
  document.getElementById('modalScope').textContent = item.scope;
  document.getElementById('modalOutput').textContent = item.output;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}
function closeCase() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  lastFocused?.focus();
}
modal?.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', closeCase));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeCase();
});

// Approach
const approachTabs = [...document.querySelectorAll('[data-step]')];
function renderApproach(index, focus = false) {
  const item = approachSteps[index];
  approachTabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });
  document.getElementById('approachNumber').textContent = item.number;
  document.getElementById('approachHeading').textContent = item.heading;
  document.getElementById('approachText').textContent = item.text;
  document.getElementById('approachOutput').textContent = item.output;
  document.getElementById('approachVisualLabel').textContent = item.visualLabel;
  document.getElementById('approachVisualValue').textContent = item.visualValue;
  document.querySelectorAll('.visual-point').forEach((point, i) => point.classList.toggle('is-active', i === index));
  document.getElementById('approachPanel').animate?.([{opacity: .45}, {opacity: 1}], {duration: 200, easing: 'ease-out'});
  if (focus) approachTabs[index].focus();
}
approachTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => renderApproach(index));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1;
    const next = (index + direction + approachTabs.length) % approachTabs.length;
    renderApproach(next, true);
  });
});

// Contact form
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const subject = `Kairesa project inquiry — ${data.get('project')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Organization: ${data.get('organization') || 'Not provided'}`,
    `Project type: ${data.get('project')}`,
    '',
    'Project summary:',
    data.get('message')
  ].join('\n');
  window.location.href = `mailto:hello@kairesa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formStatus.textContent = 'Your email app should open with the project details prepared.';
});

document.getElementById('copyEmail')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('hello@kairesa.com');
    formStatus.textContent = 'Email address copied.';
  } catch {
    formStatus.textContent = 'Copy failed. Email: hello@kairesa.com';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

// Lightweight reveal without hiding content when JS is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealItems = document.querySelectorAll('.section-intro, .capability-shell, .work-header, .case-toolbar, .approach-layout, .about > *, .contact > *');
  revealItems.forEach(el => el.style.opacity = '.001');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.animate([{opacity: 0, transform: 'translateY(18px)'}, {opacity: 1, transform: 'none'}], {duration: 520, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards'});
      observer.unobserve(entry.target);
    });
  }, {threshold: .12});
  revealItems.forEach(el => observer.observe(el));
}
