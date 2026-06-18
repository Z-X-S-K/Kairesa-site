(() => {
  'use strict';

  // Keep canonical URLs clean even when a user opens an index.html file directly.
  if(location.pathname.endsWith('/index.html')){
    const cleanPath=location.pathname.slice(0,-10) || '/';
    location.replace(cleanPath + location.search + location.hash);
  }

  const SITE = {
    email: 'hello@kairesa.com',
    domain: 'https://kairesa.com/',
    name: 'Kairesa'
  };

  const NAV = [
    ['/capabilities/', 'Capabilities', 'capabilities'],
    ['/work/', 'Work', 'work'],
    ['/#products', 'Products', 'products'],
    ['/about/', 'About', 'about']
  ];

  const DISCIPLINES = {
    compliance: {
      type: 'Primary capability', title: 'Compliance', short: 'Regulatory clarity, mapped to action.',
      problem: 'Regulatory obligations are fragmented across jurisdictions, official sources, product lines, and internal owners. Without a controlled structure, teams rely on ad-hoc interpretation and incomplete evidence trails.',
      build: 'Requirement maps, regulatory source hierarchies, obligations registers, control matrices, documentation trackers, escalation logic, and market-entry preparation systems.',
      deliverables: ['AML / KYC / KYB workflow maps', 'CDD / EDD decision trees', 'UBO and beneficial ownership data models', 'OFAC, PEP, sanctions and adverse-media screening checkpoints', 'Policy-to-control mapping', 'Regulatory horizon-scanning register', 'Risk, issue and remediation tracker'],
      connects: ['Legal Operations', 'Research & Advisory', 'Operations'],
      terms: ['AML', 'KYC', 'KYB', 'CDD', 'EDD', 'UBO', 'PEP', 'OFAC', 'RBA', 'Control Matrix']
    },
    operations: {
      type: 'Primary capability', title: 'Operations', short: 'Daily work, made repeatable.',
      problem: 'High-throughput environments become fragile when performance depends on individual memory, undocumented handoffs, and improvised exception handling.',
      build: 'Operating architectures that connect roles, process sequence, capacity, inventory, quality, safety, handoffs, and exception response.',
      deliverables: ['RACI and responsibility matrix', 'Standard work and SOP architecture', 'Critical control points', 'Shift handover protocols', 'Capacity and queue-management logic', 'Reorder points and safety-stock rules', 'Exception paths and escalation matrix'],
      connects: ['Digital Systems', 'Cost Intelligence', 'Compliance'],
      terms: ['RACI', 'Standard Work', 'SLA', 'KPI', 'Critical Controls', 'Safety Stock', 'Escalation Matrix']
    },
    digital: {
      type: 'Primary capability', title: 'Digital Systems', short: 'Tools designed around the real workflow.',
      problem: 'Generic software often forces a specific workflow into a broad product. Teams then recreate the missing logic in spreadsheets, messages, and memory.',
      build: 'Purpose-built websites, dashboards, planning systems, automation, databases, calendar integrations, and lightweight internal tools.',
      deliverables: ['Information architecture', 'Responsive interface and accessibility system', 'State and progress model', 'Data schema and validation logic', 'Event-driven workflow automation', 'Modular component architecture', 'Deployment and handoff documentation'],
      connects: ['Operations', 'Compliance', 'Research & Advisory'],
      terms: ['IA', 'Data Schema', 'State Model', 'API', 'ICS', 'Automation', 'WCAG', 'Progressive Enhancement']
    },
    cost: {
      type: 'Supporting capability', title: 'Cost Intelligence', short: 'Opaque prices, decomposed into decisions.',
      problem: 'A unit price or supplier quote hides its structure. Teams cannot tell which variables actually move the outcome or where redesign is possible.',
      build: 'Cost decomposition, supplier comparison, logistics and packaging models, cost-to-serve analysis, break-even logic, and scenario modelling.',
      deliverables: ['Total landed cost model', 'Activity-based costing structure', 'Fixed / variable cost separation', 'Sensitivity and scenario analysis', 'Vendor scorecard and TCO comparison', 'Break-even and margin model', 'Cost-driver dashboard'],
      connects: ['Operations', 'Research & Advisory', 'Digital Systems'],
      terms: ['TCO', 'Landed Cost', 'ABC', 'Cost-to-Serve', 'Sensitivity', 'Break-even', 'DIM Weight']
    },
    legal: {
      type: 'Supporting capability', title: 'Legal Operations', short: 'Documents connected to execution.',
      problem: 'Commercial and administrative documents fail when drafting, approval, version control, and the actual delivery process are disconnected.',
      build: 'Document intake, first-draft commercial materials, clause structures, approval workflows, matter files, research memoranda, and version-control systems.',
      deliverables: ['Contract intake and issue list', 'Clause library and fallback positions', 'Approval and signature matrix', 'Document naming and version protocol', 'Matter lifecycle tracker', 'Evidence and retention structure', 'Client communication scripts'],
      connects: ['Compliance', 'Operations', 'Research & Advisory'],
      terms: ['Intake', 'Playbook', 'Clause Matrix', 'Approval Gate', 'Version Control', 'Matter Lifecycle']
    },
    advisory: {
      type: 'Supporting capability', title: 'Research & Advisory', short: 'Evidence structured for decision-making.',
      problem: 'Decisions stall when information is unstructured, contradictory, untraceable, or disconnected from the question that must be answered.',
      build: 'Policy, market, industry, competitor, feasibility, supplier, pricing, and risk research with source hierarchies and decision matrices.',
      deliverables: ['Primary-source research map', 'Evidence and citation matrix', 'Market and competitor scan', 'Supplier due-diligence framework', 'Feasibility and risk analysis', 'Decision matrix and recommendation logic', 'Phased implementation roadmap'],
      connects: ['Compliance', 'Cost Intelligence', 'Digital Systems'],
      terms: ['Source Hierarchy', 'Evidence Matrix', 'Triangulation', 'Due Diligence', 'Feasibility', 'Decision Matrix']
    }
  };

  const PROJECTS = [
    {
      id: 'operational', page: '/case-operational/', index: '01', category: 'Systems',
      title: 'Operational System Architecture',
      summary: 'A complete operating system for a high-throughput physical service environment where quality, speed, staffing, inventory, safety, and handoffs had to function as one coordinated structure.',
      challenge: 'Daily performance depended too heavily on individual memory and improvised decisions. Roles, training, quality checks, inventory logic, and exception response were fragmented.',
      built: 'Role architecture, RACI ownership, opening-to-close workflows, production sequencing, safety-stock logic, training modules, quality checkpoints, break-allocation rules, and peak-load exception paths.',
      outcome: 'A repeatable, manager-independent operating model that made execution easier to train, monitor, and improve.',
      tags: ['RACI', 'Standard Work', 'Inventory Controls', 'Exception Logic'], visual: 'grid', featured: true
    },
    {
      id: 'cost', page: '/case-cost/', index: '02', category: 'Cost',
      title: 'Cost Intelligence',
      summary: 'A decision system that turns opaque supplier, logistics, and service costs into controllable variables. Cold-chain fulfilment is used as the applied case.',
      challenge: 'A single supplier price obscured storage, pick-and-pack, packaging, refrigerant, dimensional weight, delivery speed, loss, and returns.',
      built: 'Total-landed-cost model, cost-to-serve analysis, DIM-weight logic, warehouse comparison, packaging scenarios, vendor scorecard, and sensitivity analysis.',
      outcome: 'An opaque quote became a transparent decision model with individually controllable variables.',
      tags: ['TCO', 'Cost-to-Serve', 'DIM Weight', 'Scenario Analysis'], visual: 'bars'
    },
    {
      id: 'learning', page: '/case-learning/', index: '03', category: 'Digital',
      title: 'Learning & Application Operating System',
      summary: 'A personalized digital environment that converted a complex long-term objective into milestones, daily actions, financial targets, progress records, and contingency plans.',
      challenge: 'Deadlines, study, work, finances, applications, and recovery plans existed as separate decisions rather than one operating model.',
      built: 'Milestone engine, task-state model, progress dashboard, financial checkpoints, calendar logic, local persistence, and contingency triggers.',
      outcome: 'An abstract multi-year goal became an executable personal operating system.',
      tags: ['Milestone Engine', 'State Model', 'Dashboard', 'Automation'], visual: 'timeline'
    },
    {
      id: 'compliance', page: '/case-compliance/', index: '04', category: 'Compliance',
      title: 'Market-Entry Compliance Control System',
      summary: 'A structured research and documentation system for an international organization preparing for North American operations.',
      challenge: 'Official requirements, forms, risk triggers, screening obligations, and internal ownership were distributed across sources and jurisdictions.',
      built: 'Obligations register, AML/KYC/KYB intake map, UBO data structure, CDD/EDD triggers, PEP and OFAC screening checkpoints, control matrix, evidence trail, and remediation tracker.',
      outcome: 'Fragmented requirements became a controlled, traceable preparation sequence that could be coordinated with licensed professionals.',
      tags: ['AML / KYC / KYB', 'CDD / EDD', 'OFAC / PEP', 'Control Matrix'], visual: 'matrix', featured: true
    },
    {
      id: 'calendar', page: '/case-calendar/', index: '05', category: 'Digital',
      title: 'Economic Calendar Automation',
      summary: 'A web-based information system that normalized high-impact economic events and delivered them into personal calendars through subscription logic.',
      challenge: 'Critical events required repeated manual checking, interpretation, and calendar entry.',
      built: 'Source normalization, classification rules, calendar-feed generation, ICS subscription, GitHub deployment, update workflow, and mobile calendar compatibility.',
      outcome: 'Recurring monitoring moved from manual administration into an automatically updated tool.',
      tags: ['ICS', 'Normalization', 'Automation', 'GitHub Pages'], visual: 'flow'
    }
  ];

  const CASE_LAYERS = {
    operational: {
      People: {title:'People and ownership', summary:'Roles are treated as system nodes, not informal job descriptions.', bullets:['RACI ownership by task and control','Training sequence and competency checkpoints','Break and coverage allocation','Escalation authority and handoff rules'], logic:'Clarifies who decides, who executes, who verifies, and who receives the handoff.'},
      Process: {title:'Process sequence', summary:'The work is expressed as a time-aware operating flow.', bullets:['Opening, active-operation, handoff, and closing states','Dependencies and parallel work','Standard work with defined completion conditions','Critical-path and bottleneck visibility'], logic:'Replaces repeated “what happens next?” decisions with visible sequence logic.'},
      Inventory: {title:'Inventory control', summary:'Materials are connected to demand, lead time, and exception thresholds.', bullets:['Par levels and safety stock','Reorder points and cycle-count cadence','Waste and variance capture','Supplier and substitution rules'], logic:'Moves inventory decisions from intuition into observable control thresholds.'},
      Control: {title:'Quality and control', summary:'Checks occur at the moment risk is created, not only after failure.', bullets:['Critical control points','Quality acceptance criteria','Completion evidence','Shift and management review'], logic:'Builds verification into the workflow instead of relying on retrospective inspection.'},
      Exceptions: {title:'Exception architecture', summary:'Peak load and abnormal events receive predefined paths.', bullets:['Demand surge modes','Staff shortage response','Stockout and substitution path','Safety or quality stop-work trigger'], logic:'Preserves flexibility without returning the team to improvisation.'}
    },
    learning: {
      Timeline:{title:'Milestone timeline',summary:'A long horizon becomes dependent milestones with slack and deadline logic.',bullets:['Ten-day milestone cycles','Dependency-aware sequencing','Deadline and buffer calculation','Missed-threshold recovery paths'],logic:'The system asks what the current milestone requires, not what feels urgent.'},
      Tasks:{title:'Task state engine',summary:'Daily actions are generated from milestone state and available time.',bullets:['Priority and effort fields','Completion and rollover states','Focus-day and recovery-day logic','Mobile-first interaction'],logic:'Daily planning is derived from the operating model rather than rebuilt each morning.'},
      Finance:{title:'Financial checkpoints',summary:'Cash-flow constraints become part of the plan instead of an external disruption.',bullets:['Income and savings targets','Deadline-linked financial checkpoints','Work-hour allocation','Cash-shortage contingency mode'],logic:'The plan adapts when financial capacity changes.'},
      Progress:{title:'Progress intelligence',summary:'Completion data reveals drift early.',bullets:['Milestone completion rate','Backlog and delay indicators','Trend and consistency view','Manual notes for context'],logic:'Simple analytics support intervention before a deadline is missed.'},
      Contingencies:{title:'Contingency logic',summary:'Recovery paths are designed before they are needed.',bullets:['Missed milestone protocol','Emergency time allocation','Reduced-capacity mode','Re-entry sequence after disruption'],logic:'The plan remains usable under real-life variance.'}
    },
    compliance: {
      Sources:{title:'Source hierarchy',summary:'Primary law, regulation, regulator guidance, forms, and internal interpretations are separated.',bullets:['Authoritative-source classification','Jurisdiction and effective-date fields','Citation and change log','Regulatory horizon scanning'],logic:'Every requirement can be traced to a source and reviewed when the source changes.'},
      Intake:{title:'AML / KYC / KYB intake',summary:'Identity, entity, ownership, and purpose information are captured in a controlled sequence.',bullets:['Customer vs. business classification','UBO / beneficial ownership fields','Business purpose and expected activity','Document completeness checks'],logic:'The intake structure creates a consistent evidence base for risk review.'},
      Screening:{title:'Screening checkpoints',summary:'PEP, sanctions, OFAC, restricted-party, and adverse-media checks are mapped to defined stages.',bullets:['Initial and periodic screening points','Potential-match disposition','False-positive documentation','Escalation and approval gates'],logic:'Screening becomes a repeatable workflow with an auditable decision trail.'},
      Diligence:{title:'CDD / EDD logic',summary:'Risk-based triggers determine the level of due diligence and approval.',bullets:['Risk-rating factors','CDD baseline requirements','EDD trigger conditions','Review frequency and refresh events'],logic:'A risk-based approach (RBA) connects evidence requirements to the actual risk profile.'},
      Controls:{title:'Control and remediation',summary:'Requirements are connected to owners, evidence, testing, issues, and corrective action.',bullets:['Policy-to-control mapping','RACI and control owner','Evidence and retention fields','Issue severity and remediation tracker'],logic:'The system makes compliance status visible rather than implicit.'}
    },
    calendar: {
      Source:{title:'Source intake',summary:'Events are collected from defined information sources.',bullets:['Source identifier','Publication timestamp','Raw event fields','Availability and error handling'],logic:'The workflow begins with traceable source data.'},
      Normalize:{title:'Normalization',summary:'Dates, currencies, countries, names, and numeric fields are standardized.',bullets:['Timezone conversion','Field normalization','Duplicate detection','Missing-data rules'],logic:'Different source formats become one consistent event model.'},
      Classify:{title:'Impact classification',summary:'Events are tagged by significance and category.',bullets:['Impact level','Region and asset class','Forecast / previous fields','User-facing description'],logic:'Classification determines which events enter the final calendar feed.'},
      Web:{title:'Web presentation',summary:'The website provides a readable, shareable event interface.',bullets:['Responsive calendar view','Filtering and detail state','Accessible event descriptions','Static-site deployment'],logic:'The web layer makes the same structured data easy to inspect.'},
      ICS:{title:'ICS subscription',summary:'Calendar-compatible events are generated and published as a subscription feed.',bullets:['UID and recurrence handling','Timezone-aware DTSTART','DESCRIPTION metadata','Update and cancellation logic'],logic:'Users receive updates in the calendar they already use.'}
    }
  };

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function pageName(){ return document.body.dataset.page || 'home'; }

  function renderShell(){
    const active = pageName();
    const header = $('#site-header');
    const footer = $('#site-footer');
    if(header){
      header.innerHTML = `
        <div class="site-progress" aria-hidden="true"></div>
        <header class="site-header" data-header>
          <div class="shell header-inner">
            <a class="brand" href="/" aria-label="Kairesa home"><span class="brand-mark brand-mark--image" aria-hidden="true"><img class="brand-mark-img brand-mark-img--light" src="/assets/img/mark-black.png" alt=""><img class="brand-mark-img brand-mark-img--dark" src="/assets/img/mark-white.png" alt=""></span><span class="brand-word">KAIRESA</span></a>
            <nav class="desktop-nav" aria-label="Primary navigation">
              ${NAV.map(([href,label,key])=>`<a href="${href}" class="${active===key?'is-active':''}">${label}</a>`).join('')}
            </nav>
            <div class="header-actions">
              <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle light and dark mode">◐</button>
              <a class="button button--solid" href="/contact/">Start a project <span>↗</span></a>
              <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-panel" aria-label="Open menu">☰</button>
            </div>
          </div>
        </header>
        <div class="mobile-panel" id="mobile-panel" aria-hidden="true">
          <nav aria-label="Mobile navigation">${NAV.map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}<a href="/contact/">Start a project</a></nav>
          <div class="mobile-meta"><span>Compliance · Operations · Digital</span><a href="mailto:${SITE.email}">${SITE.email}</a></div>
        </div>`;
    }
    if(footer){
      footer.innerHTML = `
        <footer class="site-footer">
          <div class="shell footer-grid">
            <div class="footer-brand">
              <a class="brand" href="/" aria-label="Kairesa home"><span class="brand-mark brand-mark--image" aria-hidden="true"><img class="brand-mark-img brand-mark-img--light" src="/assets/img/mark-black.png" alt=""><img class="brand-mark-img brand-mark-img--dark" src="/assets/img/mark-white.png" alt=""></span><span class="brand-word">KAIRESA</span></a>
              <h2>Systems designed to stay useful.</h2>
              <p class="muted">Compliance, operations, cost intelligence, and practical technology—structured for implementation.</p>
              <div><a class="text-link" href="mailto:${SITE.email}">${SITE.email} ↗</a></div>
            </div>
            <div class="footer-col"><h3>Sitemap</h3><a href="/">Home</a>${NAV.map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}<a href="/contact/">Contact</a></div>
            <div class="footer-col"><h3>Products</h3><a href="/product/kairesa-learn/">Kairesa Learn</a><a href="/product/kairesa-calendar/">Kairesa Calendar</a><h3 class="footer-subhead">Disciplines</h3><a href="/capabilities/#compliance">Compliance</a><a href="/capabilities/#operations">Operations</a><a href="/capabilities/#digital-systems">Digital Systems</a></div>
          </div>
          <div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Kairesa. Technology, structured for real life.</span><span>v1.700 — golden-ratio interface build.</span></div>
        </footer>`;
    }
  }

  function setupGlobal(){
    prepareMotionTargets();
    setupMotionCards();
    const root=document.documentElement;
    let saved=''; try{saved=localStorage.getItem('kairesa-theme')||'';}catch(_){ }
    root.dataset.theme=saved || (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
    $('[data-theme-toggle]')?.addEventListener('click',()=>{
      root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
      try{localStorage.setItem('kairesa-theme',root.dataset.theme);}catch(_){ }
      toast(`${root.dataset.theme==='dark'?'Dark':'Light'} mode enabled`);
    });
    const menu=$('[data-menu-toggle]'),panel=$('#mobile-panel');
    menu?.addEventListener('click',()=>{
      const open=menu.getAttribute('aria-expanded')==='true';
      menu.setAttribute('aria-expanded',String(!open)); panel?.classList.toggle('is-open',!open); panel?.setAttribute('aria-hidden',String(open));
      document.body.style.overflow=!open?'hidden':'';
    });
    const header=$('[data-header]'),progress=$('.site-progress');
    const onScroll=()=>{
      header?.classList.toggle('is-compact',scrollY>24);
      const max=document.documentElement.scrollHeight-innerHeight;
      if(progress) progress.style.width=`${max>0?scrollY/max*100:0}%`;
    }; onScroll(); addEventListener('scroll',onScroll,{passive:true});
    const items=$$('[data-reveal]');
    if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver'in window)) items.forEach(x=>x.classList.add('is-visible'));
    else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -35px'});items.forEach(x=>io.observe(x));}
    $$('[data-copy-email]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(SITE.email);toast('Email copied');}catch(_){location.href=`mailto:${SITE.email}`;}}));
    $$('[data-share]').forEach(b=>b.addEventListener('click',async()=>{const data={title:'Kairesa',text:'Kairesa — We systematize complexity.',url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);toast('Link copied');}}catch(_){}}));
  }


  function prepareMotionTargets(){
    const selectors=[
      '.page-hero-grid > *','.section-head','.project-card','.product-card','.pattern',
      '.info-card','.about-history article','.about-direction > *','.capability-menu',
      '.capability-detail','.network-layout','.cta-panel','.contact-wizard',
      '.case-summary-grid article','.layer-explorer','.outcome-grid > *','.related-grid > *'
    ];
    $$(selectors.join(',')).forEach(el=>{if(!el.hasAttribute('data-reveal'))el.setAttribute('data-reveal','');});
    $$('[data-reveal]').forEach((el,i)=>{
      const siblings=el.parentElement?[...el.parentElement.children].filter(x=>x.hasAttribute('data-reveal')):[];
      const position=Math.max(0,siblings.indexOf(el));
      el.style.setProperty('--reveal-delay',`${Math.min(position*70,280)}ms`);
    });
  }

  function setupMotionCards(){
    if(!matchMedia('(hover:hover) and (pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
    $$('.project-card,.product-card,.info-card,.pattern,.about-history article').forEach(card=>{
      card.classList.add('motion-card');
      card.addEventListener('pointermove',e=>{
        const r=card.getBoundingClientRect();
        card.style.setProperty('--mx',`${e.clientX-r.left}px`);
        card.style.setProperty('--my',`${e.clientY-r.top}px`);
      },{passive:true});
    });
  }

  function toast(message){
    let el=$('.toast'); if(!el){el=document.createElement('div');el.className='toast';document.body.append(el);} el.textContent=message;el.classList.add('is-visible');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('is-visible'),2200);
  }

  function networkMarkup(){
    return `<div class="network-layout" data-network>
      <div class="discipline-network">
        <svg viewBox="0 0 700 560" preserveAspectRatio="none" aria-hidden="true">
          ${['compliance','operations','digital','cost','legal','advisory'].map(id=>`<line data-line="${id}" x1="350" y1="269" x2="${({compliance:[350,68],operations:[610,300],digital:[90,300],cost:[350,500],legal:[160,150],advisory:[540,150]})[id][0]}" y2="${({compliance:[350,68],operations:[610,300],digital:[90,300],cost:[350,500],legal:[160,150],advisory:[540,150]})[id][1]}"/>`).join('')}
        </svg>
        <div class="network-core">KAIRESA<br>SYSTEM</div>
        ${Object.entries(DISCIPLINES).map(([id,d])=>`<button class="discipline-node ${id==='compliance'?'is-active':''}" type="button" data-node="${id}"><span>${d.title}</span><small>${d.type.startsWith('Primary')?'PRIMARY':'SUPPORT'}</small></button>`).join('')}
      </div>
      <aside class="network-panel" data-network-panel></aside>
    </div>`;
  }

  function networkPanel(d){
    return `<p class="kicker">${esc(d.type)}</p><h3>${esc(d.title)}</h3><p class="body-lg">${esc(d.short)}</p>
      <dl class="network-fields"><div class="network-field"><dt>Problem</dt><dd>${esc(d.problem)}</dd></div><div class="network-field"><dt>Build</dt><dd>${esc(d.build)}</dd></div><div class="network-field"><dt>Key outputs</dt><dd>${d.deliverables.slice(0,3).map(esc).join(' · ')}</dd></div></dl>
      <div class="term-cloud">${d.terms.slice(0,6).map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div><a class="text-link" href="/capabilities/#${d.title.toLowerCase().replaceAll(' ','-')}">Open capability <span>↗</span></a>`;
  }

  function setupNetwork(root=document){
    $$('[data-network]',root).forEach(net=>{
      const panel=$('[data-network-panel]',net);
      const nodes=$$('[data-node]',net);
      let index=0, timer=0, paused=false;
      const activate=id=>{
        const d=DISCIPLINES[id]; if(!d)return;
        panel.innerHTML=networkPanel(d);
        panel.animate([{opacity:.35,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:320,easing:'cubic-bezier(.2,.8,.2,1)'});
        nodes.forEach(n=>n.classList.toggle('is-active',n.dataset.node===id));
        $$('[data-line]',net).forEach(l=>l.classList.toggle('is-active',l.dataset.line===id||d.connects.some(c=>DISCIPLINES[l.dataset.line]?.title===c)));
      };
      const start=()=>{
        clearInterval(timer);
        if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
        timer=setInterval(()=>{if(!paused){index=(index+1)%nodes.length;activate(nodes[index].dataset.node);}},2600);
      };
      activate('compliance');
      nodes.forEach((n,i)=>{
        n.addEventListener('mouseenter',()=>{paused=true;index=i;activate(n.dataset.node)});
        n.addEventListener('focus',()=>{paused=true;index=i;activate(n.dataset.node)});
        n.addEventListener('click',()=>{paused=true;index=i;activate(n.dataset.node);setTimeout(()=>{paused=false},3200)});
      });
      net.addEventListener('mouseleave',()=>{paused=false});
      net.addEventListener('focusout',e=>{if(!net.contains(e.relatedTarget))paused=false});
      start();
    });
  }

  function projectVisual(p){
    if(p.id==='operational')return `<div class="work-viz work-viz--operations" aria-hidden="true">
      <span class="work-viz-label">OPEN</span><span class="work-viz-label">RUN</span><span class="work-viz-label">VERIFY</span><span class="work-viz-label">HANDOFF</span>
      <i></i><i></i><i></i><b>RACI</b></div>`;
    if(p.id==='cost')return `<div class="work-viz work-viz--cost" aria-hidden="true"><small>APPLIED CASE · COLD CHAIN</small>
      ${[31,48,67,83].map((w,i)=>`<span><em>${['Storage','Package','Shipping','Loss'][i]}</em><i style="--w:${w}%"></i></span>`).join('')}<b>TCO</b></div>`;
    if(p.id==='learning')return `<div class="work-viz work-viz--learning" aria-hidden="true"><div><small>CYCLE 04</small><strong>72%</strong><span>Adaptive plan</span></div><ol>${Array.from({length:8},(_,i)=>`<li class="${i<5?'is-done':i===5?'is-now':''}"></li>`).join('')}</ol></div>`;
    if(p.id==='compliance')return `<div class="work-viz work-viz--compliance" aria-hidden="true">${['SOURCE','OBLIGATION','OWNER','CONTROL','EVIDENCE','REVIEW'].map((x,i)=>`<span class="${i===3?'is-hot':''}">${x}</span>`).join('')}</div>`;
    return `<div class="work-viz work-viz--calendar" aria-hidden="true">${['SOURCE','NORMALIZE','CLASSIFY','WEB','ICS'].map((x,i)=>`<span class="${i===2?'is-hot':''}"><i>0${i+1}</i>${x}</span>`).join('')}</div>`;
  }

  function projectCard(p){return `<article class="project-card ${p.featured?'is-featured':'is-wide'}" data-project data-reveal data-motion-card data-category="${p.category}">
    <a class="project-visual" href="${p.page}" aria-label="Open ${esc(p.title)} case study">${projectVisual(p)}</a>
    <div class="project-content"><div class="project-meta"><span>${p.index} · ${p.category}</span><span>${p.tags[0]}</span></div><h3><a href="${p.page}">${esc(p.title)}</a></h3><p class="project-summary">${esc(p.summary)}</p>
    <div class="project-reveal"><div><div class="project-details"><p><strong>Problem</strong><br>${esc(p.challenge)}</p><p><strong>System built</strong><br>${esc(p.built)}</p><p><strong>Outcome</strong><br>${esc(p.outcome)}</p><div class="term-cloud">${p.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div></div></div></div>
    <div class="project-actions"><button class="project-expand" type="button" aria-expanded="false">System brief +</button><a class="text-link" href="${p.page}">Open case <span>↗</span></a></div></div></article>`;}

  function renderProjects(mount,limit=0){
    if(!mount)return; const list=limit?PROJECTS.slice(0,limit):PROJECTS;
    mount.innerHTML=list.map(projectCard).join('');
    $$('[data-project]',mount).forEach(card=>{$('.project-expand',card)?.addEventListener('click',e=>{const open=card.classList.toggle('is-open');e.currentTarget.setAttribute('aria-expanded',String(open));e.currentTarget.textContent=open?'Close summary −':'Explore summary +';});});
  }

  function setupHomeSystem(){
    const mount=$('[data-home-system]'); if(!mount)return;
    const states=[
      {key:'clarify',step:'01',label:'Clarify',input:'Fragmented requirements',system:'Source hierarchy + issue map',output:'Decision-ready scope',signal:'Traceability established'},
      {key:'structure',step:'02',label:'Structure',input:'People, process, constraints',system:'Owners + controls + exceptions',output:'Executable operating model',signal:'Dependencies resolved'},
      {key:'deploy',step:'03',label:'Deploy',input:'Approved system logic',system:'Tool + workflow + handoff',output:'Working system in use',signal:'Maintenance path defined'}
    ];
    mount.innerHTML=`<div class="hero-system-top"><span class="kicker">Live system view</span><span class="system-status"><i></i>Ready</span></div>
      <div class="hero-system-screen" aria-live="polite"><div class="system-step" data-system-step></div><div class="system-flow" data-system-flow></div><div class="system-signal" data-system-signal></div></div>
      <div class="hero-system-tabs" role="tablist" aria-label="Kairesa system stages">${states.map((s,i)=>`<button type="button" role="tab" aria-selected="${i===0}" class="${i===0?'is-active':''}" data-system-tab="${s.key}"><span>${s.step}</span>${s.label}</button>`).join('')}</div>`;
    const render=key=>{
      const s=states.find(x=>x.key===key)||states[0];
      $('[data-system-step]',mount).innerHTML=`<span>${s.step}</span><strong>${s.label}</strong>`;
      $('[data-system-flow]',mount).innerHTML=`<article><small>INPUT</small><p>${s.input}</p></article><i aria-hidden="true">→</i><article><small>SYSTEM</small><p>${s.system}</p></article><i aria-hidden="true">→</i><article><small>OUTPUT</small><p>${s.output}</p></article>`;
      $('[data-system-signal]',mount).innerHTML=`<span>System signal</span><strong>${s.signal}</strong><i></i>`;
      $$('[data-system-tab]',mount).forEach(b=>{const active=b.dataset.systemTab===key;b.classList.toggle('is-active',active);b.setAttribute('aria-selected',String(active));});
    };
    $$('[data-system-tab]',mount).forEach(b=>b.addEventListener('click',()=>render(b.dataset.systemTab)));
    render(states[0].key);
  }

  function setupFilters(){
    const mount=$('[data-project-library]'); if(!mount)return; renderProjects($('.project-grid',mount));
    $$('[data-filter]',mount).forEach(btn=>btn.addEventListener('click',()=>{const cat=btn.dataset.filter;$$('[data-filter]',mount).forEach(b=>b.classList.toggle('is-active',b===btn));let c=0;$$('[data-project]',mount).forEach(card=>{const show=cat==='All'||card.dataset.category===cat;card.hidden=!show;if(show)c++;});$('[data-project-count]',mount).textContent=String(c).padStart(2,'0')+' projects';}));
  }

  function setupAccordions(){
    $$('[data-accordion-trigger]').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.accordion-item');const open=item.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(open));$('.accordion-icon',btn).textContent=open?'−':'+';}));
  }

  function renderCapabilitiesPage(){
    const mount=$('[data-capability-page]'); if(!mount)return;
    mount.innerHTML=`<aside class="capability-menu">${Object.entries(DISCIPLINES).map(([id,d],i)=>`<button type="button" data-cap-menu="${id}" class="${i===0?'is-active':''}">${d.title}</button>`).join('')}</aside><div class="capability-detail" data-cap-detail></div>`;
    const detail=$('[data-cap-detail]',mount);
    const render=id=>{
      const d=DISCIPLINES[id];
      detail.innerHTML=`<div class="capability-detail-head"><div><p class="kicker">${d.type}</p><h2>${d.title}</h2><p class="body-lg">${d.short}</p></div><p class="body-lg">${d.build}</p></div>
      <div class="capability-detail-grid capability-detail-grid--concise">
        <article class="info-card"><h3>Core problem</h3><p>${d.problem}</p></article>
        <article class="info-card"><h3>What Kairesa builds</h3><p>${d.build}</p></article>
        <article class="info-card info-card--wide"><h3>Typical outputs</h3><ul>${d.deliverables.slice(0,5).map(x=>`<li>${x}</li>`).join('')}</ul></article>
        <article class="info-card info-card--wide"><h3>Connected system</h3><div class="term-cloud">${[...d.connects,...d.terms.slice(0,5)].map(x=>`<span class="chip">${x}</span>`).join('')}</div></article>
      </div>
      ${id==='compliance'?`<div class="disclaimer"><strong>Boundary:</strong> Kairesa structures research, documentation, workflows, and internal controls. It does not provide legal representation or certify regulatory compliance.</div>`:''}
      <div><a class="button button--solid" href="/contact/?discipline=${encodeURIComponent(d.title)}">Discuss this system ↗</a></div>`;
    };
    render('compliance');
    $$('[data-cap-menu]',mount).forEach(btn=>btn.addEventListener('click',()=>{
      $$('[data-cap-menu]',mount).forEach(b=>b.classList.toggle('is-active',b===btn));
      render(btn.dataset.capMenu);
    }));
    const hash=location.hash.slice(1);
    const match=Object.entries(DISCIPLINES).find(([,d])=>d.title.toLowerCase().replaceAll(' ','-')===hash);
    if(match){const btn=$(`[data-cap-menu="${match[0]}"]`,mount);btn?.click();}
  }

  function caseHeroVisual(p){
    if(p.id==='operational')return `<div class="case-system-visual case-system-visual--operational"><div class="ops-lanes">${['OPEN','PREP','SERVICE','CLOSE'].map((x,i)=>`<span class="${i===2?'is-active':''}"><i>0${i+1}</i>${x}</span>`).join('')}</div><div class="ops-core"><strong>OWNERSHIP</strong><small>RACI · CONTROL · HANDOFF</small></div></div>`;
    if(p.id==='cost')return `<div class="case-system-visual case-system-visual--cost"><div class="applied-case"><span>APPLIED CASE</span><strong>Cold-chain fulfilment</strong></div><div class="cost-hero-total"><small>MODELLED COST / ORDER</small><strong>$60.00</strong></div><div class="cost-hero-bars">${[['Storage',18],['Packaging',31],['Refrigerant',25],['Shipping',72],['Loss',13]].map(([x,w])=>`<span><em>${x}</em><i style="--w:${w}%"></i></span>`).join('')}</div></div>`;
    if(p.id==='learning')return `<div class="case-system-visual case-system-visual--learning"><div class="learning-metric"><small>ADAPTIVE CYCLE</small><strong>72%</strong><span>On-track with recovery capacity</span></div><div class="learning-grid">${['Milestone','Tasks','Cash flow','Recovery'].map((x,i)=>`<span class="${i===1?'is-active':''}"><i>0${i+1}</i>${x}</span>`).join('')}</div></div>`;
    if(p.id==='compliance')return `<div class="case-system-visual case-system-visual--compliance"><div class="compliance-axis"><span>REQUIREMENT</span><span>OWNER</span><span>CONTROL</span><span>EVIDENCE</span></div><div class="compliance-cells">${Array.from({length:20},(_,i)=>`<i class="${[2,7,13,18].includes(i)?'is-active':''}"></i>`).join('')}</div><div class="compliance-status"><i></i>Traceable control path</div></div>`;
    return `<div class="case-system-visual case-system-visual--calendar"><div class="calendar-pipeline">${['SOURCE','NORMALIZE','CLASSIFY','WEB','ICS'].map((x,i)=>`<span class="${i===4?'is-active':''}"><i>0${i+1}</i><strong>${x}</strong></span>`).join('')}</div><div class="calendar-event-card"><time>08:30</time><div><small>USD · HIGH IMPACT</small><strong>Economic event published</strong></div><i></i></div></div>`;
  }

  function renderCase(){
    const root=$('[data-case-root]'); if(!root)return;
    const id=document.body.dataset.caseId;
    const p=PROJECTS.find(x=>x.id===id); if(!p)return;
    const next=PROJECTS[(PROJECTS.indexOf(p)+1)%PROJECTS.length];
    const explorerTitle={operational:'Operate through ownership, sequence, and control.',cost:'See what actually moves the cost.',learning:'Let the plan respond to changing capacity.',compliance:'Trace every obligation to evidence.',calendar:'Follow one event from source to calendar.'}[id];
    root.innerHTML=`<section class="case-hero case-hero--${id}"><div class="shell case-hero-grid"><div class="case-hero-copy" data-reveal><a class="case-back" href="/work/">← Selected work</a><p class="eyebrow">${p.index} · ${p.category}</p><h1 class="page-title">${p.title}</h1><p class="body-lg">${p.summary}</p><div class="case-tags">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div></div><div class="case-visual case-visual--${id}" data-reveal>${caseHeroVisual(p)}</div></div></section>
      <section class="section section--border case-summary-section"><div class="shell case-summary-grid" data-reveal><article><p class="kicker">Problem</p><p class="lead">${p.challenge}</p></article><article><p class="kicker">System built</p><p class="body-lg">${p.built}</p></article><article><p class="kicker">Outcome</p><p class="body-lg">${p.outcome}</p></article></div></section>
      <section class="section section--border"><div class="shell"><div class="section-head case-section-head" data-reveal><div><p class="kicker">Interactive system</p><h2 class="section-title">${explorerTitle}</h2></div><p class="body-lg">Select a layer to inspect the operating logic, the system components, and the decision rule behind it.</p></div><div class="case-explorer case-explorer--${id}" data-case-explorer="${id}" data-reveal><nav class="case-explorer-nav" data-layer-controls aria-label="Case system layers"></nav><div class="case-explorer-stage" data-layer-visual></div><div class="case-explorer-copy" data-layer-copy></div></div></div></section>
      ${id==='cost'?`<section class="section section--border cost-application"><div class="shell"><div class="application-banner" data-reveal><div><p class="kicker">Applied case · Cold-chain fulfilment</p><h2 class="section-title">A broad cost system, tested against a demanding use case.</h2></div><p class="body-lg">Frozen-product fulfilment exposes the full model: warehouse handling, packaging, refrigerant, dimensional weight, service level, loss, and returns. The same cost architecture can be reused for other products and delivery systems.</p></div><div class="section-head calculator-head" data-reveal><div><p class="kicker">Interactive calculator</p><h2 class="section-title">Move the cost drivers.</h2></div><p class="body-lg">Illustrative values only. Adjust each component or load a scenario preset.</p></div><div class="cost-calculator" data-cost-calc data-reveal></div></div></section>`:''}
      ${id==='compliance'?`<section class="section--tight"><div class="shell disclaimer"><strong>Boundary:</strong> This case describes system design and workflow architecture, not legal representation or compliance certification.</div></section>`:''}
      <section class="section section--border"><div class="shell related-grid"><div><p class="kicker">System vocabulary</p><div class="term-cloud">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div></div><a class="next-case" href="${next.page}"><p class="kicker">Next project</p><h2 class="card-title">${next.title} <span>↗</span></h2></a></div></section>`;
    setupCaseExplorer(id);
    if(id==='cost')setupCostCalc();
  }

  function caseStageVisual(id,key,d,keys){
    const n=keys.indexOf(key);
    if(id==='operational')return `<div class="stage-operations"><div class="stage-lanes">${keys.map((x,i)=>`<span class="${i===n?'is-active':i<n?'is-complete':''}"><i>0${i+1}</i>${x}</span>`).join('')}</div><div class="stage-control"><small>CURRENT CONTROL</small><strong>${d.title}</strong><p>${d.logic}</p></div></div>`;
    if(id==='cost'){
      const widths=[[22,37,58,76,31],[18,29,49,68,24],[31,44,64,83,36]][n]||[22,37,58,76,31];
      return `<div class="stage-cost"><div class="stage-cost-total"><small>${key.toUpperCase()} VIEW</small><strong>${n===0?'$60.00':n===1?'3':'86/100'}</strong><span>${n===0?'Illustrative cost / order':n===1?'Comparable scenarios':'Operating-fit score'}</span></div><div class="stage-cost-bars">${['Handling','Package','Freight','Service','Risk'].map((x,i)=>`<span><em>${x}</em><i style="--w:${widths[i]}%"></i></span>`).join('')}</div></div>`;
    }
    if(id==='learning')return `<div class="stage-learning"><div class="stage-learning-top"><span><small>ACTIVE LAYER</small><strong>${key}</strong></span><b>${[72,64,41,79,52][n]||72}%</b></div><div class="stage-learning-track">${Array.from({length:10},(_,i)=>`<i class="${i<5+n%3?'is-done':i===5+n%3?'is-now':''}"></i>`).join('')}</div><div class="stage-learning-cards">${d.bullets.slice(0,3).map((x,i)=>`<span><i>0${i+1}</i>${x}</span>`).join('')}</div></div>`;
    if(id==='compliance')return `<div class="stage-compliance"><div class="stage-compliance-head"><span>Source</span><span>Requirement</span><span>Owner</span><span>Control</span><span>Evidence</span></div>${Array.from({length:5},(_,r)=>`<div class="stage-compliance-row">${Array.from({length:5},(_,c)=>`<i class="${c===n%5||r===n%5?'is-active':''}">${c===4&&r===n%5?'✓':''}</i>`).join('')}</div>`).join('')}<p><i></i>${d.logic}</p></div>`;
    return `<div class="stage-calendar"><div class="stage-calendar-pipeline">${keys.map((x,i)=>`<span class="${i===n?'is-active':i<n?'is-complete':''}"><i>0${i+1}</i><strong>${x}</strong></span>`).join('')}</div><div class="stage-calendar-record"><span><small>STATUS</small><strong>${n===keys.length-1?'Subscribed':'Processing'}</strong></span><span><small>ACTIVE RULE</small><strong>${d.title}</strong></span></div></div>`;
  }

  function setupCaseExplorer(id){
    const mount=$(`[data-case-explorer="${id}"]`);if(!mount)return;
    let data=CASE_LAYERS[id];
    if(id==='cost') data={Cost:{title:'Cost-driver model',summary:'Each cost is separated into a named driver, unit, assumption, and scenario.',bullets:['Storage and handling','Packaging and refrigerant','DIM-weight shipping','Loss and returns'],logic:'A price becomes a model when each component can be changed independently.'},Scenario:{title:'Scenario comparison',summary:'Warehouse, package, service, and volume assumptions can be compared consistently.',bullets:['Baseline vs. alternative','Sensitivity to weight and zone','Volume-tier effects','Service-level tradeoffs'],logic:'Alternatives are evaluated under the same assumptions.'},Vendor:{title:'Vendor scorecard',summary:'Price is considered alongside operating fit.',bullets:['TCO and minimums','Integration and communication','Service coverage','Quality and claims process'],logic:'The lowest quote is not automatically the lowest cost-to-serve.'}};
    const controls=$('[data-layer-controls]',mount),copy=$('[data-layer-copy]',mount),visual=$('[data-layer-visual]',mount);const keys=Object.keys(data);
    controls.innerHTML=keys.map((k,i)=>`<button class="case-layer-btn ${i===0?'is-active':''}" type="button" data-layer="${k}" aria-pressed="${i===0}"><span>0${i+1}</span>${k}</button>`).join('');
    function draw(key){const d=data[key];
      copy.innerHTML=`<p class="kicker">Layer · ${key}</p><h3>${d.title}</h3><p class="body-lg">${d.summary}</p><div class="case-copy-block"><h4>What Kairesa built</h4><ul>${d.bullets.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="decision-rule"><span>Decision rule</span><p>${d.logic}</p></div>`;
      visual.innerHTML=caseStageVisual(id,key,d,keys);
      $$('[data-layer]',mount).forEach(b=>{const active=b.dataset.layer===key;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
    }
    draw(keys[0]);
    $$('[data-layer]',mount).forEach(b=>b.addEventListener('click',()=>draw(b.dataset.layer)));
  }

  function setupCostCalc(){
    const mount=$('[data-cost-calc]');if(!mount)return;
    const fields=[['Storage & handling',5,0,20],['Packaging',10,0,30],['Refrigerant',7,0,25],['Shipping',35,5,80],['Loss allowance',3,0,20]];
    const presets={baseline:[5,10,7,35,3],lean:[4,7,5,28,2],resilient:[7,13,10,42,5]};
    mount.innerHTML=`<div class="calc-controls"><div class="calc-controls-head"><div><p class="kicker">Scenario inputs</p><h3>Cost components</h3></div><button class="calc-reset" type="button" data-cost-reset>Reset</button></div><div class="calc-presets" role="group" aria-label="Cost scenario presets"><button type="button" class="is-active" data-cost-preset="baseline">Baseline</button><button type="button" data-cost-preset="lean">Lean package</button><button type="button" data-cost-preset="resilient">Resilience</button></div>${fields.map((f,i)=>`<label class="range-row"><span>${f[0]}</span><output data-out="${i}">$${f[1].toFixed(2)}</output><input aria-label="${f[0]} cost" type="range" min="${f[2]}" max="${f[3]}" step=".5" value="${f[1]}" data-range="${i}"></label>`).join('')}</div><div class="calc-output"><div class="calc-output-head"><div><p class="kicker">Illustrative cost per order</p><div class="calc-total" data-total>$60.00</div></div><span class="calc-live"><i></i>Live model</span></div><div class="calc-bars">${fields.map((f,i)=>`<div class="calc-bar"><span>${f[0]}</span><i><span data-bar="${i}"></span></i><b data-val="${i}"></b></div>`).join('')}</div><div class="calc-composition"><span>Cost composition</span><strong data-dominant>Shipping is the largest driver</strong></div><p class="calc-note">Demonstration data only. Taxes, product cost, discounts, claims, minimums, and other commercial terms are excluded.</p></div>`;
    const ranges=$$('[data-range]',mount);
    const update=()=>{const vals=ranges.map(r=>Number(r.value)),total=vals.reduce((a,b)=>a+b,0),max=Math.max(...vals),dominant=fields[vals.indexOf(max)][0];$('[data-total]',mount).textContent=`$${total.toFixed(2)}`;$('[data-dominant]',mount).textContent=`${dominant} is the largest driver`;vals.forEach((v,i)=>{$(`[data-out="${i}"]`,mount).textContent=`$${v.toFixed(2)}`;$(`[data-val="${i}"]`,mount).textContent=`$${v.toFixed(2)}`;$(`[data-bar="${i}"]`,mount).style.width=`${total?v/total*100:0}%`;});};
    const applyPreset=name=>{const vals=presets[name]||presets.baseline;ranges.forEach((r,i)=>r.value=vals[i]);$$('[data-cost-preset]',mount).forEach(b=>b.classList.toggle('is-active',b.dataset.costPreset===name));update();};
    ranges.forEach(r=>r.addEventListener('input',()=>{$$('[data-cost-preset]',mount).forEach(b=>b.classList.remove('is-active'));update();}));
    $$('[data-cost-preset]',mount).forEach(b=>b.addEventListener('click',()=>applyPreset(b.dataset.costPreset)));
    $('[data-cost-reset]',mount).addEventListener('click',()=>applyPreset('baseline'));
    update();
  }

  function setupWizard(){
    const mount=$('[data-wizard]');if(!mount)return;let step=0;const state={complexity:'',outcome:'',today:'',timeline:'',budget:'',name:'',email:'',organization:'',notes:''};
    const steps=['Complexity','Outcome','Today','Scope','You'];
    const screens=[
      {title:'What kind of complexity are you dealing with?',type:'options',key:'complexity',options:[['Compliance','Requirements, controls, documentation, or market entry'],['Operations','Roles, SOPs, handoffs, inventory, or quality'],['Cost Intelligence','Suppliers, logistics, unit economics, or cost drivers'],['Digital Systems','Website, dashboard, automation, or internal tool'],['Integrated / Not sure','The problem crosses more than one discipline']]},
      {title:'What outcome do you need?',type:'options',key:'outcome',options:[['Clarity','A map, research brief, or decision structure'],['Operating system','SOPs, controls, roles, and repeatable workflow'],['Working tool','A website, dashboard, automation, or internal system'],['Optimization','Lower cost, lower risk, or stronger performance'],['Implementation plan','A phased roadmap with clear next actions']]},
      {title:'What exists today?',type:'options',key:'today',options:[['Mostly informal','Knowledge is in people, messages, and memory'],['Documents exist','Materials exist but are fragmented or outdated'],['A process exists','The workflow runs but is inconsistent or fragile'],['A tool exists','A spreadsheet or system needs redesign'],['Starting from zero','The structure has not been created yet']]},
      {title:'Timeline and approximate budget',type:'scope'},
      {title:'Your details',type:'details'}
    ];
    function screen(){
      const s=screens[step];$$('[data-wstep]',mount).forEach((x,i)=>{x.classList.toggle('is-active',i===step);x.classList.toggle('is-done',i<step);});
      let body='';
      if(s.type==='options')body=`<div class="option-grid">${s.options.map(([a,b])=>`<button type="button" class="select-card ${state[s.key]===a?'is-selected':''}" data-select="${esc(a)}"><strong>${a}</strong><span>${b}</span></button>`).join('')}</div>`;
      if(s.type==='scope')body=`<div class="option-grid"><div><p class="kicker">Timeline</p>${['< 1 month','1–3 months','3–6 months','6+ months'].map(x=>`<button type="button" class="select-card ${state.timeline===x?'is-selected':''}" data-scope="timeline" data-value="${x}">${x}</button>`).join('')}</div><div><p class="kicker">Approximate budget</p>${['To discuss','Small','Medium','Large'].map(x=>`<button type="button" class="select-card ${state.budget===x?'is-selected':''}" data-scope="budget" data-value="${x}">${x}</button>`).join('')}</div></div>`;
      if(s.type==='details')body=`<div class="field-grid"><div class="field"><label>Name</label><input data-field="name" value="${esc(state.name)}" autocomplete="name"></div><div class="field"><label>Email</label><input data-field="email" type="email" value="${esc(state.email)}" autocomplete="email"></div><div class="field is-full"><label>Organization (optional)</label><input data-field="organization" value="${esc(state.organization)}" autocomplete="organization"></div><div class="field is-full"><label>Anything we should know?</label><textarea data-field="notes">${esc(state.notes)}</textarea></div><div class="field is-full"><div class="summary-box">${summaryRows()}</div></div></div>`;
      $('[data-wizard-card]',mount).innerHTML=`<div class="wizard-head"><div><p class="kicker">Step ${step+1} of 5</p><h2>${s.title}</h2></div><span class="kicker">${steps[step]}</span></div>${body}<div class="wizard-actions">${step?'<button class="button" type="button" data-back>← Back</button>':'<span></span>'}<button class="button button--solid" type="button" data-next>${step===4?'Create inquiry email':'Continue →'}</button></div>`;
      $$('[data-select]',mount).forEach(b=>b.addEventListener('click',()=>{state[s.key]=b.dataset.select;$$('[data-select]',mount).forEach(x=>x.classList.toggle('is-selected',x===b));}));
      $$('[data-scope]',mount).forEach(b=>b.addEventListener('click',()=>{state[b.dataset.scope]=b.dataset.value;$$(`[data-scope="${b.dataset.scope}"]`,mount).forEach(x=>x.classList.toggle('is-selected',x===b));}));
      $$('[data-field]',mount).forEach(f=>f.addEventListener('input',()=>{state[f.dataset.field]=f.value;const summary=$('.summary-box',mount);if(summary)summary.innerHTML=summaryRows();}));
      $('[data-back]',mount)?.addEventListener('click',()=>{step--;screen();scrollIntoView();});
      $('[data-next]',mount)?.addEventListener('click',()=>{if(step<4){const key=s.key;if(key&&!state[key])return toast('Choose one option to continue');if(s.type==='scope'&&(!state.timeline||!state.budget))return toast('Choose a timeline and budget range');step++;screen();scrollIntoView();}else submit();});
    }
    function summaryRows(){return [['Complexity',state.complexity],['Outcome',state.outcome],['Today',state.today],['Timeline',state.timeline],['Budget',state.budget],['Contact',state.email||'—'],['Organization',state.organization||'—']].map(([a,b])=>`<div class="summary-row"><span>${a}</span><strong>${esc(b||'—')}</strong></div>`).join('');}
    function scrollIntoView(){mount.scrollIntoView({behavior:'smooth',block:'start'});}
    function submit(){
      $$('[data-field]',mount).forEach(f=>state[f.dataset.field]=f.value);if(!state.name||!state.email)return toast('Add your name and email');
      const subject=`Kairesa project inquiry — ${state.complexity}`;const body=`Name: ${state.name}\nEmail: ${state.email}\nOrganization: ${state.organization||'—'}\n\nComplexity: ${state.complexity}\nDesired outcome: ${state.outcome}\nCurrent state: ${state.today}\nTimeline: ${state.timeline}\nBudget range: ${state.budget}\n\nAdditional context:\n${state.notes||'—'}`;location.href=`mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    mount.innerHTML=`<aside class="wizard-steps">${steps.map((x,i)=>`<div class="wizard-step ${i===0?'is-active':''}" data-wstep><span>0${i+1}</span><strong>${x}</strong></div>`).join('')}</aside><div class="wizard-card" data-wizard-card></div>`;screen();
  }

  function initPage(){
    const page=pageName();
    if(page==='home'){
      setupHomeSystem();
      const net=$('[data-home-network]');if(net)net.innerHTML=networkMarkup();
      setupNetwork();
      renderProjects($('[data-home-projects]'),4);
      setupAccordions();
    }
    if(page==='capabilities'){renderCapabilitiesPage();const net=$('[data-cap-network]');if(net)net.innerHTML=networkMarkup();setupNetwork();}
    if(page==='work')setupFilters();
    if(page==='contact')setupWizard();
    if(page==='case')renderCase();
  }

  renderShell();initPage();setupGlobal();
})();
